import type { Module } from '../schema';

const mod: Module = {
  id: 'intro-three-hour-rule',
  category: 'intro',
  icon: 'Zap',
  title: { en: 'Where Devin shines', it: 'Dove Devin dà il meglio' },
  summary: {
    en: 'The four kinds of tasks where Devin excels, and how to prompt it for the best results.',
    it: 'I quattro tipi di compiti in cui Devin eccelle, e come scrivere prompt per ottenere il meglio.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/get-started/devin-intro'],
  slides: [
    {
      id: 'devin-strengths',
      block: {
        type: 'cards',
        title: { en: 'Where Devin *shines*', it: 'Dove Devin dà il *meglio*' },
        cards: [
          {
            icon: 'Layers',
            title: { en: 'Many tasks in parallel', it: 'Tanti compiti in parallelo' },
            text: {
              en: 'Tickets, features, bug reports and tests — done before they pile up in the backlog.',
              it: 'Ticket, feature, bug report e test — chiusi prima che si accumulino nel backlog.',
            },
          },
          {
            icon: 'RefreshCcw',
            title: { en: 'Migrations & modernization', it: 'Migrazioni e modernizzazione' },
            text: {
              en: 'Language migrations, framework upgrades, monorepo splits, stale feature-flag cleanup.',
              it: 'Migrazioni di linguaggio, upgrade di framework, divisione di monorepo, pulizia dei feature flag.',
            },
          },
          {
            icon: 'Repeat',
            title: { en: 'Repetitive engineering work', it: 'Lavoro ripetitivo' },
            text: {
              en: 'PR reviews, codebase Q&A, unit tests, keeping documentation up to date.',
              it: 'Review di PR, domande sul codebase, unit test, documentazione sempre aggiornata.',
            },
          },
          {
            icon: 'Handshake',
            title: { en: 'Customer engineering', it: 'Customer engineering' },
            text: {
              en: 'Integrations with unfamiliar APIs, custom demos, prototypes, internal tools.',
              it: 'Integrazioni con API nuove, demo su misura, prototipi, strumenti interni.',
            },
          },
        ],
      },
      notes: {
        en: 'These four categories come straight from the Devin intro doc — they map to where agent work compounds fastest.',
        it: 'Queste quattro categorie vengono dalla doc introduttiva di Devin: sono dove il lavoro agentico rende di più.',
      },
      funAside: {
        en: 'Basically: all the tickets you keep postponing.',
        it: 'In pratica: tutti i ticket che continui a rimandare.',
      },
    },
    {
      id: 'best-results',
      block: {
        type: 'bullets',
        title: { en: 'How to get the *best* results', it: 'Come ottenere i *risultati migliori*' },
        icon: 'ListChecks',
        items: [
          {
            en: 'Write clear prompts with explicit completion criteria',
            it: 'Scrivi prompt chiari, con criteri di completamento espliciti',
          },
          {
            en: 'Make tasks easy to verify — green CI, a deploy to test',
            it: 'Rendi i compiti facili da verificare: CI verde, una deploy da testare',
          },
          {
            en: 'Break hard tasks into well-scoped steps, with context and examples',
            it: 'Spezza i compiti difficili in passi ben definiti, con contesto ed esempi',
          },
          {
            en: 'Tag Devin in a Slack or Teams thread while you discuss a bug',
            it: 'Tagga Devin in un thread Slack o Teams mentre discutete di un bug',
          },
          {
            en: 'Delegate from the web app, then take over in the IDE when needed',
            it: "Delega dalla web app, poi subentra nell'IDE quando serve",
          },
          {
            en: 'Run Devin CLI locally — /handoff sends long tasks to cloud Devin',
            it: 'Usa Devin CLI in locale: con /handoff i compiti lunghi passano al cloud',
          },
        ],
      },
      notes: {
        en: 'The most successful workflows make Devin part of the team and the existing workflow.',
        it: 'I workflow più efficaci rendono Devin parte del team e del flusso di lavoro esistente.',
      },
    },
    {
      id: 'parallel-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'having *five* extra teammates who never sleep — and actually read the ticket.',
          it: 'avere *cinque* colleghi in più che non dormono mai — e leggono davvero il ticket.',
        },
        emoji: '🎟️',
      },
      notes: {
        en: 'Parallelism is the multiplier: several scoped sessions at once beat one mega-prompt.',
        it: 'Il parallelismo è il moltiplicatore: tante sessioni piccole battono un mega-prompt.',
      },
    },
  ],
};

export default mod;
