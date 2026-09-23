import type { Module } from '../schema';

const mod: Module = {
  id: 'how-voice-side-chat',
  category: 'how-it-works',
  icon: 'Mic',
  title: { en: 'Voice mode & steering', it: 'Voice mode e steering' },
  summary: {
    en: 'Talk to Devin on a call, and steer running sessions without interrupting the work.',
    it: 'Parla con Devin in una chiamata e guida le sessioni in corso senza interrompere il lavoro.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/work-with-devin/voice-mode',
    'https://docs.devin.ai/work-with-devin/devin-session-tools',
  ],
  slides: [
    {
      id: 'voice-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Talk to Devin, *out loud*', it: 'Parla con Devin, *a voce alta*' },
        icon: 'Mic',
        items: [
          { en: 'Start a call from the voice button in Agent mode or any session', it: 'Avvia una chiamata dal pulsante voce in Agent mode o in una sessione' },
          { en: 'Explore ideas and pressure-test approaches away from the keyboard', it: 'Esplora idee e metti alla prova gli approcci lontano dalla tastiera' },
          { en: 'Interrupt Devin mid-sentence: it’s fine, it’s expected', it: 'Interrompi Devin mentre parla: va bene, è previsto' },
          { en: 'The whole conversation lands in the session history', it: 'Tutta la conversazione finisce nella cronologia della sessione' },
          { en: 'Ask Devin to speak faster, slower, or change style', it: 'Chiedi a Devin di parlare più veloce, più lento o cambiare stile' },
        ],
      },
      notes: {
        en: 'Hold Space to talk while muted. You can keep navigating the app while the call stays connected.',
        it: 'Tieni premuto Space per parlare mentre sei in mute. Puoi navigare l’app con la chiamata attiva.',
      },
      funAside: {
        en: 'Yes, you can interrupt it mid-sentence. It will not bring it up in the retrospective.',
        it: 'Sì, puoi interromperlo a metà frase. Non te lo rinfaccerà in retrospettiva.',
      },
    },
    {
      id: 'steering-cards',
      block: {
        type: 'cards',
        title: { en: 'Steering a *running* session', it: 'Guidare una sessione *in corso*' },
        cards: [
          {
            icon: 'MessagesSquare',
            title: { en: 'Side chats', it: 'Side chat' },
            text: {
              en: 'Ask read-only questions with full context: /btw or the hover menu.',
              it: 'Domande in sola lettura con tutto il contesto: /btw o il menu al passaggio.',
            },
          },
          {
            icon: 'MessageSquare',
            title: { en: 'Main chat', it: 'Chat principale' },
            text: {
              en: 'Send new instructions anytime; Devin picks them up in the session.',
              it: 'Invia nuove istruzioni quando vuoi: Devin le raccoglie nella sessione.',
            },
          },
          {
            icon: 'Code',
            title: { en: 'Take over', it: 'Subentra' },
            text: {
              en: 'Pause the session, edit in the IDE yourself, then resume and tell Devin what you changed.',
              it: 'Metti in pausa, modifica nell’IDE, riprendi e racconta a Devin cosa hai cambiato.',
            },
          },
        ],
      },
      notes: {
        en: 'Key discipline: pause before taking over the IDE to avoid conflicting edits.',
        it: 'Regola chiave: metti in pausa prima di subentrare nell’IDE per evitare modifiche in conflitto.',
      },
    },
    {
      id: 'voice-why',
      block: {
        type: 'bullets',
        title: { en: 'Why it *matters*', it: 'Perché *conta*' },
        icon: 'Mic',
        items: [
          { en: 'Voice is for thinking out loud: sessions keep working while you talk', it: 'La voce serve a ragionare ad alta voce: la sessione lavora mentre parli' },
          { en: 'Side chats answer without touching the running plan', it: 'Le side chat rispondono senza toccare il piano in corso' },
          { en: 'Steering mid-run beats cancelling and restarting', it: 'Guidare a metà corsa batte cancellare e ricominciare' },
          { en: 'Everything is recorded in the same session timeline', it: 'Tutto finisce nella stessa timeline della sessione' },
        ],
      },
      notes: {
        en: 'The mental model: you’re the tech lead in the room, Devin is at the keyboard.',
        it: 'Il modello mentale: tu sei il tech lead nella stanza, Devin è alla tastiera.',
      },
    },
  ],
};

export default mod;
