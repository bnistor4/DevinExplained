import type { Module } from '../schema';

const mod: Module = {
  id: 'integ-data-cloud',
  category: 'integrations',
  icon: 'Database',
  title: { en: 'Databricks & OIDC to your cloud', it: 'Databricks e OIDC verso il tuo cloud' },
  summary: {
    en: 'Devin as a Databricks coworker — OAuth secret today, token federation when you scale.',
    it: 'Devin come collega su Databricks: secret OAuth per partire, token federation per crescere.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/integrations/databricks',
    'https://docs.devin.ai/product-guides/oidc',
  ],
  slides: [
    {
      id: 'databricks-bullets',
      block: {
        type: 'bullets',
        title: { en: 'An async coworker *in* the workspace', it: 'Un collega asincrono *dentro* il workspace' },
        icon: 'Database',
        items: [
          { en: 'Explores catalogs, debugs failed jobs, tunes SQL', it: 'Esplora cataloghi, debugga job falliti, ottimizza SQL' },
          { en: 'Writes and tests notebooks, ships through your Git workflow', it: 'Scrive e testa notebook, consegna tramite il tuo workflow Git' },
          { en: 'Authenticates as a service principal governed by Unity Catalog', it: 'Si autentica come service principal governato da Unity Catalog' },
          { en: 'Three pieces you control: service principal + CLI via blueprint + skills plugin', it: 'Tre pezzi sotto il tuo controllo: service principal + CLI via blueprint + plugin di skill' },
        ],
      },
      notes: {
        en: 'Databricks, workspaces and every permission stay in your account — Devin just borrows the identity.',
        it: 'Databricks, workspace e ogni permesso restano nel tuo account: Devin prende solo l’identità in prestito.',
      },
    },
    {
      id: 'databricks-compare',
      block: {
        type: 'compare',
        title: { en: 'Secret vs *federation*', it: 'Secret vs *federation*' },
        left: {
          title: { en: 'Option A: OAuth secret', it: 'Opzione A: secret OAuth' },
          items: [
            { en: 'Fastest: three Devin Secrets and a short blueprint', it: 'La più veloce: tre Devin Secrets e un blueprint corto' },
            { en: 'Generate the OAuth secret on the service principal', it: 'Genera il secret OAuth sul service principal' },
            { en: 'Best for: get running today', it: 'Ideale per: partire oggi' },
          ],
        },
        right: {
          title: { en: 'Option B: OIDC federation', it: 'Opzione B: federation OIDC' },
          items: [
            { en: 'Sessions exchange a short-lived token — nothing to rotate', it: 'Le sessioni scambiano un token a vita breve: niente da ruotare' },
            { en: 'Databricks itself recommends federation for automation', it: 'Databricks stessa consiglia la federation per l’automazione' },
            { en: 'Best for: scaling the integration', it: 'Ideale per: scalare l’integrazione' },
          ],
        },
      },
      notes: {
        en: 'You can start on A and move to B without touching the service principal or its grants.',
        it: 'Puoi partire con A e passare a B senza toccare il service principal né i suoi grant.',
      },
    },
    {
      id: 'oidc-cloud-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Same pattern, *every* cloud', it: 'Stesso pattern, *ogni* cloud' },
        icon: 'Fingerprint',
        items: [
          { en: 'OIDC identity tokens work for AWS, GCP, Vault and JFrog', it: 'I token OIDC funzionano per AWS, GCP, Vault e JFrog' },
          { en: 'Trust policies scope access by org_id, session, or user email', it: 'Le trust policy limitano l’accesso per org_id, sessione o email utente' },
          { en: 'Blueprint actions wire it up at environment build time', it: 'Le action del blueprint lo configurano a build time' },
          { en: 'Databricks option B is the same mechanism end to end', it: 'L’opzione B di Databricks è lo stesso meccanismo dall’inizio alla fine' },
        ],
      },
      notes: {
        en: 'The pattern generalizes: if the target service trusts Devin’s OIDC issuer, no secrets are stored at all.',
        it: 'Il pattern si generalizza: se il servizio si fida dell’issuer OIDC di Devin, non serve salvare nessun secret.',
      },
    },
  ],
};

export default mod;
