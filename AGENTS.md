# AGENTS.md

## Comandi
- Dev server: `pnpm dev --host 127.0.0.1 --port 5173 --strictPort` (su questa macchina Vite su `localhost` ascolta solo IPv6 e l'anteprima non lo raggiunge).
- Verifica: `pnpm exec tsc -b` e `pnpm exec oxlint src scripts`. `pnpm coverage` fallisce per un gap preesistente nella copertura docs (20 pagine), non è una regressione.
- Controllo visivo delle slide: `pnpm audit:slides` (tutti i moduli) oppure lo script mirato `audit/tmp-trento-check.ts` per il pacchetto Trento (dev server acceso). `audit/` è in .gitignore.

## Pacchetti evento
- Dati in `src/content/events/<YYYY-MM-DD-nome>/`, registrati in `src/content/events/index.ts`. `src/content/**` deve restare senza React/CSS (lo importano gli script node).
- Slide con layout su misura: blocco `custom` + componenti in `src/components/slides/custom/<evento>/`, classi CSS con prefisso dedicato (es. `tn-`), colori solo da variabili tema (`--bg`, `--ink`, `--muted`, `--accent`, `--line-strong`, `--surface`) così funzionano in tutti i temi.
- Asset in `public/events/<pack-id>/`.
- Testi e note dell'utente vanno copiati alla lettera; niente riformulazioni non richieste.

## Preferenze dell'utente
- Contenuti degli eventi in italiano.
- Tono FUN: quando il tono Fun è attivo deve esserci sempre qualcosa di divertente (fun aside con la lontra, emoji, piccoli extra). In tono Serio niente extra fun.
- Nessuna menzione di Cursor nei contenuti dell'evento Trento.
- Controllare la leggibilità in tutti i temi (chiaro e scuro): testo su `--accent` deve essere bianco.
