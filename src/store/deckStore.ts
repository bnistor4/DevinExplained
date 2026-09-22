import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Lang, Slide, Tone } from '../content/schema';
import { modules } from '../content/modules';

export type Theme = 'devin' | 'cognition' | 'dark' | 'product';
export type Density = 'short' | 'full';
export type View = 'builder' | 'present';

export type PresenterInfo = { name: string; handle: string; org: string };

export type DeckPayload = {
  moduleIds: string[];
  lang: Lang;
  tone: Tone;
  theme: Theme;
  density: Density;
  presenter: PresenterInfo;
};

export type DeckSlide = { moduleId: string; slide: Slide };

type DeckState = DeckPayload & {
  view: View;
  showNotes: boolean;
  printing: boolean;
  currentIndex: number;
  toggleModule: (id: string) => void;
  setModules: (ids: string[]) => void;
  setLang: (lang: Lang) => void;
  setTone: (tone: Tone) => void;
  setTheme: (theme: Theme) => void;
  setDensity: (density: Density) => void;
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

const defaults = {
  view: 'builder' as View,
  moduleIds: [] as string[],
  lang: defaultLang(),
  tone: 'serious' as Tone,
  theme: 'devin' as Theme,
  density: 'full' as Density,
  showNotes: false,
  printing: false,
  presenter: { ...emptyPresenter },
  currentIndex: 0,
};

function deckTitleSlide(): Slide {
  return {
    id: '__deck-title',
    block: {
      type: 'title',
      kicker: { en: 'DEVINEXPLAINED · COMMUNITY DECK', it: 'DEVINEXPLAINED · DECK DELLA COMMUNITY' },
      title: { en: 'Devin, explained', it: 'Devin, spiegato semplice' },
    },
  };
}

export function buildDeckSlides(moduleIds: string[], tone: Tone, density: Density): DeckSlide[] {
  const list: DeckSlide[] = [];
  for (const id of moduleIds) {
    const mod = modules.find((m) => m.id === id);
    if (!mod) continue;
    let slides = mod.slides.filter((s) => tone === 'fun' || s.tone !== 'fun');
    if (density === 'short') slides = slides.slice(0, 2);
    for (const slide of slides) list.push({ moduleId: id, slide });
  }
  const first = moduleIds.length ? modules.find((m) => m.id === moduleIds[0]) : undefined;
  if (list.length > 0 && first && first.category !== 'intro') {
    list.unshift({ moduleId: '__deck', slide: deckTitleSlide() });
  }
  return list;
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

      setLang: (lang) => set({ lang: SELECTABLE_LANGS.includes(lang) ? lang : 'en' }),
      setTone: (tone) => set({ tone }),
      setTheme: (theme) => set({ theme: THEMES.includes(theme) ? theme : 'devin' }),
      setDensity: (density) => set({ density }),
      toggleNotes: () => set((s) => ({ showNotes: !s.showNotes })),
      setPresenter: (p) => set((s) => ({ presenter: { ...s.presenter, ...p } })),

      next: () =>
        set((s) => ({
          currentIndex: Math.min(
            s.currentIndex + 1,
            buildDeckSlides(s.moduleIds, s.tone, s.density).length - 1,
          ),
        })),
      prev: () => set((s) => ({ currentIndex: Math.max(s.currentIndex - 1, 0) })),
      goTo: (i) =>
        set((s) => ({
          currentIndex: Math.max(
            0,
            Math.min(i, buildDeckSlides(s.moduleIds, s.tone, s.density).length - 1),
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
          presenter:
            p.presenter && typeof p.presenter === 'object'
              ? { ...emptyPresenter, ...p.presenter }
              : s.presenter,
          currentIndex: 0,
        })),

      setPrinting: (v) => set({ printing: v }),
    }),
    {
      name: 'devinexplained:deck',
      partialize: (s) => ({
        moduleIds: s.moduleIds,
        lang: s.lang,
        tone: s.tone,
        theme: s.theme,
        density: s.density,
        showNotes: s.showNotes,
        presenter: s.presenter,
      }),
    },
  ),
);

export function deckPayload(s: DeckState | DeckPayload): DeckPayload {
  return {
    moduleIds: s.moduleIds,
    lang: s.lang,
    tone: s.tone,
    theme: s.theme,
    density: s.density,
    presenter: s.presenter,
  };
}

export function useSlides(): DeckSlide[] {
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const tone = useDeckStore((s) => s.tone);
  const density = useDeckStore((s) => s.density);
  return useMemo(() => buildDeckSlides(moduleIds, tone, density), [moduleIds, tone, density]);
}
