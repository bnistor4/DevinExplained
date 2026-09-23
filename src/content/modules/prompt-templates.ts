import type { Module } from '../schema';

const mod: Module = {
  id: 'prompt-templates',
  category: 'prompting',
  icon: 'LayoutTemplate',
  title: { en: 'The prompt cheat sheet', it: 'La cheat sheet dei prompt' },
  summary: {
    en: 'Fill-in-the-brackets templates for bugs, production issues and features: verbatim from the docs.',
    it: 'Template da compilare per bug, incidenti e feature: presi pari pari dai docs.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/essential-guidelines/prompt-templates-cheat-sheet'],
  slides: [
    {
      id: 'tpl-bug',
      block: {
        type: 'code',
        title: { en: 'Template: *bug fix*', it: 'Template: *fix di un bug*' },
        language: 'text',
        code: 'Fix the bug where [describe the bug behavior].\n\nSteps to reproduce:\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n\nExpected: [what should happen]\nActual:   [what actually happens]\n\nPlease:\n1. Investigate the root cause in [file/directory]\n2. Implement a fix that addresses the root cause\n3. Add a regression test\n4. Run the existing test suite',
        caption: {
          en: 'Structure: symptom → repro → expected/actual → investigate → fix → regression test.',
          it: 'Struttura: sintomo → riproduzione → atteso/attuale → indaga → fix → test di regressione.',
        },
      },
      notes: {
        en: 'Notice the last two steps: fix the root cause, then prove it stays fixed.',
        it: 'Nota gli ultimi due passi: fixare la causa, poi dimostrare che resta fixata.',
      },
    },
    {
      id: 'tpl-prod',
      block: {
        type: 'code',
        title: { en: 'Template: *production issue*', it: 'Template: *incidente in produzione*' },
        language: 'text',
        code: 'Users are reporting [describe the issue] in production.\n\nPlease:\n1. Use the [Sentry/DataDog] MCP to pull recent\n   error logs and stack traces\n2. Identify the root cause\n3. Implement a fix\n4. Add error handling to prevent similar issues\n5. Create a regression test\n6. Link the monitoring/alert in the PR description',
        caption: {
          en: 'Hooks straight into your observability stack via MCP.',
          it: 'Si aggancia direttamente al tuo stack di osservabilità via MCP.',
        },
      },
      notes: {
        en: 'Step 6 is underrated: the PR links back to the alert that started it.',
        it: 'Il passo 6 è sottovalutato: la PR rimanda all’alert da cui tutto è partito.',
      },
    },
    {
      id: 'tpl-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Why templates *work*', it: 'Perché i template *funzionano*' },
        icon: 'LayoutTemplate',
        items: [
          { en: 'Every [bracket] is a decision you make, not Devin', it: 'Ogni [parentesi] è una decisione che prendi tu, non Devin' },
          { en: 'They force repro, root cause and regression test every time', it: 'Forzano riproduzione, causa radice e test di regressione ogni volta' },
          { en: 'More in the docs: features, refactors, reviews, migrations', it: 'Altri nei docs: feature, refactor, review, migrazioni' },
          { en: 'Save your org’s best ones as playbooks with a !macro', it: 'Salva i migliori come playbook con una !macro' },
        ],
      },
      notes: {
        en: 'The cheat sheet has a dozen templates: point people at it, then graduate them to org playbooks.',
        it: 'La cheat sheet ha una dozzina di template: indicala, poi fai laureare la gente ai playbook dell’org.',
      },
    },
  ],
};

export default mod;
