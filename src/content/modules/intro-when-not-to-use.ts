import type { Module } from '../schema';

const mod: Module = {
  id: 'intro-when-not-to-use',
  category: 'intro',
  icon: 'CircleAlert',
  title: { en: 'When NOT to use Devin', it: 'Quando NON usare Devin' },
  summary: {
    en: 'The honest slide: which tasks fit Devin, which don’t, and the pre-task checklist.',
    it: 'La slide onesta: quali compiti vanno bene per Devin, quali no, e la checklist pre-task.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/essential-guidelines/when-to-use-devin'],
  slides: [
    {
      id: 'fit-compare',
      block: {
        type: 'compare',
        title: { en: 'Good fit vs *poor fit*', it: 'Adatto vs *poco adatto*' },
        left: {
          title: { en: 'Give it to Devin', it: 'Dallo a Devin' },
          items: [
            { en: 'Clear success criteria: tests, CI, a pattern to match', it: 'Criteri di successo chiari: test, CI, un pattern da seguire' },
            { en: 'Enough context: files, examples, docs, links', it: 'Contesto sufficiente: file, esempi, documentazione, link' },
            { en: 'Focused sessions — think XS, S or M', it: 'Sessioni mirate: pensa a taglie XS, S o M' },
            { en: 'Work you can verify: lint, compile, a UI you can click', it: 'Lavoro verificabile: lint, compilazione, una UI da cliccare' },
          ],
        },
        right: {
          title: { en: 'Do it yourself', it: 'Fallo tu' },
          items: [
            { en: '“Make it better” with no definition of done', it: '“Rendilo migliore” senza una definizione di fatto' },
            { en: 'Huge projects that should be split first', it: 'Progetti enormi da spezzare prima in sessioni più piccole' },
            { en: 'No way to check the result', it: 'Nessun modo di verificare il risultato' },
            { en: 'Missing context Devin can’t guess', it: 'Contesto mancante che Devin non può indovinare' },
          ],
        },
      },
      notes: {
        en: 'Devin handles most tasks, including medium and hard ones — the failure mode is vague instructions, not difficulty.',
        it: 'Devin gestisce la maggior parte dei compiti, anche medi e difficili: il problema è la vaghezza, non la difficoltà.',
      },
    },
    {
      id: 'pre-task-checklist',
      block: {
        type: 'bullets',
        title: { en: 'The *pre-task* checklist', it: 'La checklist *pre-task*' },
        icon: 'ListChecks',
        items: [
          { en: 'Clear start and end, explicit success criteria', it: 'Inizio e fine chiari, criteri di successo espliciti' },
          { en: 'Examples, patterns or prototypes Devin can follow', it: 'Esempi, pattern o prototipi che Devin può seguire' },
          { en: 'Tests, lint or CI to prove the work', it: 'Test, lint o CI per dimostrare il lavoro' },
          { en: 'Scope with Ask Devin first on complex tasks', it: 'Per i compiti complessi, prima delinea il lavoro con Ask Devin' },
          { en: 'Connect MCP tools if the task needs data or designs', it: 'Collega gli MCP se il task richiede dati o design' },
        ],
      },
      notes: {
        en: 'Thirty seconds of checklist doubles your success rate. If in doubt, scope it in Ask Devin.',
        it: 'Trenta secondi di checklist raddoppiano il tasso di successo. Nel dubbio, delinea il task in Ask Devin.',
      },
      funAside: {
        en: '“Devin, fix the bug.” Which bug? Exactly.',
        it: '«Devin, sistema il bug». Quale bug? Appunto.',
      },
    },
    {
      id: 'when-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'hiring a *brilliant* contractor: great with a written spec, useless with “you know what I mean”.',
          it: 'assumere un contractor *brillante*: perfetto con una specifica scritta, in difficoltà con “hai capito cosa intendo”.',
        },
        emoji: '📝',
      },
      notes: {
        en: 'The spec is the prompt. Invest in it.',
        it: 'La specifica è il prompt. Investici.',
      },
    },
  ],
};

export default mod;
