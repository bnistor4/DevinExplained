import type { Module } from '../schema';

const mod: Module = {
  id: 'pricing-self-serve',
  category: 'pricing-enterprise',
  icon: 'CreditCard',
  title: { en: 'Self-serve plans', it: 'Piani self-serve' },
  summary: {
    en: 'Free, Pro, Max and Teams: seat types, the $80 minimum and shared on-demand credits.',
    it: 'Free, Pro, Max e Teams: tipi di posto, minimo da 80$ e crediti on-demand condivisi.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/admin/billing/self-serve'],
  slides: [
    {
      id: 'plans-table',
      band: 'dark',
      block: {
        type: 'pricing',
        title: { en: 'Four *self-serve* plans', it: 'Quattro piani *self-serve*' },
        plans: [
          {
            name: 'Free',
            price: '$0',
            audience: { en: 'Trying Devin', it: 'Per provare Devin' },
            features: [
              { en: 'Limited Devin usage', it: 'Uso limitato di Devin' },
              { en: 'Devin Review & DeepWiki access', it: 'Accesso a Devin Review e DeepWiki' },
            ],
          },
          {
            name: 'Pro',
            price: '$20/mo',
            audience: { en: 'Individual users', it: 'Utenti individuali' },
            features: [
              { en: 'Daily & weekly usage quota', it: 'Quota di utilizzo giornaliera e settimanale' },
              { en: 'Devin sessions, CLI & Desktop', it: 'Sessioni Devin, CLI e Desktop' },
              { en: 'Slack, Linear & MCP integrations', it: 'Integrazioni Slack, Linear e MCP' },
            ],
          },
          {
            name: 'Max',
            price: '$200/mo',
            audience: { en: 'Power users', it: 'Utenti intensivi' },
            features: [
              { en: 'Everything in Pro', it: 'Tutto quello che c’è in Pro' },
              { en: 'Much larger weekly quota', it: 'Quota settimanale molto più ampia' },
              { en: 'No daily cap', it: 'Nessun limite giornaliero' },
            ],
          },
          {
            name: 'Teams',
            price: 'from $80/mo',
            audience: { en: 'Teams up to 200 members', it: 'Team fino a 200 membri' },
            highlight: true,
            features: [
              { en: 'Full seats at $40/mo each', it: 'Posti full a 40$/mese l’uno' },
              { en: 'Free flex seats', it: 'Posti flex gratuiti' },
              { en: 'Shared on-demand credits', it: 'Crediti on-demand condivisi' },
            ],
          },
        ],
        footnote: {
          en: 'Authoritative pricing: devin.ai/pricing',
          it: 'Prezzi ufficiali: devin.ai/pricing',
        },
      },
      notes: {
        en: 'Pro and Max are single-user plans: for multiple people on one subscription you need Teams.',
        it: 'Pro e Max sono piani individuali: per più persone su un solo abbonamento serve Teams.',
      },
    },
    {
      id: 'seats',
      block: {
        type: 'bullets',
        title: { en: 'Full seats vs. flex seats', it: 'Posti full e posti flex' },
        icon: 'Users',
        items: [
          {
            en: 'Full seat: $40/month, Pro-equivalent quota plus Devin Desktop access',
            it: 'Posto full: 40$/mese, quota equivalente a Pro più accesso a Devin Desktop',
          },
          {
            en: "Flex seat: free, draws entirely from the team's shared on-demand credits",
            it: 'Posto flex: gratuito, attinge interamente dai crediti on-demand condivisi del team',
          },
          {
            en: 'Every Teams account pays at least $80/month: credits cover the gap under 2 full seats',
            it: 'Ogni account Teams paga almeno 80$/mese: sotto i 2 posti full il resto diventa crediti',
          },
          {
            en: 'Up to 200 members per Teams organization; larger teams go Enterprise',
            it: 'Fino a 200 membri per organizzazione Teams; oltre si passa a Enterprise',
          },
        ],
      },
      notes: {
        en: 'The $80 minimum is the trick: one full seat is $40, so the other $40 always lands in shared on-demand credits.',
        it: 'Il minimo di 80$ è il trucco: un posto full costa 40$, quindi gli altri 40$ finiscono sempre in crediti on-demand condivisi.',
      },
    },
    {
      id: 'credits',
      block: {
        type: 'bullets',
        title: { en: 'On-demand credits', it: 'Crediti on-demand' },
        icon: 'Coins',
        items: [
          {
            en: 'Prepaid credit that funds any work past your included quota',
            it: 'Credito prepagato che copre il lavoro oltre la quota inclusa',
          },
          {
            en: 'They roll over month to month and never expire',
            it: 'Si accumulano di mese in mese e non scadono mai',
          },
          {
            en: 'On Teams they are shared across all members: no per-member balance',
            it: 'Su Teams sono condivisi da tutti i membri, senza saldo individuale',
          },
          {
            en: 'Reviewing public PRs on devinreview.com is free for everyone',
            it: 'Le review delle PR pubbliche su devinreview.com sono gratuite per tutti',
          },
        ],
      },
      notes: {
        en: 'Free trick: replace github.com with devinreview.com in any public PR URL.',
        it: 'Trucco gratuito: sostituisci github.com con devinreview.com nell’URL di qualsiasi PR pubblica.',
      },
      funAside: {
        en: 'The only credits that never expire, unlike the ones in your favorite game.',
        it: 'Gli unici crediti che non scadono mai, a differenza di quelli del tuo gioco preferito.',
      },
    },
  ],
};

export default mod;
