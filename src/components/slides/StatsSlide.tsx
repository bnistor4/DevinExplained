import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function StatsSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'stats'>;
  lang: Lang;
  f: Frame;
}) {
  const maxLen = Math.max(0, ...block.stats.map((s) => s.value.length));
  const sizeCls =
    maxLen <= 3 ? '' : maxLen <= 6 ? ' sl-stats-md' : maxLen <= 10 ? ' sl-stats-sm' : ' sl-stats-xs';
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div className={`sl-stats-row${sizeCls}`}>
        {block.stats.map((s, i) => (
          <div key={i} className="sl-stat reveal" style={ri(i + 2)}>
            <span className="sl-stat-value">{s.value}</span>
            <span className="sl-stat-label">
              <Rich text={getL10n(s.label, lang)} />
            </span>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
