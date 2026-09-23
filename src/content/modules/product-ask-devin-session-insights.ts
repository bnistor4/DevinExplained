import type { Module } from '../schema';

const mod: Module = {
  id: 'product-ask-devin-session-insights',
  category: 'products',
  icon: 'MessageCircleQuestionMark',
  title: { en: 'Ask Devin & Session Insights', it: 'Ask Devin e Session Insights' },
  summary: {
    en: 'Ask before you code; learn from every session after it ends.',
    it: 'Chiedi prima di scrivere codice; impara da ogni sessione dopo che finisce.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/work-with-devin/ask-devin',
    'https://docs.devin.ai/product-guides/session-insights',
  ],
  slides: [
    {
      id: 'ask-vs-insights',
      block: {
        type: 'compare',
        title: { en: 'Before vs *after*', it: 'Prima vs *dopo*' },
        left: {
          title: { en: 'Ask Devin (before)', it: 'Ask Devin (prima)' },
          items: [
            { en: 'Q&A over your indexed codebase: answers with citations', it: 'Q&A sul codebase indicizzato: risposte con citazioni' },
            { en: 'Scopes and plans tasks before any code is written', it: 'Delimita e pianifica i task prima di scrivere codice' },
            { en: 'Generates a context-rich prompt ready for an Agent session', it: 'Genera un prompt ricco di contesto pronto per una sessione Agent' },
            { en: 'The session’s status stays visible in the conversation', it: 'Lo stato della sessione resta visibile nella conversazione' },
          ],
        },
        right: {
          title: { en: 'Session Insights (after)', it: 'Session Insights (dopo)' },
          items: [
            { en: 'Analyzes completed sessions: free of charge', it: 'Analizza le sessioni completate: gratis' },
            { en: 'Metrics: ACU usage, user messages, session size', it: 'Metriche: ACU usati, messaggi utente, taglia della sessione' },
            { en: 'Actionable recommendations for better collaboration', it: 'Raccomandazioni concrete per collaborare meglio' },
            { en: 'L/XL sessions get a full analysis automatically at teardown', it: 'Le sessioni L/XL ricevono l’analisi completa in automatico' },
          ],
        },
      },
      notes: {
        en: 'Recommended loop from the docs: index → Ask to explore and plan → start the session from Ask.',
        it: 'Il loop consigliato dai docs: indicizza → esplora e pianifica con Ask → avvia la sessione da Ask.',
      },
    },
    {
      id: 'insights-bullets',
      block: {
        type: 'bullets',
        title: { en: 'What Insights *teaches* you', it: 'Cosa ti *insegna* Insights' },
        icon: 'ChartLine',
        items: [
          { en: 'High message count = the initial prompt lacked context', it: 'Tanti messaggi = il prompt iniziale mancava di contesto' },
          { en: 'High ACU for the task size = retries or dead ends', it: 'Tanti ACU per la taglia del task = retry o vicoli ciechi' },
          { en: 'Auto-classification (category, languages, tools) on every session', it: 'Classificazione automatica (categoria, linguaggi, tool) su ogni sessione' },
          { en: 'Trigger manually from the ⋯ menu → Session insights', it: 'Si lancia a mano dal menu ⋯ → Session insights' },
        ],
      },
      notes: {
        en: 'Sessions shorter than one Devin message produce no insights: too little signal.',
        it: 'Sessioni con meno di un messaggio di Devin non generano insights: troppo poco segnale.',
      },
    },
    {
      id: 'ask-workflow',
      block: {
        type: 'bullets',
        title: { en: 'The recommended *loop*', it: 'Il *loop* consigliato' },
        icon: 'MessageCircleQuestionMark',
        items: [
          { en: 'Index the repo: it powers DeepWiki and Ask Devin', it: 'Indicizza la repo: alimenta DeepWiki e Ask Devin' },
          { en: 'Ask questions, explore architecture, cite sources', it: 'Fai domande, esplora l’architettura, leggi le citazioni' },
          { en: 'Scope the task in conversation: Devin drafts the prompt', it: 'Delimita il task in conversazione: Devin prepara il prompt' },
          { en: 'Start the Agent session right from Ask', it: 'Avvia la sessione Agent direttamente da Ask' },
          { en: 'Track its status without leaving the conversation', it: 'Segui lo stato senza lasciare la conversazione' },
        ],
      },
      notes: {
        en: 'Ask-first is the docs’ own recommended workflow: it writes a better prompt than most people do cold.',
        it: 'Prima Ask è il workflow consigliato dai docs: produce un prompt migliore di quello scritto a freddo.',
      },
    },
  ],
};

export default mod;
