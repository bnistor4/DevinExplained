import { useCallback, useEffect, useRef, useState } from 'react';
import { useDeckStore } from '../../../../store/deckStore';
import type { CustomSlideProps } from '../index';
import './talk-timer.css';

type Phase = 'ready' | 'talk' | 'qa' | 'done';

const fmt = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

export default function TalkTimer({ props }: CustomSlideProps) {
  const speaker = props?.speaker?.trim() ?? '';
  const talkTitle = props?.title?.trim() ?? '';
  const talkMs = Math.max(0.001, parseFloat(props?.talkMin ?? '7') || 7) * 60000;
  const softMs = Math.max(0, parseFloat(props?.softMin ?? '5') || 0) * 60000;
  const qaMs = Math.max(0.001, parseFloat(props?.qaMin ?? '2') || 2) * 60000;
  const tone = useDeckStore((s) => s.tone);

  const [phase, setPhase] = useState<Phase>('ready');
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(0); // virtual start: Date.now() minus elapsed when resumed

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed(Date.now() - startRef.current), 250);
    return () => clearInterval(id);
  }, [running]);

  const start = useCallback(() => {
    if (phase === 'done') return;
    if (running) {
      setRunning(false);
      return;
    }
    startRef.current = Date.now() - elapsed;
    setRunning(true);
    if (phase === 'ready') setPhase('talk');
  }, [phase, running, elapsed]);

  const questions = useCallback(() => {
    setElapsed(0);
    startRef.current = Date.now();
    setPhase('qa');
  }, []);

  const reset = useCallback(() => {
    setElapsed(0);
    setPhase('ready');
    setRunning(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;
      const k = e.key.toLowerCase();
      if (k === 's') start();
      else if (k === 'd') questions();
      else if (k === 'r') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [start, questions, reset]);

  // derive display state
  const done = phase === 'done' || (phase === 'qa' && elapsed >= qaMs);
  const overtime = phase === 'talk' && elapsed >= talkMs;
  const soft = phase === 'talk' && !overtime && elapsed >= softMs;
  const shown =
    phase === 'ready'
      ? fmt(talkMs)
      : phase === 'talk'
        ? overtime
          ? `+${fmt(elapsed - talkMs)}`
          : fmt(talkMs - elapsed)
        : done
          ? '0:00'
          : fmt(qaMs - elapsed);
  const status =
    phase === 'ready'
      ? 'Pronto — premi Avvia (o S) per partire.'
      : phase === 'talk'
        ? overtime
          ? `${tone === 'fun' ? '⏰ ' : ''}Tempo! Si passa alle domande`
          : soft
            ? 'Da qui puoi chiudere quando vuoi'
            : 'Talk in corso'
        : done
          ? `${tone === 'fun' ? '🦦 ' : ''}Grazie! Un applauso`
          : 'Domande';
  const pct =
    phase === 'ready'
      ? 0
      : phase === 'talk'
        ? Math.min(1, elapsed / talkMs)
        : done
          ? 1
          : Math.min(1, elapsed / qaMs);
  const digitCls = `tt-digits${overtime || done ? ' tt-red' : soft ? ' tt-accent' : ''}`;

  return (
    <div className="tt-wrap">
      <div className="tt-head">
        {speaker && <div className="tt-speaker">{speaker}</div>}
        {talkTitle && <div className="tt-title">{talkTitle}</div>}
      </div>
      <div className={digitCls}>{shown}</div>
      <div className="tt-status">{status}</div>
      <div className="tt-bar">
        <div className="tt-fill" style={{ width: `${Math.round(pct * 100)}%` }} />
      </div>
      <div className="tt-controls">
        <button
          type="button"
          className="tt-btn tt-main"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            start();
          }}
        >
          {running ? 'Pausa' : 'Avvia'}
        </button>
        <button
          type="button"
          className="tt-btn"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            questions();
          }}
        >
          Domande
        </button>
        <button
          type="button"
          className="tt-btn"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            reset();
          }}
        >
          Azzera
        </button>
      </div>
      <div className="tt-hint">
        S avvia/pausa · D domande · R azzera · cambiando slide il timer si azzera
      </div>
    </div>
  );
}
