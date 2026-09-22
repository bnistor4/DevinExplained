import type { Module } from '../schema';

const mod: Module = {
  id: 'how-stacked-prs-review',
  category: 'how-it-works',
  icon: 'Layers',
  title: { en: 'Stacked PRs', it: 'PR in stack' },
  summary: {
    en: 'Devin splits big work into an ordered stack of small PRs that land bottom-up, atomically.',
    it: 'Devin spezza il lavoro grande in uno stack ordinato di piccole PR che fanno merge dal basso, in modo atomico.',
  },
  durationMin: 3,
  sources: ['https://docs.devin.ai/work-with-devin/stacked-prs'],
  slides: [
    {
      id: 'stacked-bullets',
      block: {
        type: 'bullets',
        title: { en: 'One change, *many small PRs*', it: 'Un cambiamento, *tante piccole PR*' },
        icon: 'Layers',
        items: [
          { en: 'A stack is an ordered series of PRs — schema, then service layer, then UI', it: 'Uno stack è una serie ordinata di PR: schema, poi service layer, poi UI' },
          { en: 'Each PR diffs only against the layer below — small, reviewable changes', it: 'Ogni PR fa diff solo col layer sotto: cambiamenti piccoli e revisionabili' },
          { en: 'Merging one PR atomically merges every open PR below it', it: 'Il merge di una PR fa il merge atomico di tutte le PR sotto di essa' },
          { en: 'Devin watches CI on every layer and fixes failures', it: 'Devin segue la CI di ogni layer e corregge i fallimenti' },
          { en: 'Conflicts get resolved silently; Devin asks only for real decisions', it: 'I conflitti si risolvono in silenzio; Devin chiede solo per decisioni vere' },
        ],
      },
      notes: {
        en: 'GitHub.com only — no GHES, GitLab, Bitbucket or Azure DevOps. Stacks are 2–100 PRs.',
        it: 'Solo GitHub.com: niente GHES, GitLab, Bitbucket o Azure DevOps. Stack da 2 a 100 PR.',
      },
    },
    {
      id: 'stacked-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'serving a tasting menu *course by course* instead of one giant platter nobody can finish.',
          it: 'servire un menù degustazione *portata per portata* invece di un vassoio gigante che nessuno finisce.',
        },
        emoji: '🍽️',
      },
      notes: {
        en: 'Reviewers read one small self-contained change at a time — that is the whole point.',
        it: 'Chi fa review legge un cambiamento piccolo e autonomo alla volta: è tutto lì il punto.',
      },
    },
    {
      id: 'stacked-control',
      block: {
        type: 'bullets',
        title: { en: 'You stay in *control*', it: 'Il *controllo* resta tuo' },
        icon: 'SlidersHorizontal',
        items: [
          { en: 'Ask Devin to split a change into a stack — or keep one PR', it: 'Chiedi a Devin di spezzare in stack — o di tenere una PR sola' },
          { en: 'Add follow-up PRs on top of an existing stack', it: 'Aggiungi PR successive in cima a uno stack esistente' },
          { en: 'Ask for stack status: each layer’s state, CI, review, mergeability', it: 'Chiedi lo stato dello stack: layer, CI, review, mergeability' },
          { en: 'Say “unstack” and the open PRs become independent again', it: 'Dì “unstack” e le PR aperte tornano indipendenti' },
        ],
      },
      notes: {
        en: 'Devin Review treats stacks as first-class: the whole series is visible with per-layer readiness.',
        it: 'Devin Review tratta gli stack come oggetti di primo livello: serie intera visibile con readiness per layer.',
      },
    },
  ],
};

export default mod;
