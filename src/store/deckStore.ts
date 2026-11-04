import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  CategoryId,
  EventLink,
  Lang,
  L10n,
  Module,
  Slide,
  SlideBlock,
  Tone,
  WifiInfo,
} from '../content/schema';
import { categories, modules } from '../content/modules';
import { eventPacks } from '../content/events';
import type { EventPack } from '../content/events/types';

export type Theme = 'devin' | 'cognition' | 'dark' | 'product';
export type Density = 'short' | 'full';
export type Fit = 'contain' | 'fill';
export type View = 'builder' | 'present';

export type PresenterInfo = { name: string; handle: string; org: string };

export type EventState = {
  name: string;
  date: string;
  location: string;
  hashtag: string;
  links: EventLink[];
  liveQa: { url: string; label: string; badge: boolean };
  wifi: WifiInfo;
  hostLogo?: string; // data URL (PNG/SVG, <= 300KB)
  autoSlides: { agenda: boolean; community: boolean };
  plannedMinutes?: number; // presenter timer target
};

/** Event as it travels in share links / exports — wifi password never leaves the machine. */
export type SharedEvent = Omit<EventState, 'wifi'> & {
  wifi: { ssid: string; security: WifiInfo['security'] };
};

export type DeckPayload = {
  moduleIds: string[];
  packId: string | null;
  hiddenSlides: string[];
  lang: Lang;
  tone: Tone;
  theme: Theme;
  density: Density;
  fit: Fit;
  presenter: PresenterInfo;
  event: SharedEvent;
};

export type DeckSlide = { moduleId: string; slide: Slide };

type DeckState = Omit<DeckPayload, 'event'> & {
  event: EventState;
  view: View;
  showNotes: boolean;
  printing: boolean;
  currentIndex: number;
  toggleModule: (id: string) => void;
  setModules: (ids: string[]) => void;
  arrangeSuggested: () => void;
  loadEventPack: (id: string) => void;
  clearEventPack: () => void;
  toggleSlideHidden: (key: string) => void;
  setLang: (lang: Lang) => void;
  setTone: (tone: Tone) => void;
  setTheme: (theme: Theme) => void;
  setDensity: (density: Density) => void;
  toggleFit: () => void;
  setEvent: (patch: Partial<EventState>) => void;
  toggleNotes: () => void;
  setPresenter: (p: Partial<PresenterInfo>) => void;
  next: () => void;
  prev: () => void;
  goTo: (i: number) => void;
  enterPresent: () => void;
  exitPresent: () => void;
  reset: () => void;
  loadDeck: (p: Partial<DeckPayload>) => void;
  setPrinting: (v: boolean) => void;
};

const SELECTABLE_LANGS: Lang[] = ['it', 'en'];
const THEMES: Theme[] = ['devin', 'cognition', 'dark', 'product'];

function defaultLang(): Lang {
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('it')
    ? 'it'
    : 'en';
}

const emptyPresenter: PresenterInfo = { name: '', handle: '', org: '' };

const emptyEvent = (): EventState => ({
  name: '',
  date: '',
  location: '',
  hashtag: '',
  links: [],
  liveQa: { url: '', label: '', badge: false },
  wifi: { ssid: '', password: '', security: 'WPA' },
  autoSlides: { agenda: true, community: true },
});

const defaults = {
  view: 'builder' as View,
  moduleIds: [] as string[],
  packId: null as string | null,
  hiddenSlides: [] as string[],
  lang: defaultLang(),
  tone: 'serious' as Tone,
  theme: 'devin' as Theme,
  density: 'full' as Density,
  fit: 'fill' as Fit,
  showNotes: false,
  printing: false,
  presenter: { ...emptyPresenter },
  event: emptyEvent(),
  currentIndex: 0,
};

const pad2 = (n: number) => String(n).padStart(2, '0');

function deckTitleSlide(pack?: EventPack): Slide {
  const d = pack?.deckTitle === false ? undefined : pack?.deckTitle;
  return {
    id: '__deck-title',
    block: {
      type: 'title',
      kicker: d?.kicker,
      title: d?.title ?? { en: 'Devin, explained', it: 'Devin, spiegato semplice' },
      subtitle: d?.subtitle,
    },
  };
}

