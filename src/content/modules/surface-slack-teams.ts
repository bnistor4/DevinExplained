import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-slack-teams',
  category: 'surfaces',
  icon: 'MessageSquare',
  title: { en: 'Devin in Slack & Teams', it: 'Devin in Slack e Teams' },
  summary: {
    en: 'Tag @Devin where the conversation already is; it replies in-thread with a PR.',
    it: 'Tagga @Devin dove la conversazione già vive; risponde nel thread con una PR.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/integrations/slack',
    'https://docs.devin.ai/integrations/microsoft-teams',
    'https://docs.devin.ai/tutorial-library/slack-bug-fix',
  ],
  slides: [
    {
      id: 'chatops-bullets',
      block: {
        type: 'bullets',
        title: { en: 'The bug report *is* the ticket', it: 'La segnalazione *è* il ticket' },
        icon: 'MessageSquare',
        items: [
          { en: 'Tag @Devin in Slack (or @Devin AI in Teams) on a bug report thread', it: 'Tagga @Devin in Slack (o @Devin AI in Teams) sul thread di una segnalazione' },
          { en: 'Devin starts a session and replies in-thread with updates', it: 'Devin apre una sessione e risponde nel thread con gli aggiornamenti' },
          { en: 'Attachments on your message travel with the session', it: 'Gli allegati del messaggio viaggiano con la sessione' },
          { en: 'Every user links their profile once: Settings → Connections', it: 'Ogni utente collega il profilo una volta: Settings → Connections' },
          { en: 'Watch the demo: a Slack thread becomes a merged fix', it: 'C’è una demo: un thread Slack diventa un fix mergiato' },
        ],
      },
      notes: {
        en: 'The slack-bug-fix tutorial shows the whole loop: report in a thread → session → pull request.',
        it: 'Il tutorial slack-bug-fix mostra tutto il giro: segnalazione in un thread → sessione → pull request.',
      },
      funAside: {
        en: 'The only coworker who reads every thread. And answers.',
        it: 'L’unico collega che legge tutti i thread. E risponde.',
      },
    },
    {
      id: 'slack-vs-teams',
      block: {
        type: 'compare',
        title: { en: 'Slack vs *Teams*', it: 'Slack vs *Teams*' },
        left: {
          title: { en: 'Slack', it: 'Slack' },
          items: [
            { en: 'Mention @Devin; replies land in the thread', it: 'Menzioni @Devin; le risposte arrivano nel thread' },
            { en: 'Rich keywords: !ask !deep !ultra !fusion !windows !mac !outpost', it: 'Keyword ricche: !ask !deep !ultra !fusion !windows !mac !outpost' },
            { en: 'Session can sync to a thread, or post in another channel', it: 'La sessione può sincronizzarsi al thread o postare in un altro canale' },
            { en: 'mute / sleep / archive / EXIT control the session', it: 'mute / sleep / archive / EXIT controllano la sessione' },
          ],
        },
        right: {
          title: { en: 'Microsoft Teams', it: 'Microsoft Teams' },
          items: [
            { en: 'Mention @Devin AI in a channel, group or 1:1 chat', it: 'Menzioni @Devin AI in canale, gruppo o chat 1:1' },
            { en: 'Same mode keywords: !fast !lite !ultra !fusion !swe', it: 'Stesse keyword di modalità: !fast !lite !ultra !fusion !swe' },
            { en: 'Admin consent or per-team install from the Teams store', it: 'Consenso admin o installazione per team dallo store Teams' },
            { en: 'No threads in 1:1 chats, Devin replies directly', it: 'Niente thread nelle chat 1:1: Devin risponde direttamente' },
          ],
        },
      },
      notes: {
        en: 'Slack keywords can appear anywhere in the message and stack: “@Devin fix the bug !ultra !new”.',
        it: 'Le keyword Slack possono stare ovunque nel messaggio e si combinano: “@Devin fix the bug !ultra !new”.',
      },
    },
    {
      id: 'chatops-flow',
      block: {
        type: 'bullets',
        title: { en: 'The *pattern* to copy', it: 'Il *pattern* da copiare' },
        icon: 'MessagesSquare',
        items: [
          { en: 'Bug lands in a channel → tag @Devin in the thread', it: 'Il bug arriva in canale → tagga @Devin nel thread' },
          { en: 'Devin investigates, posts updates, opens the PR', it: 'Devin indaga, posta aggiornamenti, apre la PR' },
          { en: 'Teammates keep chatting in the same thread: full context', it: 'I colleghi continuano nel thread: contesto completo' },
          { en: 'Approve and merge from your normal review flow', it: 'Approvi e mergi dal tuo solito flusso di review' },
        ],
      },
      notes: {
        en: 'This is the “ChatOps” loop the slack-bug-fix tutorial demonstrates end to end.',
        it: 'È il loop “ChatOps” che il tutorial slack-bug-fix mostra dall’inizio alla fine.',
      },
    },
  ],
};

export default mod;
