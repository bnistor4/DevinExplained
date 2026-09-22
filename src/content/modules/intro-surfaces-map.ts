import type { Module } from '../schema';

const mod: Module = {
  id: 'intro-surfaces-map',
  category: 'intro',
  icon: 'Map',
  title: { en: 'One Devin, many doors', it: 'Un solo Devin, tante porte' },
  summary: {
    en: 'Every surface where you can work with Devin: web app, chat, CLI, Desktop, API, IDE.',
    it: 'Tutte le superfici da cui lavorare con Devin: web app, chat, CLI, Desktop, API, IDE.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/get-started/devin-intro',
    'https://docs.devin.ai/essential-guidelines/when-to-use-devin',
    'https://docs.devin.ai/work-with-devin/devin-cli',
    'https://docs.devin.ai/cli/acp/jetbrains',
    'https://docs.devin.ai/cli/acp/zed',
    'https://docs.devin.ai/cli/acp/xcode',
  ],
  slides: [
    {
      id: 'surfaces-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'One Devin, *six doors*', it: 'Un solo Devin, *sei porte*' },
        cards: [
          {
            icon: 'Globe',
            title: { en: 'Web app', it: 'Web app' },
            text: {
              en: 'app.devin.ai — the full workspace with Shell, IDE and Browser.',
              it: 'app.devin.ai: il workspace completo con Shell, IDE e Browser.',
            },
          },
          {
            icon: 'MessageSquare',
            title: { en: 'Slack & Teams', it: 'Slack e Teams' },
            text: {
              en: 'Tag Devin in a thread; it replies in-thread with updates and a PR.',
              it: 'Tagga Devin in un thread: risponde lì con aggiornamenti e una PR.',
            },
          },
          {
            icon: 'SquareTerminal',
            title: { en: 'Devin CLI', it: 'Devin CLI' },
            text: {
              en: 'A local coding agent in your terminal — macOS, Linux, WSL and Windows.',
              it: 'Un agente locale nel tuo terminale: macOS, Linux, WSL e Windows.',
            },
          },
          {
            icon: 'Monitor',
            title: { en: 'Devin Desktop', it: 'Devin Desktop' },
            text: {
              en: 'The desktop app, with the CLI bundled in.',
              it: "L'app desktop, con la CLI già inclusa.",
            },
          },
          {
            icon: 'Braces',
            title: { en: 'Devin API', it: 'API Devin' },
            text: {
              en: 'Programmatic orchestration: start and manage sessions from your tools.',
              it: 'Orchestrazione programmatica: avvia e gestisci sessioni dai tuoi strumenti.',
            },
          },
          {
            icon: 'Code',
            title: { en: 'IDE via ACP', it: 'IDE via ACP' },
            text: {
              en: 'JetBrains, Zed and Xcode talk to Devin through the Agent Client Protocol.',
              it: 'JetBrains, Zed e Xcode parlano con Devin tramite l’Agent Client Protocol.',
            },
          },
        ],
      },
      notes: {
        en: 'Same engine, different doors. Pick the surface closest to where the work already lives.',
        it: 'Stesso motore, porte diverse. Scegli la superficie più vicina a dove vive già il lavoro.',
      },
    },
    {
      id: 'successful-workflows',
      block: {
        type: 'bullets',
        title: { en: 'The workflows that *work*', it: 'I workflow che *funzionano*' },
        icon: 'Workflow',
        items: [
          { en: 'Tag Devin on a Slack or Teams thread about a bug', it: 'Tagga Devin su un thread Slack o Teams che parla di un bug' },
          { en: 'Delegate a complex task in the web app, then take over in its IDE', it: 'Delega un task complesso dalla web app, poi subentra nel suo IDE' },
          { en: 'Quick local fixes in Devin CLI, then /handoff to the cloud', it: 'Fix veloci in locale con la CLI, poi /handoff verso il cloud' },
          { en: 'Carve tasks off your todo list in the morning, review draft PRs later', it: 'Smista task dalla tua todo list al mattino, rivedi le draft PR più tardi' },
        ],
      },
      notes: {
        en: 'Devin is most effective inside your existing workflow, not as a separate destination.',
        it: 'Devin dà il meglio dentro al workflow che già usi, non come destinazione a parte.',
      },
    },
    {
      id: 'surfaces-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a colleague who is *equally reachable* by desk, phone, chat and carrier pigeon.',
          it: 'un collega *sempre raggiungibile*: scrivania, telefono, chat e piccione viaggiatore.',
        },
        icon: 'DoorOpen',
      },
      notes: {
        en: 'Whatever door you knock on, the same Devin answers.',
        it: 'Qualunque porta bussi, risponde sempre lo stesso Devin.',
      },
    },
  ],
};

export default mod;
