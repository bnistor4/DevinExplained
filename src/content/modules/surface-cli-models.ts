import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-cli-models',
  category: 'surfaces',
  icon: 'BrainCircuit',
  title: { en: 'Adaptive & Fusion', it: 'Adaptive e Fusion' },
  summary: {
    en: 'Two ways to spend less per session: a smart router, and a frontier lead with a cheap sidekick.',
    it: 'Due modi per spendere meno a sessione: un router intelligente e un lead frontier con sidekick economico.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/cli/models',
    'https://docs.devin.ai/cli/adaptive',
    'https://docs.devin.ai/cli/fusion',
  ],
  slides: [
    {
      id: 'adaptive-vs-fusion',
      block: {
        type: 'compare',
        title: { en: 'Router vs *pairing*', it: 'Router vs *coppia*' },
        left: {
          title: { en: 'Adaptive', it: 'Adaptive' },
          items: [
            { en: 'One model per request — the router picks it', it: 'Un modello per richiesta: lo sceglie il router' },
            { en: 'Simple prompts go to fast models, hard ones to frontier', it: 'Prompt semplici ai modelli veloci, quelli duri alla frontier' },
            { en: 'Fixed per-token rate, whichever model answers', it: 'Tariffa per token fissa, qualunque modello risponda' },
            { en: 'Off by default for enterprise — admin enables it', it: 'Per le enterprise è spento: lo attiva un admin' },
          ],
        },
        right: {
          title: { en: 'Fusion', it: 'Fusion' },
          items: [
            { en: 'Two models at once: frontier lead + cheap sidekick', it: 'Due modelli insieme: lead frontier + sidekick economico' },
            { en: 'The lead plans and reviews; the sidekick implements', it: 'Il lead pianifica e revisiona; lo sidekick implementa' },
            { en: 'Each model bills at its own rate', it: 'Ogni modello fattura alla sua tariffa' },
            { en: 'Recommended pairing: Fable 5.1 lead + SWE-2 sidekick', it: 'Coppia consigliata: Fable 5.1 lead + SWE-2 sidekick' },
          ],
        },
      },
      notes: {
        en: 'Fusion needs CLI 3000.10.20+ or Desktop 3.10.0+ on a paid plan; not on legacy credit billing.',
        it: 'Fusion richiede CLI 3000.10.20+ o Desktop 3.10.0+ con piano a pagamento; non su billing a crediti legacy.',
      },
    },
    {
      id: 'models-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Model *hygiene*', it: 'Igiene dei *modelli*' },
        icon: 'Brain',
        items: [
          { en: 'Short names (opus, sonnet, swe, codex, gemini) always resolve to the latest', it: 'I nomi brevi (opus, sonnet, swe, codex, gemini) puntano sempre all’ultima versione' },
          { en: '/model with no argument opens the picker; Alt+T cycles thinking level', it: '/model senza argomenti apre il picker; Alt+T cambia il livello di thinking' },
          { en: 'Set a default in ~/.config/devin/config.json', it: 'Il default si imposta in ~/.config/devin/config.json' },
          { en: '/session-stats shows tokens, cost by model, Fusion savings', it: '/session-stats mostra token, costo per modello e risparmio Fusion' },
          { en: 'Judge models by price per task, not price per token', it: 'Valuta i modelli sul costo per task, non per token' },
        ],
      },
      notes: {
        en: 'Latest models from Anthropic, OpenAI, Google and Cognition land within minutes of launch.',
        it: 'I nuovi modelli di Anthropic, OpenAI, Google e Cognition arrivano a pochi minuti dal lancio.',
      },
    },
    {
      id: 'fusion-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a *senior* engineer who writes the plan and reviews the diff — and a fast junior who types it.',
          it: 'un *senior* che scrive il piano e revisiona la diff — e un junior velocissimo che la digita.',
        },
        icon: 'Users',
      },
      notes: {
        en: 'That is literally the architecture: lead owns plan and review, sidekick does the mechanical work.',
        it: 'È letteralmente l’architettura: il lead possiede piano e review, lo sidekick fa il lavoro meccanico.',
      },
    },
  ],
};

export default mod;
