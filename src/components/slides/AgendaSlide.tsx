import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

/** Generated agenda slide — numbered hairline rows, minutes right-aligned in mono. */
export default function AgendaSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'agenda'>;
  lang: Lang;
  f: Frame;
}) {
  const twoCol = block.items.length > 8;
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <ul className={`sl-agenda${twoCol ? ' two-col' : ''}`}>
        {block.items.map((item, i) => (
          <li key={i} className="reveal" style={ri(i + 2)}>
            <span className="sl-num">{item.index}</span>
            <span className="sl-agenda-title">
              <Rich text={getL10n(item.title, lang)} />
            </span>
            {item.minutes !== undefined && (
              <span className="sl-agenda-min">{item.minutes} min</span>
            )}
          </li>
        ))}
      </ul>
    </SlideFrame>
  );
}
