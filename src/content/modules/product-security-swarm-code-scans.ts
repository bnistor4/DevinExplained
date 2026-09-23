import type { Module } from '../schema';

const mod: Module = {
  id: 'product-security-swarm-code-scans',
  category: 'products',
  icon: 'ShieldCheck',
  title: { en: 'Security Swarm & Code Scans', it: 'Security Swarm e Code Scan' },
  summary: {
    en: 'A swarm of Devins builds a threat model, validates findings, and opens fix PRs.',
    it: 'Uno sciame di Devin costruisce il threat model, valida i finding e apre PR di fix.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/work-with-devin/security-swarm',
    'https://docs.devin.ai/work-with-devin/code-scans',
  ],
  slides: [
    {
      id: 'swarm-bullets',
      band: 'dark',
      block: {
        type: 'bullets',
        title: { en: 'Agentic *MapReduce* for security', it: 'MapReduce *agentico* per la sicurezza' },
        icon: 'ShieldCheck',
        items: [
          { en: 'Builds a threat model tailored to your code first', it: 'Prima costruisce un threat model su misura per il tuo codice' },
          { en: 'Splits the repo across parallel Devins: coverage without exploding cost', it: 'Divide la repo tra Devin paralleli: copertura senza far esplodere i costi' },
          { en: 'Finds RCE, SQLi, SSRF, auth bypass, even chained exploits', it: 'Trova RCE, SQLi, SSRF, bypass di autorizzazione, anche exploit concatenati' },
          { en: 'Findings arrive with evidence and severity: fix via PR', it: 'I finding arrivano con evidenze e severità: il fix è una PR' },
          { en: 'Benchmarked against published vulnerabilities (GitHub Advisory DB)', it: 'Benchmarkato su vulnerabilità pubblicate (GitHub Advisory DB)' },
        ],
      },
      notes: {
        en: 'Interactive mode lets you review the threat model before scanning. Needs the “Use code scans” permission.',
        it: 'La modalità interattiva ti fa rivedere il threat model prima della scansione. Serve il permesso “Use code scans”.',
      },
    },
    {
      id: 'scans-cards',
      block: {
        type: 'cards',
        title: { en: 'Scans beyond *security*', it: 'Scansioni oltre la *sicurezza*' },
        cards: [
          {
            icon: 'Gauge',
            title: { en: 'Performance', it: 'Performance' },
            text: {
              en: 'Slow paths, inefficient code, opportunities to go faster.',
              it: 'Percorsi lenti, codice inefficiente, occasioni per andare più veloci.',
            },
          },
          {
            icon: 'Database',
            title: { en: 'Database queries', it: 'Query database' },
            text: {
              en: 'N+1s and friends: inefficient, incorrect, unsafe queries.',
              it: 'N+1 e affini: query inefficienti, errate, insicure.',
            },
          },
          {
            icon: 'Accessibility',
            title: { en: 'Accessibility & more', it: 'Accessibilità e altro' },
            text: {
              en: 'WCAG issues, dead code, test coverage gaps, compliance drift, or a custom scan.',
              it: 'Problemi WCAG, dead code, buchi di coverage, drift di compliance, o una scansione custom.',
            },
          },
        ],
      },
      notes: {
        en: 'Start with /scan in the composer: e.g. “/scan find N+1 queries in @acme/api”. Results land as a Slack DM.',
        it: 'Si parte con /scan nel composer: es. “/scan find N+1 queries in @acme/api”. I risultati arrivano in DM su Slack.',
      },
    },
    {
      id: 'swarm-flow',
      block: {
        type: 'bullets',
        title: { en: 'A scan in *five steps*', it: 'Una scansione in *cinque passi*' },
        icon: 'ListChecks',
        items: [
          { en: 'Security → Start scan → pick repo, profile, effort', it: 'Security → Start scan → repo, profilo, effort' },
          { en: 'Interactive mode: review the proposed threat model first', it: 'Modalità interattiva: rivedi prima il threat model proposto' },
          { en: 'Findings stream in grouped by severity, with evidence', it: 'I finding arrivano raggruppati per severità, con evidenze' },
          { en: 'Act on them: Devin opens fix PRs', it: 'Intervieni: Devin apre PR di fix' },
          { en: 'Profiles capture scope and criteria for repeatable scans', it: 'I profili fissano scope e criteri per scansioni ripetibili' },
        ],
      },
      notes: {
        en: 'Needs the “Use code scans” permission; “Manage code scans” for auto-scan schedules.',
        it: 'Serve il permesso “Use code scans”; “Manage code scans” per le auto-scan schedulate.',
      },
    },
  ],
};

export default mod;
