import type { Module } from '../schema';

const mod: Module = {
  id: 'closing-resources',
  category: 'closing',
  icon: 'Compass',
  title: { en: 'Where to go next', it: 'Dove andare dopo' },
  summary: {
    en: 'Docs, release notes, CLI reference, support: the four bookmarks to leave behind.',
    it: 'Docs, release note, riferimento CLI, supporto: i quattro segnalibri da lasciare.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/get-started/devin-intro',
    'https://docs.devin.ai/release-notes/overview',
    'https://docs.devin.ai/release-notes/2026',
    'https://docs.devin.ai/release-notes/2025',
    'https://docs.devin.ai/release-notes/2024',
    'https://docs.devin.ai/cli/changelog/stable',
    'https://docs.devin.ai/cli/troubleshooting',
    'https://docs.devin.ai/cli/reference/commands',
    'https://docs.devin.ai/cli/reference/keyboard-shortcuts',
    'https://docs.devin.ai/cli/reference/terminal-compatibility',
    'https://docs.devin.ai/cli/reference/configuration/config-file',
    'https://docs.devin.ai/cli/reference/configuration/read-config-from',
    'https://docs.devin.ai/cli/reference/configuration/global-vs-local',
    'https://docs.devin.ai/cli/reference/permissions',
    'https://docs.devin.ai/cli/extensibility/configuration',
    'https://docs.devin.ai/cli/extensibility/mcp/configuration',
    'https://docs.devin.ai/cli/extensibility/skills/creating-skills',
    'https://docs.devin.ai/cli/extensibility/plugins/quickstart',
    'https://docs.devin.ai/cli/extensibility/hooks/lifecycle-hooks',
    'https://docs.devin.ai/cli/cloud',
    'https://docs.devin.ai/product-guides/invite-team',
    'https://docs.devin.ai/onboard-devin/environment/testflight',
    'https://docs.devin.ai/cloud/outposts/orchestration',
    'https://docs.devin.ai/cloud/outposts/reference',
    'https://docs.devin.ai/cloud/outposts/partners',
  ],
  slides: [
    {
      id: 'resources-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Bookmark *these*', it: 'Salva *questi*' },
        icon: 'Compass',
        items: [
          { en: 'docs.devin.ai: the whole surface, searchable and example-driven', it: 'docs.devin.ai: tutta la superficie, ricercabile e piena di esempi' },
          { en: 'Release notes: Devin ships weekly; 2024/2025/2026 archives tell the pace', it: 'Release note: Devin rilascia ogni settimana; gli archivi 2024/2025/2026 mostrano il ritmo' },
          { en: 'CLI reference: commands, flags, keyboard shortcuts, config precedence', it: 'Riferimento CLI: comandi, flag, shortcut, precedenza della config' },
          { en: 'support@cognition.ai, plus the Help icon in the app', it: 'support@cognition.ai, più l’icona Help dentro l’app' },
          { en: 'Settings > Membership to invite the team: three default roles', it: 'Settings > Membership per invitare il team: tre ruoli di default' },
        ],
      },
      notes: {
        en: 'Recent release-notes example: folder uploads, auto merge-conflict fixes, shell durations in the worklog. Steady, practical shipping.',
        it: 'Esempio dalle ultime release note: upload di cartelle, fix automatici dei conflitti di merge, durate dei comandi shell nel worklog: shipping pratico e costante.',
      },
    },
    {
      id: 'resources-cli',
      block: {
        type: 'code',
        title: { en: 'And the *CLI*, again', it: 'E di nuovo la *CLI*' },
        language: 'bash',
        code: 'curl -fsSL https://cli.devin.ai/install.sh | bash\n\ndevin --continue   # resume the last session in this dir',
        caption: {
          en: 'man devin reads the full reference from your terminal.',
          it: 'man devin legge tutto il riferimento dal terminale.',
        },
      },
      notes: {
        en: 'One-line close: everything shown today is one curl away.',
        it: 'Chiusura in una riga: tutto quello visto oggi è a un curl di distanza.',
      },
    },
    {
      id: 'resources-help',
      block: {
        type: 'bullets',
        title: { en: 'When you’re *stuck*', it: 'Quando sei *bloccato*' },
        icon: 'LifeBuoy',
        items: [
          { en: 'support@cognition.ai: the direct line', it: 'support@cognition.ai: il canale diretto' },
          { en: 'Help icon inside the app: context-aware support', it: 'Icona Help dentro l’app: supporto contestuale' },
          { en: 'Slack Connect channel for Teams and Enterprise orgs', it: 'Canale Slack Connect per le org Teams ed Enterprise' },
          { en: 'cli/troubleshooting for local CLI issues', it: 'cli/troubleshooting per i problemi della CLI in locale' },
          { en: 'release-notes/*: what changed this month', it: 'release-notes/*: cosa è cambiato questo mese' },
        ],
      },
      notes: {
        en: 'Leave these up while you take questions: the room will photograph this slide.',
        it: 'Lascia questa slide su mentre rispondi: la sala la fotograferà.',
      },
    },
  ],
};

export default mod;
