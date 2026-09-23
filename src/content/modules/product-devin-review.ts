import type { Module } from '../schema';

const mod: Module = {
  id: 'product-devin-review',
  category: 'products',
  icon: 'GitPullRequest',
  title: { en: 'Devin Review', it: 'Devin Review' },
  summary: {
    en: 'The bottleneck moved from writing code to reviewing it, so Devin reviews PRs too.',
    it: 'Il collo di bottiglia si è spostato dallo scrivere codice al revisionarlo: quindi Devin fa review anche delle PR.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/work-with-devin/devin-review',
    'https://docs.devin.ai/product-guides/bot-comment-settings',
    'https://docs.devin.ai/integrations/pr-templates',
  ],
  slides: [
    {
      id: 'review-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Review is the *new* bottleneck', it: 'La review è il *nuovo* collo di bottiglia' },
        icon: 'GitPullRequest',
        items: [
          { en: 'Groups changes logically, not alphabetically by file', it: 'Raggruppa le modifiche per logica, non per nome di file' },
          { en: 'Detects moved/copied code instead of showing delete+insert', it: 'Riconosce codice spostato/copiato invece di mostrare delete+insert' },
          { en: 'Flags bugs by confidence and security issues with CWE/severity', it: 'Segnala bug per confidence e vulnerabilità con CWE e severità' },
          { en: 'Comment, approve, request changes: synced back to your SCM', it: 'Commenti, approve, request changes: sincronizzati sul tuo SCM' },
          { en: 'Public PRs work for free: no Devin account needed', it: 'Sulle PR pubbliche funziona gratis: non serve un account Devin' },
        ],
      },
      notes: {
        en: 'Works on GitHub (incl. Enterprise Server/Cloud), GitLab (incl. self-managed) and connected Azure DevOps repos.',
        it: 'Funziona su GitHub (incl. Enterprise Server/Cloud), GitLab (anche self-managed) e repo Azure DevOps collegate.',
      },
    },
    {
      id: 'review-details',
      block: {
        type: 'bullets',
        title: { en: 'The *details* that matter', it: 'I *dettagli* che contano' },
        icon: 'SlidersHorizontal',
        items: [
          { en: 'Ask questions about the PR: answers use the whole codebase', it: 'Puoi fare domande sulla PR: le risposte usano tutto il codebase' },
          { en: 'Devin ignores bot comments by default: no infinite loops', it: 'Devin ignora i commenti dei bot di default: niente loop infiniti' },
          { en: '“Selected only” allowlists trusted bots like github-actions', it: '“Selected only” mette in allowlist i bot fidati tipo github-actions' },
          { en: 'Devin PR template: DEVIN_PR_TEMPLATE.md overrides the human one', it: 'Template Devin: DEVIN_PR_TEMPLATE.md ha la precedenza su quello umano' },
        ],
      },
      notes: {
        en: 'The bot-comment allowlist lives in Settings → Devin → Pull requests: admins only.',
        it: 'L’allowlist dei bot sta in Settings → Devin → Pull requests: solo admin.',
      },
      funAside: {
        en: 'Two bots arguing on a PR forever is a real failure mode. Devin ships a mute button.',
        it: 'Due bot che litigano per sempre su una PR è un failure mode vero. Devin ha il pulsante mute.',
      },
    },
    {
      id: 'review-bot-modes',
      block: {
        type: 'compare',
        title: { en: 'Bot comments: *three* postures', it: 'Commenti dei bot: *tre* posture' },
        left: {
          title: { en: 'No bots (default)', it: 'No bot (default)' },
          items: [
            { en: 'Ignores all bot comments', it: 'Ignora tutti i commenti dei bot' },
            { en: 'Safest: zero loop risk', it: 'Il più sicuro: zero rischio di loop' },
          ],
        },
        right: {
          title: { en: 'Selected only', it: 'Solo selezionati' },
          items: [
            { en: 'Allowlist bot usernames like github-actions[bot]', it: 'Allowlist di username come github-actions[bot]' },
            { en: '“All bots” exists: the docs warn it can loop', it: 'Esiste “All bots”: i docs avvisano che può entrare in loop' },
          ],
        },
      },
      notes: {
        en: '“Selected only” is the recommended mode: precise control without open loops.',
        it: '“Selected only” è la modalità consigliata: controllo preciso senza loop aperti.',
      },
    },
  ],
};

export default mod;
