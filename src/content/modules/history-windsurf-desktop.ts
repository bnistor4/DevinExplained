import type { Module } from '../schema';

const mod: Module = {
  id: 'history-windsurf-desktop',
  category: 'history',
  icon: 'Monitor',
  title: { en: 'Windsurf → Devin Desktop', it: 'Windsurf → Devin Desktop' },
  summary: {
    en: 'How the Windsurf acquisition became Devin Desktop: one surface for local and cloud agents.',
    it: 'Come l’acquisizione di Windsurf è diventata Devin Desktop: una superficie unica per agenti locali e cloud.',
  },
  durationMin: 3,
  sources: ['https://cognition.ai/blog'],
  slides: [
    {
      id: 'windsurf-timeline',
      block: {
        type: 'timeline',
        title: { en: 'From acquisition to *one brand*', it: 'Dall’acquisizione a *un solo brand*' },
        events: [
          {
            date: '07.2025',
            title: { en: 'Cognition acquires Windsurf', it: 'Cognition acquisisce Windsurf' },
            text: {
              en: 'A 72-hour deal: cloud agent meets IDE, no product overlap',
              it: 'Un accordo in 72 ore: agente cloud + IDE, prodotti non sovrapposti',
            },
          },
          {
            date: '04.2026',
            title: { en: 'Devin in Windsurf', it: 'Devin in Windsurf' },
            text: {
              en: 'Windsurf 2.0: plan locally, send to Devin with one click',
              it: 'Windsurf 2.0: pianifichi in locale, mandi a Devin con un click',
            },
          },
          {
            date: '06.2026',
            title: { en: 'Devin Desktop', it: 'Devin Desktop' },
            text: {
              en: 'Windsurf becomes Devin Desktop: the Agent Command Center by default',
              it: 'Windsurf diventa Devin Desktop: l’Agent Command Center di default',
            },
          },
          {
            date: '07.2026',
            title: { en: 'One year together', it: 'Un anno insieme' },
            text: {
              en: '20M+ lines of code written locally; revenue run rate $73M → $500M+',
              it: 'Oltre 20M di righe scritte in locale; fatturato da 73M a oltre 500M$',
            },
          },
        ],
      },
      notes: {
        en: 'Cognition brought the cloud agent and engineering org; Windsurf brought the IDE, brand and GTM.',
        it: 'Cognition portava l’agente cloud e l’engineering; Windsurf l’IDE, il brand e il go-to-market.',
      },
    },
    {
      id: 'local-vs-cloud',
      block: {
        type: 'compare',
        title: { en: 'Local agent vs *cloud agent*', it: 'Agente *locale* vs agente *cloud*' },
        left: {
          title: { en: 'Local: where you think', it: 'Locale: dove pensi' },
          items: [
            { en: 'Runs on your machine, in your session', it: 'Gira sulla tua macchina, nella tua sessione' },
            { en: 'Plan, prototype, iterate hands-on', it: 'Pianifica, prototipa, itera a mani sulla tastiera' },
            { en: 'Stops when you close the laptop', it: 'Si ferma quando chiudi il laptop' },
          ],
        },
        right: {
          title: { en: 'Cloud: where you delegate', it: 'Cloud: dove deleghi' },
          items: [
            { en: 'Own infrastructure, own environment', it: 'Infrastruttura e ambiente propri' },
            { en: 'Works for minutes or hours, past your attention', it: 'Lavora per minuti o ore, oltre la tua attenzione' },
            { en: 'Opens PRs, runs tests, QAs its own work', it: 'Apre PR, lancia i test, verifica il proprio lavoro' },
          ],
        },
      },
      notes: {
        en: 'The Devin in Windsurf framing: a local agent makes you faster, a cloud agent works while you’re not there.',
        it: 'Il framing di “Devin in Windsurf”: l’agente locale ti rende più veloce, quello cloud lavora mentre non ci sei.',
      },
      funAside: {
        en: 'The ceiling on a local agent is your attention span. So, about 40 minutes.',
        it: 'Il limite di un agente locale è la tua attenzione. Quindi circa 40 minuti.',
      },
    },
    {
      id: 'desktop-cards',
      block: {
        type: 'cards',
        title: { en: 'Inside *Devin Desktop*', it: 'Dentro *Devin Desktop*' },
        cards: [
          {
            icon: 'LayoutDashboard',
            title: { en: 'Agent Command Center', it: 'Agent Command Center' },
            text: {
              en: 'Manage local and cloud agents, PRs and context from one surface.',
              it: 'Gestisci agenti locali e cloud, PR e contesto da una sola superficie.',
            },
          },
          {
            icon: 'Layers',
            title: { en: 'Spaces', it: 'Spaces' },
            text: {
              en: 'Related agents share context so they can collaborate on tasks.',
              it: 'Gli agenti correlati condividono il contesto e collaborano sui task.',
            },
          },
          {
            icon: 'Plug',
            title: { en: 'Open via ACP', it: 'Aperto via ACP' },
            text: {
              en: 'Any ACP-compatible agent can run inside Devin Desktop alongside Devin.',
              it: 'Qualsiasi agente compatibile con ACP gira in Devin Desktop accanto a Devin.',
            },
          },
        ],
      },
      notes: {
        en: 'The bet: engineering work is shifting toward agent management, so the IDE becomes a command center.',
        it: 'La scommessa: il lavoro di engineering si sposta verso la gestione di agenti, quindi l’IDE diventa un command center.',
      },
    },
  ],
};

export default mod;
