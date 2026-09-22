import type { Module } from '../schema';

const mod: Module = {
  id: 'product-dana-data-analyst',
  category: 'products',
  icon: 'ChartLine',
  title: { en: 'DANA, the data analyst', it: 'DANA, la data analyst' },
  summary: {
    en: 'A Devin variant tuned for SQL, analysis and charts — reach it from the picker or /dana in Slack.',
    it: 'Una variante di Devin ottimizzata per SQL, analisi e grafici — dal picker o con /dana su Slack.',
  },
  durationMin: 3,
  sources: ['https://docs.devin.ai/work-with-devin/data-analyst'],
  slides: [
    {
      id: 'dana-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Devin, but for *data*', it: 'Devin, ma per i *dati*' },
        icon: 'ChartLine',
        items: [
          { en: 'Writes and runs SQL against your connected data sources', it: 'Scrive ed esegue SQL sulle tue fonti dati collegate' },
          { en: 'Explores patterns, calculates metrics, finds anomalies', it: 'Esplora pattern, calcola metriche, trova anomalie' },
          { en: 'Produces charts with seaborn — presentation-ready', it: 'Produce grafici con seaborn — pronti per la slide' },
          { en: 'Web app: agent picker → Mode → Data → Data Analyst', it: 'Web app: agent picker → Mode → Data → Data Analyst' },
          { en: 'Slack: /dana “top 10 customers by revenue last month?”', it: 'Slack: /dana “top 10 clienti per fatturato il mese scorso?”' },
        ],
      },
      notes: {
        en: 'Not on free/trial plans — the Data mode doesn’t appear in the picker there.',
        it: 'Non disponibile su piani free/trial: la modalità Data non compare nel picker.',
      },
      funAside: {
        en: 'The analyst who never says “I’ll get back to you on Friday.”',
        it: 'L’analista che non dice mai “ti faccio sapere venerdì”.',
      },
    },
    {
      id: 'dana-codes',
      block: {
        type: 'code',
        title: { en: 'Straight from *Slack*', it: 'Direttamente da *Slack*' },
        language: 'text',
        code: '/dana What were our top 10 customers\n      by revenue last month?',
        caption: {
          en: 'The /dana slash command starts a Data Analyst session from Slack.',
          it: 'Il comando /dana avvia una sessione Data Analyst da Slack.',
        },
      },
      notes: {
        en: 'Verbatim example from the docs — the answer comes back in the thread.',
        it: 'Esempio preso dai docs: la risposta arriva nel thread.',
      },
    },
    {
      id: 'dana-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a BI analyst who *lives* in Slack — query in, chart out.',
          it: 'un analista BI che *vive* in Slack: entra la query, esce il grafico.',
        },
        icon: 'ChartColumn',
      },
      notes: {
        en: 'DANA is tuned for speed on data questions — it is not the general coding agent.',
        it: 'DANA è ottimizzata per le domande sui dati: non è l’agente di coding generalista.',
      },
    },
  ],
};

export default mod;
