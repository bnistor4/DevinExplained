import type { Module } from '../schema';

const mod: Module = {
  id: 'history-timeline',
  category: 'history',
  icon: 'Timeline',
  title: { en: 'From demo to Series E', it: 'Dalla demo al Series E' },
  summary: {
    en: "A two-year sprint: Devin's announcement, GA, the Windsurf acquisition, self-serve plans and a $48B valuation.",
    it: "Due anni di corsa: l'annuncio di Devin, la GA, l'acquisizione di Windsurf, i piani self-serve e una valutazione da 48 miliardi.",
  },
  durationMin: 4,
  sources: ['https://cognition.ai/blog'],
  slides: [
    {
      id: 'devin-timeline',
      block: {
        type: 'timeline',
        title: { en: 'A *fast* two years', it: 'Due anni *velocissimi*' },
        events: [
          {
            date: '03.2024',
            title: { en: 'Devin unveiled', it: 'Devin viene presentato' },
            text: { en: 'Cognition shows the first demo', it: 'Cognition mostra la prima demo' },
          },
          {
            date: '12.2024',
            title: { en: 'Generally available', it: 'Disponibile per tutti' },
            text: { en: 'Devin reaches GA for teams', it: 'Devin arriva in GA per i team' },
          },
          {
            date: '07.2025',
            title: { en: 'Windsurf joins Cognition', it: 'Windsurf entra in Cognition' },
            text: { en: 'Cognition acquires Windsurf', it: 'Cognition acquisisce Windsurf' },
          },
          {
            date: '04.2026',
            title: { en: 'Self-serve plans + Devin CLI', it: 'Piani self-serve e Devin CLI' },
            text: {
              en: 'Free, Pro, Max, Teams, and a CLI to start local, hand off to the cloud',
              it: 'Free, Pro, Max, Teams, e una CLI per partire in locale e passare al cloud',
            },
          },
          {
            date: '05.2026',
            title: { en: 'Windows & Android', it: 'Windows e Android' },
            text: {
              en: 'Devin gets its own Windows VM and Android emulators',
              it: 'Devin ottiene VM Windows ed emulatori Android',
            },
          },
          {
            date: '06.2026',
            title: { en: 'Devin Desktop', it: 'Devin Desktop' },
            text: { en: 'Windsurf becomes Devin Desktop', it: 'Windsurf diventa Devin Desktop' },
          },
        ],
      },
      notes: {
        en: 'From first demo to GA took nine months. Then the pace only went up.',
        it: 'Dalla prima demo alla GA sono passati nove mesi. Poi il ritmo è solo aumentato.',
      },
    },
    {
      id: 'devin-timeline-2026',
      block: {
        type: 'timeline',
        title: { en: '2026: the *agent* era', it: 'Il 2026: l’era degli *agenti*' },
        events: [
          {
            date: '07.2026',
            title: { en: 'Security Swarm', it: 'Security Swarm' },
            text: {
              en: 'Devin finds, validates and fixes vulnerabilities',
              it: 'Devin trova, valida e corregge le vulnerabilità',
            },
          },
          {
            date: '07.2026',
            title: { en: 'FedRAMP High In-Process', it: 'FedRAMP High In-Process' },
            text: {
              en: 'The platform enters the federal authorization track',
              it: 'La piattaforma entra nel percorso di autorizzazione federale',
            },
          },
          {
            date: '09.2026',
            title: { en: 'SWE-2 & Fusion', it: 'SWE-2 e Fusion' },
            text: {
              en: 'A multi-trillion-parameter RL model and a lead+sidekick harness',
              it: 'Un modello RL multi-trilione di parametri e un harness lead+sidekick',
            },
          },
          {
            date: '09.2026',
            title: { en: 'AWS collaboration', it: 'Collaborazione AWS' },
            text: {
              en: 'Multi-year Strategic Collaboration Agreement',
              it: 'Accordo di collaborazione strategica pluriennale',
            },
          },
          {
            date: '09.2026',
            title: { en: 'Series E', it: 'Series E' },
            text: {
              en: '>$2B raised at a $48B valuation (a16z, Accel)',
              it: 'Oltre 2 miliardi raccolti, valutazione di 48 miliardi (a16z, Accel)',
            },
          },
        ],
      },
      notes: {
        en: 'In one summer: security product, federal track, new model, new harness, AWS deal, Series E.',
        it: 'In un’estate: prodotto di sicurezza, percorso federale, nuovo modello, nuovo harness, accordo AWS, Series E.',
      },
    },
    {
      id: 'cognition-numbers',
      band: 'dark',
      block: {
        type: 'stats',
        title: { en: 'Cognition in *numbers*', it: 'Cognition in *numeri*' },
        stats: [
          { value: '$48B', label: { en: 'valuation', it: 'valutazione' } },
          { value: '$2B+', label: { en: 'raised in the Series E round', it: 'raccolti col round Series E' } },
          { value: '350', label: { en: 'people, up from 44 a year before', it: 'persone, erano 44 un anno prima' } },
        ],
      },
      notes: {
        en: 'Team headcount and revenue run rate are from the “One Year of Building Together” post.',
        it: 'Numero di persone e fatturato dal post “One Year of Building Together”.',
      },
      funAside: {
        en: 'From first demo to Series E in about 30 months. Not bad for an otter.',
        it: 'Dalla prima demo al Series E in circa 30 mesi. Niente male per una lontra.',
      },
    },
  ],
};

export default mod;
