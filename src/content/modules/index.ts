import type { Category, Lang, L10n, Module } from '../schema';
import type { EventPack } from '../events/types';
import { eventPacks } from '../events';
import introWhatIsDevin from './intro-what-is-devin';
import introThreeHourRule from './intro-three-hour-rule';
import introWhenNotToUse from './intro-when-not-to-use';
import introSurfacesMap from './intro-surfaces-map';
import historyTimeline from './history-timeline';
import historyFounders from './history-founders';
import historyNews from './history-news';
import historyWindsurfDesktop from './history-windsurf-desktop';
import howSessionLifecycle from './how-session-lifecycle';
import howComputerUseTesting from './how-computer-use-testing';
import howStackedPrsReview from './how-stacked-prs-review';
import howVoiceSideChat from './how-voice-side-chat';
import howAdvancedOrchestration from './how-advanced-orchestration';
import surfaceWebApp from './surface-web-app';
import surfaceSlackTeams from './surface-slack-teams';
import surfaceCli from './surface-cli';
import surfaceCliModels from './surface-cli-models';
import surfaceCliExtensibility from './surface-cli-extensibility';
import surfaceEditorsAcp from './surface-editors-acp';
import surfaceApi from './surface-api';
import onboardKnowledgeAgentsMd from './onboard-knowledge-agents-md';
import onboardSkillsPlaybooks from './onboard-skills-playbooks';
import onboardEnvironmentBlueprints from './onboard-environment-blueprints';
import onboardSecretsSecurityProfiles from './onboard-secrets-security-profiles';
import onboardPluginsMcp from './onboard-plugins-mcp';
import onboardOutposts from './onboard-outposts';
import productDeepwiki from './product-deepwiki';
import productDevinReview from './product-devin-review';
import productAskDevinSessionInsights from './product-ask-devin-session-insights';
import productSecuritySwarmCodeScans from './product-security-swarm-code-scans';
import productAutomationsTriage from './product-automations-triage';
import productDanaDataAnalyst from './product-dana-data-analyst';
import productDeploymentsHandoff from './product-deployments-handoff';
import integScm from './integ-scm';
import integTicketsIncidents from './integ-tickets-incidents';
import integDataCloud from './integ-data-cloud';
import promptInstructingEffectively from './prompt-instructing-effectively';
import promptGoodVsBad from './prompt-good-vs-bad';
import promptTemplates from './prompt-templates';
import promptSdlcFit from './prompt-sdlc-fit';
import usecaseMigrations from './usecase-migrations';
import usecaseBacklogTesting from './usecase-backlog-testing';
import usecaseDataScrapingApps from './usecase-data-scraping-apps';
import usecaseGallery from './usecase-gallery';
import pricingSelfServe from './pricing-self-serve';
import pricingUsageCredits from './pricing-usage-credits';
import enterpriseOverview from './enterprise-overview';
import enterpriseSecurityAccess from './enterprise-security-access';
import enterpriseGovernance from './enterprise-governance';
import federal from './federal';
import closingResources from './closing-resources';
import closingQa from './closing-qa';

export function getL10n(l: L10n | undefined, lang: Lang): string {
  if (!l) return '';
  return l[lang] ?? l.en ?? '';
}

export const categories: Category[] = [
  { id: 'events', icon: 'CalendarDays', title: { en: 'Events', it: 'Eventi' }, order: 0 },
  { id: 'intro', icon: 'Sparkles', title: { en: 'Introduction', it: 'Introduzione' }, order: 1 },
  { id: 'history', icon: 'Timeline', title: { en: 'History', it: 'Storia' }, order: 2 },
  { id: 'how-it-works', icon: 'Cog', title: { en: 'How it works', it: 'Come funziona' }, order: 3 },
  { id: 'surfaces', icon: 'AppWindow', title: { en: 'Surfaces', it: 'Le superfici' }, order: 4 },
  { id: 'onboarding', icon: 'Rocket', title: { en: 'Onboarding', it: 'Onboarding' }, order: 5 },
  { id: 'products', icon: 'Package', title: { en: 'Products', it: 'Prodotti' }, order: 6 },
  { id: 'integrations', icon: 'Blocks', title: { en: 'Integrations', it: 'Integrazioni' }, order: 7 },
  { id: 'prompting', icon: 'MessageSquare', title: { en: 'Prompting', it: 'Prompting' }, order: 8 },
  { id: 'use-cases', icon: 'Lightbulb', title: { en: 'Use cases', it: "Casi d'uso" }, order: 9 },
  { id: 'pricing-enterprise', icon: 'CreditCard', title: { en: 'Pricing & Enterprise', it: 'Prezzi ed Enterprise' }, order: 10 },
  { id: 'closing', icon: 'MessageCircleQuestionMark', title: { en: 'Closing', it: 'Chiusura' }, order: 11 },
];

export const baseModules: Module[] = [
  // intro
  introWhatIsDevin,
  introThreeHourRule,
  introWhenNotToUse,
  introSurfacesMap,
  // history
  historyTimeline,
  historyFounders,
  historyNews,
  historyWindsurfDesktop,
  // how-it-works
  howSessionLifecycle,
  howComputerUseTesting,
  howStackedPrsReview,
  howVoiceSideChat,
  howAdvancedOrchestration,
  // surfaces
  surfaceWebApp,
  surfaceSlackTeams,
  surfaceCli,
  surfaceCliModels,
  surfaceCliExtensibility,
  surfaceEditorsAcp,
  surfaceApi,
  // onboarding
  onboardKnowledgeAgentsMd,
  onboardSkillsPlaybooks,
  onboardEnvironmentBlueprints,
  onboardSecretsSecurityProfiles,
  onboardPluginsMcp,
  onboardOutposts,
  // products
  productDeepwiki,
  productDevinReview,
  productAskDevinSessionInsights,
  productSecuritySwarmCodeScans,
  productAutomationsTriage,
  productDanaDataAnalyst,
  productDeploymentsHandoff,
  // integrations
  integScm,
  integTicketsIncidents,
  integDataCloud,
  // prompting
  promptInstructingEffectively,
  promptGoodVsBad,
  promptTemplates,
  promptSdlcFit,
  // use-cases
  usecaseMigrations,
  usecaseBacklogTesting,
  usecaseDataScrapingApps,
  usecaseGallery,
  // pricing-enterprise
  pricingSelfServe,
  pricingUsageCredits,
  enterpriseOverview,
  enterpriseSecurityAccess,
  enterpriseGovernance,
  federal,
  // closing
  closingResources,
  closingQa,
];

export const modules: Module[] = [
  ...baseModules,
  ...eventPacks.flatMap((p) => p.modules),
];

/** The event pack that owns a module, if it's an event-only module. */
export function packOfModule(id: string): EventPack | undefined {
  return eventPacks.find((p) => p.modules.some((m) => m.id === id));
}
