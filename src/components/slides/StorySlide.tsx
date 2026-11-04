import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

/** "Fun story" slide: left column kicker/title/text/beats/punchline/source, right column image or the otter. */
export default function StorySlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'story'>;
  lang: Lang;
  f: Frame;
}) {
  const beats = block.beats ?? [];
  const compact = beats.length > 0 && beats.every((b) => b.label.length <= 3);
  return (
    <SlideFrame f={f}>
      <div className={block.wide ? 'sl-story sl-story-wide' : 'sl-story'}>
        <div className="sl-story-main">
          {block.kicker && (
            <p className="sl-story-kicker reveal" style={ri(0)}>
              <Rich text={getL10n(block.kicker, lang)} />
            </p>
          )}
          <h2 className="sl-h2 sl-story-title reveal" style={ri(1)}>
            <Rich text={getL10n(block.title, lang)} />
          </h2>
          {block.text && (
            <p className="sl-story-text reveal" style={ri(2)}>
              <Rich text={getL10n(block.text, lang)} />
            </p>
          )}
          {beats.length > 0 && (
            <ul className="sl-story-beats reveal" style={ri(3)}>
              {beats.map((b, i) => (
                <li className="sl-story-beat" key={i}>
                  <span className={compact ? 'sl-story-beat-num' : 'sl-story-beat-label'}>
                    {b.label}
                  </span>
                  <span className="sl-story-beat-text">
                    <Rich text={getL10n(b.text, lang)} />
                  </span>
                </li>
              ))}
            </ul>
          )}
          {block.punchline && (
            <p className="sl-story-punch reveal" style={ri(4)}>
              <Rich text={getL10n(block.punchline, lang)} />
            </p>
          )}
          {block.source && (
            <p className="sl-story-source reveal" style={ri(5)}>
              Fonte: {block.source}
            </p>
          )}
        </div>
        <figure className="sl-story-media reveal" style={ri(2)}>
          {block.image ? (
            <>
              <img src={block.image} alt={block.imageAlt ?? ''} />
              {block.credit && <figcaption className="sl-story-credit">{block.credit}</figcaption>}
            </>
          ) : (
            <>
              <img src="/assets/devin.png" alt="Devin" className="sl-story-otter" />
              <figcaption className="sl-story-credit">Mascotte Devin · Cognition</figcaption>
            </>
          )}
        </figure>
      </div>
    </SlideFrame>
  );
}
