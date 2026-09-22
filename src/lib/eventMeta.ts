import type { Lang, LinkKind, WifiInfo } from '../content/schema';

/** Lucide icon + default label per channel kind (brand icons don't exist in lucide). */
export const LINK_KINDS: { kind: LinkKind; icon: string; label: { en: string; it: string } }[] = [
  { kind: 'telegram', icon: 'Send', label: { en: 'Telegram community', it: 'Community Telegram' } },
  { kind: 'whatsapp', icon: 'MessageCircle', label: { en: 'WhatsApp group', it: 'Gruppo WhatsApp' } },
  { kind: 'discord', icon: 'Gamepad2', label: { en: 'Discord server', it: 'Server Discord' } },
  { kind: 'slack', icon: 'Hash', label: { en: 'Slack channel', it: 'Canale Slack' } },
  { kind: 'linkedin', icon: 'Briefcase', label: { en: 'LinkedIn', it: 'LinkedIn' } },
  { kind: 'meetup', icon: 'Users', label: { en: 'Meetup group', it: 'Gruppo Meetup' } },
  { kind: 'luma', icon: 'Calendar', label: { en: 'Luma events', it: 'Eventi Luma' } },
  { kind: 'x', icon: 'AtSign', label: { en: 'X / Twitter', it: 'X / Twitter' } },
  { kind: 'github', icon: 'GitBranch', label: { en: 'GitHub org', it: 'Org GitHub' } },
  { kind: 'website', icon: 'Globe', label: { en: 'Website', it: 'Sito web' } },
  { kind: 'feedback', icon: 'ClipboardList', label: { en: 'Feedback form', it: 'Modulo feedback' } },
  { kind: 'custom', icon: 'Link', label: { en: 'Link', it: 'Link' } },
];

export const linkIcon = (kind: LinkKind): string =>
  LINK_KINDS.find((k) => k.kind === kind)?.icon ?? 'Link';

export const linkDefaultLabel = (kind: LinkKind, lang: Lang): string =>
  LINK_KINDS.find((k) => k.kind === kind)?.label[lang === 'it' ? 'it' : 'en'] ?? 'Link';

/** WIFI: QR payload — escapes \ ; , : " per the ZXing spec. */
export function wifiQrValue(wifi: WifiInfo): string {
  const esc = (s: string) => s.replace(/([\\;,:"])/g, '\\$1');
  const t = wifi.security === 'nopass' ? 'nopass' : 'WPA';
  const pass = t === 'nopass' ? '' : `;P:${esc(wifi.password)}`;
  return `WIFI:T:${t};S:${esc(wifi.ssid)}${pass};;`;
}

export function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0] || url;
  }
}

export const isHttpUrl = (url: string): boolean => /^https?:\/\/\S+$/i.test(url.trim());
