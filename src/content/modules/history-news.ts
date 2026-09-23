import type { Module } from '../schema';

const mod: Module = {
  id: 'history-news',
  category: 'history',
  icon: 'Newspaper',
  title: { en: 'Recent news', it: 'Ultime notizie' },
  summary: {
    en: 'What shipped most recently on cognition.ai/blog: models, funding, partnerships.',
    it: 'Le ultime uscite su cognition.ai/blog: modelli, funding, partnership.',
  },
  durationMin: 3,
  sources: ['https://cognition.ai/blog'],
  slides: [
    {
      id: 'latest-posts',
      block: {
        type: 'timeline',
        title: { en: 'Fresh off the *blog*', it: 'Appena uscite sul *blog*' },
        events: [
          {
            date: '09.2026',
            title: { en: 'Series E', it: 'Series E' },
            text: { en: '“Do it all with Devin”: over $2B at $48B', it: '“Do it all with Devin”: oltre 2 miliardi a 48 miliardi' },
          },
          {
            date: '09.2026',
            title: { en: 'SWE-2', it: 'SWE-2' },
            text: { en: 'Pushing the Pareto frontier', it: 'Spinge la frontiera di Pareto' },
          },
          {
            date: '09.2026',
            title: { en: 'Fusion in Desktop & CLI', it: 'Fusion in Desktop e CLI' },
            text: { en: 'Lead + sidekick harness', it: 'Harness lead + sidekick' },
          },
          {
            date: '09.2026',
            title: { en: 'AWS strategic collaboration', it: 'Collaborazione strategica AWS' },
            text: { en: 'Multi-year agreement', it: 'Accordo pluriennale' },
          },
          {
            date: '09.2026',
            title: { en: 'Welcoming Dioxus', it: 'Dioxus entra in Cognition' },
            text: { en: 'The Dioxus team joins Cognition', it: 'Il team di Dioxus entra in Cognition' },
          },
          {
            date: '09.2026',
            title: { en: 'Factoring RSA-260', it: 'Fattorizzazione di RSA-260' },
            text: { en: 'A research milestone', it: 'Un risultato di ricerca' },
          },
          {
            date: '09.2026',
            title: { en: 'Devin in São Paulo', it: 'Devin a São Paulo' },
            text: { en: 'Building in Latin America', it: 'Si costruisce anche in America Latina' },
          },
          {
            date: '07.2026',
            title: { en: 'FedRAMP High In-Process', it: 'FedRAMP High In-Process' },
            text: { en: 'Expanding into federal agencies', it: 'Verso le agenzie federali' },
          },
        ],
      },
      notes: {
        en: 'Eight most recent posts on the Cognition blog at the time this module was written.',
        it: 'I otto post più recenti del blog Cognition al momento in cui è stato scritto il modulo.',
      },
    },
    {
      id: 'news-stats',
      band: 'dark',
      block: {
        type: 'stats',
        title: { en: 'The *headlines*', it: 'I *numeri* delle notizie' },
        stats: [
          { value: '$2B+', label: { en: 'raised in Series E', it: 'raccolti col Series E' } },
          { value: '$48B', label: { en: 'valuation', it: 'valutazione' } },
          { value: '39%', label: { en: 'more efficient: Fusion vs other harnesses', it: 'più efficiente: Fusion vs altri harness' } },
        ],
      },
      notes: {
        en: 'Fusion figure: “up to 39% more efficient compared to other model harnesses” across major coding benchmarks.',
        it: 'Dato Fusion: “fino al 39% più efficiente rispetto ad altri harness” sui principali benchmark di coding.',
      },
      funAside: {
        en: 'Busy September.',
        it: 'Settembre intenso.',
      },
    },
    {
      id: 'news-takeaway',
      block: {
        type: 'bullets',
        title: { en: 'What the news *say*', it: 'Cosa *dicono* le notizie' },
        icon: 'Newspaper',
        items: [
          { en: 'Models: SWE-2 keeps pushing the efficiency frontier', it: 'Modelli: SWE-2 continua a spingere la frontiera di efficienza' },
          { en: 'Harnesses: Fusion brings lead+sidekick pairing to Desktop and CLI', it: 'Harness: Fusion porta la coppia lead+sidekick su Desktop e CLI' },
          { en: 'Enterprise trust: FedRAMP High in process, AWS collaboration', it: 'Fiducia enterprise: FedRAMP High in process, collaborazione AWS' },
          { en: 'The blog itself is the pulse: check it before every talk', it: 'Il blog stesso è il polso: controllalo prima di ogni talk' },
        ],
      },
      notes: {
        en: 'These summaries paraphrase the post titles on cognition.com/blog: keep them high level.',
        it: 'Questi riepiloghi parafrasano i titoli dei post su cognition.com/blog: tienili alti.',
      },
    },
  ],
};

export default mod;
