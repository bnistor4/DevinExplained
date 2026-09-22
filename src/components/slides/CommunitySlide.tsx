import { QRCodeSVG } from 'qrcode.react';
import type { Lang } from '../../content/schema';
import { getL10n } from '../../content/modules';
import { hostOf, linkIcon, wifiQrValue } from '../../lib/eventMeta';
import { useDeckStore } from '../../store/deckStore';
import Icon from '../Icon';
import Rich from '../Rich';
import SlideFrame from './SlideFrame';
import { ri, type BlockOf, type Frame } from './shared';

type Tile = {
  key: string;
  icon: string;
  label: string;
  /** QR payload */
  value: string;
  /** small mono line under the label */
  sub: string;
};

/** Generated community slide — QR tiles for channels, live Q&A and Wi-Fi. */
export default function CommunitySlide({
  block,
  lang,
  f,
}: {
  block: BlockOf<'community'>;
  lang: Lang;
  f: Frame;
}) {
  const hostLogo = useDeckStore((s) => s.event.hostLogo);
  const tiles: Tile[] = block.links.map((l) => ({
    key: l.id,
    icon: linkIcon(l.kind),
    label: l.label,
    value: l.url,
    sub: hostOf(l.url),
  }));
  if (block.liveQa?.url)
    tiles.push({
      key: '__liveqa',
      icon: 'MessageCircleQuestionMark',
      label: block.liveQa.label || 'Live Q&A',
      value: block.liveQa.url,
      sub: hostOf(block.liveQa.url),
    });
  if (block.wifi?.ssid)
    tiles.push({
      key: '__wifi',
      icon: 'Wifi',
      label: `Wi-Fi · ${block.wifi.ssid}`,
      value: wifiQrValue(block.wifi),
      sub: block.wifi.security === 'nopass' ? 'open network' : 'WPA',
    });

  // n<=4 → one row of n; 5–6 → two rows of 3; tiles capped at 420px, left-aligned
  const cols = tiles.length <= 4 ? tiles.length : 3;
  return (
    <SlideFrame f={f}>
      <div className="sl-comm-head">
        <h2 className="sl-h2 reveal" style={ri(1)}>
          <Rich text={getL10n(block.title, lang)} />
        </h2>
        {block.hashtag && (
          <p className="sl-comm-hashtag reveal" style={ri(2)}>
            {block.hashtag}
          </p>
        )}
      </div>
      <div
        className="sl-comm-grid"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 420px))` }}
      >
        {tiles.map((t, i) => (
          <div key={t.key} className="sl-comm-tile reveal" style={ri(i + 3)}>
            <span className="sl-comm-qr">
              <QRCodeSVG
                value={t.value}
                size={220}
                level="M"
                style={{ width: '100%', height: '100%', maxWidth: 220, maxHeight: 220 }}
              />
            </span>
            <span className="sl-comm-meta">
              <Icon name={t.icon} size={28} strokeWidth={1.5} />
              <span className="sl-comm-label">{t.label}</span>
            </span>
            <span className="sl-comm-host">{t.sub}</span>
          </div>
        ))}
      </div>
      {hostLogo && (
        <div className="sl-comm-foot">
          <img src={hostLogo} alt="host" className="sl-comm-logo reveal" style={ri(9)} />
        </div>
      )}
    </SlideFrame>
  );
}
