import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-environment-blueprints',
  category: 'onboarding',
  icon: 'Layers',
  title: { en: 'Environment & blueprints', it: 'Ambiente e blueprint' },
  summary: {
    en: 'Every session boots from a snapshot. The blueprint is how you build a good one — once.',
    it: 'Ogni sessione parte da uno snapshot. Il blueprint è come ne costruisci uno buono — una volta sola.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/onboard-devin/environment',
    'https://docs.devin.ai/onboard-devin/environment/blueprints',
    'https://docs.devin.ai/onboard-devin/environment/blueprint-reference',
    'https://docs.devin.ai/tutorial-library/repo-setup',
    'https://docs.devin.ai/onboard-devin/environment/macos-support',
    'https://docs.devin.ai/onboard-devin/environment/windows-support',
    'https://docs.devin.ai/onboard-devin/environment/android-emulation',
    'https://docs.devin.ai/onboard-devin/environment/differential-builds',
    'https://docs.devin.ai/onboard-devin/environment/testflight',
  ],
  slides: [
    {
      id: 'env-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Devin’s *laptop*', it: 'Il *laptop* di Devin' },
        icon: 'Layers',
        items: [
          { en: 'The environment is a VM with repos cloned, tools installed, secrets wired', it: 'L’ambiente è una VM con repo clonate, tool installati, secrets configurati' },
          { en: 'Configuration is saved as a snapshot — a frozen, bootable image', it: 'La configurazione è salvata come snapshot: un’immagine congelata e avviabile' },
          { en: 'Every session boots a fresh copy of the same snapshot', it: 'Ogni sessione avvia una copia fresca dello stesso snapshot' },
          { en: 'It’s the single highest-leverage thing for Devin’s effectiveness', it: 'È la singola cosa con più leva sull’efficacia di Devin' },
          { en: 'Easiest setup: just ask Devin “set up your environment for this repository”', it: 'Il setup più facile: chiedi a Devin “set up your environment for this repository”' },
        ],
      },
      notes: {
        en: 'The docs literally say: hiring a developer without a laptop. The repo-setup tutorial shows the one-prompt setup.',
        it: 'I docs lo dicono letteralmente: assumere uno sviluppatore senza laptop. Il tutorial repo-setup mostra il setup con un prompt.',
      },
    },
    {
      id: 'blueprint-code',
      block: {
        type: 'code',
        title: { en: 'A blueprint is *declarative* YAML', it: 'Un blueprint è YAML *dichiarativo*' },
        language: 'yaml',
        code: 'initialize:    # install tools & runtimes\nmaintenance:   # install project dependencies\nknowledge:     # reference info (never executed)\nruns-on:       # build platforms (default: ["default"])\n\nruns-on: windows  # e.g. a Windows snapshot\ninitialize:\n  - name: "Install Node.js"\n    uses: github.com/actions/setup-node@v4\n    with:\n      node-version: "20"',
        caption: {
          en: 'Three core sections, all optional. Maintenance commands surface to the agent, not auto-run.',
          it: 'Tre sezioni principali, tutte opzionali. I comandi maintenance arrivano all’agente come contesto, non girano da soli.',
        },
      },
      notes: {
        en: 'initialize runs at build time into the snapshot; knowledge is never executed — it’s reference for the agent.',
        it: 'initialize gira a build time e finisce nello snapshot; knowledge non è mai eseguita: è riferimento per l’agente.',
      },
    },
    {
      id: 'platforms-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Not just *Linux* anymore', it: 'Non solo *Linux* ormai' },
        cards: [
          {
            icon: 'Apple',
            title: { en: 'macOS VMs', it: 'VM macOS' },
            text: {
              en: 'runs-on: macos — build and test iOS/macOS apps, upload to TestFlight.',
              it: 'runs-on: macos — build e test di app iOS/macOS, upload su TestFlight.',
            },
          },
          {
            icon: 'AppWindow',
            title: { en: 'Windows VMs', it: 'VM Windows' },
            text: {
              en: 'runs-on: windows — Git Bash by default, or PowerShell via the shell field.',
              it: 'runs-on: windows — Git Bash di default, o PowerShell con il campo shell.',
            },
          },
          {
            icon: 'Smartphone',
            title: { en: 'Android emulators', it: 'Emulatori Android' },
            text: {
              en: 'adb + computer-use on a real emulator — tap flows, capture logcat, send the video.',
              it: 'adb + computer use su un vero emulatore: tocca i flussi, cattura logcat, manda il video.',
            },
          },
        ],
      },
      notes: {
        en: 'Windows support is limited-access today (contact Cognition). Android runs on the same blueprint system.',
        it: 'Il supporto Windows è ad accesso limitato (contatta Cognition). Android gira sullo stesso sistema di blueprint.',
      },
    },
  ],
};

export default mod;
