import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-plugins-mcp',
  category: 'onboarding',
  icon: 'Package',
  title: { en: 'Plugins & MCP marketplace', it: 'Plugin e marketplace MCP' },
  summary: {
    en: 'The Customize page: install capability bundles once, get them in cloud, CLI and Desktop.',
    it: 'La pagina Customize: installi bundle di capacità una volta e li trovi in cloud, CLI e Desktop.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/product-guides/plugins',
    'https://docs.devin.ai/product-guides/plugin-ecosystem',
    'https://docs.devin.ai/work-with-devin/mcp',
    'https://docs.devin.ai/work-with-devin/devin-mcp',
    'https://docs.devin.ai/work-with-devin/deepwiki-mcp',
  ],
  slides: [
    {
      id: 'plugins-cards',
      block: {
        type: 'cards',
        title: { en: 'One install, *three* surfaces', it: 'Un’installazione, *tre* superfici' },
        cards: [
          {
            icon: 'Package',
            title: { en: 'Plugin', it: 'Plugin' },
            text: {
              en: 'A bundle of skills — plus optional rules, hooks, MCPs, subagents — installed as a unit.',
              it: 'Un bundle di skill — più eventuali regole, hook, MCP, subagent — installato come un’unità.',
            },
          },
          {
            icon: 'PlugZap',
            title: { en: 'MCP', it: 'MCP' },
            text: {
              en: 'The open protocol for external tools — stdio, SSE and HTTP transports supported.',
              it: 'Il protocollo aperto per strumenti esterni: supporta trasporti stdio, SSE e HTTP.',
            },
          },
          {
            icon: 'Store',
            title: { en: 'Marketplace', it: 'Marketplace' },
            text: {
              en: 'Browse marketplace on the Customize page — most official plugins wrap one MCP plus skills.',
              it: 'Browse marketplace nella pagina Customize: i plugin ufficiali sono di solito un MCP più skill.',
            },
          },
        ],
      },
      notes: {
        en: 'Three install scopes: Personal, Organization, Enterprise — same plugin everywhere you use Devin.',
        it: 'Tre scope di installazione: Personal, Organization, Enterprise — stesso plugin ovunque usi Devin.',
      },
    },
    {
      id: 'mcp-bullets',
      block: {
        type: 'bullets',
        title: { en: 'MCP is a *USB-C* port for AI', it: 'MCP è una porta *USB-C* per l’AI' },
        icon: 'PlugZap',
        items: [
          { en: 'Sentry, Datadog, Vercel logs — Devin can dig through them', it: 'Log di Sentry, Datadog, Vercel: Devin ci scava dentro' },
          { en: 'Linear tickets, Notion docs, Airtable, Stripe — all reachable', it: 'Ticket Linear, doc Notion, Airtable, Stripe: tutti raggiungibili' },
          { en: 'Connect = install plugin → wait for indexing → Connect → credentials/OAuth', it: 'Connect = installa il plugin → attendi l’indicizzazione → Connect → credenziali/OAuth' },
          { en: 'Devin MCP at mcp.devin.ai gives agents session/knowledge/playbook APIs', it: 'Devin MCP su mcp.devin.ai dà agli agenti API per sessioni/knowledge/playbook' },
          { en: 'DeepWiki MCP at mcp.deepwiki.com is free and authless for public repos', it: 'DeepWiki MCP su mcp.deepwiki.com è gratis e senza auth per repo pubbliche' },
        ],
      },
      notes: {
        en: 'Installing a plugin does not authorize the external service — you still Connect with credentials.',
        it: 'Installare un plugin non autorizza il servizio esterno: serve comunque Connect con le credenziali.',
      },
      funAside: {
        en: 'USB-C for AI: one standard plug, and suddenly everything is a peripheral.',
        it: 'USB-C per l’AI: una spina standard, e improvvisamente tutto è una periferica.',
      },
    },
    {
      id: 'ecosystem-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Run your own *ecosystem*', it: 'Costruisci il tuo *ecosistema*' },
        icon: 'Boxes',
        items: [
          { en: 'Two template repos: plugin-template and team-marketplace-template', it: 'Due repo template: plugin-template e team-marketplace-template' },
          { en: 'A plugin is a directory with .devin-plugin/plugin.json', it: 'Un plugin è una directory con .devin-plugin/plugin.json' },
          { en: 'A monorepo + meta-plugin manifest defines your org baseline', it: 'Un monorepo + manifest del meta-plugin definisce la baseline dell’org' },
          { en: 'Governance: required, optional and forbidden plugin lists', it: 'Governance: liste di plugin required, optional e forbidden' },
        ],
      },
      notes: {
        en: 'Both templates ship a validator script and a CI workflow — plugins are code, review them like code.',
        it: 'Entrambi i template hanno uno script di validazione e una CI: i plugin sono codice, trattali da codice.',
      },
    },
  ],
};

export default mod;
