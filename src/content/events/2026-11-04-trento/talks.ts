import type { Module } from '../../schema';
import { it } from '../types';

const timerNotes =
  "Comandi del timer: S avvia o mette in pausa, D passa alle domande, R azzera. Conta alla rovescia da 7:00: dopo 5 minuti diventa blu, cioè può chiudere quando vuole; a 0:00 diventa rosso. Con D parte il conto da 2:00 per le domande.\n\nGira il portatile verso lo speaker, oppure metti questa slide sul secondo schermo. Attenzione: se cambi slide, il timer si azzera.";

const fabrizio: Module = {
  id: 'ev-20261104-talk-fabrizio',
  category: 'events',
  icon: 'Mic',
  title: it('Talk · Fabrizio Waldner'),
  summary: it('Divisore: presentazione e timer (5-7 min + 2 di domande)'),
  durationMin: 9,
  sources: [],
  slides: [
    {
      id: 'talk-fabrizio-intro',
      block: {
        type: 'story',
        kicker: it('Talk della community · 1 di 2'),
        title: it('Fabrizio Waldner'),
        text: it('«My Personal Second Brain»'),
        beats: [
          { label: 'Talk', text: it('5-7 minuti') },
          { label: 'Domande', text: it('2 minuti, alzate la mano') },
        ],
        punchline: it('Un applauso per Fabrizio!'),
      },
      notes: it("Siamo alla parte che preferisco: i talk della community. Il primo è Fabrizio Waldner, con «My Personal Second Brain». Mentre collega il suo PC, ve lo presento.\n\nRegole uguali per tutti: 5-7 minuti di talk, poi 2 minuti di domande. Il tempo lo tengo io, e il timer lo vede lui.\n\nQuando è pronto: passa alla slide successiva e premi Avvia (oppure S)."),
      funAside: it('Il timer è inflessibile. Più di me con le slide.'),
    },
    {
      id: 'talk-fabrizio-timer',
      block: {
        type: 'custom',
        component: 'talk-timer',
        title: it('Timer · Fabrizio Waldner'),
        props: {
          speaker: 'Fabrizio Waldner',
          title: 'My Personal Second Brain',
          talkMin: '7',
          softMin: '5',
          qaMin: '2',
        },
      },
      notes: it(timerNotes),
    },
  ],
};

const diego: Module = {
  id: 'ev-20261104-talk-diego',
  category: 'events',
  icon: 'Mic',
  title: it('Talk · Diego Voltolini'),
  summary: it('Divisore: presentazione e timer (5-7 min + 2 di domande)'),
  durationMin: 9,
  sources: [],
  slides: [
    {
      id: 'talk-diego-intro',
      block: {
        type: 'story',
        kicker: it('Talk della community · 2 di 2'),
        title: it('Diego Voltolini'),
        text: it('Il titolo? Sorpresa. Non lo so nemmeno io.'),
        beats: [
          { label: 'Talk', text: it('5-7 minuti') },
          { label: 'Domande', text: it('2 minuti, alzate la mano') },
        ],
        punchline: it('Un applauso per Diego!'),
      },
      notes: it("Secondo talk: Diego Voltolini. Il titolo è una sorpresa anche per me, quindi lo scopriamo insieme.\n\nStesse regole: 5-7 minuti di talk, poi 2 minuti di domande.\n\nQuando è pronto: slide successiva e Avvia (oppure S).\n\nQuando sai il titolo, aggiornalo in src/content/events/2026-11-04-trento/talks.ts: nel testo di questa slide e nella prop title del timer."),
      funAside: it('Neanche Devin è riuscito a scoprire il titolo. E ci ha provato.'),
    },
    {
      id: 'talk-diego-timer',
      block: {
        type: 'custom',
        component: 'talk-timer',
        title: it('Timer · Diego Voltolini'),
        props: {
          speaker: 'Diego Voltolini',
          title: '',
          talkMin: '7',
          softMin: '5',
          qaMin: '2',
        },
      },
      notes: it(timerNotes),
    },
  ],
};

export const talkModules = [fabrizio, diego];
