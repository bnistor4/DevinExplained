export type Lang = 'it' | 'en' | 'es' | 'fr' | 'de' | 'pt-BR' | 'ja' | 'zh';
export type L10n = { en: string } & Partial<Record<Lang, string>>; // en is the fallback
export type Tone = 'serious' | 'fun';
export type CategoryId = 'intro' | 'history' | 'how-it-works' | 'surfaces' | 'onboarding' | 'products' | 'integrations' | 'prompting' | 'use-cases' | 'pricing-enterprise' | 'closing';

export type LinkKind =
  | 'telegram' | 'whatsapp' | 'discord' | 'slack' | 'linkedin' | 'meetup'
  | 'luma' | 'x' | 'github' | 'website' | 'feedback' | 'custom';
export type EventLink = { id: string; kind: LinkKind; label: string; url: string };
export type WifiInfo = { ssid: string; password: string; security: 'WPA' | 'nopass' };
export type LiveQa = { url: string; label: string; badge: boolean };

export type SlideBlock =
  | { type: 'title'; kicker?: L10n; title: L10n; subtitle?: L10n }
  | { type: 'bullets'; title: L10n; items: L10n[]; icon?: string }              // icon = lucide icon name
  | { type: 'compare'; title: L10n; left: { title: L10n; items: L10n[] }; right: { title: L10n; items: L10n[] } }
  | { type: 'timeline'; title: L10n; events: { date: string; title: L10n; text?: L10n }[] }
  | { type: 'stats'; title: L10n; stats: { value: string; label: L10n }[] }
  | { type: 'cards'; title: L10n; cards: { icon: string; title: L10n; text: L10n }[] }
  | { type: 'quote'; text: L10n; author?: string; role?: L10n }
  | { type: 'analogy'; title: L10n; text: L10n; icon?: string }                  // "it's like..." slide, playful; icon = lucide name
  | { type: 'pricing'; title: L10n; plans: { name: string; price: string; audience: L10n; features: L10n[]; highlight?: boolean }[]; footnote?: L10n }
  | { type: 'code'; title: L10n; code: string; language: string; caption?: L10n }
  | { type: 'media'; title?: L10n; kind: 'image' | 'video' | 'youtube'; src: string; caption?: L10n }
  | { type: 'people'; title: L10n; logo?: 'devin' | 'cognition'; people: { name: string; role: L10n; bio?: L10n; img?: string }[] }
  | { type: 'qa'; title: L10n; text?: L10n; qrUrl?: string }
  | { type: 'agenda'; title: L10n; items: { index: string; title: L10n; minutes: number }[] }
  | { type: 'community'; title: L10n; links: EventLink[]; liveQa?: { url: string; label: string }; wifi?: WifiInfo; hashtag?: string };

export type Slide = {
  id: string;
  block: SlideBlock;
  notes?: L10n;          // speaker notes
  tone?: Tone;           // 'fun' slides are hidden when deck tone is 'serious'
  funAside?: L10n;       // short joke/aside rendered as a mascot speech bubble only when tone is 'fun'
  band?: 'paper' | 'dark'; // 'dark' renders the slide as a devin.ai-style dark feature band
};

export type Module = {
  id: string;
  category: CategoryId;
  icon: string;          // lucide icon name
  title: L10n;
  summary: L10n;
  durationMin: number;   // estimated speaking time
  slides: Slide[];
  sources: string[];     // docs.devin.ai URLs this module covers
};

export type Category = { id: CategoryId; icon: string; title: L10n; order: number };
