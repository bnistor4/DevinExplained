import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'motion/react';
import { Printer, StickyNote, X } from 'lucide-react';
import { getL10n, modules } from '../content/modules';
import { useDeckStore, useSlides } from '../store/deckStore';
import SlideRenderer from '../components/slides/SlideRenderer';
import { slideFrame } from '../components/slides/shared';
import Mascot from '../components/Mascot';
import './Presenter.css';

const DESIGN_W = 1920;
const DESIGN_H = 1080;
const EASE = [0.19, 1, 0.22, 1] as const;

export default function Presenter() {
  const { t } = useTranslation();
  const slides = useSlides();
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const currentIndex = useDeckStore((s) => s.currentIndex);
  const lang = useDeckStore((s) => s.lang);
  const tone = useDeckStore((s) => s.tone);
  const showNotes = useDeckStore((s) => s.showNotes);

  const [scale, setScale] = useState(() =>
    Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H),
  );
  const [chromeVisible, setChromeVisible] = useState(true);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const onResize = () =>
      setScale(Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 15_000);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const st = useDeckStore.getState();
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          st.next();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
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
        case 'Escape':
          st.exitPresent();
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (slides.length === 0) {
    return (
      <div className="presenter">
        <div className="empty-present">
          <Mascot size={64} mood="think" />
          <p>Esc — {t('presenter.exit')}</p>
        </div>
      </div>
    );
  }

  const idx = Math.min(currentIndex, slides.length - 1);
  const entry = slides[idx];
  const mod = modules.find((m) => m.id === entry.moduleId);
  const moduleLabel = mod ? getL10n(mod.title, lang) : 'DevinExplained';
  const notes = getL10n(entry.slide.notes, lang);
  const aside = tone === 'fun' ? getL10n(entry.slide.funAside, lang) : '';
  const frame = slideFrame(entry.moduleId, moduleIds, lang, idx + 1, slides.length, entry.slide.band);

  const onStageClick = (e: React.MouseEvent) => {
    const third = e.clientX / window.innerWidth;
    if (third < 1 / 3) useDeckStore.getState().prev();
    else if (third > 2 / 3) useDeckStore.getState().next();
  };

  const onPrint = () => {
    flushSync(() => useDeckStore.getState().setPrinting(true));
    window.print();
  };

  return (
    <div className={`presenter${chromeVisible ? '' : ' chrome-off'}`}>
      <div className="stage-wrap" onClick={onStageClick}>
        <div className="stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          <AnimatePresence>
            <motion.div
              key={idx}
              className="stage-slide"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <SlideRenderer slide={entry.slide} lang={lang} f={frame} />
            </motion.div>
          </AnimatePresence>
          {aside && (
            <motion.div
              key={`aside-${idx}`}
              className="fun-aside"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.25, ease: EASE }}
            >
              <div className="fun-bubble">{aside}</div>
              <Mascot size={96} mood="wink" />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showNotes && (
          <motion.div
            className="notes-drawer"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <span className="notes-label">{t('presenter.title')}</span>
            <p>{notes || t('presenter.noNotes')}</p>
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
          <button className="chrome-btn" onClick={onPrint} title={t('presenter.print')}>
            <Printer size={13} />
          </button>
          <button
            className={`chrome-btn${showNotes ? ' active' : ''}`}
            onClick={() => useDeckStore.getState().toggleNotes()}
            title={`${t('presenter.notes')} (N)`}
          >
            <StickyNote size={13} />
          </button>
          <button
            className="chrome-btn"
            onClick={() => useDeckStore.getState().exitPresent()}
            title={`${t('presenter.exit')} (Esc)`}
          >
            <X size={13} />
          </button>
          <span className="clock">
            {now.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
}
