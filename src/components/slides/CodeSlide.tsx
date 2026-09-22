import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function CodeSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'code'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div className="sl-code-panel reveal" style={ri(2)}>
        <span className="sl-code-lang">{block.language}</span>
        <pre>
          <code>{block.code}</code>
        </pre>
      </div>
      {block.caption && (
        <p className="sl-code-caption reveal" style={ri(3)}>
          <Rich text={getL10n(block.caption, lang)} />
        </p>
      )}
    </SlideFrame>
  );
}
