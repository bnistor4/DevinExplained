import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function QuoteSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'quote'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f} className="slide-quote">
      <blockquote className="reveal" style={ri(1)}>
        <span className="sl-quote-glyph" aria-hidden="true">
          &ldquo;
        </span>
        <Rich text={getL10n(block.text, lang)} />
      </blockquote>
      {(block.author || block.role) && (
        <p className="sl-quote-author reveal" style={ri(2)}>
          {block.author}
          {block.author && block.role && ' — '}
          {block.role && <span className="sl-quote-role">{getL10n(block.role, lang)}</span>}
        </p>
      )}
    </SlideFrame>
  );
}
