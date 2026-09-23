import type { Module } from '../schema';

const mod: Module = {
  id: 'prompt-good-vs-bad',
  category: 'prompting',
  icon: 'Scale',
  title: { en: 'Good vs bad instructions', it: 'Istruzioni buone vs cattive' },
  summary: {
    en: 'Real side-by-side prompts from the docs, and why one works and the other flops.',
    it: 'Prompt veri a confronto dai docs, e perché uno funziona e l’altro no.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/essential-guidelines/good-vs-bad-instructions'],
  slides: [
    {
      id: 'goodbad-backend',
      block: {
        type: 'compare',
        title: { en: 'Same task, two *prompts*', it: 'Stesso task, due *prompt*' },
        left: {
          title: { en: 'Bad', it: 'Cattivo' },
          items: [
            { en: '“Add a user stats endpoint.”', it: '“Aggiungi un endpoint per le statistiche utenti.”' },
            { en: 'Unspecified which stats', it: 'Non dice quali statistiche' },
            { en: 'No data source, no pattern, no tests', it: 'Niente fonte dati, pattern o test' },
          ],
        },
        right: {
          title: { en: 'Good', it: 'Buono' },
          items: [
            { en: '“/users/stats returns JSON with user count + average signup age”', it: '“/users/stats ritorna JSON con numero utenti + età media di iscrizione”' },
            { en: '“Use the users table; follow /orders/stats in statsController.js”', it: '“Usa la tabella users; segui /orders/stats in statsController.js”' },
            { en: '“Cover it with StatsController.test.js”', it: '“Coprilo con StatsController.test.js”' },
          ],
        },
      },
      notes: {
        en: 'Verbatim from the docs. The good prompt names route, response shape, data source, a pattern to copy, and the test suite.',
        it: 'Preso dai docs. Il prompt buono nomina route, formato della risposta, fonte dati, un pattern da copiare e la suite di test.',
      },
    },
    {
      id: 'goodbad-frontend',
      block: {
        type: 'compare',
        title: { en: 'Same on the *frontend*', it: 'Stessa cosa sul *frontend*' },
        left: {
          title: { en: 'Bad', it: 'Cattivo' },
          items: [
            { en: '“Add a role dropdown.”', it: '“Aggiungi un dropdown per i ruoli.”' },
            { en: 'Which component? Which roles?', it: 'Quale componente? Quali ruoli?' },
            { en: 'How do we know it works?', it: 'Come verifichiamo che funzioni?' },
          ],
        },
        right: {
          title: { en: 'Good', it: 'Buono' },
          items: [
            { en: '“In UserProfileComponent, add a dropdown with admin, editor, viewer”', it: '“In UserProfileComponent aggiungi un dropdown con admin, editor, viewer”' },
            { en: '“Style it like DropdownBase; call the existing role API”', it: '“Stilizzalo come DropdownBase; chiama l’API dei ruoli esistente”' },
            { en: '“Validate: check the role updates in the DB”', it: '“Valida: controlla che il ruolo si aggiorni nel DB”' },
          ],
        },
      },
      notes: {
        en: 'Pattern to memorize: component + exact contents + style reference + validation step.',
        it: 'Pattern da memorizzare: componente + contenuto esatto + riferimento di stile + passo di validazione.',
      },
      funAside: {
        en: '“Make it pop” works on designers. Barely. It does not work on Devin.',
        it: '“Fallo più pop” funziona con i designer. Forse. Con Devin no.',
      },
    },
    {
      id: 'gvb-recipe',
      block: {
        type: 'bullets',
        title: { en: 'The recipe, *compressed*', it: 'La ricetta, *compressa*' },
        icon: 'ListChecks',
        items: [
          { en: 'The outcome you want, with the task as a means', it: 'L’obiettivo che vuoi, con il task come mezzo' },
          { en: 'Constraints: versions, scope, what NOT to touch', it: 'Vincoli: versioni, scope, cosa NON toccare' },
          { en: 'Done = how you’ll verify it', it: 'Fatto = come lo verifichi' },
          { en: 'Standards: tests, changelog, migrations', it: 'Standard: test, changelog, migrazioni' },
          { en: 'Ask Devin to clarify before acting', it: 'Chiedi a Devin di chiarire prima di agire' },
        ],
      },
      notes: {
        en: 'Five ingredients. If your prompt has all five, you’re in good-prompt territory.',
        it: 'Cinque ingredienti. Se il tuo prompt li ha tutti, sei in territorio prompt-buono.',
      },
    },
  ],
};

export default mod;
