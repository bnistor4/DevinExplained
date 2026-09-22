import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import { useDeckStore } from '../../store/deckStore';
import BrandLogo from '../BrandLogo';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

/** Mocked Devin session window — the devin.ai hero product-frame pattern, pure CSS. */
function ProductFrame() {
  return (
    <div className="pf reveal" style={ri(3)} aria-hidden="true">
      <div className="pf-bar">
        <i />
        <i />
        <i />
        <span className="pf-url">app.devin.ai</span>
      </div>
      <div className="pf-body">
        <div className="pf-chat">
          <div className="pf-msg">
            <span className="pf-avatar" />
            <div className="pf-lines">
              <i style={{ width: '82%' }} />
              <i style={{ width: '58%' }} />
            </div>
          </div>
          <div className="pf-msg out">
            <div className="pf-lines">
              <i style={{ width: '68%' }} />
              <i style={{ width: '44%' }} />
            </div>
          </div>
          <div className="pf-msg">
            <span className="pf-avatar" />
            <div className="pf-lines">
              <i style={{ width: '88%' }} />
              <i style={{ width: '64%' }} />
              <i style={{ width: '36%' }} />
            </div>
          </div>
          <div className="pf-status">
            <span className="pf-dot" />
            <i style={{ width: '40%' }} />
          </div>
        </div>
        <div className="pf-report">
          <span className="pf-tag">PR #4821</span>
          <i />
          <i />
          <i />
          <i />
          <div className="pf-diff">
            <b>+128</b>
            <b className="neg">−41</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TitleSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'title'>;
  lang: Lang;
  f: Frame;
}) {
  const presenter = useDeckStore((s) => s.presenter);
  const event = useDeckStore((s) => s.event);
  const who = [presenter.name, presenter.handle, presenter.org].filter(Boolean).join(' · ');
  const evLine = [event.name, event.date, event.location].filter(Boolean).join(' · ');
  return (
    <SlideFrame f={f} className="slide-title">
      <div className="sl-title-grid">
        <div className="sl-title-main">
          <h1 className="sl-title-h reveal" style={ri(1)}>
            <Rich text={getL10n(block.title, lang)} />
          </h1>
          {block.subtitle && (
            <p className="sl-subtitle reveal" style={ri(2)}>
              <Rich text={getL10n(block.subtitle, lang)} />
            </p>
          )}
          {who && (
            <p className="sl-title-who reveal" style={ri(3)}>
              {who}
            </p>
          )}
          {f.isDeckTitle && evLine && (
            <p className="sl-title-event reveal" style={ri(4)}>
              {evLine}
            </p>
          )}
        </div>
        {f.isDeckTitle ? (
          <img
            src="/assets/devin.png"
            alt="Devin"
            className="sl-deck-otter reveal"
            style={{ ...ri(3), height: 420, width: 'auto' }}
            draggable={false}
          />
        ) : (
          <ProductFrame />
        )}
      </div>
      {f.isDeckTitle && event.hostLogo && (
        <img src={event.hostLogo} alt="host" className="sl-deck-hostlogo reveal" style={ri(4)} />
      )}
      {f.isDeckTitle && (
        <div className="sl-deck-brand">
          <BrandLogo brand="cognition" height={28} dark={f.band === 'dark'} />
        </div>
      )}
    </SlideFrame>
  );
}
