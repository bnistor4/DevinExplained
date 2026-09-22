import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import BrandLogo from '../BrandLogo';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function PeopleSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'people'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f}>
      <h2 className="sl-h2 reveal" style={ri(1)}>
        {getL10n(block.title, lang)}
      </h2>
      {block.logo && (
        <div className="sl-people-logo">
          <BrandLogo brand={block.logo} height={28} dark={f.band === 'dark'} />
        </div>
      )}
      <div className="sl-people-row">
        {block.people.map((p, i) => (
          <div key={p.name} className="sl-person reveal" style={ri(i + 2)}>
            {p.img ? (
              <img className="sl-avatar" src={p.img} alt={p.name} />
            ) : (
              <div className="sl-avatar sl-avatar-fallback">{initials(p.name)}</div>
            )}
            <h3>{p.name}</h3>
            <p className="sl-person-role">{getL10n(p.role, lang)}</p>
            {p.bio && <p className="sl-person-bio">{getL10n(p.bio, lang)}</p>}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}
