import type { Module } from '../schema';

const mod: Module = {
  id: 'product-deepwiki',
  category: 'products',
  icon: 'BookMarked',
  title: { en: 'DeepWiki', it: 'DeepWiki' },
  summary: {
    en: 'Auto-generated wikis for your repos — architecture diagrams, sources, and Ask Devin on top.',
    it: 'Wiki generate automaticamente per le tue repo: diagrammi, sorgenti e Ask Devin sopra.',
  },
  durationMin: 3,
  sources: [
    'https://docs.devin.ai/work-with-devin/deepwiki',
    'https://docs.devin.ai/onboard-devin/index-repo',
  ],
  slides: [
    {
      id: 'deepwiki-bullets',
      block: {
        type: 'bullets',
        title: { en: 'A wiki that *writes itself*', it: 'Una wiki che si *scrive da sola*' },
        icon: 'BookMarked',
        items: [
          { en: 'Devin indexes your repos and generates wikis with architecture diagrams', it: 'Devin indicizza le repo e genera wiki con diagrammi di architettura' },
          { en: 'Every claim links back to the source code', it: 'Ogni affermazione rimanda al codice sorgente' },
          { en: 'Ask Devin searches on top of the wiki — grounded answers', it: 'Ask Devin cerca sopra la wiki: risposte con fonti' },
          { en: 'Indexing starts automatically when you connect repos', it: 'L’indicizzazione parte da sola quando colleghi le repo' },
          { en: 'deepwiki.com — free public version for open-source repos', it: 'deepwiki.com: versione gratuita per le repo open source' },
        ],
      },
      notes: {
        en: 'Indexing ≠ environment: indexing powers search and understanding; the environment is the VM Devin works in.',
        it: 'Indicizzazione ≠ ambiente: l’indicizzazione alimenta ricerca e comprensione; l’ambiente è la VM in cui Devin lavora.',
      },
      funAside: {
        en: 'The codebase finally has a README that’s actually read. And written.',
        it: 'Finalmente il codebase ha un README che qualcuno legge. E che qualcuno ha scritto.',
      },
    },
    {
      id: 'deepwiki-effort',
      block: {
        type: 'cards',
        title: { en: 'Three *effort* levels', it: 'Tre livelli di *effort*' },
        cards: [
          {
            icon: 'Gauge',
            title: { en: 'Low (default)', it: 'Low (default)' },
            text: { en: 'Free. Good enough to get oriented.', it: 'Gratuito. Basta per orientarsi.' },
          },
          {
            icon: 'Gauge',
            title: { en: 'Medium', it: 'Medium' },
            text: {
              en: '~5–10 ACU per wiki — deeper analysis for bigger repos.',
              it: '~5–10 ACU a wiki: analisi più profonda per repo grandi.',
            },
          },
          {
            icon: 'Gauge',
            title: { en: 'High', it: 'High' },
            text: {
              en: '~20–40 ACU per wiki — the most thorough documentation.',
              it: '~20–40 ACU a wiki: la documentazione più approfondita.',
            },
          },
        ],
      },
      notes: {
        en: 'Medium/high need a subscription or credits — otherwise generation is rejected and no wiki is produced.',
        it: 'Medium e high richiedono abbonamento o crediti: altrimenti la generazione è rifiutata e non esce nessuna wiki.',
      },
    },
    {
      id: 'deepwiki-index',
      block: {
        type: 'bullets',
        title: { en: 'Indexing in *four steps*', it: 'Indicizzazione in *quattro passi*' },
        icon: 'ListChecks',
        items: [
          { en: 'Settings → DeepWiki → Repositories → Add', it: 'Settings → DeepWiki → Repositories → Add' },
          { en: 'Check the repos, confirm — indexing takes a few minutes', it: 'Seleziona le repo, conferma: l’indicizzazione prende pochi minuti' },
          { en: 'The default branch is indexed; add more from Indexed branches', it: 'Viene indicizzato il branch di default; altri da Indexed branches' },
          { en: 'Tip: index the branches your team actively develops on', it: 'Consiglio: indicizza i branch su cui il team sviluppa davvero' },
        ],
      },
      notes: {
        en: 'Indexing is separate from environment setup — it powers search and understanding, not the VM.',
        it: 'L’indicizzazione è separata dal setup dell’ambiente: alimenta ricerca e comprensione, non la VM.',
      },
    },
  ],
};

export default mod;
