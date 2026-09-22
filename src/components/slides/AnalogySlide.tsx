import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
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
          {block.emoji && (
            <span className="sl-analogy-emoji" aria-hidden="true">
              {block.emoji}
            </span>
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
