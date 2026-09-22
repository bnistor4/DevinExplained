/**
 * Slide overflow audit: renders the Full tour deck in the presenter across
 * langs / fit modes / viewports, screenshots every slide, and records any
 * element overflowing the stage plus any canvas text under 14px.
 *
 * Usage: dev server must be running.  pnpm audit:slides  (AUDIT_URL to override)
 * Output: audit/<lang>/<fit>/<nnn>-<slide>.png, audit/sheet-<lang>*.png, audit/report.json
 */
import { chromium } from '@playwright/test';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { modules } from '../src/content/modules';

const BASE = process.env.AUDIT_URL ?? 'http://localhost:5173';
const STORE_KEY = 'devinexplained:deck';
const OUT = resolve('audit');

type Issue = {
  lang: string;
  fit: string;
  slide: string;
  kind: 'overflow' | 'scroll' | 'small-text' | 'footer-zone' | 'overlap';
  selector: string;
  text: string;
};

// demo event state so agenda/community/badge get exercised
const demoEvent = {
  name: 'Milano JS Meetup',
  date: '12 Nov 2026',
  location: 'Talent Garden, Milano',
  hashtag: '#DevinMeetup',
  links: [
    { id: 'l1', kind: 'telegram', label: 'Telegram community', url: 'https://t.me/devinitaly' },
    {
      id: 'l2',
      kind: 'meetup',
      label: 'Meetup group',
      url: 'https://www.meetup.com/milano-front-end',
    },
    { id: 'l3', kind: 'github', label: 'Devin on GitHub', url: 'https://github.com/CognitionAI' },
    {
      id: 'l4',
      kind: 'linkedin',
      label: 'Cognition on LinkedIn',
      url: 'https://www.linkedin.com/company/cognitionlabs',
    },
  ],
  liveQa: { url: 'https://app.sli.do/event/devin-meetup', label: 'Ask me anything', badge: true },
  wifi: { ssid: 'Meetup-Guest', password: 'sup3r-secret', security: 'WPA' },
  autoSlides: { agenda: true, community: true },
  plannedMinutes: 25,
};

function persistedState(lang: string, fit: string) {
  return JSON.stringify({
    state: {
      moduleIds: modules.map((m) => m.id), // "Full tour" = catalog order
      lang,
      tone: 'fun',
      theme: 'devin',
      density: 'regular',
      fit,
      showNotes: false,
      presenter: { name: 'Devin Ambassador', handle: '@devin', org: 'Cognition' },
      event: demoEvent,
    },
    version: 0,
  });
}

