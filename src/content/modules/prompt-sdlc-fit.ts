import type { Module } from '../schema';

const mod: Module = {
  id: 'prompt-sdlc-fit',
  category: 'prompting',
  icon: 'Workflow',
  title: { en: 'Devin inside your SDLC', it: 'Devin dentro il tuo SDLC' },
  summary: {
    en: 'Plan → code → test → review → deploy: Devin plugs into every stage, and obeys your branch protections.',
    it: 'Plan → code → test → review → deploy: Devin si inserisce in ogni fase e rispetta le tue branch protection.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/essential-guidelines/sdlc-integration',
    'https://docs.devin.ai/use-cases/best-practices',
  ],
  slides: [
    {
      id: 'sdlc-stats',
      band: 'dark',
      block: {
        type: 'stats',
        title: { en: 'Coding is the *small* part', it: 'Scrivere codice è la parte *piccola*' },
        stats: [
          { value: '<20%', label: { en: 'of engineer time spent writing code', it: 'del tempo degli sviluppatori passato a scrivere codice' } },
          { value: '8x', label: { en: 'human time saved on a multi-million-line ETL migration', it: 'di tempo umano risparmiato su una migrazione ETL multi-milione di righe' } },
          { value: '1.5–2x', label: { en: 'typical coverage increase: often reaching 90%+', it: 'aumento tipico di coverage: spesso oltre il 90%' } },
        ],
      },
      notes: {
        en: 'The <20% figure is cited from Code Time Report + Microsoft Research; 8x and 1.5–2x are customer results in the SDLC doc.',
        it: 'Il <20% è citato da Code Time Report e Microsoft Research; 8x e 1,5–2x sono risultati di clienti nella doc SDLC.',
      },
    },
    {
      id: 'sdlc-pipeline',
      block: {
        type: 'timeline',
        title: { en: 'Devin at *every* stage', it: 'Devin in *ogni* fase' },
        events: [
          {
            date: 'PLAN',
            title: { en: 'Understand & scope', it: 'Comprendi e delimita' },
            text: { en: 'DeepWiki + Ask Devin; ticket analysis with confidence scores', it: 'DeepWiki + Ask Devin; analisi dei ticket con confidence score' },
          },
          {
            date: 'CODE',
            title: { en: 'Delegate async', it: 'Delega in asincrono' },
            text: { en: 'Parallel sessions, PRs that follow your conventions', it: 'Sessioni parallele, PR che seguono le tue convenzioni' },
          },
          {
            date: 'TEST',
            title: { en: 'Self-driven loops', it: 'Loop autonomi' },
            text: { en: 'Writes tests from playbooks, runs suites and lint before the PR', it: 'Scrive test dai playbook, gira suite e lint prima della PR' },
          },
          {
            date: 'REVIEW',
            title: { en: 'Same rules as humans', it: 'Stesse regole degli umani' },
            text: { en: 'Branch protections apply; humans review before merge', it: 'Valgono le branch protection; gli umani fanno review prima del merge' },
          },
        ],
      },
      notes: {
        en: 'Key phrase for procurement-minded audiences: “subject to the exact same branch protections and SDLC policies as any human engineer.”',
        it: 'Frase chiave per chi bada alla compliance: “soggetto alle stesse branch protection e policy SDLC di qualsiasi ingegnere umano”.',
      },
    },
    {
      id: 'sdlc-slice',
      block: {
        type: 'bullets',
        title: { en: 'Slice *wide and shallow*', it: 'Taglia *largo e basso*' },
        icon: 'Scissors',
        items: [
          { en: 'Best projects: high-value work splittable into isolated, repetitive subtasks', it: 'Progetti migliori: lavoro di valore spezzabile in sotto-task isolati e ripetitivi' },
          { en: 'Ideal slices: junior-level, backwards-compatible, objectively verifiable', it: 'Slice ideali: livello junior, retrocompatibili, verificabili oggettivamente' },
          { en: 'Net-new complex features scale worse: “tall & deep”', it: 'Feature complesse da zero scalano peggio: “tall & deep”' },
          { en: 'A backlog of small tasks × thousands of iterations = the ROI pattern', it: 'Un backlog di task piccoli × migliaia di iterazioni = il pattern di ROI' },
        ],
      },
      notes: {
        en: 'The docs’ example: resolving SonarQube issues, a wide & shallow backlog that scales.',
        it: 'L’esempio dei docs: risolvere issue SonarQube, un backlog “wide & shallow” che scala.',
      },
    },
  ],
};

export default mod;