function agendaSlide(moduleIds: string[]): Slide {
  const mods = moduleIds
    .map((id) => modules.find((m) => m.id === id))
    .filter((m): m is Module => Boolean(m));
  let items: { index: string; title: L10n; minutes: number }[];
  if (mods.length <= 12) {
    items = mods.map((m, i) => ({ index: pad2(i + 1), title: m.title, minutes: m.durationMin }));
  } else {
    // too many modules — group by category, in catalog order
    const byCat = new Map<CategoryId, { title: L10n; minutes: number }>();
    for (const m of mods) {
      const cat = categories.find((c) => c.id === m.category);
      const cur = byCat.get(m.category);
      if (cur) cur.minutes += m.durationMin;
      else
        byCat.set(m.category, {
          title: cat?.title ?? { en: m.category },
          minutes: m.durationMin,
        });
    }
    items = [...byCat.values()].map((c, i) => ({
      index: pad2(i + 1),
      title: c.title,
      minutes: c.minutes,
    }));
  }
  return {
    id: '__agenda',
    block: { type: 'agenda', title: { en: 'Agenda', it: 'Scaletta' }, items },
  };
}

/** Agenda slide from a pack's custom agenda — replaces the generated one. */
function packAgendaSlide(agenda: Exclude<NonNullable<EventPack['agenda']>, false>): Slide {
  return {
    id: '__agenda',
    block: {
      type: 'agenda',
      title: agenda.title ?? { en: 'Agenda', it: 'Scaletta' },
      items: agenda.items.map((it, i) => ({
        index: pad2(i + 1),
        title: it.title,
        ...(it.minutes !== undefined ? { minutes: it.minutes } : {}),
      })),
    },
  };
}

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

function communitySlides(event: EventState): Slide[] {
  const hasContent =
    event.links.length > 0 || event.liveQa.url.trim() !== '' || event.wifi.ssid.trim() !== '';
  if (!hasContent) return [];
  const linkChunks = chunk(event.links, 6);
  const extras = (event.liveQa.url.trim() ? 1 : 0) + (event.wifi.ssid.trim() ? 1 : 0);
  if (!linkChunks.length) linkChunks.push([]);
  else if (extras > 0 && linkChunks[linkChunks.length - 1].length + extras > 6) linkChunks.push([]);
  const last = linkChunks.length - 1;
  const title = { en: 'Stay in touch', it: 'Restiamo in contatto' };
  return linkChunks.map((links, i) => ({
    id: `__community-${i}`,
    block: {
      type: 'community',
      title,
      links,
      liveQa:
        i === last && event.liveQa.url.trim()
          ? { url: event.liveQa.url.trim(), label: event.liveQa.label }
          : undefined,
      wifi: i === last && event.wifi.ssid.trim() ? event.wifi : undefined,
      hashtag: i === last && event.hashtag.trim() ? event.hashtag : undefined,
    } satisfies SlideBlock,
  }));
}

export function buildDeckSlides(
  moduleIds: string[],
  tone: Tone,
  density: Density,
  event?: EventState,
  opts?: { pack?: EventPack; hidden?: string[] },
): DeckSlide[] {
  const hidden = new Set(opts?.hidden ?? []);
  const list: DeckSlide[] = [];
  for (const id of moduleIds) {
    const mod = modules.find((m) => m.id === id);
    if (!mod) continue;
    let slides = mod.slides.filter((s) => tone === 'fun' || s.tone !== 'fun');
    slides = slides.filter((s) => !hidden.has(`${id}/${s.id}`));
    if (density === 'short') slides = slides.slice(0, 2);
    for (const slide of slides) list.push({ moduleId: id, slide });
  }
  const pack = opts?.pack;
  const first = moduleIds.length ? modules.find((m) => m.id === moduleIds[0]) : undefined;
  const hasTitle =
    list.length > 0 && first && first.category !== 'intro' && pack?.deckTitle !== false;
  if (hasTitle) list.unshift({ moduleId: '__deck', slide: deckTitleSlide(pack) });
  if (list.length > 0 && event && event.autoSlides.agenda && pack?.agenda !== false) {
    const agenda = pack?.agenda ? packAgendaSlide(pack.agenda) : agendaSlide(moduleIds);
    list.splice(hasTitle ? 1 : 0, 0, { moduleId: '__deck', slide: agenda });
  }
  if (list.length > 0 && event && event.autoSlides.community && pack?.community !== false) {
    const gen = communitySlides(event);
    if (gen.length) {
      const lastId = moduleIds[moduleIds.length - 1];
      const lastMod = lastId ? modules.find((m) => m.id === lastId) : undefined;
      const pos =
        lastMod?.category === 'closing'
          ? list.findIndex((e) => e.moduleId === lastId)
          : list.length;
      list.splice(pos < 0 ? list.length : pos, 0, ...gen.map((slide) => ({ moduleId: '__deck', slide })));
    }
  }
  return list;
}

/** DeckState → shareable payload (wifi password stripped). */
export function shareableEvent(e: EventState): SharedEvent {
  return {
    ...e,
    wifi: { ssid: e.wifi.ssid, security: e.wifi.security },
  };
}

