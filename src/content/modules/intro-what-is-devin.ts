import type { Module } from '../schema';

const mod: Module = {
  id: 'intro-what-is-devin',
  category: 'intro',
  icon: 'Bot',
  title: { en: 'What is Devin', it: "Cos'è Devin" },
  summary: {
    en: 'Devin in one slide: an autonomous AI software engineer that writes, runs and tests code.',
    it: 'Devin in una slide: un ingegnere software AI autonomo che scrive, esegue e testa codice.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/get-started/devin-intro'],
  slides: [
    {
      id: 'what-is-devin-title',
      block: {
        type: 'title',
        kicker: { en: 'WHAT IS DEVIN', it: "COS'È DEVIN" },
        title: {
          en: 'Devin, the *AI software engineer*',
          it: "Devin, l'*ingegnere software AI*",
        },
        subtitle: {
          en: 'An autonomous teammate that writes, runs and tests code',
          it: 'Un collega autonomo che scrive, esegue e testa codice',
        },
      },
      notes: {
        en: 'Devin is built by Cognition to help ambitious engineering teams crush their backlogs.',
        it: 'Devin è costruito da Cognition per aiutare i team di engineering più ambiziosi a smaltire il backlog.',
      },
    },
    {
      id: 'what-devin-does',
      block: {
        type: 'bullets',
        title: { en: 'What Devin can do', it: 'Cosa sa fare Devin' },
        icon: 'Sparkles',
        items: [
          { en: 'Write, run and test code autonomously', it: 'Scrive, esegue e testa codice in autonomia' },
          { en: 'Pick up Linear and Jira tickets', it: 'Prende in carico ticket Linear e Jira' },
          { en: 'Build entire features from scratch', it: 'Sviluppa feature complete partendo da zero' },
          { en: 'Reproduce and fix bugs', it: 'Riproduce e corregge i bug' },
          { en: 'Build internal tools and prototypes', it: 'Costruisce strumenti interni e prototipi' },
        ],
      },
      notes: {
        en: 'It handles most tasks, excluding the most difficult ones. Keep the tone practical.',
        it: 'Gestisce la maggior parte dei compiti, esclusi i più difficili.',
      },
      funAside: {
        en: 'And it never asks where the coffee machine is.',
        it: 'E non chiede mai dove sia la macchinetta del caffè.',
      },
    },
    {
      id: 'devin-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a *tireless* junior colleague who works at 3am and never asks for coffee.',
          it: 'un collega junior *instancabile* che lavora alle 3 di notte e non chiede mai un caffè.',
        },
        icon: 'Moon',
      },
      notes: {
        en: 'Playful framing: land the joke, then get back to the facts.',
        it: 'Framing giocoso: fai la battuta e torna subito ai fatti.',
      },
    },
    {
      id: 'devin-workspace',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: "Inside *Devin's* workspace", it: 'Dentro il workspace di *Devin*' },
        cards: [
          {
            icon: 'SquareTerminal',
            title: { en: 'Shell', it: 'Shell' },
            text: {
              en: 'A real terminal: watch commands run and copy the logs.',
              it: 'Un terminale vero: vedi i comandi eseguiti e puoi copiare i log.',
            },
          },
          {
            icon: 'Code',
            title: { en: 'IDE', it: 'IDE' },
            text: {
              en: "An embedded editor: follow Devin's work live and take over anytime.",
              it: 'Un editor integrato: segui il lavoro di Devin e subentri quando vuoi.',
            },
          },
          {
            icon: 'Globe',
            title: { en: 'Browser', it: 'Browser' },
            text: {
              en: 'Devin reads docs, tests the web apps it builds, downloads and uploads files.',
              it: 'Devin legge la documentazione, testa le web app che crea, scarica e carica file.',
            },
          },
        ],
      },
      notes: {
        en: 'You can jump into the browser to help Devin navigate: Interactive Browser.',
        it: "Puoi entrare nel browser per aiutare Devin nella navigazione: l'Interactive Browser.",
      },
      funAside: {
        en: 'Yes, it has a better IDE setup than most of us.',
        it: 'Sì, ha un IDE configurato meglio di quello di molti di noi.',
      },
    },
    {
      id: 'three-hour-rule-quote',
      block: {
        type: 'quote',
        text: {
          en: 'If you can do it in *three hours*, Devin can most likely do it.',
          it: 'Se un compito ti richiede *tre ore*, molto probabilmente Devin può farlo.',
        },
        author: 'The three-hour rule',
        role: { en: 'docs.devin.ai', it: 'docs.devin.ai' },
      },
      notes: {
        en: 'The official rule of thumb for sizing tasks for Devin.',
        it: 'La regola pratica ufficiale per capire quali compiti dare a Devin.',
      },
    },
  ],
};

export default mod;
