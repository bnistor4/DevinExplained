import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-web-app',
  category: 'surfaces',
  icon: 'Globe',
  title: { en: 'The web app', it: 'La web app' },
  summary: {
    en: 'app.devin.ai: sessions, @-mentions, the Progress tab and org-defined slash commands.',
    it: 'app.devin.ai: sessioni, @-mention, il tab Progress e gli slash command della tua org.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/get-started/first-run',
    'https://docs.devin.ai/work-with-devin/devin-session-tools',
    'https://docs.devin.ai/work-with-devin/slash-commands',
  ],
  slides: [
    {
      id: 'webapp-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Everything starts at *app.devin.ai*', it: 'Tutto parte da *app.devin.ai*' },
        icon: 'Globe',
        items: [
          { en: 'Two modes on the home page: Ask to plan, Agent to execute', it: 'Due modalità in home: Ask per pianificare, Agent per eseguire' },
          { en: 'Pick repository and agent per session', it: 'Repository e agente si scelgono a ogni sessione' },
          { en: '@ mentions pull in repos, files, playbooks, skills, secrets, sessions', it: 'Le @-mention richiamano repo, file, playbook, skill, secrets, sessioni' },
          { en: 'The Progress tab unifies shell, edits and browser activity', it: 'Il tab Progress unisce shell, modifiche e attività del browser' },
          { en: 'Org admins can define /slash commands that expand into prompts', it: 'Gli admin possono definire /slash command che si espandono in prompt' },
        ],
      },
      notes: {
        en: 'Slash commands are org-defined: /deploy, /security-review, /onboard are the docs’ examples.',
        it: 'Gli slash command li definisce l’organizzazione: /deploy, /security-review, /onboard sono gli esempi dei docs.',
      },
    },
    {
      id: 'webapp-cards',
      block: {
        type: 'cards',
        title: { en: 'The session *cockpit*', it: 'La *cabina di regia* della sessione' },
        cards: [
          {
            icon: 'ListChecks',
            title: { en: 'Progress', it: 'Progress' },
            text: {
              en: 'Every step, command, edit and page visit in one unified timeline.',
              it: 'Ogni passo, comando, modifica e pagina visitata in una timeline unica.',
            },
          },
          {
            icon: 'MessagesSquare',
            title: { en: 'Side chats', it: 'Side chat' },
            text: {
              en: 'Read-only Q&A on the session: context included, work uninterrupted.',
              it: 'Domande in sola lettura con contesto incluso, lavoro non interrotto.',
            },
          },
          {
            icon: 'SquareSlash',
            title: { en: '/commands', it: '/command' },
            text: {
              en: 'Slash commands expand into your org’s prompt templates before sending.',
              it: 'Gli slash command si espandono nei prompt template della tua org prima dell’invio.',
            },
          },
        ],
      },
      notes: {
        en: 'If the slash menu is empty, your org hasn’t created commands yet: admins manage them in Settings → Devin → Commands.',
        it: 'Se il menu degli slash è vuoto, l’org non ne ha ancora creati: li gestiscono gli admin in Settings → Devin → Commands.',
      },
    },
    {
      id: 'webapp-flow',
      block: {
        type: 'bullets',
        title: { en: 'A session in *four moves*', it: 'Una sessione in *quattro mosse*' },
        icon: 'MousePointerClick',
        items: [
          { en: 'Pick Ask or Agent on the home page', it: 'Scegli Ask o Agent nella home' },
          { en: 'Select the repo, or @-mention what you need', it: 'Seleziona la repo, o @-menziona ciò che serve' },
          { en: 'Watch the plan in the Progress tab; steer from the chat', it: 'Segui il piano nel tab Progress; guida dalla chat' },
          { en: 'Get the PR link when it’s done: review like any other', it: 'Ricevi il link alla PR a lavoro finito: review come le altre' },
        ],
      },
      notes: {
        en: 'This mirrors the first-run guide: Ask for planning, Agent for execution.',
        it: 'Ricalca la guida first-run: Ask per pianificare, Agent per eseguire.',
      },
    },
  ],
};

export default mod;
