import type { Module } from '../schema';

const mod: Module = {
  id: 'enterprise-overview',
  category: 'pricing-enterprise',
  icon: 'Building2',
  title: { en: 'Devin Enterprise', it: 'Devin Enterprise' },
  summary: {
    en: 'Brain in Cognition’s cloud, Devbox where you need it — orgs, roles and ACU limits on top.',
    it: 'Il cervello nel cloud di Cognition, la Devbox dove serve — con org, ruoli e limiti ACU sopra.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/admin/billing/enterprise',
    'https://docs.devin.ai/enterprise/getting-started/get-started',
    'https://docs.devin.ai/enterprise/getting-started/organizations',
    'https://docs.devin.ai/enterprise/deployment/overview',
  ],
  slides: [
    {
      id: 'ent-architecture',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Two pieces: *brain* and *devbox*', it: 'Due pezzi: *cervello* e *devbox*' },
        cards: [
          {
            icon: 'Brain',
            title: { en: 'The Brain', it: 'Il cervello' },
            text: {
              en: 'Stateless, always in Cognition’s cloud — the Copilot-style architecture.',
              it: 'Stateless, sempre nel cloud di Cognition: architettura stile Copilot.',
            },
          },
          {
            icon: 'Box',
            title: { en: 'The Devbox', it: 'La Devbox' },
            text: {
              en: 'Shell + browser + editor — runs where your deployment model puts it.',
              it: 'Shell + browser + editor: gira dove lo mette il tuo modello di deployment.',
            },
          },
          {
            icon: 'Building2',
            title: { en: 'Dedicated', it: 'Dedicated' },
            text: {
              en: 'Customer Dedicated: single-tenant VPC via AWS PrivateLink or IPSec.',
              it: 'Customer Dedicated: VPC single-tenant via AWS PrivateLink o IPSec.',
            },
          },
        ],
      },
      notes: {
        en: 'Enterprise Cloud = both in Cognition’s multi-tenant cloud, each session on its own isolated machine.',
        it: 'Enterprise Cloud = entrambi nel cloud multi-tenant di Cognition, ogni sessione su una macchina isolata.',
      },
    },
    {
      id: 'ent-orgs',
      block: {
        type: 'bullets',
        title: { en: 'Organizations draw the *boundaries*', it: 'Le organization tracciano i *confini*' },
        icon: 'Building2',
        items: [
          { en: 'Each org: its own shared Devin machine, repos, members, ACU limit', it: 'Ogni org: macchina Devin condivisa, repo, membri e limite ACU propri' },
          { en: 'Repository access is org-level, not per-user', it: 'L’accesso alle repo è a livello org, non per utente' },
          { en: 'A user can belong to many orgs — permissions scoped independently', it: 'Un utente può stare in più org: permessi scopati separatamente' },
          { en: 'Setup mirrors onboarding a new engineer — same access, same tools', it: 'Il setup replica l’onboarding di un nuovo assunto: stessi accessi e tool' },
          { en: 'Consumption tracked at enterprise, org, and per-session level', it: 'Consumi tracciati a livello enterprise, org e singola sessione' },
        ],
      },
      notes: {
        en: 'Hit the org ACU limit → new work blocks until an admin raises it or the monthly window resets.',
        it: 'Raggiunto il limite ACU dell’org → il lavoro nuovo si blocca finché un admin lo alza o il mese si resetta.',
      },
    },
    {
      id: 'ent-deploy',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'Two ways to *deploy*', it: 'Due modi di *deployare*' },
        cards: [
          {
            icon: 'Cloud',
            title: { en: 'Enterprise Cloud', it: 'Enterprise Cloud' },
            text: {
              en: 'Managed by Cognition on shared infra — the standard path for most enterprises.',
              it: 'Gestito da Cognition su infrastruttura condivisa: il percorso standard.',
            },
          },
          {
            icon: 'Building2',
            title: { en: 'Customer Dedicated', it: 'Customer Dedicated' },
            text: {
              en: 'Dedicated single-tenant infrastructure in your region, isolated end to end.',
              it: 'Infrastruttura dedicata single-tenant nella tua regione, isolata end-to-end.',
            },
          },
          {
            icon: 'Network',
            title: { en: 'Private networking', it: 'Networking privato' },
            text: {
              en: 'Dedicated SaaS supports private connectivity to your internal services.',
              it: 'Il SaaS dedicato supporta connettività privata verso i servizi interni.',
            },
          },
        ],
      },
      notes: {
        en: 'Deployment options live under enterprise/deployment — the dedicated tier adds private networking.',
        it: 'Le opzioni di deploy stanno sotto enterprise/deployment: il tier dedicato aggiunge il networking privato.',
      },
    },
  ],
};

export default mod;
