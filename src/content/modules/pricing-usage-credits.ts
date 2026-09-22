import type { Module } from '../schema';

const mod: Module = {
  id: 'pricing-usage-credits',
  category: 'pricing-enterprise',
  icon: 'Gauge',
  title: { en: 'How usage is metered', it: 'Come viene misurato l’utilizzo' },
  summary: {
    en: 'Same metering for everyone — the unit differs: ACUs on Enterprise, quota + credits on self-serve.',
    it: 'Stessa misurazione per tutti: cambia l’unità — ACU su Enterprise, quota + crediti sul self-serve.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/admin/billing/usage',
    'https://docs.devin.ai/admin/billing',
    'https://docs.devin.ai/admin/billing/org-acu-limits',
  ],
  slides: [
    {
      id: 'usage-bullets',
      block: {
        type: 'bullets',
        title: { en: 'What *counts* — and what doesn’t', it: 'Cosa *conta* — e cosa no' },
        icon: 'Gauge',
        items: [
          { en: 'Metered: actions Devin takes — planning, browsing, code execution', it: 'Misurato: le azioni di Devin — pianificazione, browser, esecuzione codice' },
          { en: 'VM time and bandwidth — typically a small fraction', it: 'Tempo VM e banda: di solito una frazione piccola' },
          { en: 'Not metered: waiting for you, waiting for tests, cloning repos', it: 'Non misurato: attendere te, attendere i test, clonare repo' },
          { en: 'Windows sessions cost ~9% more than equivalent Linux ones', it: 'Le sessioni Windows costano circa il 9% in più di quelle Linux' },
          { en: 'macOS sessions: same as Linux (promotional launch pricing)', it: 'Sessioni macOS: come Linux (prezzo promozionale di lancio)' },
        ],
      },
      notes: {
        en: 'Sleep matters: an idle session stops consuming — waiting is free.',
        it: 'Lo sleep conta: una sessione ferma non consuma — l’attesa è gratis.',
      },
    },
    {
      id: 'quota-vs-credits',
      block: {
        type: 'compare',
        title: { en: 'Quota vs *on-demand*', it: 'Quota vs *on-demand*' },
        left: {
          title: { en: 'Self-serve', it: 'Self-serve' },
          items: [
            { en: 'Plan’s included quota is consumed first', it: 'Prima si consuma la quota inclusa nel piano' },
            { en: 'Then prepaid on-demand credits kick in', it: 'Poi entrano i crediti on-demand prepagati' },
            { en: 'Free, Pro, Max, Teams — sign up directly', it: 'Free, Pro, Max, Teams: ci si iscrive da soli' },
          ],
        },
        right: {
          title: { en: 'Enterprise', it: 'Enterprise' },
          items: [
            { en: 'Billed in ACUs at the rate in the order form', it: 'Fatturato in ACU alla tariffa dell’ordine' },
            { en: 'Org-level ACU limits cap each organization', it: 'I limiti ACU per org bloccano ogni organizzazione' },
            { en: 'Per-user tiers cap individual monthly consumption', it: 'I tier per utente limitano il consumo mensile individuale' },
          ],
        },
      },
      notes: {
        en: 'When an org hits its limit, new work is blocked until an admin raises it or the billing window resets.',
        it: 'Quando un’org raggiunge il limite, il lavoro nuovo si blocca finché un admin non lo alza o la finestra si resetta.',
      },
      funAside: {
        en: 'Waiting for you to reply costs nothing. Take your time — literally free.',
        it: 'Aspettare la tua risposta non costa nulla. Prenditi tempo: è letteralmente gratis.',
      },
    },
    {
      id: 'usage-tips',
      block: {
        type: 'bullets',
        title: { en: 'Spend *less*, get the same', it: 'Spendi *meno*, ottieni lo stesso' },
        icon: 'Gauge',
        items: [
          { en: 'Scope tasks clearly — shorter, focused prompts cost less', it: 'Delimita i task: prompt corti e mirati costano meno' },
          { en: 'Split big projects across sessions instead of one mega-session', it: 'Spezza i progetti grandi su più sessioni, non una mega-sessione' },
          { en: 'Sessions sleep after 30 min idle — sleeping consumes nothing', it: 'Le sessioni dormono dopo 30 min di inattività — da spente non consumano' },
          { en: 'Session Insights shows the usage of every single session', it: 'Session Insights mostra i consumi di ogni singola sessione' },
          { en: 'Windows runs ~9% more usage than the same Linux job; macOS has no surcharge', it: 'Windows consuma ~9% in più dello stesso job Linux; macOS non ha sovrapprezzo' },
        ],
      },
      notes: {
        en: 'From the billing doc: no usage while waiting for you, waiting on tests, or cloning repos — idle really is free.',
        it: 'Dalla doc sul billing: niente consumo mentre aspetta te, i test o il clone delle repo — l’attesa è davvero gratis.',
      },
    },
  ],
};

export default mod;
