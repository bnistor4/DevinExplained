import type { Module } from '../schema';

const mod: Module = {
  id: 'prompt-instructing-effectively',
  category: 'prompting',
  icon: 'PenLine',
  title: { en: 'Instructing Devin effectively', it: 'Istruire Devin efficacemente' },
  summary: {
    en: 'Prompt Devin like you’d brief a coworker: scope, decisions, success criteria.',
    it: 'Scrivi i prompt come un brief a un collega: scope, decisioni, criteri di successo.',
  },
  durationMin: 4,
  sources: ['https://docs.devin.ai/essential-guidelines/instructing-devin-effectively'],
  slides: [
    {
      id: 'instruct-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Be *specific*, always', it: 'Sii *specifico*, sempre' },
        icon: 'PenLine',
        items: [
          { en: 'Name the repo, the file, the pattern to follow', it: 'Nomina la repo, il file, il pattern da seguire' },
          { en: 'Break work into logical parts: “create a task that…”', it: 'Spezza il lavoro in parti logiche: “crea un task che…”' },
          { en: 'Define success: “emit an event when usage exceeds 80%”', it: 'Definisci il successo: “emetti un evento sopra l’80% di uso”' },
          { en: 'Point at existing code worth reusing: Devin follows your architecture', it: 'Indica codice esistente da riusare: Devin segue la tua architettura' },
          { en: 'Make the judgment calls yourself: don’t leave them open', it: 'Le decisioni prendile tu: non lasciarle aperte' },
        ],
      },
      notes: {
        en: 'The docs’ example prompt monitors RAM/CPU on remote machines: note how it specifies repo, tasks, and a measurable success event.',
        it: 'Il prompt d’esempio dei docs monitora RAM/CPU delle macchine remote: nota come specifica repo, task e un evento di successo misurabile.',
      },
    },
    {
      id: 'instruct-donts',
      block: {
        type: 'compare',
        title: { en: 'Do vs *don’t*', it: 'Sì vs *no*' },
        left: {
          title: { en: 'Do', it: 'Sì' },
          items: [
            { en: '“Add a composite index on order_id + product_id in order_items”', it: '“Aggiungi un indice composto su order_id + product_id in order_items”' },
            { en: '“Replace the correlated subquery with a JOIN to products”', it: '“Sostituisci la subquery correlata con una JOIN su products”' },
            { en: 'Clear scope, boundaries, success criteria', it: 'Scope, confini e criteri di successo chiari' },
          ],
        },
        right: {
          title: { en: 'Don’t', it: 'No' },
          items: [
            { en: '“Improve our database’s performance”', it: '“Migliora le performance del database”' },
            { en: 'Instructions that require big design decisions', it: 'Istruzioni che richiedono decisioni di design importanti' },
            { en: 'Anything where “done” is ambiguous', it: 'Qualsiasi cosa in cui “finito” è ambiguo' },
          ],
        },
      },
      notes: {
        en: 'Both examples are verbatim from the docs. The bad one fails because Devin must guess what “better” means.',
        it: 'Entrambi gli esempi sono presi dai docs. Quello cattivo fallisce perché Devin deve indovinare cosa vuol dire “meglio”.',
      },
    },
    {
      id: 'instruct-quote',
      block: {
        type: 'quote',
        text: {
          en: 'Just as you would provide a detailed spec when asking a coworker to code something, you should do the same with Devin.',
          it: 'Come daresti una spec dettagliata a un collega per un lavoro di codice, fai lo stesso con Devin.',
        },
        author: 'docs.devin.ai',
        role: { en: 'Essential guidelines', it: 'Linee guida essenziali' },
      },
      notes: {
        en: 'If the room remembers one line, it’s this one. The prompt is the spec.',
        it: 'Se la sala ricorda una frase, è questa: il prompt è la spec.',
      },
    },
  ],
};

export default mod;
