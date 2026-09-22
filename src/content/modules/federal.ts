import type { Module } from '../schema';

const mod: Module = {
  id: 'federal',
  category: 'pricing-enterprise',
  icon: 'Landmark',
  title: { en: 'Devin for government', it: 'Devin per il governo' },
  summary: {
    en: 'A federal deployment on AWS GovCloud via Palantir FedStart — FedRAMP, ITAR, IL4/5, on-prem.',
    it: 'Un deployment federale su AWS GovCloud via Palantir FedStart — FedRAMP, ITAR, IL4/5, on-prem.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/federal/introduction',
    'https://docs.devin.ai/federal/getting-started',
    'https://docs.devin.ai/federal/groups',
    'https://docs.devin.ai/federal/model-provisioning',
    'https://docs.devin.ai/federal/acu-limits',
    'https://docs.devin.ai/federal/security',
    'https://docs.devin.ai/federal/compliance',
    'https://docs.devin.ai/federal/usage-and-billing',
    'https://docs.devin.ai/federal/faqs',
    'https://docs.devin.ai/federal/api/overview',
    'https://docs.devin.ai/federal/api/acu-consumption',
    'https://docs.devin.ai/federal/api/group-management',
    'https://docs.devin.ai/federal/api/acu-caps',
    'https://docs.devin.ai/federal/api/python-sdk',
    'https://cognition.com/blog',
  ],
  slides: [
    {
      id: 'fed-bullets',
      band: 'dark',
      block: {
        type: 'bullets',
        title: { en: 'Devin, in an *accredited* environment', it: 'Devin, in un ambiente *accreditato*' },
        icon: 'Landmark',
        items: [
          { en: 'Dedicated portal on AWS GovCloud, hosted via Palantir FedStart', it: 'Portale dedicato su AWS GovCloud, ospitato via Palantir FedStart' },
          { en: 'SSO via OIDC or SAML; Zero Data Retention on Desktop and CLI', it: 'SSO via OIDC o SAML; Zero Data Retention su Desktop e CLI' },
          { en: 'Workloads across FedRAMP, ITAR, IL4/5 and on-prem', it: 'Workload compatibili con FedRAMP, ITAR, IL4/5 e on-prem' },
          { en: 'Devin Cloud and Devin Review slated for FedRAMP High in 2026', it: 'Devin Cloud e Devin Review in corsa per FedRAMP High nel 2026' },
          { en: 'AI Productivity Guarantee: up to $10M of usage funded', it: 'AI Productivity Guarantee: fino a 10M$ di utilizzo coperti' },
        ],
      },
      notes: {
        en: 'Today Desktop and CLI keep feature parity with commercial; FedRAMP High was announced as in-process on the Cognition blog (07.2026).',
        it: 'Oggi Desktop e CLI mantengono la parità col commerciale; FedRAMP High è stato annunciato in-process sul blog Cognition (07.2026).',
      },
    },
    {
      id: 'fed-governance',
      block: {
        type: 'cards',
        title: { en: 'Federal-grade *controls*', it: 'Controlli di livello *federale*' },
        cards: [
          {
            icon: 'Users',
            title: { en: 'Groups', it: 'Gruppi' },
            text: {
              en: 'Group model allowlists narrow — never expand — team availability.',
              it: 'Le allowlist di gruppo restringono — mai allargano — i modelli del team.',
            },
          },
          {
            icon: 'Gauge',
            title: { en: 'ACU limits', it: 'Limiti ACU' },
            text: {
              en: 'Usage is metered in ACUs; the price per ACU depends on the deployment level.',
              it: 'L’uso è misurato in ACU; il prezzo per ACU dipende dal livello di deployment.',
            },
          },
          {
            icon: 'FileText',
            title: { en: 'Procurement', it: 'Procurement' },
            text: {
              en: 'Usage-based pricing or firm-fixed-price contracts for mission outcomes.',
              it: 'Prezzi a consumo o contratti firm-fixed-price per risultati di missione.',
            },
          },
          {
            icon: 'Braces',
            title: { en: 'Federal API', it: 'API federali' },
            text: {
              en: 'ACU consumption, group management, caps — plus a Python SDK.',
              it: 'Consumo ACU, gestione gruppi, cap — più un SDK Python.',
            },
          },
        ],
      },
      notes: {
        en: 'CSP burn-down is supported: existing AWS/Azure/Google commitments can pay for Devin usage.',
        it: 'È supportato il burn-down dei CSP: gli impegni AWS/Azure/Google esistenti possono pagare l’uso di Devin.',
      },
    },
    {
      id: 'fed-compliance',
      block: {
        type: 'bullets',
        title: { en: 'Compliance *posture*', it: 'Postura di *compliance*' },
        icon: 'Landmark',
        items: [
          { en: 'FedRAMP High: In Process — announced July 2026', it: 'FedRAMP High: In Process — annunciato a luglio 2026' },
          { en: 'Single-tenant AWS environment, fully isolated per agency', it: 'Ambiente AWS single-tenant, isolato per ogni agenzia' },
          { en: 'No data shared with external model providers', it: 'Nessun dato condiviso con provider di modelli esterni' },
          { en: 'Groups partition users, repos and ACU budgets inside one org', it: 'I gruppi dividono utenti, repo e budget ACU dentro un’org' },
          { en: 'Federal API: ACU consumption, caps, group management + Python SDK', it: 'API federali: consumo ACU, cap, gestione gruppi + SDK Python' },
        ],
      },
      notes: {
        en: 'Full control list is in the federal/security and federal/compliance pages — bring those to a security review.',
        it: 'La lista completa dei controlli è in federal/security e federal/compliance: portale a una security review.',
      },
    },
  ],
};

export default mod;
