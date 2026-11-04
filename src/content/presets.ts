import type { L10n } from './schema';
import { baseModules } from './modules';

export type Preset = {
  id: string;
  title: L10n;
  moduleIds: string[];
};

export const presets: Preset[] = [
  {
    id: 'pitch-5',
    title: { en: 'Pitch · 5 min', it: 'Pitch · 5 min' },
    moduleIds: [
      'intro-what-is-devin',
      'intro-three-hour-rule',
      'usecase-gallery',
      'pricing-self-serve',
      'closing-qa',
    ],
  },
  {
    id: 'meetup-20',
    title: { en: 'Meetup · 20 min', it: 'Meetup · 20 min' },
    moduleIds: [
      'intro-what-is-devin',
      'intro-three-hour-rule',
      'history-timeline',
      'how-session-lifecycle',
      'surface-slack-teams',
      'surface-cli',
      'product-deepwiki',
      'product-devin-review',
      'prompt-good-vs-bad',
      'usecase-migrations',
      'pricing-self-serve',
      'closing-resources',
      'closing-qa',
    ],
  },
  {
    id: 'deep-enterprise',
    title: { en: 'Deep-dive · Enterprise', it: 'Deep-dive · Enterprise' },
    moduleIds: [
      'intro-what-is-devin',
      'history-founders',
      'history-news',
      'onboard-knowledge-agents-md',
      'onboard-environment-blueprints',
      'onboard-secrets-security-profiles',
      'onboard-outposts',
      'product-security-swarm-code-scans',
      'product-automations-triage',
      'integ-scm',
      'enterprise-overview',
      'enterprise-security-access',
      'enterprise-governance',
      'pricing-usage-credits',
      'closing-qa',
    ],
  },
  {
    id: 'dev-hands-on',
    title: { en: 'Dev hands-on', it: 'Dev hands-on' },
    moduleIds: [
      'intro-three-hour-rule',
      'how-session-lifecycle',
      'surface-cli',
      'surface-cli-models',
      'surface-cli-extensibility',
      'surface-editors-acp',
      'onboard-skills-playbooks',
      'prompt-templates',
      'product-deployments-handoff',
      'closing-resources',
      'closing-qa',
    ],
  },
  {
    id: 'full-tour',
    title: { en: 'Full tour', it: 'Tour completo' },
    moduleIds: baseModules.map((m) => m.id),
  },
];
