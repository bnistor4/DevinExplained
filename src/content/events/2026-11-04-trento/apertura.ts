import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-apertura',
  category: 'events',
  icon: 'Hand',
  title: it("Apertura"),
  summary: it("Chi sono, il principio e il programma della serata"),
  durationMin: 4,
  sources: [],
  slides: [
    {
      id: 's01',
      block: { type: 'custom', component: 'trento-01', title: it("Ciao, sono Bogdan Nistor"), props: { linkedin: 'https://www.linkedin.com/in/bnistordev/' } },
      notes: it("Tempo: 1:15 · a fine slide: minuto 1:15 su 24:45 · orario previsto 19:11:15\n\nCiao a tutti, sono Bogdan Nistor. Un romano di origini rumene, trasferito in Trentino. E già qui potrebbe essere l'inizio di una barzelletta.\n\nSono ambassador Devin AI qui a Trento. Di mestiere: full stack developer, freelance, a volte fractional... e lo spazio vuoto lo riempite voi: mi adatto. Se una cosa si può sviluppare o ha una soluzione, ci provo. Quando in azienda qualcosa si inceppa, mi piace capire dov'è il problema e sistemarlo.\n\nCostruisco anche prodotti miei. TuttoCalcolato.it è un side project: una piattaforma di calcolatori di ogni genere. Il più recente è minipim.io, serve a gestire le informazioni di prodotto.\n\nUso agenti AI per programmare tutti i giorni, principalmente Devin. E visto che sono ambassador, tenetene conto: stasera vi dico anche cosa non funziona.\n\nE Claude e ChatGPT? Storia lunga. Se volete saperla, offritemi una birra dopo.\n\nSe volete restare in contatto: il QR sotto la foto porta al mio LinkedIn."),
    },
    {
      id: 's02',
      block: { type: 'custom', component: 'trento-02', title: it("Il principio") },
      notes: it("Tempo: 0:45 · a fine slide: minuto 2:00 su 24:45 · orario previsto 19:12:00\n\nUna cosa prima di partire. Mi piace molto far parte del programma Devin, e il motivo sta tutto in questa riga.\n\n[pausa, lasciala leggere]\n\nÈ quello che ci chiedono di fare come ambassador: aiutare le persone, che usino Devin o no, senza aspettarsi niente in cambio. E per me non è una regola nuova, è più o meno come cerco già di lavorare.\n\nPer questo mi sento grato, e anche un po' fortunato, di starci dentro. Quindi stasera, se usate Claude Code, altri strumenti o niente, va benissimo uguale.\n\nTono: detto semplice, senza enfasi. Non leggere la frase ad alta voce: si legge da sola. Fonte: linee guida del programma ambassador Devin, punto 4 (screenshot fornito da Bogdan, testo originale in inglese sotto la traduzione)."),
    },
    {
      id: 's03',
      block: { type: 'custom', component: 'trento-03', title: it("Perché questa serata") },
      notes: it("Tempo: 2:00 · a fine slide: minuto 4:00 su 24:45 · orario previsto 19:14:00\n\nPerché questa serata? Per creare community, conoscerci, e perché no mettere le fondamenta per costruire qualcosa insieme sul territorio, grazie anche agli strumenti che Devin ci offre. Il motivo che mi appassiona di più è il networking. Sono un topo da laboratorio, passo molto più tempo a sviluppare che a questi eventi. Però penso che più ce ne sono, meglio è.\n\nStasera è un'introduzione a come è cambiato Devin. Molti lo conoscono per i 500 dollari al mese del 2024, oppure per il passaggio da Windsurf a Devin.\n\nIl formato: venticinque minuti di contesto, poi la demo live, poi Q&A senza filtri, poi i lightning talk della community. Gli orari sono indicativi: probabilmente li sbaglieremo.\n\nE per farvi restare fino alla fine: c'è una sorpresa. Ve la svelo dopo i lightning talk.\n\nAlzata di mano veloce. Chi ha provato Devin? ... Chi usa Claude Code, Copilot o simili? ... E chi pensa che Devin costi ancora 500 dollari? ... Perfetto, voi siete il mio target stasera.\n\nGuarda le mani: se quasi nessuno ha provato Devin, allunga le spiegazioni terra terra (slide 7-8). Se tanti lo usano, accorciale. Orari calcolati sul talk da circa 25 minuti (vedi tabella nel master)."),
      funAside: it("Orari indicativi. Tipo quelli dei treni."),
    },
  ],
};

export default mod;
