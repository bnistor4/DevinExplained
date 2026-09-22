import { Check, X } from 'lucide-react';
import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function CompareSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'compare'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div className="sl-compare-grid">
        {(['left', 'right'] as const).map((side, p) => {
          const panel = block[side];
          return (
            <div key={side} className={`sl-compare-panel ${side}`}>
              <h3 className="reveal" style={ri(p + 2)}>
                {getL10n(panel.title, lang)}
              </h3>
              <ul>
                {panel.items.map((item, i) => (
                  <li key={i} className="reveal" style={ri(p + 3 + i)}>
                    {side === 'right' ? (
                      <Check size={18} className="sl-check" strokeWidth={2} />
                    ) : (
                      <X size={18} className="sl-x" strokeWidth={2} />
                    )}
                    <span>
                      <Rich text={getL10n(item, lang)} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </SlideFrame>
  );
}
