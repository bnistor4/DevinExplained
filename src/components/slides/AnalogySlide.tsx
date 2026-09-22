import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Icon from '../Icon';
import Mascot from '../Mascot';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function AnalogySlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'analogy'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f}>
      <div className="sl-analogy-grid">
        <div className="sl-analogy-side reveal" style={ri(1)}>
          {block.icon ? (
            <Icon
              name={block.icon}
              size={160}
              strokeWidth={1.25}
              className="sl-analogy-icon"
              aria-hidden="true"
            />
          ) : (
            <Mascot size={220} mood="think" />
          )}
          <span className="sl-analogy-label">ANALOGY</span>
        </div>
        <p className="sl-analogy-text reveal" style={ri(2)}>
          <span className="sl-analogy-title">{getL10n(block.title, lang)} </span>
          <Rich text={getL10n(block.text, lang)} />
        </p>
      </div>
    </SlideFrame>
  );
}
