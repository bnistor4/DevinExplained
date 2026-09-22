import { QRCodeSVG } from 'qrcode.react';
import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import { useDeckStore } from '../../store/deckStore';
import BrandLogo from '../BrandLogo';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

export default function QaSlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'qa'>;
  lang: Lang;
  f: Frame;
}) {
  const presenter = useDeckStore((s) => s.presenter);
  const who = [presenter.name, presenter.handle, presenter.org].filter(Boolean).join(' · ');
  return (
    <SlideFrame f={f} className="slide-qa">
      <p className="sl-qa-huge reveal" style={ri(1)}>
        Q&A
      </p>
      <h2 className="sl-qa-title reveal" style={ri(2)}>
        <Rich text={getL10n(block.title, lang)} />
      </h2>
      {block.text && (
        <p className="sl-qa-text reveal" style={ri(3)}>
          <Rich text={getL10n(block.text, lang)} />
        </p>
      )}
      <div className="sl-qa-qr reveal" style={ri(3)}>
        <BrandLogo brand="cognition" height={28} dark={false} />
        <QRCodeSVG value={block.qrUrl || 'https://app.devin.ai'} size={240} level="M" />
        <span className="sl-qr-url">{block.qrUrl || 'app.devin.ai'}</span>
      </div>
      {who && <p className="sl-qa-who">{who}</p>}
    </SlideFrame>
  );
}
