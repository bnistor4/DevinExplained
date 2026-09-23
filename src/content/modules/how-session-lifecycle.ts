import type { Module } from '../schema';

const mod: Module = {
  id: 'how-session-lifecycle',
  category: 'how-it-works',
  icon: 'Workflow',
  title: { en: 'A session, start to PR', it: 'Una sessione, dall’inizio alla PR' },
  summary: {
    en: 'Ask vs Agent mode, repositories, @-mentions, and what a first session looks like.',
    it: 'Ask vs Agent mode, repository, @-mention e come si svolge la prima sessione.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/get-started/first-run',
    'https://docs.devin.ai/work-with-devin/devin-session-tools',
  ],
  slides: [
    {
      id: 'ask-vs-agent',
      block: {
        type: 'compare',
        title: { en: 'Two modes: *Ask* then *Agent*', it: 'Due modalità: *Ask* poi *Agent*' },
        left: {
          title: { en: 'Ask mode', it: 'Modalità Ask' },
          items: [
            { en: 'Explore the codebase with advanced code search', it: 'Esplora il codebase con la ricerca avanzata' },
            { en: 'Plan work and generate context-rich prompts', it: 'Pianifica il lavoro e genera prompt ricchi di contesto' },
            { en: 'No code changes: safe place to think', it: 'Nessuna modifica al codice: spazio sicuro per ragionare' },
          ],
        },
        right: {
          title: { en: 'Agent mode', it: 'Modalità Agent' },
          items: [
            { en: 'Writes code, runs commands, browses the web', it: 'Scrive codice, esegue comandi, naviga il web' },
            { en: 'Implements features, fixes bugs, opens PRs', it: 'Implementa feature, corregge bug, apre PR' },
            { en: 'Send to Devin promotes an Ask plan into a session', it: '“Send to Devin” trasforma un piano Ask in una sessione' },
          ],
        },
      },
      notes: {
        en: 'Unless you have a fully scoped plan, start in Ask, then let Devin construct the prompt and send it to Agent mode.',
        it: 'Se non hai un piano già definito, parti da Ask: Devin costruisce il prompt e lo mandi in Agent mode.',
      },
    },
    {
      id: 'session-setup',
      block: {
        type: 'bullets',
        title: { en: 'Setting up a *session*', it: 'Preparare una *sessione*' },
        icon: 'Settings2',
        items: [
          { en: 'Pick the repository: Devin branches and opens PRs there', it: 'Scegli la repository: lì Devin crea branch e apre le PR' },
          { en: 'Pick the agent: Devin (default), Fast Mode, or Data Analyst (DANA)', it: 'Scegli l’agente: Devin (default), Fast Mode o Data Analyst (DANA)' },
          { en: 'Use @ mentions: repos, files, playbooks, skills, secrets, past sessions', it: 'Usa le @-mention: repo, file, playbook, skill, secrets, sessioni passate' },
          { en: 'Switch agent mid-session from the toggle by the message box', it: 'Cambia agente a sessione in corso dal toggle accanto al campo messaggio' },
        ],
      },
      notes: {
        en: 'In Slack you can switch modes with !ultra, !fast, !lite, !fusion, !swe or !normal at the start of a message.',
        it: 'Su Slack si cambia modalità con !ultra, !fast, !lite, !fusion, !swe o !normal a inizio messaggio.',
      },
    },
    {
      id: 'session-tools-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Four *tools* inside a session', it: 'Quattro *strumenti* in una sessione' },
        cards: [
          {
            icon: 'SquareTerminal',
            title: { en: 'Shell', it: 'Shell' },
            text: {
              en: 'Full command history with output previews: copy any command or jump back in time.',
              it: 'Cronologia completa dei comandi con anteprima degli output: copia o torna indietro nel tempo.',
            },
          },
          {
            icon: 'Code',
            title: { en: 'IDE', it: 'IDE' },
            text: {
              en: 'A full VSCode: watch edits live, pause Devin and take over with your own shortcuts.',
              it: 'Un VSCode completo: vedi le modifiche live, metti in pausa Devin e subentra.',
            },
          },
          {
            icon: 'Globe',
            title: { en: 'Browser', it: 'Browser' },
            text: {
              en: 'Interactive Browser: help with logins, MFA and CAPTCHAs; cookies persist in the session.',
              it: 'Interactive Browser: aiuti con login, MFA e CAPTCHA; i cookie persistono nella sessione.',
            },
          },
          {
            icon: 'MessagesSquare',
            title: { en: 'Side chats', it: 'Side chat' },
            text: {
              en: 'Read-only questions on a session (/btw or the hover menu) without interrupting Devin.',
              it: 'Domande in sola lettura sulla sessione (/btw o il menu al passaggio) senza interrompere Devin.',
            },
          },
        ],
      },
      notes: {
        en: 'The Progress tab unifies shell commands, code edits and browser activity into one view.',
        it: 'Il tab Progress unisce comandi shell, modifiche al codice e attività del browser in una vista sola.',
      },
    },
    {
      id: 'first-prompt',
      block: {
        type: 'code',
        title: { en: 'A *first prompt* that works', it: 'Un *primo prompt* che funziona' },
        language: 'prompt',
        code: 'Fix the bug where the password reset link\nexpires immediately.\n\nRepo: @web-app. The token is generated in\nsrc/auth/reset.ts. Success = a new unit test\npasses and the link works after 1 hour.\nOpen a PR when done.',
        caption: {
          en: 'Clear criteria, pointers to files, definition of done.',
          it: 'Criteri chiari, puntatori ai file, definizione di “fatto”.',
        },
      },
      notes: {
        en: 'Point out the pattern: context, criteria, done-ness. Not “fix the bug”.',
        it: 'Sottolinea il pattern: contesto, criteri, definizione di fatto. Non “sistema il bug”.',
      },
    },
  ],
};

export default mod;
