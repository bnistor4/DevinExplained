import type { Module } from '../schema';

const mod: Module = {
  id: 'usecase-gallery',
  category: 'use-cases',
  icon: 'LayoutGrid',
  title: { en: 'The use-case gallery', it: 'La galleria dei casi d’uso' },
  summary: {
    en: 'A browsable catalog of real prompts — incident response to migrations to automations.',
    it: 'Un catalogo sfogliabile di prompt veri: dall’incident response alle migrazioni alle automazioni.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/use-cases/index',
    'https://docs.devin.ai/use-cases/gallery/index',
    'https://docs.devin.ai/tutorial-library/index',
  ],
  slides: [
    {
      id: 'gallery-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Steal these *prompts*', it: 'Ruba questi *prompt*' },
        icon: 'LayoutGrid',
        items: [
          { en: 'The gallery filters by category: incidents, migrations, features, data…', it: 'La galleria filtra per categoria: incidenti, migrazioni, feature, dati…' },
          { en: '…and by feature: integrations, API, schedules, playbooks, MCP, skills', it: '…e per funzione: integrazioni, API, schedule, playbook, MCP, skill' },
          { en: 'Every card includes a prompt you can try immediately', it: 'Ogni card include un prompt provabile subito' },
          { en: 'The tutorial library is the video version — real sessions, real repos', it: 'La tutorial library è la versione video: sessioni vere, repo vere' },
        ],
      },
      notes: {
        en: 'docs.devin.ai/use-cases/gallery — send people here when they ask “what would I even use it for?”.',
        it: 'docs.devin.ai/use-cases/gallery — manda qui chi chiede “ma io a cosa lo userei?”.',
      },
    },
    {
      id: 'gallery-quote',
      block: {
        type: 'quote',
        text: {
          en: 'Devin is the biggest single contributor to the Cognition repositories.',
          it: 'Devin è il singolo maggior contributor dei repository di Cognition.',
        },
        author: 'docs.devin.ai',
        role: { en: 'Tutorial library', it: 'Tutorial library' },
      },
      notes: {
        en: 'Cognition uses Devin on itself: Slack threads, cleanups, automations, customer tickets — the dogfooding is the pitch.',
        it: 'Cognition usa Devin su se stessa: thread Slack, cleanup, automazioni, ticket dei clienti — il dogfooding è il pitch.',
      },
    },
    {
      id: 'gallery-go-deeper',
      block: {
        type: 'bullets',
        title: { en: 'Go *deeper*', it: 'Vai più a *fondo*' },
        icon: 'BookOpen',
        items: [
          { en: 'Customer stories in the gallery: 8×, 12×, 20× speedups, $10M+ saved', it: 'Storie clienti nella gallery: accelerazioni 8×, 12×, 20×, oltre $10M risparmiati' },
          { en: 'docs.devin.ai/tutorial-library — step-by-step walkthroughs', it: 'docs.devin.ai/tutorial-library: walkthrough passo-passo' },
          { en: 'devin.ai/workflows — hundreds of templates, sorted by ROI', it: 'devin.ai/workflows: centinaia di template ordinati per ROI' },
          { en: 'The library ships inside the web app too — the Lightbulb icon', it: 'La library è anche dentro la web app: l’icona Lightbulb' },
        ],
      },
      notes: {
        en: 'The library itself says: these are the highest-ROI applications, proven across hundreds of enterprises.',
        it: 'La library stessa dice: sono le applicazioni a più alto ROI, provate in centinaia di aziende.',
      },
    },
  ],
};

export default mod;
