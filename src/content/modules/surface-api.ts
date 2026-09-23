import type { Module } from '../schema';

const mod: Module = {
  id: 'surface-api',
  category: 'surfaces',
  icon: 'Braces',
  title: { en: 'Devin API', it: 'API Devin' },
  summary: {
    en: 'REST APIs to start sessions, manage orgs and automate, with service users and RBAC.',
    it: 'API REST per avviare sessioni, gestire le org e automatizzare, con service user e RBAC.',
  },
  durationMin: 3,
  sources: ['https://docs.devin.ai/api-reference/overview'],
  slides: [
    {
      id: 'api-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Devin, *programmable*', it: 'Devin, *programmabile*' },
        icon: 'Braces',
        items: [
          { en: 'Organization API: sessions, knowledge, playbooks, secrets, v3/organizations/*', it: 'Organization API: sessioni, knowledge, playbook, secrets, v3/organizations/*' },
          { en: 'Enterprise API: analytics, audit logs, users, billing, v3/enterprise/*', it: 'Enterprise API: analytics, audit log, utenti, billing, v3/enterprise/*' },
          { en: 'Service users with cog_ keys and role-based access control', it: 'Service user con chiavi cog_ e controllo accessi a ruoli' },
          { en: 'create_as_user_id attributes a session to a teammate', it: 'create_as_user_id attribuisce la sessione a un collega' },
          { en: 'Personal Access Tokens work too: sessions attributed to you', it: 'Esistono anche i Personal Access Token: sessioni a tuo nome' },
        ],
      },
      notes: {
        en: 'v1/v2 APIs still work but are deprecated: new work should target v3 for RBAC and attribution.',
        it: 'Le API v1/v2 funzionano ancora ma sono deprecate: il lavoro nuovo va sulla v3 per RBAC e attribuzione.',
      },
    },
    {
      id: 'api-code',
      block: {
        type: 'code',
        title: { en: 'Start a session with *curl*', it: 'Avvia una sessione con *curl*' },
        language: 'bash',
        code: 'curl -X POST \\\n  "https://api.devin.ai/v3/organizations/$DEVIN_ORG_ID/sessions" \\\n  -H "Authorization: Bearer $DEVIN_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "prompt": "Fix the login bug in issue #42",\n    "create_as_user_id": "user_abc123"\n  }\'',
        caption: {
          en: 'Verbatim from the API overview. Teams quick start gets you a key in minutes.',
          it: 'Preso pari pari dall’overview delle API. Il quick start Teams ti dà una chiave in pochi minuti.',
        },
      },
      notes: {
        en: 'create_as_user_id needs the ImpersonateOrgSessions permission on the service user’s role.',
        it: 'create_as_user_id richiede il permesso ImpersonateOrgSessions nel ruolo del service user.',
      },
    },
    {
      id: 'api-when',
      block: {
        type: 'bullets',
        title: { en: 'Reach for the API *when*', it: 'Usa l’API *quando*' },
        icon: 'Braces',
        items: [
          { en: 'Sessions should start from your own tooling or CI', it: 'Le sessioni devono partire dai tuoi strumenti o dalla CI' },
          { en: 'You manage knowledge, playbooks or secrets programmatically', it: 'Gestisci knowledge, playbook o secrets via codice' },
          { en: 'You need analytics or audit logs pulled into your systems', it: 'Devi portare analytics o audit log nei tuoi sistemi' },
          { en: 'Automation should be attributed to a service user, not a person', it: 'L’automazione va attribuita a un service user, non a una persona' },
        ],
      },
      notes: {
        en: 'If it’s a one-off, use the app. If it repeats or integrates, use the API.',
        it: 'Se è una tantum usa l’app. Se si ripete o si integra, usa l’API.',
      },
    },
  ],
};

export default mod;
