/**
 * Coverage check: every eligible page in https://docs.devin.ai/llms.txt
 * must appear in at least one module's `sources` list.
 *
 * Eligible = docs.devin.ai *.md links, excluding:
 *   - /_llms/ index files
 *   - openapi / yaml / json spec files
 *   - /desktop/ pages (Devin Desktop docs)
 *   - /api-reference/ deep pages (the overview is kept)
 *
 * Run: pnpm coverage
 */
import { modules } from '../src/content/modules';

const LLMS_URL = 'https://docs.devin.ai/llms.txt';

function normalize(url: string): string {
  return url.replace(/\.md$/, '').replace(/\/+$/, '');
}

function isEligible(url: string): boolean {
  if (!url.startsWith('https://docs.devin.ai/')) return false;
  if (!url.endsWith('.md')) return false;
  if (url.includes('/_llms/')) return false;
  if (/\.(ya?ml|json)($|[?#])/i.test(url) || /open-?api/i.test(url)) return false;
  if (url.includes('/desktop/')) return false;
  // keep /api-reference/overview only; drop deep reference pages
  if (url.includes('/api-reference/') && !url.endsWith('/api-reference/overview.md')) return false;
  return true;
}

async function main() {
  const res = await fetch(LLMS_URL);
  if (!res.ok) {
    console.error(`Failed to fetch ${LLMS_URL}: HTTP ${res.status}`);
    process.exit(2);
  }
  const text = await res.text();

  const wanted = new Set<string>();
  for (const m of text.matchAll(/https:\/\/docs\.devin\.ai\/[^\s)"'>\]]+/g)) {
    const url = m[0];
    if (isEligible(url)) wanted.add(normalize(url));
  }

  const covered = new Set<string>();
  for (const mod of modules) {
    for (const s of mod.sources) covered.add(normalize(s));
  }

  const missing = [...wanted].filter((u) => !covered.has(u)).sort();
  const done = wanted.size - missing.length;

  console.log(`Docs coverage: ${done}/${wanted.size} eligible pages covered by module sources`);
  if (missing.length) {
    console.log('\nMissing:');
    for (const u of missing) console.log(`  ${u}.md`);
    process.exit(1);
  }
  console.log('All eligible docs pages are covered.');
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
