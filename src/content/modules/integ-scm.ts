import type { Module } from '../schema';

const mod: Module = {
  id: 'integ-scm',
  category: 'integrations',
  icon: 'GitBranch',
  title: { en: 'GitHub, GitLab, Bitbucket, Azure DevOps', it: 'GitHub, GitLab, Bitbucket, Azure DevOps' },
  summary: {
    en: 'Connect your SCM once and Devin opens PRs, answers comments, and works like a teammate.',
    it: 'Colleghi l’SCM una volta e Devin apre PR, risponde ai commenti e lavora come un collega.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/integrations/overview',
    'https://docs.devin.ai/integrations/gh',
    'https://docs.devin.ai/integrations/gitlab',
    'https://docs.devin.ai/integrations/bitbucket',
    'https://docs.devin.ai/enterprise/integrations/azure-devops',
    'https://docs.devin.ai/integrations/self-hosted-scm-artifacts',
  ],
  slides: [
    {
      id: 'scm-cards',
      block: {
        type: 'cards',
        title: { en: 'Four *SCMs*, one teammate', it: 'Quattro *SCM*, un solo collega' },
        cards: [
          {
            icon: 'FolderGit2',
            title: { en: 'GitHub', it: 'GitHub' },
            text: {
              en: 'Add Connection → pick all repos or a selection. PRs and comment replies included.',
              it: 'Add Connection → tutte le repo o una selezione. PR e risposte ai commenti incluse.',
            },
          },
          {
            icon: 'GitMerge',
            title: { en: 'GitLab & Bitbucket', it: 'GitLab e Bitbucket' },
            text: {
              en: 'MRs and PRs as usual. A dedicated service account is the recommended pattern.',
              it: 'MR e PR come al solito. Il pattern consigliato è un service account dedicato.',
            },
          },
          {
            icon: 'Building2',
            title: { en: 'Azure DevOps', it: 'Azure DevOps' },
            text: {
              en: 'Managed inside Devin’s Connections — or via a Microsoft Entra service principal.',
              it: 'Gestito dalle Connections di Devin — o via service principal Microsoft Entra.',
            },
          },
        ],
      },
      notes: {
        en: 'GitHub needs an org admin. GitLab self-managed 15.0+ is supported on Enterprise.',
        it: 'GitHub richiede un admin dell’org. GitLab self-managed 15.0+ è supportato su Enterprise.',
      },
    },
    {
      id: 'selfhosted-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Self-hosted? *No migration* needed', it: 'Self-hosted? *Nessuna* migrazione' },
        icon: 'Server',
        items: [
          { en: 'NLB + allowlist of Devin’s static IPs + a DNS record', it: 'NLB + allowlist degli IP statici di Devin + un record DNS' },
          { en: 'Works for self-hosted SCM and artifact repos (Artifactory, Nexus)', it: 'Funziona per SCM self-hosted e registry di artefatti (Artifactory, Nexus)' },
          { en: 'A few hours of engineering — infra stays yours', it: 'Poche ore di lavoro: l’infrastruttura resta tua' },
          { en: 'Enterprise plan feature — enterprise@cognition.ai helps', it: 'Funzione del piano Enterprise: aiuta enterprise@cognition.ai' },
        ],
      },
      notes: {
        en: 'Caveat worth knowing: on GitLab on-prem, MR status syncs to sessions only once a day.',
        it: 'Caveat da sapere: su GitLab on-prem lo stato delle MR si sincronizza alle sessioni solo una volta al giorno.',
      },
      funAside: {
        en: '“All repositories” or “select repositories” — choose before Devin chooses for you.',
        it: '“All repositories” o “select repositories”: sceglilo tu prima che lo scelga Devin.',
      },
    },
    {
      id: 'scm-service-account',
      block: {
        type: 'bullets',
        title: { en: 'The *service account* pattern', it: 'Il pattern del *service account*' },
        icon: 'UserCog',
        items: [
          { en: 'Create a dedicated account — e.g. devin@yourcompany.com', it: 'Crea un account dedicato — es. devin@yourcompany.com' },
          { en: 'Cleaner access management and audit trails', it: 'Gestione degli accessi e audit trail più puliti' },
          { en: 'PRs and comments are clearly attributed to Devin', it: 'PR e commenti sono attribuiti chiaramente a Devin' },
          { en: 'Revoking access = disabling one account, not untangling permissions', it: 'Revocare l’accesso = disabilitare un account, non districare permessi' },
        ],
      },
      notes: {
        en: 'GitLab and Bitbucket docs both recommend this; Azure DevOps needs an account that can grant admin consent.',
        it: 'Le doc di GitLab e Bitbucket lo consigliano entrambe; Azure DevOps richiede un account che possa dare il consenso admin.',
      },
    },
  ],
};

export default mod;
