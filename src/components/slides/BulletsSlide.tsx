import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

const pad = (n: number) => String(n + 1).padStart(2, '0');

export default function BulletsSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'bullets'>;
  lang: Lang;
  f: Frame;
}) {
  const twoCol = block.items.length > 6;
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <ul className={`sl-bullets${twoCol ? ' two-col' : ''}`}>
        {block.items.map((item, i) => (
          <li key={i} className="reveal" style={ri(i + 2)}>
            <span className="sl-num">{pad(i)}</span>
            <span className="sl-btext">
              <Rich text={getL10n(item, lang)} />
            </span>
          </li>
        ))}
      </ul>
    </SlideFrame>
  );
}
