import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-news',
  category: 'events',
  icon: 'Newspaper',
  title: it('News · ottobre e novembre 2026'),
  summary: it('Le novità più recenti, da usare dove servono'),
  durationMin: 2,
  sources: [],
  slides: [
    {
      id: 'news-1',
      block: {
        type: 'cards',
        title: it('Novità di ottobre e novembre (1/2)'),
        cards: [
          { icon: 'Wallet', title: it("Budget gerarchici"), text: it("Gli admin enterprise assegnano budget ai reparti, che li dividono tra team, progetti e persone.") },
          { icon: 'ShieldPlus', title: it("Corridor entra in Cognition"), text: it("Cognition compra Corridor, startup di sicurezza fondata da Jack Cable e Ashwin Ramaswami.") },
          { icon: 'ShieldCheck', title: it("Devin Security 2.0"), text: it("Scansiona con modelli di frontiera, dà priorità in base al vostro ambiente reale e apre le correzioni come PR.") },
          { icon: 'MapPin', title: it("Cognition sbarca a Londra"), text: it("Team UK cresciuto di oltre il 200% in sei mesi; The Access Group ha dato Devin a più di 2.000 ingegneri.") },
        ],
      },
      notes: it("Budget gerarchici (2 novembre 2026): È la novità di ieri l'altro: gli admin enterprise possono assegnare budget di ACU ai responsabili di reparto, che a loro volta li distribuiscono a team, progetti e persone. Quando il budget finisce, la sessione si ferma. Aggancio: \"Il tema adesso non è più se l'AI funziona, ma quanto spendi e chi decide.\" Fonte: https://devin.ai/blog/hierarchical-budgets (commento: https://thenewstack.io/22842541cognition-devin-hierarchical-budgets/)\n\nAttenzione: la frase «quando il budget finisce, la sessione si ferma» è imprecisa. Secondo il master v3, quando un limite di organizzazione è raggiunto il nuovo lavoro viene bloccato; si ferma la singola sessione solo con il limite per sessione delle Automations. Non dirla sul palco.\n\nCorridor entra in Cognition (28 ottobre 2026): Cognition ha acquisito Corridor, startup di sicurezza fondata da Jack Cable e Ashwin Ramaswami. Il post cita anche il presidente Russell Kaplan e il CSO Alex Stamos. Aggancio: \"La sicurezza è il fronte dove Cognition sta investendo di più, anche comprando aziende.\" Fonte: https://cognition.com/blog/corridor-joining-cognition\n\nDevin Security 2.0 (26 ottobre 2026): Scansioni con modelli frontier, priorità calcolate sul vostro ambiente reale e correzioni automatiche che diventano pull request. Cognition ha messo sul piatto \"centinaia di milioni di dollari\" in crediti Devin per i clienti. Il 22 ottobre avevano anche pubblicato come plugin open source il flusso che hanno usato loro stessi per correggere le falle critiche di Node e PHP uscite il 21 ottobre. Aggancio: \"Il giorno dopo una CVE critica, Devin apre una PR per repo e la testa prima e dopo.\" Fonti: https://cognition.com/blog/devin-security ; indice blog https://devin.ai/blog (voci \"Devin Security 2.0\", 26 ottobre 2026, e \"Fixing Critical Node & PHP Flaws\", 22 ottobre 2026).\n\nCognition sbarca a Londra (22 ottobre 2026): Il team UK è cresciuto di oltre il 200% in sei mesi, con un nuovo ufficio a Finsbury Square. The Access Group ha dato Devin a più di 2.000 ingegneri su 250 prodotti: PR mergiate quintuplicate e alcune migrazioni legacy fino a 480 volte più veloci. Aggancio: \"L'Europa non sta a guardare: Londra è già una delle basi di Cognition.\" Fonte: https://cognition.com/blog/building-in-london"),
    },
    {
      id: 'news-2',
      block: {
        type: 'cards',
        title: it('Novità di ottobre e novembre (2/2)'),
        cards: [
          { icon: 'Gauge', title: it("Efficiency Score e Devin Coach"), text: it("La spesa AI si assegna in base all'efficienza: un punteggio, un «coach» che dà consigli e approvazioni automatiche per chi lavora bene.") },
          { icon: 'Siren', title: it("Devin Oncall"), text: it("Indaga da solo su alert e bug in produzione; AngelList dice di trovare 3,5 volte più cause radice.") },
          { icon: 'Cpu', title: it("Nuovi modelli dentro Devin"), text: it("Claude Haiku 5.5 (58,4% su FrontierCode 1.1) e Gemini 4 Argon (60,5% su FrontierCode 1.1). FrontierCode: il benchmark di Cognition che misura se la PR verrebbe davvero accettata.") },
          { icon: 'Brain', title: it("Memory and Dreaming"), text: it("Tra una sessione e l'altra Devin consolida quello che impara: Cognition lo chiama «dreaming».") },
        ],
      },
      notes: it("Efficiency Score e Devin Coach (19 ottobre 2026): Invece di mettere un tetto uguale per tutti, Cognition propone di allocare la spesa AI in base all'efficienza: punteggio di efficienza, un \"coach\" che suggerisce come usare meglio Devin e approvazioni automatiche per chi lavora bene. Aggancio: insieme a B1, \"Devin adesso vi dice anche se lo state usando bene\". Fonte: indice blog https://devin.ai/blog (voce \"A smarter approach to AI cost controls\", 19 ottobre 2026).\n\nDevin Oncall (15 ottobre 2026): Devin indaga da solo su alert e bug report in produzione. In Reducto ha aperto un incidente prima ancora che scattassero gli alert; AngelList dice di trovare 3,5 volte più cause radice e di gestire metà degli incidenti da cima a fondo, al punto che ha mandato in pensione il suo strumento interno. Aggancio: \"Devin non scrive solo codice, ora fa anche la reperibilità notturna.\" Fonte: https://devin.ai/blog/introducing-devin-oncall\n\nNuovi modelli dentro Devin (ottobre 2026): Claude Haiku 5.5 (7 ottobre, 58,4% su FrontierCode 1.1, usato anche come aiuto cuoco in Fusion) e Gemini 4 Argon (13 ottobre, 60,5% su FrontierCode 1.1, al 75% di sconto fino al 27 ottobre). Aggancio: \"Il chef capo e l'aiuto cuoco cambiano ogni mese: l'harness resta.\" Fonte: indice blog https://devin.ai/blog\n\nMemory and Dreaming (5 ottobre 2026): Devin consolida quello che impara tra una sessione e l'altra: Cognition la chiama \"dreaming\". Aggancio: \"Sì, Devin di notte sogna. E al mattino si ricorda le vostre convenzioni.\" Fonte: https://devin.ai/blog/memory-and-dreaming\n\nContesto per la Q&A (non leggere):\n- Raccolta di oltre 1 miliardo a 26 miliardi di valutazione, 27 maggio 2026: https://cognition.com/blog/series-d . Poi, a settembre 2026, oltre 2 miliardi a 48 miliardi (Series E): https://cognition.com/blog/series-e\n- AI Productivity Guarantee, 4 giugno 2026 (firmato Scott Wu): se Devin produce meno valore di quanto pagate, Cognition finanzia l'uso fino a 10 milioni di dollari. https://cognition.com/blog/ai-guarantee\n- Devin con un PC Windows tutto suo, 21 maggio 2026: https://cognition.com/blog/devin-is-getting-a-windows-pc\n- Devin che gestisce altri Devin, 19 marzo 2026: https://cognition.com/blog/devin-can-now-manage-devins\n- Acquisizioni: TierZero (20 luglio 2026, https://cognition.com/blog/welcoming-tierzero) e Dioxus (10 settembre 2026, https://cognition.com/blog/welcoming-dioxus).\n- Eventi pubblici: Cognition Builder Day a Dublino il 7 novembre 2026 (https://luma.com/cognition-dublin) e Merge Tokyo il 24 novembre 2026 (https://merge-tokyo.jp/). Verifica: la pagina Luma \"Cognition Builder Day\" esiste (Dublino, Baseline, organizzata da Give(a)Go, 200 $ di crediti Devin a partecipante); la data non compare nel testo della pagina. Merge Tokyo confermato: 24 novembre 2026, Tokyo, oltre 400 partecipanti, organizzato da Cognition. Fonti: https://luma.com/cognition-dublin ; https://merge-tokyo.jp/\n- Valutazione da 70-80 miliardi (28 ottobre 2026): indiscrezione di Business Insider non confermata da Cognition; il dato ufficiale più recente è 48 miliardi (Series E, settembre 2026). Non dirla come fatto."),
    },
  ],
};

export default mod;
