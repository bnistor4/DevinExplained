import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';
import type { Transition } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import {
  CircleQuestionMark,
  Coffee,
  Link as LinkIcon,
  Maximize,
  MessageCircleQuestionMark,
  Minimize,
  Minus,
  Plus,
  Printer,
  Square,
  StickyNote,
  Timer as TimerIcon,
  X,
} from 'lucide-react';
import { getL10n, modules } from '../content/modules';
import { useDeckStore, useSlides } from '../store/deckStore';
import { hostOf, linkIcon, wifiQrValue } from '../lib/eventMeta';
import Icon from '../components/Icon';
import SlideRenderer from '../components/slides/SlideRenderer';
import { slideFrame } from '../components/slides/shared';
import Mascot from '../components/Mascot';
import './Presenter.css';

const DESIGN_W = 1920;
const DESIGN_H = 1080;
const EASE: [number, number, number, number] = [0.19, 1, 0.22, 1];

type Overlay = 'qa' | 'links' | 'blackout' | 'break' | 'help' | null;

const clampW = (w: number, h: number) =>
  Math.min(2560, Math.max(1440, (DESIGN_H * w) / h));

function stageGeom(fit: 'contain' | 'fill') {
  if (fit === 'fill') {
    const w = clampW(window.innerWidth, window.innerHeight);
    return { w, scale: window.innerHeight / DESIGN_H };
  }
  return {
    w: DESIGN_W,
    scale: Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H),
  };
}