const MEASURE = `() => {
  const stage = document.querySelector('.stage');
  const out = { overflow: [], small: [], zone: [], overlap: [] };
  if (!stage) { out.overflow.push({ sel: '.stage', text: 'missing' }); return out; }
  const s = stage.getBoundingClientRect();
  const scale = s.height / 1080;
  const footY = s.bottom - 72 * scale; // footer zone starts ~y=1008 design px
  const chrome = '.sl-foot, .sl-kick, .qa-badge, .timer-chip';
  const sel = (el) =>
    (el.tagName.toLowerCase() + '.' + String(el.className.baseVal ?? el.className).split(' ').join('.')).slice(0, 90);
  for (const el of stage.querySelectorAll('*')) {
    if (el.closest('.qa-badge')) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > s.right + 2 || r.bottom > s.bottom + 2 || r.left < s.left - 2 || r.top < s.top - 2) {
      out.overflow.push({ sel: sel(el), text: (el.textContent || '').trim().slice(0, 60) });
    }
    // content must stay out of the footer zone (footer, badge, full-bleed containers exempt)
    if (
      !el.closest('.sl-foot') &&
      r.top > s.top + 100 * scale &&
      r.bottom > footY + 2 &&
      r.bottom <= s.bottom + 2
    ) {
      out.zone.push({ sel: sel(el), text: (el.textContent || '').trim().slice(0, 60) });
    }
  }
  const ss = stage.querySelector('.stage-slide');
  if (ss && (ss.scrollHeight > ss.clientHeight + 2 || ss.scrollWidth > ss.clientWidth + 2)) {
    out.overflow.push({
      sel: '.stage-slide[scroll]',
      text: ss.scrollWidth + 'x' + ss.scrollHeight + ' > ' + ss.clientWidth + 'x' + ss.clientHeight,
    });
  }
  for (const el of stage.querySelectorAll('*')) {
    if (el.children.length === 0 && (el.textContent || '').trim()) {
      if (el.closest(chrome)) continue;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < 14) {
        out.small.push({
          sel: sel(el),
          text: fs.toFixed(1) + 'px · ' + (el.textContent || '').trim().slice(0, 50),
        });
      }
    }
  }
  // pairwise leaf-element overlap (>4px in both axes)
  const LEAF = 'h1,h2,h3,p,li,span,canvas,svg,img';
  const leaves = [...stage.querySelectorAll(LEAF)].filter((el) => {
    if (el.closest('.qa-badge')) return false; // floating chrome — exempt from overlap
    if (el.querySelector(LEAF)) return false;
    if (parseFloat(getComputedStyle(el).opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });
  const rects = leaves.map((el) => ({ el, r: el.getBoundingClientRect() }));
  outer: for (let i = 0; i < rects.length; i++) {
    for (let j = i + 1; j < rects.length; j++) {
      const a = rects[i].r, b = rects[j].r;
      const iw = Math.min(a.right, b.right) - Math.max(a.left, b.left);
      const ih = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      if (iw > 4 && ih > 4) {
        out.overlap.push({
          sel: sel(rects[i].el) + ' x ' + sel(rects[j].el),
          text: Math.round(iw) + 'x' + Math.round(ih) + ' · ' +
            ((rects[i].el.textContent || '').trim().slice(0, 30) || '[svg]'),
        });
        if (out.overlap.length > 60) break outer;
      }
    }
  }
  return out;
}`;

async function auditRun(
  browser: Browser,
  lang: string,
  fit: string,
  fitDir: string,
  width: number,
  height: number,
  issues: Issue[],
): Promise<string[]> {
  const context: BrowserContext = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await context.addInitScript(
    ([k, v]) => {
      window.localStorage.setItem(k, v);
      window.localStorage.setItem('devinexplained:static', '1'); // no animations in shots
    },
    [STORE_KEY, persistedState(lang, fit)] as const,
  );
  const page: Page = await context.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.click('header.topbar .btn.ink');
  await page.waitForSelector('.stage .stage-slide', { timeout: 15000 });
  await page.waitForTimeout(600);

  const counter = (await page.textContent('.presenter .counter')) ?? '';
  const total = parseInt(counter.split('/')[1]?.trim() ?? '0', 10);
  if (!total) throw new Error(`no slides in presenter for ${lang}/${fit} (counter: "${counter}")`);

  const dir = join(OUT, lang, fitDir);
  mkdirSync(dir, { recursive: true });
  const shots: string[] = [];

  for (let i = 0; i < total; i++) {
    await page.waitForTimeout(250); // static mode: no entrance animation to wait out
    const slideId =
      (await page.locator('.stage .stage-slide').last().getAttribute('data-slide-id')) ??
      `slide-${i}`;
    const file = join(dir, `${String(i + 1).padStart(3, '0')}-${slideId}.png`);
    await page.locator('.stage').screenshot({ path: file });
    shots.push(file);
    const res = (await page.evaluate(`(${MEASURE})()`)) as {
      overflow: { sel: string; text: string }[];
      small: { sel: string; text: string }[];
      zone: { sel: string; text: string }[];
      overlap: { sel: string; text: string }[];
    };
    for (const o of res.overflow)
      issues.push({ lang, fit: fitDir, slide: slideId, kind: 'overflow', selector: o.sel, text: o.text });
    for (const o of res.small)
      issues.push({ lang, fit: fitDir, slide: slideId, kind: 'small-text', selector: o.sel, text: o.text });
    for (const o of res.zone)
      issues.push({ lang, fit: fitDir, slide: slideId, kind: 'footer-zone', selector: o.sel, text: o.text });
    for (const o of res.overlap)
      issues.push({ lang, fit: fitDir, slide: slideId, kind: 'overlap', selector: o.sel, text: o.text });
    if (i < total - 1) await page.keyboard.press('ArrowRight');
  }
  await context.close();
  return shots;
}

