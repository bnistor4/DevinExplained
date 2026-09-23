import type { Module } from '../schema';

const mod: Module = {
  id: 'enterprise-governance',
  category: 'pricing-enterprise',
  icon: 'Landmark',
  title: { en: 'Governance at scale', it: 'Governance a scala' },
  summary: {
    en: 'Usage policies, Devin Coach, environment tiers, local-agent controls and private networking.',
    it: 'Usage policy, Devin Coach, tier di ambiente, controlli sugli agenti locali e private networking.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/enterprise/features/usage-policies',
    'https://docs.devin.ai/enterprise/features/devin-coach',
    'https://docs.devin.ai/enterprise/security-access/personal-analytics',
    'https://docs.devin.ai/enterprise/environment-management/overview',
    'https://docs.devin.ai/enterprise/environment-management/rollout',
    'https://docs.devin.ai/enterprise/environment-management/best-practices',
    'https://docs.devin.ai/enterprise/local/controls',
    'https://docs.devin.ai/cli/enterprise/devin-auth',
    'https://docs.devin.ai/cli/enterprise/team-settings',
    'https://docs.devin.ai/cli/enterprise/system-config',
    'https://docs.devin.ai/cli/enterprise/controls',
    'https://docs.devin.ai/cli/enterprise/windsurf-auth',
    'https://docs.devin.ai/enterprise/integrations/git-integrations',
    'https://docs.devin.ai/enterprise/integrations/github-enterprise-server',
    'https://docs.devin.ai/enterprise/integrations/gitlab-self-managed',
    'https://docs.devin.ai/enterprise/integrations/azure-devops-service-principal',
    'https://docs.devin.ai/enterprise/integrations/artifacts/overview',
    'https://docs.devin.ai/enterprise/deployment/dedicated_saas_private_networking',
    'https://docs.devin.ai/onboard-devin/vpn',
  ],
  slides: [
    {
      id: 'gov-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Costs under *control*', it: 'Costi sotto *controllo*' },
        icon: 'Gauge',
        items: [
          { en: 'Usage tiers: named groups with per-member monthly ACU allocations', it: 'Usage tier: gruppi con allocazioni ACU mensili per membro' },
          { en: 'Local + cloud usage count against one per-user limit', it: 'Uso locale + cloud contano contro un unico limite per utente' },
          { en: 'Devin Coach flags wasteful prompts inline, before they send', it: 'Devin Coach segnala i prompt dispendiosi inline, prima dell’invio' },
          { en: 'Personal analytics: each user sees their own consumption', it: 'Personal analytics: ogni utente vede i propri consumi' },
        ],
      },
      notes: {
        en: 'Coach catches classics: Ultra on a one-line fix, bundling parallel work into one session.',
        it: 'Coach intercetta i classici: Ultra su un fix di una riga, lavoro parallelizzabile in una sola sessione.',
      },
    },
    {
      id: 'gov-env',
      block: {
        type: 'bullets',
        title: { en: 'Environments, *tiered*', it: 'Ambienti, a *livelli*' },
        icon: 'Layers',
        items: [
          { en: 'Three blueprint tiers: enterprise → organization → repository', it: 'Tre livelli di blueprint: enterprise → organization → repository' },
          { en: 'Default everything to the enterprise tier: org tier is for exceptions', it: 'Metti tutto nel tier enterprise di default: quello org è per le eccezioni' },
          { en: 'The Rollout page tracks build health across all orgs', it: 'La pagina Rollout traccia la salute delle build in tutte le org' },
          { en: 'Local-agent controls: root baseline + per-org overrides, always enforced', it: 'Controlli sugli agenti locali: baseline root + override per org, sempre applicati' },
        ],
      },
      notes: {
        en: 'The docs’ rule: enterprise blueprint by default; org only when something must NOT apply everywhere.',
        it: 'La regola dei docs: blueprint enterprise di default; org solo quando qualcosa NON deve valere ovunque.',
      },
    },
    {
      id: 'gov-network',
      block: {
        type: 'bullets',
        title: { en: 'Reaching *inside* the network', it: 'Raggiungere l’*interno* della rete' },
        icon: 'Network',
        items: [
          { en: 'Dedicated deployment: AWS PrivateLink per domain (NLB + Endpoint Service)', it: 'Deployment dedicato: AWS PrivateLink per dominio (NLB + Endpoint Service)' },
          { en: 'Client VPN in the blueprint: OpenVPN/WireGuard, profile as attachment', it: 'VPN client nel blueprint: OpenVPN/WireGuard, profilo come attachment' },
          { en: 'GitHub Enterprise Server, GitLab self-managed, Azure DevOps SP: all covered', it: 'GitHub Enterprise Server, GitLab self-managed, Azure DevOps SP: tutti coperti' },
          { en: 'Artifact proxies keep package installs inside your perimeter', it: 'I proxy per gli artefatti tengono le installazioni nel tuo perimetro' },
        ],
      },
      notes: {
        en: 'PrivateLink needs one Endpoint Service + Interface Endpoint per domain Devin must reach.',
        it: 'PrivateLink richiede un Endpoint Service + Interface Endpoint per ogni dominio che Devin deve raggiungere.',
      },
    },
  ],
};

export default mod;