function sanitizeEvent(p: unknown, base: EventState): EventState {
  if (!p || typeof p !== 'object') return base;
  const e = p as Partial<EventState>;
  return {
    name: typeof e.name === 'string' ? e.name : base.name,
    date: typeof e.date === 'string' ? e.date : base.date,
    location: typeof e.location === 'string' ? e.location : base.location,
    hashtag: typeof e.hashtag === 'string' ? e.hashtag : base.hashtag,
    links: Array.isArray(e.links)
      ? e.links
          .filter(
            (l): l is EventLink =>
              !!l && typeof l === 'object' && typeof l.url === 'string' && typeof l.label === 'string',
          )
          .map((l) => ({
            id: typeof l.id === 'string' ? l.id : `l${Math.random().toString(36).slice(2, 8)}`,
            kind: typeof l.kind === 'string' ? l.kind : 'custom',
            label: l.label,
            url: l.url,
          }))
      : base.links,
    liveQa:
      e.liveQa && typeof e.liveQa === 'object'
        ? {
            url: typeof e.liveQa.url === 'string' ? e.liveQa.url : '',
            label: typeof e.liveQa.label === 'string' ? e.liveQa.label : '',
            badge: Boolean(e.liveQa.badge),
          }
        : base.liveQa,
    wifi:
      e.wifi && typeof e.wifi === 'object'
        ? {
            ssid: typeof e.wifi.ssid === 'string' ? e.wifi.ssid : '',
            password: '', // never import a password from a shared deck
            security: e.wifi.security === 'nopass' ? 'nopass' : 'WPA',
          }
        : base.wifi,
    hostLogo: typeof e.hostLogo === 'string' ? e.hostLogo : undefined,
    autoSlides:
      e.autoSlides && typeof e.autoSlides === 'object'
        ? {
            agenda: e.autoSlides.agenda !== false,
            community: e.autoSlides.community !== false,
          }
        : base.autoSlides,
    plannedMinutes:
      typeof e.plannedMinutes === 'number' && e.plannedMinutes > 0
        ? e.plannedMinutes
        : undefined,
  };
}

