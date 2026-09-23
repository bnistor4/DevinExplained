import type { Module } from '../schema';

const mod: Module = {
  id: 'how-computer-use-testing',
  category: 'how-it-works',
  icon: 'MonitorSmartphone',
  title: { en: 'Devin tests like a human', it: 'Devin testa come un umano' },
  summary: {
    en: 'Computer Use gives Devin a mouse, keyboard and screen, so it can click through your app and send you a recording.',
    it: 'Computer Use dà a Devin mouse, tastiera e schermo: clicca nella tua app e ti manda la registrazione.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/work-with-devin/computer-use',
    'https://docs.devin.ai/work-with-devin/testing-and-recordings',
    'https://docs.devin.ai/work-with-devin/browser-auth',
  ],
  slides: [
    {
      id: 'computer-use-bullets',
      block: {
        type: 'bullets',
        title: { en: 'A *real desktop* with its own apps', it: 'Un *desktop vero* con le sue app' },
        icon: 'MousePointerClick',
        items: [
          { en: 'Devin sees a 1024×768 screen and can click, type, scroll, drag, screenshot', it: 'Devin vede uno schermo 1024×768: clicca, scrive, scorre, trascina, fa screenshot' },
          { en: 'Works on web apps, desktop apps, TUIs: anything on screen', it: 'Funziona su web app, app desktop, TUI: qualunque cosa sia a schermo' },
          { en: 'Linux by default; Windows and macOS sessions supported', it: 'Linux di default; sessioni Windows e macOS supportate' },
          { en: 'On macOS it can test Mac apps and iOS apps in the Simulator', it: 'Su macOS testa app Mac e app iOS nel Simulator' },
          { en: 'Enable it in Settings → Devin → Computer use (all plans)', it: 'Si attiva in Settings → Devin → Computer use (tutti i piani)' },
        ],
      },
      notes: {
        en: 'This is what “tests like a human” means concretely: pixels, pointer and keyboard.',
        it: 'Questo è il senso letterale di “testa come un umano”: pixel, puntatore e tastiera.',
      },
      funAside: {
        en: 'It finally has a mouse. It still doesn’t have a coffee machine.',
        it: 'Finalmente ha un mouse. La macchinetta del caffè ancora no.',
      },
    },
    {
      id: 'testing-workflow-cards',
      block: {
        type: 'cards',
        title: { en: 'The *test & record* workflow', it: 'Il workflow *testa e registra*' },
        cards: [
          {
            icon: 'Package',
            title: { en: '1 · Setup', it: '1 · Setup' },
            text: {
              en: 'Installs dependencies, starts services, logs in, checks environments.',
              it: 'Installa le dipendenze, avvia i servizi, fa login, verifica gli ambienti.',
            },
          },
          {
            icon: 'ListChecks',
            title: { en: '2 · Plan', it: '2 · Piano' },
            text: {
              en: 'Writes a short test plan for the single most important end-to-end flow.',
              it: 'Scrive un piano breve per il flusso end-to-end più importante.',
            },
          },
          {
            icon: 'Video',
            title: { en: '3 · Record', it: '3 · Registra' },
            text: {
              en: 'Screen-records the test and sends you the video as an attachment.',
              it: 'Registra lo schermo durante il test e ti manda il video in allegato.',
            },
          },
        ],
      },
      notes: {
        en: 'The goal: a reviewer watches the recording and thinks “yep, it works”, then merges.',
        it: 'L’obiettivo: chi rivede guarda il video, pensa “sì, funziona”, e fa merge.',
      },
    },
    {
      id: 'browser-auth-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Log in *once*, stay logged in', it: 'Un *login* solo, per sempre' },
        icon: 'KeyRound',
        items: [
          { en: 'Drive the browser yourself through SSO, MFA, CAPTCHAs', it: 'Guidi tu il browser attraverso SSO, MFA e CAPTCHA' },
          { en: 'Say “save the browser profile”: Devin zips cookies and storage', it: 'Poi dici “save the browser profile”: Devin zippa cookie e storage' },
          { en: 'Approve the blueprint step once: every future session starts logged in', it: 'Approvato lo step nel blueprint, ogni sessione futura parte già loggata' },
          { en: 'Org-level, under 200 MB, saved passwords excluded: use Secrets for credentials', it: 'A livello org, sotto i 200 MB, password escluse: per le credenziali usa Secrets' },
        ],
      },
      notes: {
        en: 'Warn the room: saved profiles are org-level; use a dedicated service account, not your personal login.',
        it: 'Avviso da fare a voce: i profili salvati sono a livello org, usa un service account dedicato, non il tuo login.',
      },
    },
  ],
};

export default mod;
