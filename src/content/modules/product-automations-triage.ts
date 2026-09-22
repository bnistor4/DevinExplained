import type { Module } from '../schema';

const mod: Module = {
  id: 'product-automations-triage',
  category: 'products',
  icon: 'Workflow',
  title: { en: 'Automations & auto-triage', it: 'Automazioni e auto-triage' },
  summary: {
    en: 'Wire Slack, GitHub, Linear, PagerDuty, cron and webhooks to sessions that start themselves.',
    it: 'Collega Slack, GitHub, Linear, PagerDuty, cron e webhook a sessioni che partono da sole.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/product-guides/automations',
    'https://docs.devin.ai/product-guides/auto-triage',
    'https://docs.devin.ai/product-guides/scheduled-sessions',
    'https://docs.devin.ai/tutorial-library/automations',
  ],
  slides: [
    {
      id: 'automation-triggers',
      block: {
        type: 'cards',
        title: { en: 'Trigger → conditions → *action*', it: 'Trigger → condizioni → *azione*' },
        cards: [
          {
            icon: 'MessageSquare',
            title: { en: 'Slack & chat', it: 'Slack e chat' },
            text: {
              en: 'New message or reaction in a channel — a trigger keyword starts an investigation.',
              it: 'Nuovo messaggio o reaction in canale: una keyword trigger avvia un’indagine.',
            },
          },
          {
            icon: 'FolderGit2',
            title: { en: 'GitHub / GitLab / Linear / Jira', it: 'GitHub / GitLab / Linear / Jira' },
            text: {
              en: 'Issues, PRs, CI failures, label and status changes — even assignments to Devin.',
              it: 'Issue, PR, CI fallite, cambi di label e stato — perfino ticket assegnati a Devin.',
            },
          },
          {
            icon: 'AlarmClock',
            title: { en: 'Schedule & webhook', it: 'Schedule e webhook' },
            text: {
              en: 'Cron schedules, one-off runs, and a webhook URL for anything else — PagerDuty included.',
              it: 'Schedule cron, esecuzioni singole e una URL webhook per tutto il resto — PagerDuty incluso.',
            },
          },
        ],
      },
      notes: {
        en: 'Actions: start a session, message a long-running session, triage a channel, or send an email notification.',
        it: 'Azioni: avviare una sessione, scrivere a una sessione long-running, fare triage di un canale o mandare un’email.',
      },
    },
    {
      id: 'triage-bullets',
      block: {
        type: 'bullets',
        title: { en: 'A Devin that *watches* the channel', it: 'Un Devin che *presidia* il canale' },
        icon: 'Radar',
        items: [
          { en: 'A persistent parent Devin reads every message in #bugs or #incidents', it: 'Un Devin genitore persistente legge ogni messaggio in #bugs o #incidents' },
          { en: 'Deduplicates reports and routes them to the right code owner', it: 'Deduplica le segnalazioni e le instrada al code owner giusto' },
          { en: 'Spawns focused child sessions to diagnose each real bug', it: 'Genera sessioni figlie mirate per diagnosticare ogni bug vero' },
          { en: 'A scratchpad gives it long-term memory of your triage style', it: 'Uno scratchpad gli dà memoria a lungo termine del tuo stile di triage' },
          { en: 'Setup = invite Devin to the channel + “Triage Bug Reports” template', it: 'Setup = invita Devin nel canale + template “Triage Bug Reports”' },
        ],
      },
      notes: {
        en: 'Tip from the docs: connect MCP integrations (logs, metrics) — they dramatically improve triage quality.',
        it: 'Consiglio dei docs: collega integrazioni MCP (log, metriche) — migliorano tantissimo il triage.',
      },
    },
    {
      id: 'automation-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a *pager* that fixes the thing before you finish reading the alert.',
          it: 'un *cercapersone* che aggiusta il problema prima che tu finisca di leggere l’allarme.',
        },
        icon: 'Radio',
      },
      notes: {
        en: 'Legacy Schedules still run, but new scheduled work is an automation with a Schedule trigger.',
        it: 'Le Schedules legacy funzionano ancora, ma il lavoro schedulato nuovo è un’automazione con trigger Schedule.',
      },
    },
  ],
};

export default mod;
