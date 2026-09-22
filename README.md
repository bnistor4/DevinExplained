# DevinExplained

A static, fullscreen, modular presentation builder for Devin — made for community
ambassadors at meetups. Pick modules, order them, hit Present.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Build for production: `pnpm build` → `dist/` (static, hostable anywhere).

## Build a deck

The Builder has three columns:

1. **Modules** — the catalog, grouped by category. Search, collapse categories,
   or use **Select all** / **Clear** at the top (each category also has its own
   select-all).
2. **Deck** — your outline. Drag to reorder, expand a card to see its slides,
   trash to remove. The header shows the total: `~42 min · 61 slides`.
3. **Customize** — presets, tone, theme, density, speaker notes, presenter name.

**Presets**: Pitch 5 min, Meetup 20 min, Deep-dive Enterprise, Dev hands-on,
Full tour (every module). They just set the module list — you can still edit it.

**Tone**: Serious hides `tone: 'fun'` slides and fun asides. Fun shows them.

**Density**: Short keeps the first 2 slides of each module.

## Sharing, export, printing

- **Copy share link** encodes the whole deck into the URL hash — send it, the
  recipient opens the same deck.
- **Export / Import JSON** does the same via a file.
- **Print to PDF**: press the print button in the presenter (or Ctrl+P) — one
  slide per page, landscape.

## Presenter shortcuts

| Key | Action |
| --- | ------ |
| → / Space / PgDn | next slide |
| ← / PgUp | previous slide |
| Home / End | first / last slide |
| F | fullscreen |
| N | speaker-notes drawer |
| Esc | back to builder |

Click the right third of the stage to advance, left third to go back.

## Content: how modules work

Everything is data — no React code in content files. A module lives at
`src/content/modules/<id>.ts` and looks like:

```ts
import type { Module } from '../schema';

const mod: Module = {
  id: 'my-module',                    // unique, kebab-case
  category: 'how-it-works',           // see categories in modules/index.ts
  icon: 'Cog',                        // any lucide-react icon name
  title: { en: 'Title', it: 'Titolo' },
  summary: { en: 'One line', it: 'Una riga' },
  durationMin: 4,                     // ~1.5 min per slide is realistic
  sources: ['https://docs.devin.ai/...'],
  slides: [ /* 3–6 slides */ ],
};
export default mod;
```

Register it in `src/content/modules/index.ts` — the `modules` array order is the
catalog order.

### Slides

Each slide has an `id`, a `block`, optional `notes` (speaker notes — write them,
they're what makes a deck presentable), optional `tone`, `funAside`, `band`.

Block types: `title`, `bullets`, `compare`, `timeline`, `stats`, `cards`,
`quote`, `analogy`, `pricing`, `code`, `media`, `people`, `qa`.
See `src/content/schema.ts` for the exact shape of each.

Every user-facing string is `{ en, it }`. English is the fallback — a slide with
only `en` still works, but ship both.

### Emphasis, tone, bands

- `*word*` inside any title/item/quote renders in the accent color. One per
  headline max — more reads as noise.
- `tone: 'fun'` marks a slide as optional fun (analogy slides, jokes). Hidden in
  Serious mode.
- `funAside: { en, it }` shows the otter with a speech bubble on that slide in
  Fun mode.
- `band: 'dark'` renders the slide as a dark feature band regardless of theme.
  Use sparingly — roughly one slide in every third module.

### Facts and sources

Facts come only from the pages listed in `sources`. If the source doesn't say
it, don't write it. `pnpm coverage` checks that every eligible docs page is
claimed by at least one module.

## Languages

UI strings live in `src/i18n/ui.<lang>.json`; content strings are the `en`/`it`
keys in each module. To add a language: add the Lang union member in
`schema.ts`, create `ui.<lang>.json`, add the language to the `SELECTABLE_LANGS`
list and the toggle in `Builder.tsx`, then add `.<lang>` keys to module strings
(optional — `en` is the fallback).

## Fonts

Geist Sans/Mono and Source Serif 4 ship via fontsource. The real Devin/Cognition
fonts (NB International Pro, STK Bureau Serif) are commercial — if you have a
licence, drop the `.woff2` files into `public/fonts/` and uncomment the
`@font-face` blocks in `src/themes/fonts-licensed.css`. See
`public/fonts/README.txt`.

## Checks

```bash
pnpm check      # tsc -b + oxlint + docs coverage (must be green before a meetup)
pnpm coverage   # just the docs-coverage check
```

---

## Italiano

### Come si usa

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

Nel Builder: colonna 1 = catalogo moduli (cerca, espandi le categorie, "Seleziona
tutto" / "Deseleziona" in cima), colonna 2 = scaletta del deck (trascina per
riordinare, espandi per vedere le slide, l'header mostra `~42 min · 61 slide`),
colonna 3 = preset, tono, tema, densità, note e dati del relatore.

I preset disponibili: Pitch 5 min, Meetup 20 min, Deep-dive Enterprise, Dev
hands-on, Tour completo.

In presentazione: → / Spazio per avanzare, ← per tornare, F fullscreen, N per le
note, Esc per uscire. Ctrl+P stampa una slide per pagina in PDF.

### Modificare i contenuti

Ogni modulo è un file `src/content/modules/<id>.ts`: solo dati, niente React.
Ogni stringa è `{ en, it }`. Registra il modulo in `src/content/modules/index.ts`.

- `*parola*` evidenzia in colore accento — massimo una per titolo.
- `tone: 'fun'` rende la slide opzionale (nascosta in modalità Serio).
- `funAside` mostra la lontra Devin con un fumetto sulla slide.
- `band: 'dark'` rende la slide una banda scura, qualunque sia il tema.
- `notes` = le note del relatore: scrivile sempre, 1–3 frasi.

Le fonti sono le pagine di `docs.devin.ai` elencate in `sources`: i fatti vengono
solo da lì. `pnpm check` verifica tipi, lint e copertura della documentazione —
deve essere tutto verde prima del meetup.