/** Speaker notes: paragraphs split on blank lines; "- " runs become a list. */
function NotesBody({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let key = 0;
  for (const para of text.split(/\n{2,}/)) {
    const lines = para
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    let buf: string[] = [];
    let list: string[] = [];
    const flushBuf = () => {
      if (!buf.length) return;
      out.push(
        <p key={key++} className={buf[0].startsWith('Tempo:') ? 'timing' : undefined}>
          {buf.join(' ')}
        </p>,
      );
      buf = [];
    };
    const flushList = () => {
      if (!list.length) return;
      const items = list;
      list = [];
      out.push(
        <ul key={key++}>
          {items.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>,
      );
    };
    for (const l of lines) {
      if (l.startsWith('- ')) {
        flushBuf();
        list.push(l.slice(2));
      } else {
        flushList();
        buf.push(l);
      }
    }
    flushBuf();
    flushList();
  }
  return <>{out}</>;
}

const fmt = (sec: number) => {
  const s = Math.max(0, Math.round(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

// audit/screenshot mode: all entrance animations off (see main.tsx).
// Read lazily — data-static is set in main.tsx after this module is evaluated.
const isStatic = () => document.documentElement.hasAttribute('data-static');
const tr = (duration: number, delay = 0): Transition =>
  isStatic() ? { duration: 0 } : { duration, delay, ease: EASE };

export default function Presenter() {
  const { t } = useTranslation();
  const slides = useSlides();
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const currentIndex = useDeckStore((s) => s.currentIndex);
  const lang = useDeckStore((s) => s.lang);
  const tone = useDeckStore((s) => s.tone);
  const fit = useDeckStore((s) => s.fit);
  const showNotes = useDeckStore((s) => s.showNotes);
  const event = useDeckStore((s) => s.event);

  const [, setResize] = useState(0); // bump on window resize to recompute stageGeom
  const [chromeVisible, setChromeVisible] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [linksFocus, setLinksFocus] = useState<number | null>(null);

  // timer (memory only — starts on first slide advance)
  const [timerOn, setTimerOn] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  // break countdown
  const [breakLeft, setBreakLeft] = useState(300);
  const [breakRun, setBreakRun] = useState(true);

  const overlayRef = useRef<Overlay>(null);
  const linksFocusRef = useRef<number | null>(null);
  const breakRunRef = useRef(true);
  const startAtRef = useRef<number | null>(null);
  useEffect(() => {
    overlayRef.current = overlay;
    linksFocusRef.current = linksFocus;
    breakRunRef.current = breakRun;
  });

  const geom = stageGeom(fit);

  useEffect(() => {
    const onResize = () => setResize((v) => v + 1);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(new Date());
      setElapsed(
        startAtRef.current == null ? 0 : Math.floor((Date.now() - startAtRef.current) / 1000),
      );
      setBreakLeft((s) =>
        overlayRef.current === 'break' && breakRunRef.current ? Math.max(0, s - 1) : s,
      );
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    let timer = window.setTimeout(() => setChromeVisible(false), 3000);
    const poke = () => {
      setChromeVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setChromeVisible(false), 3000);
    };
    window.addEventListener('mousemove', poke);
    return () => {
      window.removeEventListener('mousemove', poke);
      window.clearTimeout(timer);
    };
  }, []);

  const armTimer = () => {
    if (startAtRef.current == null) startAtRef.current = Date.now();
  };

  const toggleOverlay = (o: Exclude<Overlay, null>) =>
    setOverlay((cur) => (cur === o ? null : o));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const st = useDeckStore.getState();
      const ov = overlayRef.current;

      if (ov === 'blackout') {
        setOverlay(null);
        return;
      }
      if (e.key === 'Escape') {
        if (ov === 'links' && linksFocusRef.current !== null) setLinksFocus(null);
        else if (ov) setOverlay(null);
        else st.exitPresent();
        return;
      }
      if (ov === 'break') {
        if (e.key === 'p' || e.key === 'P') setOverlay(null);
        else if (e.key === '+') setBreakLeft((s) => s + 60);
        else if (e.key === '-') setBreakLeft((s) => Math.max(0, s - 60));
        else if (e.key === ' ') {
          e.preventDefault();
          setBreakRun((r) => !r);
        }
        return;
      }
      if (ov === 'links' && linksFocusRef.current !== null) {
        if (e.key === 'l' || e.key === 'L') setLinksFocus(null);
        return;
      }
      if (ov) {
        // any modal overlay: its own key or Esc (handled above) closes
        const k = e.key.toLowerCase();
        if ((ov === 'qa' && k === 'q') || (ov === 'links' && k === 'l') || (ov === 'help' && e.key === '?'))
          setOverlay(null);
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          armTimer();
          st.next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          armTimer();
          st.prev();
          break;
        case 'Home':
          e.preventDefault();
          st.goTo(0);
          break;
        case 'End':
          e.preventDefault();
          st.goTo(Number.MAX_SAFE_INTEGER);
          break;
        case 'f':
        case 'F':
          if (document.fullscreenElement) void document.exitFullscreen();
          else void document.documentElement.requestFullscreen().catch(() => {});
          break;
        case 'n':
        case 'N':
          st.toggleNotes();
          break;
        case 'w':
        case 'W':
          st.toggleFit();
          break;
        case 'q':
        case 'Q':
          toggleOverlay('qa');
          break;
        case 'l':
        case 'L':
          toggleOverlay('links');
          break;
        case 'b':
        case 'B':
          setOverlay('blackout');
          break;
        case 't':
          setTimerOn((v) => !v);
          break;
        case 'T':
          startAtRef.current = null;
          setElapsed(0);
          break;
        case 'p':
        case 'P':
          setOverlay('break');
          setBreakRun(true);
          break;
        case '?':
          toggleOverlay('help');
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const idx = Math.min(currentIndex, slides.length - 1);

  // fun aside closes on its own after 15 s; it comes back when the slide changes
  const [asideClosedIdx, setAsideClosedIdx] = useState(-1);
  useEffect(() => {
    const id = window.setTimeout(() => setAsideClosedIdx(idx), 15000);
    return () => {
      window.clearTimeout(id);
      setAsideClosedIdx(-1);
    };
  }, [idx]);

  const eventTiles = useMemo(() => {
    const list = event.links
      .filter((l) => /^https?:\/\//i.test(l.url.trim()))
      .map((l) => ({
        key: l.id,
        icon: linkIcon(l.kind),
        label: l.label,
        value: l.url.trim(),
        sub: hostOf(l.url.trim()),
      }));
    if (event.liveQa.url.trim())
      list.push({
        key: '__qa',
        icon: 'MessageCircleQuestionMark',
        label: event.liveQa.label || 'Live Q&A',
        value: event.liveQa.url.trim(),
        sub: hostOf(event.liveQa.url.trim()),
      });
    if (event.wifi.ssid.trim())
      list.push({
        key: '__wifi',
        icon: 'Wifi',
        label: `Wi-Fi · ${event.wifi.ssid}`,
        value: wifiQrValue(event.wifi),
        sub: event.wifi.security === 'nopass' ? 'open' : 'WPA',
      });
    return list;
  }, [event]);

  if (slides.length === 0) {
    return (
      <div className="presenter">
        <div className="empty-present">
          <Mascot size={64} mood="think" />
          <p>Esc · {t('presenter.exit')}</p>
        </div>
      </div>
    );
  }

  const entry = slides[idx];
  const mod = modules.find((m) => m.id === entry.moduleId);
  const moduleLabel = mod ? getL10n(mod.title, lang) : 'DevinExplained';
  const notes = getL10n(entry.slide.notes, lang);
  const aside =
    tone === 'fun' && asideClosedIdx !== idx ? getL10n(entry.slide.funAside, lang) : '';
  const frame = slideFrame(entry.moduleId, moduleIds, lang, idx + 1, slides.length, entry.slide.band);

  const plannedSec = (event.plannedMinutes ??
    moduleIds.reduce((a, id) => a + (modules.find((m) => m.id === id)?.durationMin ?? 0), 0)) * 60;
  const timerCls = elapsed > plannedSec ? ' over' : elapsed > plannedSec * 0.9 ? ' warn' : '';

  // badge never sits on the deck title or on slides that already carry a big QR
  const hideBadge =
    entry.slide.id === '__deck-title' ||
    entry.slide.block.type === 'qa' ||
    entry.slide.block.type === 'community';
  const qaBadge = event.liveQa.badge && event.liveQa.url.trim() && !hideBadge;

  const onStageClick = (e: React.MouseEvent) => {
    if (overlay) return;
    const third = e.clientX / window.innerWidth;
    if (third < 1 / 3) {
      armTimer();
      useDeckStore.getState().prev();
    } else if (third > 2 / 3) {
      armTimer();
      useDeckStore.getState().next();
    }
  };

  const onPrint = () => {
    flushSync(() => useDeckStore.getState().setPrinting(true));
    window.print();
  };

  const chromeBtn = (
    key: string,
    icon: React.ReactNode,
    title: string,
    onClick: () => void,
    active = false,
  ) => (
    <button
      key={key}
      className={`chrome-btn${active ? ' active' : ''}`}
      onClick={onClick}
      title={title}
    >
      {icon}
    </button>
  );

  return (
    <div
      className={`presenter${fit === 'fill' ? ' fill' : ''}${chromeVisible ? '' : ' chrome-off'}`}
    >
      <div
        className="stage-wrap"
        onClick={onStageClick}
        onPointerDown={() => overlay === 'blackout' && setOverlay(null)}
      >
        <div
          className={`stage${fit === 'fill' ? ' fill' : ''}`}
          style={{
            width: geom.w,
            transform: `translate(-50%, -50%) scale(${geom.scale})`,
            ['--sw' as string]: `${geom.w}px`,
          }}
        >
          <AnimatePresence>
            <motion.div
              key={idx}
              className="stage-slide"
              data-slide-id={entry.slide.id}
              initial={isStatic() ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={tr(0.25)}
            >
              <SlideRenderer slide={entry.slide} lang={lang} f={frame} />
            </motion.div>
          </AnimatePresence>
          {qaBadge && (
            <div className="qa-badge">
              <QRCodeSVG value={event.liveQa.url.trim()} size={120} level="M" />
              <span>{event.liveQa.label || 'Q&A'}</span>
            </div>
          )}
          <AnimatePresence>
            {aside && (
              <motion.div
                key={`aside-${idx}`}
                className="fun-aside"
                data-band={entry.slide.band}
                initial={isStatic() ? false : { opacity: 0, y: -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={tr(0.25, 0.6)}
              >
                <div className="fun-bubble">
                  <span className="fun-kicker">{t('slide.funKicker')}</span>
                  {aside}
                </div>
                <Mascot size={77} mood="wink" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ---------- event-kit overlays ---------- */}
      <AnimatePresence>
        {overlay === 'blackout' && (
          <motion.div
            className="overlay blackout"
            initial={isStatic() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tr(0.15)}
          />
        )}
        {overlay === 'qa' && event.liveQa.url.trim() && (
          <motion.div
            className="overlay scrim"
            initial={isStatic() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tr(0.2)}
            onClick={() => setOverlay(null)}
          >
            <div className="ov-tile big">
              <QRCodeSVG value={event.liveQa.url.trim()} size={520} level="M" />
              <p className="ov-label">{event.liveQa.label || t('eventkit.liveQa')}</p>
              <p className="ov-url mono">{event.liveQa.url.trim()}</p>
            </div>
          </motion.div>
        )}
        {overlay === 'links' && (
          <motion.div
            className="overlay scrim"
            initial={isStatic() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tr(0.2)}
            onClick={() => {
              setLinksFocus(null);
              setOverlay(null);
            }}
          >
            {linksFocus === null ? (
              <div className="ov-links-grid" onClick={(e) => e.stopPropagation()}>
                {eventTiles.length === 0 && (
                  <p className="ov-empty">{t('eventkit.noLinks')}</p>
                )}
                {eventTiles.map((tile, i) => (
                  <button key={tile.key} className="ov-tile" onClick={() => setLinksFocus(i)}>
                    <QRCodeSVG value={tile.value} size={150} level="M" />
                    <span className="ov-tile-label">
                      <Icon name={tile.icon} size={20} strokeWidth={1.5} />
                      {tile.label}
                    </span>
                    <span className="ov-sub mono">{tile.sub}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="ov-tile big" onClick={(e) => e.stopPropagation()}>
                <QRCodeSVG value={eventTiles[linksFocus].value} size={520} level="M" />
                <p className="ov-label">{eventTiles[linksFocus].label}</p>
                <p className="ov-url mono">{eventTiles[linksFocus].sub}</p>
              </div>
            )}
          </motion.div>
        )}
        {overlay === 'break' && (
          <motion.div
            className="overlay scrim break-ov"
            initial={isStatic() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tr(0.2)}
          >
            <Mascot size={140} mood="idle" />
            <p className="break-title">{t('eventkit.breakIn')}</p>
            <p className="break-time">{fmt(breakLeft)}</p>
            <div className="break-controls">
              <button className="chrome-btn lg" onClick={() => setBreakLeft((s) => Math.max(0, s - 60))}>
                <Minus size={18} />
              </button>
              <span className="mono break-hint">
                {breakRun ? t('eventkit.spacePause') : t('eventkit.paused')}
              </span>
              <button className="chrome-btn lg" onClick={() => setBreakLeft((s) => s + 60)}>
                <Plus size={18} />
              </button>
            </div>
          </motion.div>
        )}
        {overlay === 'help' && (
          <motion.div
            className="overlay scrim"
            initial={isStatic() ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tr(0.2)}
            onClick={() => setOverlay(null)}
          >
            <div className="help-panel" onClick={(e) => e.stopPropagation()}>
              <p className="help-title mono">{t('eventkit.shortcuts')}</p>
              <ul className="help-list mono">
                <li><b>→ ← / Space / PgUp / PgDn</b><span>{t('eventkit.hkNav')}</span></li>
                <li><b>Home / End</b><span>{t('eventkit.hkEnds')}</span></li>
                <li><b>F</b><span>{t('eventkit.hkFullscreen')}</span></li>
                <li><b>W</b><span>{t('eventkit.hkFit')}</span></li>
                <li><b>N</b><span>{t('eventkit.hkNotes')}</span></li>
                <li><b>Q</b><span>{t('eventkit.hkQa')}</span></li>
                <li><b>L</b><span>{t('eventkit.hkLinks')}</span></li>
                <li><b>B</b><span>{t('eventkit.hkBlackout')}</span></li>
                <li><b>T / Shift+T</b><span>{t('eventkit.hkTimer')}</span></li>
                <li><b>P</b><span>{t('eventkit.hkBreak')}</span></li>
                <li><b>?</b><span>{t('eventkit.hkHelp')}</span></li>
                <li><b>Esc</b><span>{t('eventkit.hkEsc')}</span></li>
                <li><b>Ctrl+P</b><span>{t('eventkit.hkPrint')}</span></li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* live timer chip */}
      {timerOn && (
        <div className={`timer-chip mono${timerCls}`}>
          {fmt(elapsed)} / {fmt(plannedSec)}
        </div>
      )}

      <AnimatePresence>
        {showNotes && (
          <motion.div
            className="notes-drawer"
            initial={isStatic() ? false : { y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={tr(0.25)}
          >
            <span className="notes-label">{t('presenter.title')}</span>
            {notes ? <NotesBody text={notes} /> : <p>{t('presenter.noNotes')}</p>}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`chrome${chromeVisible ? '' : ' hidden'}`}>
        <div className="progress">
          <div style={{ width: `${((idx + 1) / slides.length) * 100}%` }} />
        </div>
        <div className="chrome-row">
          <span className="chip">{moduleLabel}</span>
          <span className="counter">
            {idx + 1} / {slides.length}
          </span>
          <span className="spacer" />
          {chromeBtn('qa', <MessageCircleQuestionMark size={13} />, `${t('eventkit.liveQa')} (Q)`, () => toggleOverlay('qa'), overlay === 'qa')}
          {chromeBtn('links', <LinkIcon size={13} />, `${t('eventkit.links')} (L)`, () => toggleOverlay('links'), overlay === 'links')}
          {chromeBtn('break', <Coffee size={13} />, `${t('eventkit.break')} (P)`, () => { setOverlay('break'); setBreakRun(true); }, overlay === 'break')}
          {chromeBtn('timer', <TimerIcon size={13} />, `${t('eventkit.timer')} (T)`, () => setTimerOn((v) => !v), timerOn)}
          {chromeBtn('blackout', <Square size={13} />, `${t('eventkit.blackout')} (B)`, () => setOverlay('blackout'))}
          {chromeBtn('fit', fit === 'fill' ? <Minimize size={13} /> : <Maximize size={13} />, `${t('eventkit.fit')} (W)`, () => useDeckStore.getState().toggleFit())}
          {chromeBtn('print', <Printer size={13} />, t('presenter.print'), onPrint)}
          {chromeBtn('help', <CircleQuestionMark size={13} />, `${t('eventkit.shortcuts')} (?)`, () => toggleOverlay('help'), overlay === 'help')}
          {chromeBtn('notes', <StickyNote size={13} />, `${t('presenter.notes')} (N)`, () => useDeckStore.getState().toggleNotes(), showNotes)}
          {chromeBtn('exit', <X size={13} />, `${t('presenter.exit')} (Esc)`, () => useDeckStore.getState().exitPresent())}
          <span className="clock">
            {now.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
}