export const useDeckStore = create<DeckState>()(
  persist(
    (set) => ({
      ...defaults,

      toggleModule: (id) =>
        set((s) => ({
          moduleIds: s.moduleIds.includes(id)
            ? s.moduleIds.filter((m) => m !== id)
            : [...s.moduleIds, id],
          currentIndex: 0,
        })),

      setModules: (ids) =>
        set({ moduleIds: ids.filter((id) => modules.some((m) => m.id === id)), currentIndex: 0 }),

      arrangeSuggested: () =>
        set((s) => {
          const pack = eventPacks.find((p) => p.id === s.packId);
          const map = pack?.suggestedAfter;
          if (!pack || !map) return s;
          const movable = s.moduleIds.filter(
            (id) => map[id] && s.moduleIds.includes(map[id]),
          );
          const movableSet = new Set(movable);
          const order = new Map(pack.modules.map((m, i) => [m.id, i]));
          const rest = s.moduleIds.filter((id) => !movableSet.has(id));
          const next: string[] = [];
          for (const id of rest) {
            next.push(id);
            next.push(
              ...movable
                .filter((m) => map[m] === id)
                .sort((a, b) => (order.get(a) ?? 0) - (order.get(b) ?? 0)),
            );
          }
          return { moduleIds: next, currentIndex: 0 };
        }),

      loadEventPack: (id) =>
        set((s) => {
          const pack = eventPacks.find((p) => p.id === id);
          if (!pack) return s;
          const pe = pack.event;
          return {
            moduleIds: pack.moduleIds.filter((mid) => modules.some((m) => m.id === mid)),
            packId: pack.id,
            hiddenSlides: pack.hiddenSlides ?? [],
            lang: pack.lang && SELECTABLE_LANGS.includes(pack.lang) ? pack.lang : s.lang,
            tone: pack.tone ?? s.tone,
            theme: pack.theme && THEMES.includes(pack.theme) ? pack.theme : s.theme,
            density: 'full' as Density,
            event: {
              ...s.event,
              ...(pe?.name !== undefined ? { name: pe.name } : {}),
              ...(pe?.date !== undefined ? { date: pe.date } : {}),
              ...(pe?.location !== undefined ? { location: pe.location } : {}),
              ...(pe?.hashtag !== undefined ? { hashtag: pe.hashtag } : {}),
              ...(pe?.links !== undefined ? { links: pe.links } : {}),
              ...(pe?.plannedMinutes !== undefined ? { plannedMinutes: pe.plannedMinutes } : {}),
              ...(pe?.liveQa !== undefined ? { liveQa: pe.liveQa } : {}),
              autoSlides: pack.agenda
                ? { ...s.event.autoSlides, agenda: true }
                : s.event.autoSlides,
            },
            currentIndex: 0,
          };
        }),

      clearEventPack: () => set({ packId: null }),

      toggleSlideHidden: (key) =>
        set((s) => ({
          hiddenSlides: s.hiddenSlides.includes(key)
            ? s.hiddenSlides.filter((k) => k !== key)
            : [...s.hiddenSlides, key],
        })),

      setLang: (lang) => set({ lang: SELECTABLE_LANGS.includes(lang) ? lang : 'en' }),
      setTone: (tone) => set({ tone }),
      setTheme: (theme) => set({ theme: THEMES.includes(theme) ? theme : 'devin' }),
      setDensity: (density) => set({ density }),
      toggleFit: () => set((s) => ({ fit: s.fit === 'fill' ? 'contain' : 'fill' })),
      setEvent: (patch) => set((s) => ({ event: { ...s.event, ...patch } })),
      toggleNotes: () => set((s) => ({ showNotes: !s.showNotes })),
      setPresenter: (p) => set((s) => ({ presenter: { ...s.presenter, ...p } })),

      next: () =>
        set((s) => ({
          currentIndex: Math.min(
            s.currentIndex + 1,
            buildDeckSlides(s.moduleIds, s.tone, s.density, s.event, slideOpts(s)).length - 1,
          ),
        })),
      prev: () => set((s) => ({ currentIndex: Math.max(s.currentIndex - 1, 0) })),
      goTo: (i) =>
        set((s) => ({
          currentIndex: Math.max(
            0,
            Math.min(i, buildDeckSlides(s.moduleIds, s.tone, s.density, s.event, slideOpts(s)).length - 1),
          ),
        })),

      enterPresent: () => set({ view: 'present', currentIndex: 0 }),
      exitPresent: () => set({ view: 'builder', showNotes: false }),

      reset: () =>
        set((s) => ({
          ...defaults,
          lang: s.lang,
          presenter: s.presenter,
        })),

      loadDeck: (p) =>
        set((s) => ({
          moduleIds: Array.isArray(p.moduleIds)
            ? p.moduleIds.filter((id) => modules.some((m) => m.id === id))
            : s.moduleIds,
          lang: p.lang && SELECTABLE_LANGS.includes(p.lang) ? p.lang : s.lang,
          tone: p.tone === 'fun' || p.tone === 'serious' ? p.tone : s.tone,
          theme: p.theme && THEMES.includes(p.theme) ? p.theme : s.theme,
          density: p.density === 'short' || p.density === 'full' ? p.density : s.density,
          fit: p.fit === 'contain' || p.fit === 'fill' ? p.fit : s.fit,
          presenter:
            p.presenter && typeof p.presenter === 'object'
              ? { ...emptyPresenter, ...p.presenter }
              : s.presenter,
          packId:
            typeof p.packId === 'string' && eventPacks.some((pk) => pk.id === p.packId)
              ? p.packId
              : null,
          hiddenSlides: Array.isArray(p.hiddenSlides)
            ? p.hiddenSlides.filter((k): k is string => typeof k === 'string')
            : [],
          event: sanitizeEvent(p.event, s.event),
          currentIndex: 0,
        })),

      setPrinting: (v) => set({ printing: v }),
    }),
    {
      name: 'devinexplained:deck',
      partialize: (s) => ({
        moduleIds: s.moduleIds,
        packId: s.packId,
        hiddenSlides: s.hiddenSlides,
        lang: s.lang,
        tone: s.tone,
        theme: s.theme,
        density: s.density,
        fit: s.fit,
        showNotes: s.showNotes,
        presenter: s.presenter,
        event: s.event,
      }),
    },
  ),
);

export function deckPayload(s: DeckState | DeckPayload): DeckPayload {
  const event: SharedEvent =
    'password' in s.event.wifi ? shareableEvent(s.event as EventState) : s.event;
  return {
    moduleIds: s.moduleIds,
    packId: s.packId,
    hiddenSlides: s.hiddenSlides,
    lang: s.lang,
    tone: s.tone,
    theme: s.theme,
    density: s.density,
    fit: s.fit,
    presenter: s.presenter,
    event,
  };
}

function slideOpts(s: { packId: string | null; hiddenSlides: string[] }) {
  return { pack: eventPacks.find((p) => p.id === s.packId), hidden: s.hiddenSlides };
}

export function useSlides(): DeckSlide[] {
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const tone = useDeckStore((s) => s.tone);
  const density = useDeckStore((s) => s.density);
  const event = useDeckStore((s) => s.event);
  const packId = useDeckStore((s) => s.packId);
  const hiddenSlides = useDeckStore((s) => s.hiddenSlides);
  return useMemo(
    () =>
      buildDeckSlides(moduleIds, tone, density, event, {
        pack: eventPacks.find((p) => p.id === packId),
        hidden: hiddenSlides,
      }),
    [moduleIds, tone, density, event, packId, hiddenSlides],
  );
}
