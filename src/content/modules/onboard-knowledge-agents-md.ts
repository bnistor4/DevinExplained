import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-knowledge-agents-md',
  category: 'onboarding',
  icon: 'BookOpen',
  title: { en: 'Teach Devin your codebase', it: 'Insegna a Devin il tuo codebase' },
  summary: {
    en: 'Knowledge, AGENTS.md and skills: the context layer that makes sessions smarter.',
    it: 'Knowledge, AGENTS.md e skill: il livello di contesto che rende le sessioni più smart.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/onboard-devin/knowledge-onboarding',
    'https://docs.devin.ai/product-guides/knowledge',
    'https://docs.devin.ai/onboard-devin/agents-md',
  ],
  slides: [
    {
      id: 'knowledge-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Onboard Devin like a *new hire*', it: 'Onboarda Devin come un *nuovo assunto*' },
        icon: 'GraduationCap',
        items: [
          { en: 'Devin auto-generates repo knowledge from READMEs and structure', it: 'Devin genera da solo la knowledge dai README e dalla struttura' },
          { en: 'Every knowledge item needs a trigger description — the more specific, the better', it: 'Ogni knowledge vuole una trigger description: più è specifica, meglio è' },
          { en: 'Pin knowledge to all repos, or to just one', it: 'La knowledge si fissa su tutte le repo o solo su una' },
          { en: 'Sessions show “Accessed Knowledge” — you see what it used', it: 'In sessione vedi “Accessed Knowledge”: sai cosa ha usato' },
          { en: 'Macros like !deploy-checklist inject knowledge into a prompt', it: 'Le macro tipo !deploy-checklist iniettano knowledge nel prompt' },
        ],
      },
      notes: {
        en: 'Important: Knowledge is deprecated and being migrated to Skills in Plugins automatically — use Skills for new context.',
        it: 'Importante: Knowledge è deprecata e migrata automaticamente a Skills nei Plugin — per il contesto nuovo usa le Skills.',
      },
    },
    {
      id: 'knowledge-vs-agents',
      block: {
        type: 'compare',
        title: { en: 'Knowledge vs *AGENTS.md*', it: 'Knowledge vs *AGENTS.md*' },
        left: {
          title: { en: 'Knowledge (org level)', it: 'Knowledge (a livello org)' },
          items: [
            { en: 'Lives in Settings → Resources → Knowledge', it: 'Vive in Settings → Resources → Knowledge' },
            { en: 'Retrieved by trigger; can be pinned per repo', it: 'Recuperata dal trigger; fissabile per repo' },
            { en: 'Devin suggests new entries from your feedback', it: 'Devin propone nuove voci dal tuo feedback' },
            { en: 'Deprecated → migrating to Skills in Plugins', it: 'Deprecata → migra a Skills nei Plugin' },
          ],
        },
        right: {
          title: { en: 'AGENTS.md (repo level)', it: 'AGENTS.md (a livello repo)' },
          items: [
            { en: 'An open standard — a README for agents', it: 'Uno standard aperto: un README per gli agenti' },
            { en: 'Lives in the repo root, versioned with the code', it: 'Sta nella root della repo, versionato col codice' },
            { en: 'Setup commands, style rules, testing conventions', it: 'Comandi di setup, regole di stile, convenzioni di test' },
            { en: 'Read automatically before Devin starts coding', it: 'Letto automaticamente prima che Devin scriva codice' },
          ],
        },
      },
      notes: {
        en: 'Rule of thumb: org-wide tips in knowledge/skills, repo-specific facts in AGENTS.md.',
        it: 'Regola pratica: consigli a livello org in knowledge/skill, fatti della repo in AGENTS.md.',
      },
    },
    {
      id: 'agents-md-code',
      block: {
        type: 'code',
        title: { en: 'AGENTS.md, *minimal*', it: 'AGENTS.md, *minimo*' },
        language: 'markdown',
        code: '# AGENTS.md\n\n## Setup Commands\n- Install: `pnpm install`\n- Dev server: `pnpm dev`\n- Tests: `pnpm test`\n\n## Code Style\n- TypeScript strict mode\n- Functional React components\n- Conventional commits',
        caption: {
          en: 'Setup, style, tests, workflow — that’s the whole file. From docs.devin.ai/onboard-devin/agents-md.',
          it: 'Setup, stile, test, workflow: il file è tutto qui. Da docs.devin.ai/onboard-devin/agents-md.',
        },
      },
      notes: {
        en: 'Keep it small — rules and AGENTS.md cost context in every session.',
        it: 'Tienilo piccolo: regole e AGENTS.md costano contesto in ogni sessione.',
      },
    },
  ],
};

export default mod;
