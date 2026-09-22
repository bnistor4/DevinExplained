import { useTranslation } from 'react-i18next';
import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function PricingSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'pricing'>;
  lang: Lang;
  f: Frame;
}) {
  const { t } = useTranslation();
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      <div
        className="sl-pricing-grid"
        style={{ gridTemplateColumns: `repeat(${block.plans.length}, 1fr)` }}
      >
        {block.plans.map((p, i) => (
          <div key={p.name} className={`sl-plan reveal${p.highlight ? ' highlight' : ''}`} style={ri(i + 2)}>
            {p.highlight && <span className="sl-plan-tag">{t('slide.popular')}</span>}
            <h3>{p.name}</h3>
            <p className="sl-plan-price">{p.price}</p>
            <p className="sl-plan-audience">{getL10n(p.audience, lang)}</p>
            <ul>
              {p.features.map((feat, j) => (
                <li key={j}>
                  <Rich text={getL10n(feat, lang)} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {block.footnote && (
        <p className="sl-pricing-footnote">{getL10n(block.footnote, lang)}</p>
      )}
    </SlideFrame>
  );
}
