import type { EventLink, L10n, Lang, Module, Tone } from '../schema';

export type EventPack = {
  id: string; // e.g. '2026-11-04-meetup'
  title: L10n; // shown as catalog sub-header and preset button
  date: string; // ISO 'YYYY-MM-DD', used for sorting (newest first)
  lang?: Lang; // applied when the pack is loaded
  tone?: Tone;
  theme?: 'devin' | 'cognition' | 'dark' | 'product';
  deckTitle?: { kicker?: L10n; title: L10n; subtitle?: L10n } | false; // overrides the generated __deck title text; false = no title slide
  agenda?: { title?: L10n; items: { title: L10n; minutes?: number }[] } | false; // replaces generated agenda; index auto = 01,02..; false = no agenda slide
  community?: false; // false = no generated community slides
  event?: {
    name?: string;
    date?: string;
    location?: string;
    hashtag?: string;
    links?: EventLink[];
    plannedMinutes?: number;
    liveQa?: { url: string; label: string; badge: boolean };
  };
  modules: Module[]; // event-only modules, category 'events'
  moduleIds: string[]; // full running order, mixing base module ids and this pack's module ids
  hiddenSlides?: string[]; // keys `${moduleId}/${slideId}` hidden by default
  suggestedAfter?: Record<string, string>; // optional module id -> module id it should follow ("Ordina come consigliato")
  sections?: { title: L10n; moduleIds: string[] }[]; // catalog sub-groups inside the pack
};

/** Authoring helper for Italian-only packs: same string for en and it. */
export const it = (s: string): L10n => ({ en: s, it: s });
