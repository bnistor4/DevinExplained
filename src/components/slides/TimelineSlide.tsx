import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function TimelineSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'timeline'>;
  lang: Lang;
  f: Frame;
}) {
  const perRow = block.events.length > 5 ? Math.ceil(block.events.length / 2) : block.events.length;
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div className="tl-grid" style={{ gridTemplateColumns: `repeat(${perRow}, 1fr)` }}>
        {block.events.map((e, i) => (
          <div key={i} className="tl-event reveal" style={ri(i + 2)}>
            <div className="tl-line">
              <span className="tl-dot" />
            </div>
            <p className="tl-date">{e.date}</p>
            <h3 className="tl-title">{getL10n(e.title, lang)}</h3>
            {e.text && <p className="tl-text">{getL10n(e.text, lang)}</p>}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
