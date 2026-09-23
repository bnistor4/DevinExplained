import type { Module } from '../schema';

const mod: Module = {
  id: 'history-founders',
  category: 'history',
  icon: 'Users',
  title: { en: 'Who builds Devin', it: 'Chi costruisce Devin' },
  summary: {
    en: 'Cognition: an applied AI lab building end-to-end software agents, and the team behind it.',
    it: 'Cognition: un laboratorio di AI applicata che costruisce agenti software end-to-end e il team che c’è dietro.',
  },
  durationMin: 3,
  sources: ['https://cognition.com', 'https://cognition.ai/blog'],
  slides: [
    {
      id: 'founders-people',
      block: {
        type: 'people',
        title: { en: 'The people behind *Devin*', it: 'Le persone dietro *Devin*' },
        logo: 'cognition',
        people: [
          {
            name: 'Scott Wu',
            role: { en: 'CEO · Cognition', it: 'CEO · Cognition' },
            bio: {
              en: 'Announced Devin to the world in March 2024.',
              it: 'Ha presentato Devin al mondo a marzo 2024.',
            },
          },
        ],
      },
      notes: {
        en: 'Scott Wu signed the original “Introducing Devin” post. The wider founding story is on the next slide.',
        it: 'Scott Wu ha firmato il post originale “Introducing Devin”. Il resto del founding team nella slide dopo.',
      },
    },
    {
      id: 'founding-team',
      block: {
        type: 'bullets',
        title: { en: 'An applied AI *lab*', it: 'Un *laboratorio* di AI applicata' },
        icon: 'FlaskConical',
        items: [
          { en: 'Cognition builds end-to-end software agents', it: 'Cognition costruisce agenti software end-to-end' },
          { en: 'The founding team holds 10 IOI gold medals', it: 'Il founding team vanta 10 medaglie d’oro IOI' },
          { en: 'Builders from Google DeepMind, Scale AI, Cursor, Modal, Waymo, Nuro', it: 'Persone da Google DeepMind, Scale AI, Cursor, Modal, Waymo, Nuro' },
          { en: '21 of the first 35 team members had founded a company', it: '21 dei primi 35 membri del team avevano già fondato un’azienda' },
          { en: 'HQ in San Francisco, also New York, Austin, D.C., London, Singapore, Japan', it: 'HQ a San Francisco, poi New York, Austin, D.C., Londra, Singapore, Giappone' },
        ],
      },
      notes: {
        en: 'All facts straight from cognition.com/about. The IOI golds explain the competitive-programming DNA.',
        it: 'Fatti presi da cognition.com/about. Le medaglie IOI spiegano il DNA da competitive programming.',
      },
    },
    {
      id: 'cognition-investors',
      block: {
        type: 'stats',
        title: { en: 'Backed to *build*', it: 'Capitali per *costruire*' },
        stats: [
          { value: '$2B+', label: { en: 'raised at a $48B valuation (Series E)', it: 'raccolti a 48 miliardi di valutazione (Series E)' } },
          { value: '10', label: { en: 'IOI gold medals on the founding team', it: 'medaglie d’oro IOI nel founding team' } },
          { value: '44→350', label: { en: 'people in the first year with Windsurf', it: 'persone nel primo anno con Windsurf' } },
        ],
      },
      notes: {
        en: 'Series E led by a16z and Accel, with Founders Fund, General Catalyst and Avenir among the investors.',
        it: 'Series E guidato da a16z e Accel, con Founders Fund, General Catalyst e Avenir tra gli investitori.',
      },
    },
  ],
};

export default mod;
