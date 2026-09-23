import type { Module } from '../schema';

const mod: Module = {
  id: 'usecase-data-scraping-apps',
  category: 'use-cases',
  icon: 'Globe',
  title: { en: 'Data, scraping, little apps', it: 'Dati, scraping, app al volo' },
  summary: {
    en: 'Jupyter notebooks, web research, MVPs: the chores between “real” work.',
    it: 'Notebook Jupyter, ricerca web, MVP: le faccende tra un lavoro “vero” e l’altro.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/use-cases/data-analysis',
    'https://docs.devin.ai/use-cases/web-scraping',
    'https://docs.devin.ai/use-cases/interactive-applications',
    'https://docs.devin.ai/use-cases/tutorials/api-integration',
    'https://docs.devin.ai/use-cases/tutorials/frontend-components',
    'https://docs.devin.ai/use-cases/tutorials/containerization',
    'https://docs.devin.ai/use-cases/tutorials/mcp-use-cases',
    'https://docs.devin.ai/tutorial-library/ios-app',
  ],
  slides: [
    {
      id: 'chores-cards',
      block: {
        type: 'cards',
        title: { en: 'The *chores* between real work', it: 'Le *faccende* tra un lavoro e l’altro' },
        cards: [
          {
            icon: 'ChartLine',
            title: { en: 'Data & analysis', it: 'Dati e analisi' },
            text: {
              en: 'Jupyter notebooks, custom visualizations, time series, financial data.',
              it: 'Notebook Jupyter, visualizzazioni custom, serie temporali, dati finanziari.',
            },
          },
          {
            icon: 'Globe',
            title: { en: 'Web scraping', it: 'Web scraping' },
            text: {
              en: 'Scrapers, extraction pipelines, browser automation: static and dynamic pages.',
              it: 'Scraper, pipeline di estrazione, automazione browser: pagine statiche e dinamiche.',
            },
          },
          {
            icon: 'AppWindow',
            title: { en: 'Interactive apps', it: 'App interattive' },
            text: {
              en: 'Frontend bugs, edge cases, quick MVPs: “pressing enter submits the filter”.',
              it: 'Bug di frontend, edge case, MVP rapidi: “premendo invio parte il filtro”.',
            },
          },
          {
            icon: 'Smartphone',
            title: { en: 'Even iOS', it: 'Anche iOS' },
            text: {
              en: 'Build and test a SwiftUI app in the simulator, ship to TestFlight.',
              it: 'Build e test di un’app SwiftUI nel simulatore, consegna su TestFlight.',
            },
          },
        ],
      },
      notes: {
        en: 'The tutorial library also covers API integration, frontend components, containerization and MCP patterns.',
        it: 'La tutorial library copre anche integrazione API, componenti frontend, containerizzazione e pattern MCP.',
      },
    },
    {
      id: 'chores-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Why these tasks are *perfect*', it: 'Perché questi task sono *perfetti*' },
        icon: 'Lightbulb',
        items: [
          { en: 'Self-contained: clear input, clear output, verifiable result', it: 'Autocontenuti: input chiaro, output chiaro, risultato verificabile' },
          { en: '“Tireless” is the docs’ own word: scraping doesn’t bore it', it: '“Instancabile” è la parola dei docs: lo scraping non lo annoia' },
          { en: 'Scraped data lands in structured formats, ready to use', it: 'I dati raccolti arrivano in formati strutturati, pronti all’uso' },
          { en: 'Prototypes can go live on devinapps.com with an approval', it: 'I prototipi possono andare live su devinapps.com con un’approvazione' },
        ],
      },
      notes: {
        en: 'The docs call Devin “your tireless web scraping assistant”, word for word.',
        it: 'I docs lo chiamano proprio così: “il tuo instancabile assistente di web scraping”.',
      },
      funAside: {
        en: 'There’s a demo where Devin scrapes emoji. Science advances in mysterious ways.',
        it: 'C’è una demo in cui Devin scrapa emoji. La scienza avanza in modi misteriosi.',
      },
    },
    {
      id: 'data-tips',
      block: {
        type: 'bullets',
        title: { en: 'Field *notes*', it: 'Appunti dal *campo*' },
        icon: 'Lightbulb',
        items: [
          { en: 'Attach CSVs or JSON straight into the prompt: no parsing setup needed', it: 'Allega CSV o JSON direttamente nel prompt: nessun setup di parsing' },
          { en: 'Ask Devin to save results as files you can download', it: 'Chiedi a Devin di salvare i risultati in file scaricabili' },
          { en: 'Point Devin’s browser at the page you want scraped: no devtools needed', it: 'Punta il browser di Devin sulla pagina da raschiare: niente devtools' },
          { en: 'Reference the iOS SwiftUI template repo to start mobile apps fast', it: 'Usa la repo template iOS SwiftUI per partire veloce sul mobile' },
        ],
      },
      notes: {
        en: 'Testing an app? “Try it with Playwright and show me screenshots” is the phrase that works.',
        it: 'Per testare un’app: “provala con Playwright e fammi vedere gli screenshot” è la frase che funziona.',
      },
    },
  ],
};

export default mod;
