import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-skills-playbooks',
  category: 'onboarding',
  icon: 'Sparkles',
  title: { en: 'Skills & Playbooks', it: 'Skills e Playbook' },
  summary: {
    en: 'Reusable procedures committed to the repo vs. shared prompt templates — when to use which.',
    it: 'Procedure riusabili committate nella repo vs. prompt template condivisi: quando usare cosa.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/product-guides/skills',
    'https://docs.devin.ai/product-guides/creating-playbooks',
    'https://docs.devin.ai/product-guides/using-playbooks',
  ],
  slides: [
    {
      id: 'skills-vs-playbooks',
      block: {
        type: 'compare',
        title: { en: 'Skills vs *playbooks*', it: 'Skills vs *playbook*' },
        left: {
          title: { en: 'Skills', it: 'Skills' },
          items: [
            { en: 'SKILL.md files committed at .agents/skills/<name>/', it: 'File SKILL.md committati in .agents/skills/<nome>/' },
            { en: 'Open standard — work across multiple AI coding tools', it: 'Standard aperto: funzionano in più strumenti AI' },
            { en: 'Devin suggests new skills after sessions — one click to PR', it: 'Devin propone nuove skill dopo le sessioni: un click per la PR' },
            { en: 'Invoke with /skill-name or let Devin pick them up', it: 'Si invocano con /skill-name o le usa Devin da solo' },
          ],
        },
        right: {
          title: { en: 'Playbooks', it: 'Playbook' },
          items: [
            { en: 'Shared prompt templates — org, enterprise or system scope', it: 'Prompt template condivisi: scope org, enterprise o system' },
            { en: 'Attach via the playbook picker or a !macro', it: 'Si allegano dal picker o con una !macro' },
            { en: 'Editable inline before the session starts', it: 'Modificabili inline prima di avviare la sessione' },
            { en: 'Iterate live as you run them', it: 'Si rifiniscono live mentre le usi' },
          ],
        },
      },
      notes: {
        en: 'Skills = procedure stored in git. Playbooks = prompt template stored in the app. Both kill repetition.',
        it: 'Skill = procedura in git. Playbook = prompt template nell’app. Entrambi uccidono la ripetizione.',
      },
    },
    {
      id: 'skills-bullets',
      block: {
        type: 'bullets',
        title: { en: 'When a workflow *deserves* a skill', it: 'Quando un workflow *merita* una skill' },
        icon: 'Sparkles',
        items: [
          { en: 'It should run the same way every time — test checklists, deploy steps', it: 'Deve girare sempre uguale: checklist di test, passi di deploy' },
          { en: 'It needs repo-specific knowledge — services, ports, commands', it: 'Serve conoscenza della repo: servizi, porte, comandi' },
          { en: 'It benefits from dynamic context — diffs, branch names, env', it: 'Gode di contesto dinamico: diff, nomi di branch, env' },
          { en: 'A skill can even carry a dynamic-workflow script', it: 'Una skill può anche contenere uno script di dynamic workflow' },
        ],
      },
      notes: {
        en: 'Over time Devin builds a library of skills about how to run, test and deploy your app.',
        it: 'Col tempo Devin costruisce una libreria di skill su come avviare, testare e deployare la tua app.',
      },
      funAside: {
        en: 'A skill is a “how we do things here” that nobody can lose in a wiki page.',
        it: 'Una skill è il “da noi si fa così” che nessuno può perdere in una pagina wiki.',
      },
    },
    {
      id: 'skill-file',
      block: {
        type: 'code',
        title: { en: 'SKILL.md, *real*', it: 'SKILL.md, *vero*' },
        language: 'markdown',
        code: '---\nname: test-before-pr\ndescription: Run the dev server and verify\n  pages before opening any frontend PR.\n---\n\n## Setup\n1. Install dependencies: `npm install`\n2. Start the dev server\n3. Click through the pages you changed',
        caption: {
          en: 'Committed at .agents/skills/<name>/SKILL.md — auto-discovered across connected repos.',
          it: 'Committato in .agents/skills/<nome>/SKILL.md — scoperto automaticamente su tutte le repo collegate.',
        },
      },
      notes: {
        en: 'This is the docs’ own example, trimmed. Skills follow the open Agent Skills standard.',
        it: 'È l’esempio dei docs, accorciato. Le skill seguono lo standard aperto Agent Skills.',
      },
    },
  ],
};

export default mod;
