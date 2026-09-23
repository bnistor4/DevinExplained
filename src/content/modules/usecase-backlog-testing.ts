import type { Module } from '../schema';

const mod: Module = {
  id: 'usecase-backlog-testing',
  category: 'use-cases',
  icon: 'ListTodo',
  title: { en: 'Backlogs & test coverage', it: 'Backlog e test coverage' },
  summary: {
    en: 'Issue triage at scale, plus tests written in your suite’s own style.',
    it: 'Triage delle issue a scala, più test scritti nello stile della tua suite.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/use-cases/examples/clear-engineering-backlogs',
    'https://docs.devin.ai/use-cases/testing-refactoring',
    'https://docs.devin.ai/use-cases/tutorials/code-coverage',
  ],
  slides: [
    {
      id: 'backlog-bullets',
      block: {
        type: 'bullets',
        title: { en: 'The backlog is a *queue*, not a graveyard', it: 'Il backlog è una *coda*, non un cimitero' },
        icon: 'ListTodo',
        items: [
          { en: 'Tag Devin on a GitHub issue to kick off a session', it: 'Tagga Devin su una issue GitHub per avviare una sessione' },
          { en: 'A workflow file like devin-on-label.yml wires label → session', it: 'Un workflow tipo devin-on-label.yml collega label → sessione' },
          { en: 'Works across GitHub, Jira and Linear backlogs', it: 'Funziona su backlog GitHub, Jira e Linear' },
          { en: 'Humans review PRs; the queue drains itself', it: 'Gli umani fanno review delle PR; la coda si svuota da sola' },
        ],
      },
      notes: {
        en: 'The clear-engineering-backlogs page ships a ready-made GitHub Actions workflow you can copy.',
        it: 'La pagina clear-engineering-backlogs fornisce un workflow GitHub Actions pronto da copiare.',
      },
    },
    {
      id: 'coverage-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Coverage for the *unloved* paths', it: 'Coverage per i percorsi *trascurati*' },
        icon: 'TestTube',
        items: [
          { en: 'Teams test critical paths first: everything else stays uncovered', it: 'I team testano prima i percorsi critici: il resto resta scoperto' },
          { en: 'Devin reads your suite’s style and extends it', it: 'Devin legge lo stile della tua suite e la estende' },
          { en: 'Walkthrough: baseline coverage → new tests → PR with the report', it: 'Walkthrough: baseline di coverage → test nuovi → PR con il report' },
          { en: 'Also: refactors that don’t break behavior, perf improvements', it: 'Anche: refactor che non rompono il comportamento, miglioramenti di perf' },
        ],
      },
      notes: {
        en: 'The code-coverage tutorial walks a RealWorld Express+Prisma app end to end: session link included.',
        it: 'Il tutorial code-coverage segue un’app RealWorld Express+Prisma dall’inizio alla fine, con link alla sessione.',
      },
    },
    {
      id: 'backlog-quote',
      block: {
        type: 'quote',
        text: {
          en: 'Hand off a small refactor you spot while coding, and keep working on your main task while Devin opens a PR.',
          it: 'Passa a Devin il refactor che noti mentre codi, e continua sul tuo task mentre lui apre la PR.',
        },
        author: 'Tutorial library',
        role: { en: 'docs.devin.ai', it: 'docs.devin.ai' },
      },
      notes: {
        en: 'This is the habit to instill: backlog hygiene as a side effect of normal work.',
        it: 'Questa è l’abitudine da instillare: igiene del backlog come effetto collaterale del lavoro normale.',
      },
    },
  ],
};

export default mod;
