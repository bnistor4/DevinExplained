import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-le-basi',
  category: 'events',
  icon: 'BookOpen',
  title: it("Le basi"),
  summary: it("Chatbot vs agente, harness, PR e test end-to-end"),
  durationMin: 4,
  sources: [],
  slides: [
    {
      id: 's07',
      block: { type: 'custom', component: 'trento-07', title: it("Chatbot, agente, harness") },
      notes: it("Tempo: 1:45 · a fine slide: minuto 8:30 su 24:45 · orario previsto 19:18:30\n\nUn passo indietro, perché stasera userò parole che spesso diamo per scontate.\n\n[indica il meme] Questo ero io nel 2023: ChatGPT mi scriveva una funzione e io pensavo di avere un agente. No.\n\nUn chatbot è uno chef che vi detta la ricetta al telefono. Bravissimo, ma la cucina la fate voi: copiate, incollate, provate, tornate a lamentarvi.\n\nUn agente è uno chef che entra in cucina e cucina davvero: apre i file, li modifica, lancia comandi, guarda il risultato, corregge.\n\nE la cucina si chiama harness. Theo, quello di T3, ci ha scritto un post a fine ottobre. [S27] Il succo: un modello da solo produce solo testo. Per fare cose gli servono attrezzi, 'leggi file', 'modifica file', 'lancia un comando', e un sistema che esegue davvero l'attrezzo e gli riporta il risultato. Quel sistema è l'harness. Chef più cucina uguale agente.\n\nIl ciclo dell'agente, in parole semplici: decide cosa fare, usa un attrezzo, guarda cosa è successo, corregge e riparte. Va avanti così finché il lavoro è finito o gli serve una vostra decisione.\n\nTheo non parla di Devin, sia chiaro. Ma il concetto spiega bene Devin: non è 'un modello', è una cucina attrezzata, con una macchina sua, un browser e la possibilità di usare chef diversi. Quindi quando confrontate Devin con Claude Code o Copilot, non state confrontando chef. State confrontando cucine.\n\nSe ti chiedono (non leggere):\n- Confronto aggiornato: anche GitHub Copilot dal 28 ott 2026 ha \"Copilot in the cloud\" sui piani a pagamento, con ambiente a scelta tra sandbox cloud, GitHub Actions o remoto. Le cucine si somigliano sempre di più: cambia cosa c'è dentro. [S61]\n\n[S27] https://x.com/theo/status/2113424203345265053 (\"tl;dr - An agent is what happens when you combine a harness and an LLM.\"). Cognition dice di voler combinare i modelli migliori, compresi i propri [S10][S15]."),
    },
    {
      id: 's08',
      block: { type: 'custom', component: 'trento-08', title: it("PR e test end-to-end") },
      notes: it("Tempo: 1:45 · a fine slide: minuto 10:15 su 24:45 · orario previsto 19:20:15\n\nAltre due parole che sentirete nella demo.\n\nPR, pull request: una proposta di modifica. Come un documento Word con le revisioni attive che mandate al capo: 'ho cambiato queste righe, approvi?' Finché nessuno fa merge, il codice vero non cambia. Devin lavora così: non tocca il vostro main, vi apre una PR. Il bottone 'merge' lo premete voi.\n\nTest end-to-end. Un unit test controlla un pezzo singolo: il forno arriva a 200 gradi? Utile, ma non vi dice se la cena è buona. Un test end-to-end prova tutto il percorso come un utente vero: apro il browser, faccio login, aggiungo un prodotto, salvo, controllo che sia salvato davvero.\n\nPuoi avere tutti gli unit test verdi e il sito che non ti fa fare login. Ci siamo passati tutti.\n\nEd è la cosa che mi interessa di Devin oggi: dopo la PR può avviare l'app, cliccare come un utente e mandarti il video di quello che ha fatto. [S19] Non 'fidati', ma 'guarda'.\n\nSe ti chiedono (non leggere):\n- Come si attiva il test con video: dopo la PR clicchi \"Test the app\", oppure lo pre-approvi in Settings > Preferences. Devin prepara l'app, scrive un piano con il flusso end-to-end più importante e te lo manda prima, poi aspetta la CI verde, registra lo schermo con annotazioni e zoom e ti manda il video. Se servono credenziali le salva come secret. [S19]\n- Esempio dal video ufficiale del 23 ottobre: task \"aggiungi le scadenze alle card\" di una app Kanban, 1 sessione, 1 PR, 40 test verdi più lint, build e un giro nel browser con Playwright; Devin Review trova 5 bug, Auto-Fix li risolve tutti. È il loro esempio, su un'app scelta da loro. [S41]\n\nSe sei in anticipo: chiedi alla sala \"Chi ha test end-to-end nel proprio progetto?\" [S19] https://docs.devin.ai/work-with-devin/testing-and-recordings"),
      funAside: it("Il bottone merge è il vero boss finale."),
    },
  ],
};

export default mod;
