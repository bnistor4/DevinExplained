import type { Module } from '../schema';

const mod: Module = {
  id: 'closing-qa',
  category: 'closing',
  icon: 'MessageCircleQuestionMark',
  title: { en: 'Questions & answers', it: 'Domande e risposte' },
  summary: {
    en: 'What to try tonight, and the closing Q&A slide.',
    it: 'Cosa provare stasera, e la slide finale di Q&A.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/get-started/devin-intro'],
  slides: [
    {
      id: 'try-tonight',
      block: {
        type: 'bullets',
        title: { en: 'Try it *tonight*', it: 'Provalo *stasera*' },
        icon: 'Rocket',
        items: [
          { en: 'Sign up free at app.devin.ai and start one small session', it: 'Registrati gratis su app.devin.ai e avvia una sessione piccola' },
          { en: 'Pick a well-scoped bug, not your hardest ticket', it: 'Scegli un bug ben definito, non il ticket più duro' },
          { en: 'Free: review any public PR on devinreview.com', it: 'Gratis: fai review di una PR pubblica su devinreview.com' },
          { en: 'Then tell me what happened: feedback shapes the product', it: 'Poi raccontami com’è andata: il feedback muove il prodotto' },
        ],
      },
      notes: {
        en: 'The docs explicitly invite feedback: ambassadors should collect reactions and report back.',
        it: 'I docs invitano esplicitamente a dare feedback: raccogli le reazioni della sala e riportale.',
      },
      funAside: {
        en: 'Homework that does itself is the best kind.',
        it: 'I compiti che si fanno da soli sono i migliori.',
      },
    },
    {
      id: 'qa-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: 'If you take one *metaphor* home', it: 'Se porti a casa una *metafora*' },
        text: {
          en: 'Devin is the teammate who reads the whole thread, writes the PR, and *tests it*. Before your coffee is cold.',
          it: 'Devin è il collega che legge tutto il thread, scrive la PR e la *testa*. Prima che il caffè sia freddo.',
        },
        icon: 'Coffee',
      },
      notes: {
        en: 'Land this line, then open the floor.',
        it: 'Chiudi con questa frase, poi apri le domande.',
      },
    },
    {
      id: 'qa',
      block: {
        type: 'qa',
        title: { en: 'Questions?', it: 'Domande?' },
        text: {
          en: 'Scan the code to try Devin, or come find me after the talk!',
          it: 'Inquadra il codice per provare Devin, oppure vieni a trovarmi dopo il talk!',
        },
      },
      notes: {
        en: 'Point at the QR, stay near the stage; the best questions always come after.',
        it: 'Indica il QR e resta vicino al palco: le domande migliori arrivano sempre dopo.',
      },
    },
  ],
};

export default mod;
