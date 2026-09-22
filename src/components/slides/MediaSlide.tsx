import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

function youtubeEmbed(src: string): string {
  const watch = src.match(/[?&]v=([\w-]+)/);
  if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
  const short = src.match(/youtu\.be\/([\w-]+)/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  return src;
}

export default function MediaSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'media'>;
  lang: Lang;
  f: Frame;
}) {
  return (
    <SlideFrame f={f}>
      {block.title && (
        <h2 className="sl-h2 reveal" style={ri(1)}>
          <Rich text={getL10n(block.title, lang)} />
        </h2>
      )}
      <div className="sl-media-frame reveal" style={ri(2)}>
        {block.kind === 'image' && <img src={block.src} alt={getL10n(block.caption, lang)} />}
        {block.kind === 'video' && <video src={block.src} controls playsInline />}
        {block.kind === 'youtube' && (
          <iframe
            src={youtubeEmbed(block.src)}
            title={getL10n(block.title, lang) || 'video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      {block.caption && (
        <p className="sl-media-caption reveal" style={ri(3)}>
          {getL10n(block.caption, lang)}
        </p>
      )}
    </SlideFrame>
  );
}
