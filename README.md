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
3. **Customize** — presets, tone, theme, density, speaker notes, presenter name,
   and the collapsible **04 Event** section (see Event kit below).

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

## Event kit

The **04 Event** section in Customize sets up a meetup:

- **Event name / date / location / hashtag** — shown on the generated title
  slide; the hashtag ends the community slide.
- **Channels** — community links (Telegram, WhatsApp, Discord, Slack, LinkedIn,
  Meetup, Luma, X, GitHub, website, feedback form, custom). Each becomes a QR
  tile; drag to reorder. URLs must start with `http(s)://`.
- **Live Q&A** — a Slido/Mentimeter/form URL. Press `Q` in the presenter for a
  big QR; enable "Show QR badge" to pin a small QR on every slide.
- **Wi-Fi** — SSID + password generate a `WIFI:` QR guests scan to join. The
  password is never written into share links or exported decks.
- **Host logo** — PNG/SVG ≤ 300KB, shown next to the builder wordmark, on the
  title slide, and on the community slide.
- **Generated slides** — an *Agenda* slide after the title (auto-grouped by
  category past 12 modules) and a *Stay in touch* slide before the closing
  module, built from the fields above. Toggle each off here.
- **Planned duration** — target minutes for the presenter timer (`T`).

## Presenter shortcuts

| Key | Action |
| --- | ------ |
| → / Space / PgDn | next slide |
| ← / PgUp | previous slide |
| Home / End | first / last slide |
| F | fullscreen |
| W | stage fit: fill ↔ contain |
| Q | live Q&A overlay (big QR) |
| L | links overlay (click a tile to enlarge) |
| B | blackout — any key returns |
| T | timer chip; Shift+T resets |
| P | break countdown (Space pauses, +/− adjusts) |
| ? | shortcut cheatsheet |
| N | speaker-notes drawer |
| Esc | close overlay, else back to builder |
| Ctrl+P | print to PDF |

Click the right third of the stage to advance, left third to go back.

**Stage fit**: *fill* (default) renders edge-to-edge — the canvas is 1080 design
px tall and widens with the window (clamped 1440–2560). *Contain* keeps the
classic 16:9 letterboxed frame. Print/PDF is always 1920×1080.

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
pnpm check         # tsc -b + oxlint + docs coverage (must be green before a meetup)
pnpm coverage      # just the docs-coverage check
pnpm audit:slides  # renders every slide in a headless browser (dev server must
                   # be running), screenshots it/en × contain/fill × viewports,
                   # reports overflow + tiny text to audit/report.json, and
                   # writes contact sheets to audit/sheet-<lang>.png
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

In presentazione: → / Spazio per avanzare, ← per tornare, F fullscreen, W per
cambiare l'adattamento dello stage (fill/contain), Q per il QR del Q&A dal vivo,
L per i link community, B schermo nero, T timer, P pausa, ? guida tasti, N per le
note, Esc per uscire. Ctrl+P stampa una slide per pagina in PDF.

### Kit evento

La sezione **04 Evento** nel pannello Personalizza configura il meetup: nome,
data, luogo e hashtag (sulla slide titolo), canali community con QR (Telegram,
WhatsApp, Discord, Slack, LinkedIn, Meetup, Luma, X, GitHub, sito, feedback),
Q&A dal vivo con badge QR opzionale su ogni slide, Wi-Fi con QR `WIFI:` (la
password non finisce mai nei link di condivisione o negli export), logo dell'host
e le slide generate automaticamente: *Scaletta* dopo il titolo e *Restiamo in
contatto* prima della chiusura.

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
