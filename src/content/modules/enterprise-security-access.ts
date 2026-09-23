import type { Module } from '../schema';

const mod: Module = {
  id: 'enterprise-security-access',
  category: 'pricing-enterprise',
  icon: 'ShieldCheck',
  title: { en: 'Security & access control', it: 'Sicurezza e controllo accessi' },
  summary: {
    en: 'SSO, SCIM, RBAC, IP allowlists, CMK, and guardrails that screen every prompt.',
    it: 'SSO, SCIM, RBAC, allowlist IP, CMK e guardrail che filtrano ogni prompt.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/admin/security',
    'https://docs.devin.ai/enterprise/security-access/security/enterprise-security',
    'https://docs.devin.ai/enterprise/security-access/trust-center',
    'https://docs.devin.ai/enterprise/security-access/custom-roles',
    'https://docs.devin.ai/enterprise/security-access/sso/guide',
    'https://docs.devin.ai/enterprise/security-access/sso/okta',
    'https://docs.devin.ai/enterprise/security-access/sso/azure',
    'https://docs.devin.ai/enterprise/security-access/sso/saml',
    'https://docs.devin.ai/enterprise/security-access/sso/oidc',
    'https://docs.devin.ai/enterprise/security-access/scim',
    'https://docs.devin.ai/enterprise/security-access/idp-groups',
    'https://docs.devin.ai/enterprise/security-access/ip-access-lists',
    'https://docs.devin.ai/enterprise/security-access/security/customer-managed-keys',
    'https://docs.devin.ai/enterprise/features/ai-guardrails',
    'https://docs.devin.ai/enterprise/features/attribution-filtering',
    'https://docs.devin.ai/admin/common-issues',
  ],
  slides: [
    {
      id: 'access-cards',
      block: {
        type: 'cards',
        title: { en: 'The enterprise *checklist*', it: 'La *checklist* enterprise' },
        cards: [
          {
            icon: 'KeyRound',
            title: { en: 'SSO', it: 'SSO' },
            text: {
              en: 'Okta, Microsoft Entra ID, SAML 2.0 or generic OIDC.',
              it: 'Okta, Microsoft Entra ID, SAML 2.0 o OIDC generico.',
            },
          },
          {
            icon: 'Users',
            title: { en: 'SCIM 2.0', it: 'SCIM 2.0' },
            text: {
              en: 'Users created before first login, deprovisioned instantly, groups synced.',
              it: 'Utenti creati prima del primo login, deprovisionati subito, gruppi sincronizzati.',
            },
          },
          {
            icon: 'UserCog',
            title: { en: 'Custom roles', it: 'Ruoli custom' },
            text: {
              en: 'Two-tier RBAC: account-level and org-level roles mapped to IdP groups.',
              it: 'RBAC a due livelli: ruoli account e org mappati sui gruppi IdP.',
            },
          },
          {
            icon: 'Network',
            title: { en: 'IP access lists', it: 'IP access list' },
            text: {
              en: 'Restrict the webapp and APIs to corporate ranges: 401 for everything else.',
              it: 'Limita webapp e API a range aziendali: 401 per tutto il resto.',
            },
          },
          {
            icon: 'Lock',
            title: { en: 'Customer managed keys', it: 'Chiavi gestite dal cliente' },
            text: {
              en: 'Enterprise Assured: your AWS KMS key encrypts session data and snapshots.',
              it: 'Enterprise Assured: la tua chiave AWS KMS cifra dati di sessione e snapshot.',
            },
          },
          {
            icon: 'BadgeCheck',
            title: { en: 'SOC 2 Type II', it: 'SOC 2 Type II' },
            text: {
              en: 'Certified, with the Trust Center holding the evidence.',
              it: 'Certificato, con le evidenze nel Trust Center.',
            },
          },
        ],
      },
      notes: {
        en: 'Gotcha: turn off just-in-time provisioning when using SCIM; otherwise groups re-sync on every login and fight SCIM.',
        it: 'Trappola: spegni il provisioning just-in-time quando usi SCIM, altrimenti i gruppi si risincronizzano a ogni login e litigano con SCIM.',
      },
    },
    {
      id: 'guardrails-bullets',
      band: 'dark',
      block: {
        type: 'bullets',
        title: { en: 'Guardrails on the *messages*', it: 'Guardrail sui *messaggi*' },
        icon: 'ShieldCheck',
        items: [
          { en: 'Screens prompts for injection, exfiltration, policy violations', it: 'Filtra i prompt per injection, esfiltrazione, violazioni di policy' },
          { en: 'Three modes: log_only, warn_user, block_message', it: 'Tre modalità: log_only, warn_user, block_message' },
          { en: 'Violations dashboard links back to the originating session', it: 'La dashboard delle violazioni rimanda alla sessione di origine' },
          { en: 'Attribution filtering blocks writes that match public code', it: 'L’attribution filtering blocca scritture che matchano codice pubblico' },
          { en: 'It fails closed: unreachable service = blocked edit', it: 'Fallisce in chiusura: servizio irraggiungibile = edit bloccato' },
        ],
      },
      notes: {
        en: 'Guardrails are enterprise-wide: they apply to every org, no per-org override.',
        it: 'I guardrail sono a livello enterprise: valgono per ogni org, senza override per-org.',
      },
    },
    {
      id: 'sec-sso',
      block: {
        type: 'bullets',
        title: { en: 'SSO & provisioning, *hands-on*', it: 'SSO e provisioning, *sul campo*' },
        icon: 'KeyRound',
        items: [
          { en: 'SAML and OIDC: guided setups for Okta and Microsoft Entra', it: 'SAML e OIDC: setup guidati per Okta e Microsoft Entra' },
          { en: 'SCIM provisioning keeps users and groups in sync with the IdP', it: 'Il provisioning SCIM tiene utenti e gruppi allineati all’IdP' },
          { en: 'IdP groups map to Devin roles: join the group, get the role', it: 'I gruppi IdP mappano sui ruoli Devin: entri nel gruppo, prendi il ruolo' },
          { en: 'IP access lists restrict which networks can reach the org', it: 'Le IP access list limitano le reti che raggiungono l’org' },
          { en: 'Customer-managed keys for orgs that need their own encryption', it: 'Customer-managed key per le org che vogliono la propria crittografia' },
        ],
      },
      notes: {
        en: 'Per-IdP guides exist for Azure/Entra, Okta and generic SAML/OIDC: check the SSO section of the docs.',
        it: 'Esistono guide per-IdP per Azure/Entra, Okta e SAML/OIDC generici: vedi la sezione SSO dei docs.',
      },
    },
  ],
};

export default mod;
