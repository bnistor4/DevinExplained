import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Icon from '../Icon';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function CardsSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'cards'>;
  lang: Lang;
  f: Frame;
}) {
  const n = block.cards.length;
  const cols = n === 4 ? 2 : Math.min(3, Math.max(2, n));
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div className="sl-cards-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {block.cards.map((c, i) => (
          <div key={i} className="sl-card reveal" style={ri(i + 2)}>
            <Icon name={c.icon} size={20} strokeWidth={1.5} className="sl-card-icon" />
            <h3>
              <Rich text={getL10n(c.title, lang)} />
            </h3>
            <p>
              <Rich text={getL10n(c.text, lang)} />
            </p>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
