import type { Module } from '../schema';

const mod: Module = {
  id: 'usecase-migrations',
  category: 'use-cases',
  icon: 'ArrowRightLeft',
  title: { en: 'Migrations & modernization', it: 'Migrazioni e modernizzazione' },
  summary: {
    en: 'The bread and butter: version bumps, language ports, database moves, at scale.',
    it: 'Il pane quotidiano: upgrade di versione, port di linguaggio, cambi di database, a scala.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/use-cases/migration-modernization',
    'https://docs.devin.ai/use-cases/examples/java-upgrades',
    'https://docs.devin.ai/use-cases/examples/cobol-modernization',
    'https://docs.devin.ai/use-cases/examples/javascript-to-typescript',
    'https://docs.devin.ai/use-cases/examples/sas-to-pyspark',
    'https://docs.devin.ai/use-cases/examples/nosql-to-sql',
  ],
  slides: [
    {
      id: 'migrations-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Five migrations Devin *eats*', it: 'Cinque migrazioni che Devin *divora*' },
        cards: [
          {
            icon: 'Coffee',
            title: { en: 'Java upgrades', it: 'Upgrade Java' },
            text: {
              en: 'Java 8→11→17+: modules, removed APIs, GC changes, new HTTP client.',
              it: 'Java 8→11→17+: moduli, API rimosse, cambi di GC, nuovo HTTP client.',
            },
          },
          {
            icon: 'Landmark',
            title: { en: 'COBOL → modern', it: 'COBOL → moderno' },
            text: {
              en: 'Analyzes business logic and reimplements it in Java, Python, C# or microservices.',
              it: 'Analizza la business logic e la reimplementa in Java, Python, C# o microservizi.',
            },
          },
          {
            icon: 'FileCode',
            title: { en: 'JS → TypeScript', it: 'JS → TypeScript' },
            text: {
              en: 'Systematic type annotations and error resolution across whole codebases.',
              it: 'Annotazioni di tipo sistematiche e risoluzione degli errori su interi codebase.',
            },
          },
          {
            icon: 'ChartColumn',
            title: { en: 'SAS → PySpark', it: 'SAS → PySpark' },
            text: {
              en: 'Analytics workflows to cloud-scale data processing, or BigQuery/Snowflake.',
              it: 'Workflow di analytics su data processing cloud, o BigQuery/Snowflake.',
            },
          },
          {
            icon: 'Database',
            title: { en: 'NoSQL → SQL', it: 'NoSQL → SQL' },
            text: {
              en: 'Schema design, data transformation and query refactoring: MongoDB to Postgres, DynamoDB to MySQL.',
              it: 'Schema design, trasformazione dati e refactor delle query, da MongoDB a Postgres, da DynamoDB a MySQL.',
            },
          },
        ],
      },
      notes: {
        en: 'Every card is a docs page with an example video. Nubank’s SAS→PySpark story is the flagship case study.',
        it: 'Ogni card è una pagina dei docs con video d’esempio. La storia SAS→PySpark di Nubank è il case study di punta.',
      },
    },
    {
      id: 'migrations-why',
      block: {
        type: 'bullets',
        title: { en: 'Why migrations are the *sweet spot*', it: 'Perché le migrazioni sono il *punto dolce*' },
        icon: 'ArrowRightLeft',
        items: [
          { en: 'Isolated, repetitive, verifiable subtasks: the ideal Devin shape', it: 'Sotto-task isolati, ripetitivi, verificabili: la forma ideale per Devin' },
          { en: 'Playbooks make one migration recipe reusable across hundreds of repos', it: 'I playbook rendono una ricetta riusabile su centinaia di repo' },
          { en: 'COBOL is where “junior task” meets “nobody wants to do it”', it: 'Il COBOL è dove “task da junior” incontra “nessuno vuole farlo”' },
          { en: 'Also: framework upgrades, dependency updates, architecture modernization', it: 'Anche: upgrade di framework, update di dipendenze, modernizzazione' },
        ],
      },
      notes: {
        en: 'Tie back to the wide-and-shallow rule: migrations are the canonical horizontally-scalable workload.',
        it: 'Ricollegati alla regola wide-and-shallow: le migrazioni sono il carico scalabile orizzontalmente per eccellenza.',
      },
      funAside: {
        en: 'COBOL devs are retiring faster than the code. Devin doesn’t retire.',
        it: 'Gli sviluppatori COBOL vanno in pensione più in fretta del codice. Devin non va in pensione.',
      },
    },
    {
      id: 'mig-howto',
      block: {
        type: 'bullets',
        title: { en: 'How a migration *project* runs', it: 'Come gira un *progetto* di migrazione' },
        icon: 'Map',
        items: [
          { en: 'Set up tracking in Linear or Jira first', it: 'Prepara il tracking su Linear o Jira' },
          { en: 'Start with 10–20 scoped tickets on non-critical code', it: 'Parti con 10–20 ticket delimitati su codice non critico' },
          { en: 'Track in a dashboard; Knowledge captures what works', it: 'Monitora con una dashboard; Knowledge fissa ciò che funziona' },
          { en: 'Assign each ticket a human owner for review', it: 'Assegna ogni ticket a un owner umano per la review' },
          { en: 'Tightening scope improves quality more than bigger tickets', it: 'Restringere lo scope migliora la qualità più che allargare i ticket' },
        ],
      },
      notes: {
        en: 'Straight from the migration-modernization guide: including the COBOL JCL preprocessor caveat.',
        it: 'Preso dalla guida migration-modernization: incluso il caveat sul preprocessore JCL per COBOL.',
      },
    },
  ],
};

export default mod;