async function contactSheet(browser: Browser, lang: string, shots: string[]) {
  const COLS = 6;
  const THUMB_W = 440;
  const MAX_PER_SHEET = 120;
  const chunks: string[][] = [];
  for (let i = 0; i < shots.length; i += MAX_PER_SHEET)
    chunks.push(shots.slice(i, i + MAX_PER_SHEET));
  const multi = chunks.length > 1;
  for (let c = 0; c < chunks.length; c++) {
    const html = `<!doctype html><html><body style="margin:0;background:#f7f6f5;font-family:monospace">
      <div style="display:grid;grid-template-columns:repeat(${COLS},${THUMB_W}px);gap:12px;padding:16px">
      ${chunks[c]
        .map(
          (p) =>
            `<figure style="margin:0"><img src="${p.slice(OUT.length + 1).replace(/\\/g, '/')}" style="width:${THUMB_W}px;display:block;border:1px solid #ddd"><figcaption style="font-size:10px;color:#666;padding:3px 0">${p.split(/[\\/]/).pop()}</figcaption></figure>`,
        )
        .join('')}
      </div></body></html>`;
    const htmlPath = join(OUT, `_sheet-${lang}-${c}.html`);
    writeFileSync(htmlPath, html);
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
    await page.waitForFunction(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0));
    const name = multi ? `sheet-${lang}-${c + 1}.png` : `sheet-${lang}.png`;
    await page.screenshot({ path: join(OUT, name), fullPage: true });
    await page.close();
    console.log(`  contact sheet: audit/${name}`);
  }
}

async function main() {
  const sheetsOnly = !!process.env.SHEETS_ONLY; // rebuild contact sheets from existing shots
  if (!sheetsOnly) {
    if (existsSync(OUT)) rmSync(OUT, { recursive: true });
    mkdirSync(OUT, { recursive: true });
  }
  const browser = await chromium.launch();
  const issues: Issue[] = [];
  const sheetShots: Record<string, string[]> = {};

  if (!sheetsOnly) {
    const runs: { lang: string; fit: string; fitDir: string; w: number; h: number }[] = [];
    for (const lang of ['it', 'en']) {
      runs.push({ lang, fit: 'contain', fitDir: 'contain', w: 1920, h: 1080 });
      runs.push({ lang, fit: 'fill', fitDir: 'fill', w: 1920, h: 1080 });
      runs.push({ lang, fit: 'fill', fitDir: 'fill-1440', w: 1440, h: 1080 });
    }
    for (const r of runs) {
      console.log(`auditing ${r.lang}/${r.fitDir} @ ${r.w}x${r.h} …`);
      const shots = await auditRun(browser, r.lang, r.fit, r.fitDir, r.w, r.h, issues);
      if (r.fitDir === 'fill') sheetShots[r.lang] = shots;
      console.log(`  ${shots.length} slides`);
    }
  } else {
    const { readdirSync } = await import('node:fs');
    for (const lang of ['it', 'en']) {
      const dir = join(OUT, lang, 'fill');
      sheetShots[lang] = readdirSync(dir)
        .filter((f) => f.endsWith('.png'))
        .sort()
        .map((f) => join(dir, f));
    }
  }
  for (const lang of ['it', 'en'])
    if (sheetShots[lang]) await contactSheet(browser, lang, sheetShots[lang]);
  await browser.close();
  if (sheetsOnly) return;

  writeFileSync(join(OUT, 'report.json'), JSON.stringify({ base: BASE, issues }, null, 2));
  const overflows = issues.filter((i) => i.kind === 'overflow');
  const zone = issues.filter((i) => i.kind === 'footer-zone');
  const overlap = issues.filter((i) => i.kind === 'overlap');
  const small = issues.filter((i) => i.kind === 'small-text');
  console.log(
    `\nreport: ${overflows.length} overflow(s), ${zone.length} footer-zone, ${overlap.length} overlap, ${small.length} small-text → audit/report.json`,
  );
  for (const i of issues.slice(0, 40))
    console.log(`  [${i.lang}/${i.fit}] ${i.slide} ${i.kind}: ${i.selector} — ${i.text}`);
  if (issues.length > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
