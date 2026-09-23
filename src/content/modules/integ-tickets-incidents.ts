import type { Module } from '../schema';

const mod: Module = {
  id: 'integ-tickets-incidents',
  category: 'integrations',
  icon: 'Ticket',
  title: { en: 'Linear, Jira, PagerDuty', it: 'Linear, Jira, PagerDuty' },
  summary: {
    en: 'Assign a ticket, add a label, or let an incident fire the session.',
    it: 'Assegna un ticket, aggiungi una label, o lascia che sia l’incidente ad avviare la sessione.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/integrations/linear',
    'https://docs.devin.ai/integrations/jira',
    'https://docs.devin.ai/integrations/pagerduty',
  ],
  slides: [
    {
      id: 'tickets-cards',
      block: {
        type: 'cards',
        title: { en: 'Tickets that *resolve themselves*', it: 'Ticket che si *risolvono da soli*' },
        cards: [
          {
            icon: 'Ticket',
            title: { en: 'Assign', it: 'Assegna' },
            text: {
              en: 'Assign the ticket to Devin: the default playbook runs it.',
              it: 'Assegna il ticket a Devin: lo esegue il playbook di default.',
            },
          },
          {
            icon: 'Tag',
            title: { en: 'Label', it: 'Label' },
            text: {
              en: '!plan, !implement, !triage, !review labels pick the playbook.',
              it: 'Le label !plan, !implement, !triage, !review scelgono il playbook.',
            },
          },
          {
            icon: 'AtSign',
            title: { en: 'Mention', it: 'Menziona' },
            text: {
              en: '@Devin in a comment: your comment becomes the task, no playbook.',
              it: '@Devin in un commento: il commento diventa il task, senza playbook.',
            },
          },
        ],
      },
      notes: {
        en: 'Jira has a fourth way: the plain “devin” label runs the default playbook. Labels are created manually in Jira.',
        it: 'Jira ha una quarta via: la semplice label “devin” esegue il playbook di default. Le label si creano a mano in Jira.',
      },
    },
    {
      id: 'pagerduty-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Incidents that *page* Devin', it: 'Incidenti che *chiamano* Devin' },
        icon: 'Siren',
        items: [
          { en: 'Three pieces: REST API key, webhook subscription, app registration', it: 'Tre pezzi: chiave REST API, sottoscrizione webhook, registrazione app' },
          { en: 'Devin creates the webhook itself when you connect', it: 'Devin crea da solo la sottoscrizione webhook quando ti connetti' },
          { en: 'incident.triggered can fire an automation → investigation session', it: 'incident.triggered può far partire un’automazione → sessione di indagine' },
          { en: 'The PagerDuty MCP gives sessions access to incidents and on-call schedules', it: 'L’MCP PagerDuty dà alle sessioni accesso a incidenti e turni di reperibilità' },
          { en: 'Incident notes post back under a dedicated service user', it: 'Le note sull’incidente tornano su PagerDuty con un service user dedicato' },
        ],
      },
      notes: {
        en: 'General Access key required: user API tokens are not accepted. US and EU regions supported.',
        it: 'Serve una General Access key: i token utente non sono accettati. Regioni US ed EU supportate.',
      },
      funAside: {
        en: 'On-call for the 3am incident is a great job. For Devin.',
        it: 'Essere di reperibilità per l’incidente delle 3 di notte è un bel lavoro. Per Devin.',
      },
    },
    {
      id: 'tickets-details',
      block: {
        type: 'bullets',
        title: { en: 'Setup *notes*', it: 'Note di *setup*' },
        icon: 'Ticket',
        items: [
          { en: 'Linear: connecting it also wires the native Linear tools, no MCP needed', it: 'Linear: la connessione attiva anche i tool nativi, niente MCP da configurare' },
          { en: 'Linear: pick which teams Devin can see, changeable later', it: 'Linear: scegli quali team Devin vede, modificabile dopo' },
          { en: 'Jira: connect a service account so comments come from the bot', it: 'Jira: collega un service account così i commenti arrivano dal bot' },
          { en: 'PagerDuty: only General Access API keys, user tokens rejected', it: 'PagerDuty: solo chiavi General Access, i token utente sono rifiutati' },
        ],
      },
      notes: {
        en: 'These are the details people trip on during setup: worth one slide of honesty.',
        it: 'Sono i dettagli su cui la gente inciampa in setup: vale una slide di onestà.',
      },
    },
  ],
};

export default mod;
