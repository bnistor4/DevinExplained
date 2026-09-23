import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-editors-acp',
  category: 'surfaces',
  icon: 'Code',
  title: { en: 'Inside your IDE (ACP)', it: 'Dentro il tuo IDE (ACP)' },
  summary: {
    en: 'JetBrains, Zed and Xcode can run Devin as an agent through the Agent Client Protocol.',
    it: 'JetBrains, Zed e Xcode eseguono Devin come agente tramite l’Agent Client Protocol.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/cli/acp/jetbrains',
    'https://docs.devin.ai/cli/acp/zed',
    'https://docs.devin.ai/cli/acp/xcode',
  ],
  slides: [
    {
      id: 'acp-cards',
      block: {
        type: 'cards',
        title: { en: 'Devin *inside* your editor', it: 'Devin *dentro* il tuo editor' },
        cards: [
          {
            icon: 'AppWindow',
            title: { en: 'JetBrains', it: 'JetBrains' },
            text: {
              en: 'Devin runs in AI Chat via ACP (IntelliJ, PyCharm, GoLand), installable from the ACP Registry.',
              it: 'Devin gira nell’AI Chat via ACP (IntelliJ, PyCharm, GoLand), installabile dall’ACP Registry.',
            },
          },
          {
            icon: 'Zap',
            title: { en: 'Zed', it: 'Zed' },
            text: {
              en: 'Native ACP support: “zed: acp registry”, install Devin, log in with browser, chat in the Agent Panel.',
              it: 'Supporto ACP nativo: “zed: acp registry”, installi Devin, login via browser, chatti nell’Agent Panel.',
            },
          },
          {
            icon: 'Apple',
            title: { en: 'Xcode', it: 'Xcode' },
            text: {
              en: 'Xcode 26.6+ coding intelligence can run Devin as a custom ACP agent from your local CLI.',
              it: 'Xcode 26.6+ esegue Devin come agente ACP personalizzato dalla tua CLI locale.',
            },
          },
        ],
      },
      notes: {
        en: 'For JetBrains: the old Windsurf plugin is in maintenance mode, Devin over ACP is the way forward.',
        it: 'Per JetBrains: il vecchio plugin Windsurf è in maintenance mode, la via giusta è Devin via ACP.',
      },
    },
    {
      id: 'acp-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Why *ACP* matters', it: 'Perché *ACP* conta' },
        icon: 'PlugZap',
        items: [
          { en: 'One open protocol: the same Devin agent runs in several IDEs', it: 'Un protocollo aperto: lo stesso agente Devin gira in diversi IDE' },
          { en: 'Real-time edits, syntax highlighting and agent following in-editor', it: 'Modifiche in tempo reale, syntax highlighting e agent following nell’editor' },
          { en: 'Threads start on your configured model, or your org’s default', it: 'I thread partono sul modello configurato, o sul default dell’org' },
          { en: 'JetBrains Remote Development works too', it: 'Funziona anche con JetBrains Remote Development' },
        ],
      },
      notes: {
        en: 'ACP is an open protocol (agentclientprotocol.com): no vendor lock-in on the editor side.',
        it: 'ACP è un protocollo aperto (agentclientprotocol.com): nessun lock-in lato editor.',
      },
    },
    {
      id: 'acp-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a *universal* remote for coding agents: one protocol, every IDE.',
          it: 'un telecomando *universale* per gli agenti di coding: un protocollo, ogni IDE.',
        },
        icon: 'SatelliteDish',
      },
      notes: {
        en: 'ACP decouples the agent from the editor: same reason LSP mattered for language servers.',
        it: 'ACP separa l’agente dall’editor: lo stesso motivo per cui LSP ha contato per i language server.',
      },
    },
  ],
};

export default mod;
