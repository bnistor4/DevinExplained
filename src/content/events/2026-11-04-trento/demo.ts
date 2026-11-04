import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-demo',
  category: 'events',
  icon: 'MonitorPlay',
  title: it("Demo"),
  summary: it("La demo live: cosa stiamo per vedere"),
  durationMin: 1,
  sources: [],
  slides: [
    {
      id: 's19',
      block: { type: 'custom', component: 'trento-19', title: it("Demo, cosa stiamo per vedere") },
      notes: it("Tempo: 0:45 · a fine slide: minuto 24:45 su 24:45 · orario previsto 19:34:45\n\nBasta teoria. Adesso un caso reale e non un'app di esempio: un mio sito, TuttoCalcolato.it, su cui Devin lavora ogni mattina alle 8, mentre io faccio colazione.\n\nGuardate tre cose: come pianifica, come lavora, come verifica. E vi faccio vedere anche quando qualcosa va storto: è la parte più utile della serata.\n\nMai tagliare. La demo è nelle slide subito dopo, nel modulo «Il caso TuttoCalcolato.it»."),
      funAside: it("Se qualcosa si rompe, fa parte della demo. Giuro."),
    },
  ],
};

export default mod;
