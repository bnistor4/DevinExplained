import type { Module } from '../schema';

const mod: Module = {
  id: 'product-deployments-handoff',
  category: 'products',
  icon: 'Rocket',
  title: { en: 'Deployments & handoff', it: 'Deployment e handoff' },
  summary: {
    en: 'Prototypes on devinapps.com in one click — and /handoff sends any task to a cloud VM.',
    it: 'Prototipi su devinapps.com in un click — e /handoff manda qualsiasi task su una VM cloud.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/product-guides/deployment-capabilities',
    'https://docs.devin.ai/work-with-devin/devin-handoff',
    'https://docs.devin.ai/cli/handoff',
  ],
  slides: [
    {
      id: 'deploy-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Two *different* kinds of deploy', it: 'Due tipi *diversi* di deploy' },
        icon: 'Rocket',
        items: [
          { en: 'Normal work ships through your PR → review → merge → CI/CD', it: 'Il lavoro normale passa da PR → review → merge → CI/CD' },
          { en: 'Hosted deploys are for small standalone apps: prototypes, demos, tools', it: 'I deploy hosted sono per app standalone piccole: prototipi, demo, tool' },
          { en: 'Static frontends go to <name>.devinapps.com; FastAPI backends to Fly.io', it: 'Frontend statici su <nome>.devinapps.com; backend FastAPI su Fly.io' },
          { en: 'Every deploy needs your explicit approve — it’s public internet', it: 'Ogni deploy richiede il tuo approve esplicito: è internet pubblica' },
          { en: 'Enterprise orgs: hosted deploys off — deploy on your own infra', it: 'Org enterprise: deploy hosted spenti — si deploya sulla propria infrastruttura' },
        ],
      },
      notes: {
        en: 'When Devin pushes to your Vercel/AWS/pipeline, that’s your tooling with your credentials — not a hosted deploy.',
        it: 'Quando Devin pusha sul tuo Vercel/AWS/pipeline sta usando i tuoi strumenti con le tue credenziali: non è un deploy hosted.',
      },
    },
    {
      id: 'handoff-code',
      block: {
        type: 'code',
        title: { en: '*/handoff* — one word', it: '*/handoff* — una parola' },
        language: 'text',
        code: '/handoff fix the flaky integration tests in CI',
        caption: {
          en: 'Packages the conversation + git branch + uncommitted diff into a cloud session.',
          it: 'Impacchetta conversazione + branch git + diff non committato in una sessione cloud.',
        },
      },
      notes: {
        en: '/handoff with no description continues the session in the cloud. Works from other agents too via the open-source devin-handoff plugin.',
        it: '/handoff senza descrizione continua la sessione nel cloud. Funziona anche da altri agenti con il plugin open-source devin-handoff.',
      },
    },
    {
      id: 'handoff-when',
      block: {
        type: 'bullets',
        title: { en: 'When to *let go*', it: 'Quando *lasciare andare*' },
        icon: 'Cloud',
        items: [
          { en: 'Needs a server: dev servers, endpoints, Docker builds', it: 'Serve un server: dev server, endpoint, build Docker' },
          { en: 'Needs a browser: screenshots, OAuth flows, e2e tests', it: 'Serve un browser: screenshot, flussi OAuth, test e2e' },
          { en: 'Runs long: migrations, batch jobs, big refactors', it: 'Dura tanto: migrazioni, batch job, refactor grossi' },
          { en: 'Or you just want parallelism — cloud works while you keep coding', it: 'O semplicemente vuoi parallelismo: il cloud lavora mentre tu continui' },
        ],
      },
      notes: {
        en: 'The cloud session gets its own VM with shell, browser and full repo access — it survives your laptop closing.',
        it: 'La sessione cloud ha la sua VM con shell, browser e accesso completo alle repo: sopravvive alla chiusura del laptop.',
      },
    },
  ],
};

export default mod;
