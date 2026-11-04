import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-da-dove-veniamo',
  category: 'events',
  icon: 'History',
  title: it("Da dove veniamo"),
  summary: it("Il lancio del 2024, i 500 $/mese e il test di Answer.AI"),
  durationMin: 3,
  sources: [],
  slides: [
    {
      id: 's04',
      block: { type: 'custom', component: 'trento-04', title: it("Marzo 2024, il video che ha fatto il giro del mondo") },
      notes: it("Tempo: 1:00 · a fine slide: minuto 5:00 su 24:45 · orario previsto 19:15:00\n\nMarzo 2024. Cognition presenta Devin come 'il primo AI software engineer'. Video ovunque, LinkedIn in fiamme, tutti i CTO in ansia. [S1]\n\nIl numero dichiarato era 13,86% su SWE-bench. SWE-bench, terra terra: una raccolta di bug veri presi da progetti open source su GitHub. Dai il bug all'AI e vedi se lo sistema davvero.\n\nIl sistema migliore prima faceva meno del 2%. Ma traduciamolo: su 100 bug, ne sistemava 14. Gli altri 86... insomma, ci aveva provato.\n\n[S1] https://cognition.com/blog/introducing-devin . Post originale su X: https://x.com/cognition/status/1767548763134964000 (13,86% senza aiuto contro 1,96% del precedente stato dell'arte senza aiuto e 4,80% assistito). Il post diceva anche che Devin aveva passato colloqui tecnici di aziende AI e fatto lavori su Upwork: battuta del CV tolta per stare nei tempi, usala se sei in anticipo."),
    },
    {
      id: 's05',
      block: { type: 'custom', component: 'trento-05', title: it("500 dollari al mese e un test spietato") },
      notes: it("Tempo: 1:00 · a fine slide: minuto 6:00 su 24:45 · orario previsto 19:16:00\n\nDicembre 2024: Devin diventa disponibile a tutti. Prezzo di partenza: 500 dollari al mese, per team. [S2]\n\nA gennaio 2025 il team di Answer.AI lo prova per un mese su 20 task veri. Risultato: 3 successi, 14 fallimenti, 3 'boh'. E la cosa peggiore, dicevano, era non riuscire a prevedere quali task sarebbero andati bene. [S3]\n\nQuesto è il Devin che molti di voi hanno in testa. Ed era una critica giusta.\n\n[S2] https://cognition.com/blog/devin-generally-available [S3] https://www.answer.ai/posts/2025-01-08-devin.html"),
    },
    {
      id: 's06',
      block: { type: 'custom', component: 'trento-06', title: it("It actually works now") },
      notes: it("Tempo: 0:45 · a fine slide: minuto 6:45 su 24:45 · orario previsto 19:16:45\n\nPoi succede questa cosa. Hamel Husain, uno degli autori di quel test, riprende il suo vecchio post e scrive che è superato: Devin adesso è uno dei suoi strumenti preferiti. Motivo numero 3: 'It actually works now'. [S29]\n\nTipo il ristorante che mette in vetrina: 'Ora il cibo è commestibile.'\n\nLa parte interessante è il perché: un po' sono migliorati i modelli, ma è migliorato anche l'harness. Tenetevi questa parola, la spieghiamo adesso.\n\nQuote-tweet: https://x.com/HamelHusain/status/2050363550020055290 (2 maggio 2026, 01:55 ora di Roma). Tweet originale del 17 gennaio 2025: https://x.com/HamelHusain/status/1880129024737104118."),
    },
  ],
};

export default mod;
