import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-secrets-security-profiles',
  category: 'onboarding',
  icon: 'KeyRound',
  title: { en: 'Secrets, OIDC, security profiles', it: 'Secrets, OIDC, security profile' },
  summary: {
    en: 'Three ways Devin touches credentials: stored secrets, short-lived OIDC tokens, and restriction bundles.',
    it: 'Tre modi in cui Devin tocca le credenziali: secrets salvati, token OIDC a vita breve e bundle di restrizioni.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/product-guides/secrets',
    'https://docs.devin.ai/product-guides/oidc',
    'https://docs.devin.ai/product-guides/security-profiles',
  ],
  slides: [
    {
      id: 'secrets-cards',
      block: {
        type: 'cards',
        title: { en: 'Three *postures* for credentials', it: 'Tre *posture* per le credenziali' },
        cards: [
          {
            icon: 'KeyRound',
            title: { en: 'Secrets', it: 'Secrets' },
            text: {
              en: 'Encrypted at rest; org-wide or personal scope. Notes document rotation and scope.',
              it: 'Cifrati a riposo; scope org o personale. Le note documentano rotazione e ambito.',
            },
          },
          {
            icon: 'Fingerprint',
            title: { en: 'OIDC', it: 'OIDC' },
            text: {
              en: 'Short-lived identity tokens exchanged by AWS/GCP/Vault — nothing static to store.',
              it: 'Token di identità a vita breve scambiati da AWS/GCP/Vault: niente di statico da salvare.',
            },
          },
          {
            icon: 'ShieldCheck',
            title: { en: 'Security profiles', it: 'Security profile' },
            text: {
              en: 'Reusable bundles of network, MCP, git and gh-token restrictions.',
              it: 'Bundle riusabili di restrizioni su rete, MCP, git e token gh.',
            },
          },
        ],
      },
      notes: {
        en: 'Recommended pattern: a dedicated devin@company.com account per service, credentials stored as secrets.',
        it: 'Pattern consigliato: un account dedicato devin@company.com per servizio, credenziali salvate come secrets.',
      },
    },
    {
      id: 'oidc-bullets',
      block: {
        type: 'bullets',
        title: { en: 'OIDC: *nothing* to rotate', it: 'OIDC: *niente* da ruotare' },
        icon: 'Fingerprint',
        items: [
          { en: 'Each session gets a short-lived, Devin-signed identity token', it: 'Ogni sessione riceve un token di identità a vita breve firmato da Devin' },
          { en: 'Your cloud verifies it against Devin’s public OIDC issuer', it: 'Il tuo cloud lo verifica sull’issuer OIDC pubblico di Devin' },
          { en: 'Claims like org_id and requesting_user_email drive trust policies', it: 'Claim come org_id e requesting_user_email guidano le trust policy' },
          { en: 'Blueprint actions exist for AWS, GCP, Vault and JFrog', it: 'Esistono action per blueprint per AWS, GCP, Vault e JFrog' },
          { en: 'Tokens expire on their own — nothing stored, nothing revoked', it: 'I token scadono da soli: niente salvato, niente da revocare' },
        ],
      },
      notes: {
        en: 'One blueprint line: uses: github.com/CognitionAI/actions/setup-aws-oidc@main + role-arn. Then aws sts just works.',
        it: 'Una riga di blueprint: uses: github.com/CognitionAI/actions/setup-aws-oidc@main + role-arn. Poi aws sts funziona e basta.',
      },
    },
    {
      id: 'profiles-bullets',
      block: {
        type: 'bullets',
        title: { en: 'What a profile can *restrict*', it: 'Cosa può *limitare* un profilo' },
        icon: 'ShieldCheck',
        items: [
          { en: 'Network policy: an allowlist of hosts and CIDR ranges', it: 'Network policy: allowlist di host e range CIDR' },
          { en: 'MCP access: which MCP servers the session may call', it: 'Accesso MCP: quali server MCP la sessione può chiamare' },
          { en: 'Devin MCP read-only: inspect, but don’t create or edit', it: 'Devin MCP read-only: ispeziona, ma non creare né modificare' },
          { en: 'Git access: read-only (no pushes, no PRs) or full', it: 'Accesso git: read-only (niente push, niente PR) o completo' },
          { en: 'Strip the GitHub CLI token — repos still work via the integration', it: 'Rimuovi il token GitHub CLI: le repo funzionano comunque via integrazione' },
        ],
      },
      notes: {
        en: 'Profiles attach at org default, automation, or session level. Enterprises can enforce them as a hard floor.',
        it: 'I profili si attaccano come default org, su automazioni o su singole sessioni. Le enterprise possono imporli come pavimento.',
      },
    },
  ],
};

export default mod;
