import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-cli-extensibility',
  category: 'surfaces',
  icon: 'Puzzle',
  title: { en: 'Rules, skills, hooks, MCP', it: 'Regole, skill, hook, MCP' },
  summary: {
    en: 'The .devin/ directory: shape Devin’s personality, give it new capabilities and tools, enforce policy.',
    it: 'La directory .devin/: personalità di Devin, nuove capacità e strumenti, policy applicate.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/cli/extensibility/index',
    'https://docs.devin.ai/cli/extensibility/rules',
    'https://docs.devin.ai/cli/extensibility/skills/overview',
    'https://docs.devin.ai/cli/extensibility/skills/creating-skills',
    'https://docs.devin.ai/cli/extensibility/hooks/overview',
    'https://docs.devin.ai/cli/extensibility/mcp/overview',
    'https://docs.devin.ai/cli/extensibility/plugins/overview',
    'https://docs.devin.ai/cli/subagents',
    'https://docs.devin.ai/cli/sandbox',
  ],
  slides: [
    {
      id: 'extensibility-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Five *layers* of control', it: 'Cinque *livelli* di controllo' },
        cards: [
          {
            icon: 'BookOpen',
            title: { en: 'Rules', it: 'Regole' },
            text: {
              en: 'Always-on instructions (AGENTS.md) that shape behavior in every session.',
              it: 'Istruzioni sempre attive (AGENTS.md) che guidano ogni sessione.',
            },
          },
          {
            icon: 'Sparkles',
            title: { en: 'Skills', it: 'Skill' },
            text: {
              en: 'Reusable expertise invoked as /skill or by the agent when relevant.',
              it: 'Competenze riusabili invocabili con /skill o dall’agente quando servono.',
            },
          },
          {
            icon: 'Webhook',
            title: { en: 'Hooks', it: 'Hook' },
            text: {
              en: 'Shell commands at lifecycle events: e.g. block a dangerous command.',
              it: 'Comandi shell agli eventi del ciclo di vita: ad es. bloccare un comando pericoloso.',
            },
          },
          {
            icon: 'PlugZap',
            title: { en: 'MCP servers', it: 'Server MCP' },
            text: {
              en: 'External tools (GitHub, Linear, databases) callable like built-ins.',
              it: 'Strumenti esterni (GitHub, Linear, database) chiamabili come quelli interni.',
            },
          },
          {
            icon: 'Users',
            title: { en: 'Subagents', it: 'Subagent' },
            text: {
              en: 'Specialized workers with their own context, spawned by the main agent.',
              it: 'Worker specializzati con contesto proprio, avviati dall’agente principale.',
            },
          },
          {
            icon: 'Package',
            title: { en: 'Plugins', it: 'Plugin' },
            text: {
              en: 'Bundles of skills, rules, hooks and MCP servers installed from git.',
              it: 'Pacchetti di skill, regole, hook e server MCP installabili da git.',
            },
          },
        ],
      },
      notes: {
        en: 'Docs’ advice: prefer skills over rules, skills load only when relevant, keeping context lean.',
        it: 'Consiglio dei docs: preferisci le skill alle regole, le skill entrano nel contesto solo quando servono.',
      },
    },
    {
      id: 'skill-code',
      block: {
        type: 'code',
        title: { en: 'A skill is a *markdown file*', it: 'Una skill è un *file markdown*' },
        language: 'markdown',
        code: '# .devin/skills/review/SKILL.md\n---\nname: review\ndescription: Review code changes before committing\nallowed-tools:\n  - read\n  - grep\n---\n\nReview the diff like a senior engineer:\nsecurity first, then correctness, then style.',
        caption: {
          en: 'Invoke it with /review, or the agent picks it up when relevant.',
          it: 'Si invoca con /review, oppure l’agente la usa quando serve.',
        },
      },
      notes: {
        en: 'Directory name = skill id. Frontmatter can set argument hints, tools, model and permissions.',
        it: 'Il nome della directory è l’id della skill. Il frontmatter può definire argomenti, tool, modello e permessi.',
      },
    },
    {
      id: 'sandbox-bullets',
      block: {
        type: 'bullets',
        title: { en: 'The *safety* layer', it: 'Il livello di *sicurezza*' },
        icon: 'ShieldCheck',
        items: [
          { en: '--sandbox isolates the CLI at OS level: only granted paths are writable', it: '--sandbox isola la CLI a livello OS: scrivibili solo i percorsi autorizzati' },
          { en: 'deny rules can hide paths entirely from sandboxed commands', it: 'Le regole deny possono nascondere del tutto dei percorsi ai comandi' },
          { en: 'If sandboxing can’t initialize, the CLI refuses to start: fail closed', it: 'Se il sandbox non si inizializza, la CLI non parte: fail closed' },
          { en: 'Subagents run foreground or background: each with its own context and cost', it: 'I subagent girano in foreground o background, con contesto e costo propri' },
        ],
      },
      notes: {
        en: 'Sandbox needs bubblewrap+socat on Linux, not supported on Windows; macOS is fine.',
        it: 'Il sandbox richiede bubblewrap+socat su Linux; su Windows non è supportato; su macOS va bene.',
      },
    },
  ],
};

export default mod;
