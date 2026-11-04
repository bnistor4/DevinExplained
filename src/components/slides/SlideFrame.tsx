import type { ReactNode } from 'react';
import BrandLogo from '../BrandLogo';
import { useDeckStore } from '../../store/deckStore';
import type { Frame } from './shared';

const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');

/**
 * Editorial page chrome shared by every slide: the column rule at x=96,
 * the mono kicker `NN — MODULE TITLE`, and the bottom captions.
 */
export default function SlideFrame({
  f,
  className,
  children,
}: {
  f: Frame;
  className?: string;
  children: ReactNode;
}) {
  const packId = useDeckStore((s) => s.packId);
  const event = useDeckStore((s) => s.event);
  const evLine = packId
    ? [event.name, event.location, event.date].filter(Boolean).join(' · ')
    : '';
  return (
    <section className={`slide${className ? ` ${className}` : ''}`} data-band={f.band}>
      <div className="sl-rule" aria-hidden="true" />
      <p className="sl-kick">
        {pad(f.index)} — {f.kicker.toUpperCase()}
      </p>
      <div className="sl-body">{children}</div>
      <footer className="sl-foot">
        <span className="sl-foot-brand">
          <BrandLogo brand="devin" height={14} dark={f.band === 'dark' || undefined} />
          <span>{evLine || 'docs.devin.ai'}</span>
        </span>
        <span>
          {pad(f.page)} / {pad(f.total)}
        </span>
      </footer>
    </section>
  );
}
