import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-cli',
  category: 'surfaces',
  icon: 'SquareTerminal',
  title: { en: 'Devin CLI', it: 'Devin CLI' },
  summary: {
    en: 'A local coding agent in your terminal: install in 2 minutes, hand off to the cloud when needed.',
    it: 'Un agente locale nel tuo terminale: si installa in 2 minuti e passa al cloud quando serve.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/cli/index',
    'https://docs.devin.ai/cli/essential-commands',
    'https://docs.devin.ai/cli/handoff',
    'https://docs.devin.ai/cli/ssh',
    'https://docs.devin.ai/work-with-devin/devin-cli',
  ],
  slides: [
    {
      id: 'cli-install',
      block: {
        type: 'code',
        title: { en: 'Install in *two minutes*', it: 'Installazione in *due minuti*' },
        language: 'bash',
        code: '# macOS / Linux / WSL\ncurl -fsSL https://cli.devin.ai/install.sh | bash\n\n# Windows (PowerShell)\nirm https://static.devin.ai/cli/setup.ps1 | iex\n\n# then, in any project\ndevin',
        caption: {
          en: 'Also on Homebrew: brew install --cask devin-cli. Bundled with Devin Desktop.',
          it: 'Anche via Homebrew: brew install --cask devin-cli. Incluso in Devin Desktop.',
        },
      },
      notes: {
        en: 'Works on macOS, Linux, WSL and Windows. The installer adds the devin binary to your PATH.',
        it: 'Funziona su macOS, Linux, WSL e Windows. L’installer aggiunge il binario devin al PATH.',
      },
    },
    {
      id: 'cli-commands',
      block: {
        type: 'bullets',
        title: { en: 'The *essential* commands', it: 'I comandi *essenziali*' },
        icon: 'SquareTerminal',
        items: [
          { en: 'devin: interactive REPL; devin -- “prompt” starts with a prompt', it: 'devin apre la REPL; devin -- “prompt” parte già con un prompt' },
          { en: 'devin -p “prompt”: single-turn, prints to stdout (great for scripts)', it: 'devin -p “prompt”: singolo turno su stdout, perfetto per gli script' },
          { en: '@ autocompletes local files; Ctrl+V pastes images', it: '@ autocompleta i file locali; Ctrl+V incolla le immagini' },
          { en: 'Five permission modes: Normal, Accept Edits, Smart, Bypass, Autonomous', it: 'Cinque modalità di permesso: Normal, Accept Edits, Smart, Bypass, Autonomous' },
          { en: '/plan and /ask switch agent modes mid-session', it: '/plan e /ask cambiano modalità a sessione in corso' },
        ],
      },
      notes: {
        en: 'Long-running commands go to background automatically: Devin keeps working and checks output later.',
        it: 'I comandi lunghi vanno in background da soli: Devin continua e controlla l’output dopo.',
      },
    },
    {
      id: 'cli-beyond-local',
      block: {
        type: 'cards',
        title: { en: 'When local isn’t *enough*', it: 'Quando il locale non *basta*' },
        cards: [
          {
            icon: 'Cloud',
            title: { en: '/handoff', it: '/handoff' },
            text: {
              en: 'Sends the session (branch, context, uncommitted diff) to a cloud Devin VM.',
              it: 'Manda la sessione (branch, contesto, diff non committato) a una VM Devin cloud.',
            },
          },
          {
            icon: 'SquareTerminal',
            title: { en: 'devin ssh', it: 'devin ssh' },
            text: {
              en: 'Open a shell on the cloud session’s VM, or use plain ssh and scp.',
              it: 'Apre una shell sulla VM della sessione cloud, oppure ssh e scp normali.',
            },
          },
          {
            icon: 'ArrowRight',
            title: { en: 'devin forward', it: 'devin forward' },
            text: {
              en: 'Forward a VM port to localhost to poke at its dev server.',
              it: 'Inoltra una porta della VM su localhost per provare il suo dev server.',
            },
          },
        ],
      },
      notes: {
        en: '/handoff also works backwards: in a cloud session it fetches the PR branch and continues locally.',
        it: '/handoff funziona anche al contrario: in una sessione cloud recupera il branch della PR e continua in locale.',
      },
      funAside: {
        en: 'Close the laptop. The PR will still be there in the morning. Creepy? Useful.',
        it: 'Chiudi il laptop. La PR sarà comunque lì domattina. Inquietante? Utile.',
      },
    },
  ],
};

export default mod;
