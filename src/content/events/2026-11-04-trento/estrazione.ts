import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-estrazione',
  category: 'events',
  icon: 'Gift',
  title: it("Licenze Devin"),
  summary: it("10 licenze Pro e Max al posto del merch, inviate dopo via email Luma"),
  durationMin: 6,
  sources: [],
  slides: [
    {
      id: 's20',
      block: { type: 'custom', component: 'trento-20', title: it("Non è molto, ma è un lavoro onesto") },
      notes: it("Tempo: 5:00 (fuori dal talk)\n\nOk, il momento che stavate aspettando, o almeno il motivo per cui alcuni di voi sono ancora qui.\n\nStasera niente sticker e niente magliette. Al loro posto ci sono 10 licenze Devin: una parte sono piani Pro, da 20 dollari al mese, e una parte piani Max, da 200.\n\n[mostri il meme]\n\nLo so. Non è molto, ma è un lavoro onesto.\n\nLe inviamo dopo l'evento, all'email con cui avete fatto il check-in su Luma. Quindi se non l'avete ancora fatto, fatelo stasera. E non serve fare la guardia al telefono: restate lo stesso, c'è la pizza.\n\n[Solo se estrai dal vivo] Estraggo un nome alla volta, chi esce alza la mano. Non vale gridare 'è andato in bagno'. E ricordatevi chi ha scritto il software dell'estrazione: se esce tre volte lo stesso nome, abbiamo un bug report per la prossima demo.\n\nComplimenti a chi riceverà le licenze. Per tutti gli altri: c'è il piano gratuito, e c'è la pizza. Che è comunque un ottimo premio.\n\nPoi: Grazie a tutti, ci vediamo al prossimo. Ora pizza e networking. E chi voleva sapere la storia di Claude e ChatGPT, sa dove trovarmi.\n\n20:35-20:40. Le licenze sono 10, tra Pro e Max: non promettere quante Pro e quante Max finché non è deciso. Vanno all'email del check-in su Luma: dopo l'evento scarica la lista dei check-in da Luma."),
    },
  ],
};

export default mod;
