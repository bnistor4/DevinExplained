import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-news',
  category: 'events',
  icon: 'Newspaper',
  title: it('News da settembre a oggi'),
  summary: it('Mac, app per iPhone, Desktop nuovo, modelli, budget, Corridor'),
  durationMin: 2,
  sources: [],
  slides: [
    {
      id: 'news-1',
      block: {
        type: 'cards',
        title: it('Novità da settembre a oggi (1/2)'),
        cards: [
          {
            icon: 'Apple',
            title: it('Devin ha un Mac (15 settembre)'),
            text: it("Ora Devin può lavorare anche su un Mac nel cloud, con Xcode e il simulatore di iPhone. Così crea app per iPhone e Mac, le prova come farebbe una persona e vi manda il link TestFlight, il sistema di Apple per provarle prima che escano. Per ora costa come una sessione normale."),
          },
          {
            icon: 'Smartphone',
            title: it('Devin sul telefono (28 settembre)'),
            text: it("È uscita in beta l'app Devin per iPhone, per ora con lista d'attesa. Dal telefono avviate una sessione, ricevete una notifica quando Devin ha bisogno di voi e approvate la PR. Potete anche parlarci a voce. Android non c'è ancora."),
          },
          {
            icon: 'AppWindow',
            title: it('Devin Desktop rifatto (23 ottobre)'),
            text: it("Devin Desktop è l'editor gratuito per Mac, Windows e Linux, l'ex Windsurf. Ora ha la stessa interfaccia del sito e fino a 8 sessioni di Devin affiancate sullo schermo, sia sul vostro PC sia nel cloud."),
          },
          {
            icon: 'Cpu',
            title: it('Nuovi modelli, prezzi più bassi (settembre e ottobre)'),
            text: it("Devin sceglie tra modelli di aziende diverse. A settembre è arrivato SWE-2, il modello di Cognition; poi Claude Sonnet 5.5 e Haiku 5.5, GPT-6.1 Sol e Gemini 4 Argon. E con modelli più economici Fusion costa il 35-40% in meno e Devin Review il 70% in meno."),
          },
        ],
      },
      notes: it("Se hai tempo, un giro veloce sulle novità degli ultimi due mesi. Una frase per riquadro.\n\nDevin ha un Mac (15 settembre). Fino a settembre Devin lavorava su Linux, e da maggio anche su Windows. Ora ha anche un Mac nel cloud, con Xcode e il simulatore di iPhone: può costruire un'app iOS, aprirla, chiuderla, riaprirla e controllare che funzioni davvero, poi mandarvi il link TestFlight, il sistema di Apple per provare le app prima che escano. Per ora una sessione Mac costa come una Linux: è un prezzo di lancio e può cambiare. Fonti: https://devin.ai/blog/devin-gets-a-mac ; https://docs.devin.ai/onboard-devin/environment/macos-support\n\nDevin sul telefono (28 settembre). App per iPhone in beta, con lista d'attesa su devin.ai/mobile. Avviate una sessione, ricevete la notifica quando Devin ha bisogno di voi, rivedete e approvate la PR, e potete parlare a voce con Devin Voice. Android non c'è ancora e non c'è una data di uscita per tutti. Dal 7 ottobre c'è anche la campanella delle notifiche nel sito, con le notifiche push sul telefono. Fonti: https://devin.ai/mobile ; post LinkedIn di Cognition del 28 settembre ; release notes del 7 ottobre, https://docs.devin.ai/release-notes/overview\n\nDevin Desktop rifatto (23 ottobre). È l'ex Windsurf, gratuito per Mac, Windows e Linux. La finestra degli agenti ora è identica al sito: fino a 8 sessioni affiancate, locali o nel cloud, con Automations, Review e Wiki. Attenzione se lo usate già: ora le modifiche dell'agente vanno direttamente nei file, senza la vista delle differenze; si riattiva dalle impostazioni. Fonte: https://docs.devin.ai/desktop/changelog (versione 3.11.212)\n\nNuovi modelli. SWE-2, il modello di Cognition, il 10 settembre; Claude Sonnet 5.5 il 28 settembre (64,4% su FrontierCode 1.1); GPT-6.1 Sol il 29 settembre; Claude Haiku 5.5 il 7 ottobre (58,4%, entra anche come aiuto cuoco in Fusion); Gemini 4 Argon il 13 ottobre (60,5%). Il 28 settembre Jeff Wang di Cognition ha annunciato che Fusion costa il 35-40% in meno e Devin Review il 70% in meno, grazie ai modelli più economici. Fonti: indice https://devin.ai/blog ; post LinkedIn di Jeff Wang del 28 settembre."),
      funAside: it('Devin ha un Mac e un iPhone. Io ho ancora il caricabatterie rotto.'),
    },
    {
      id: 'news-2',
      block: {
        type: 'cards',
        title: it('Novità da settembre a oggi (2/2)'),
        cards: [
          {
            icon: 'Wallet',
            title: it('Budget a cascata (2 novembre)'),
            text: it("Per le aziende: Devin si paga in ACU, una specie di «crediti di lavoro». Ora l'amministratore assegna un budget a ogni reparto, e ogni responsabile lo divide tra i suoi team e progetti. Come i budget aziendali, ma per l'AI."),
          },
          {
            icon: 'Gauge',
            title: it('Un voto a come usate Devin (19 ottobre)'),
            text: it("Per le aziende. Efficiency Score dà a ogni sviluppatore un voto da 0 a 100: quanto lavoro utile ottiene per ogni credito speso. A chi lavora bene i limiti si alzano da soli. E Devin Coach, prima di partire, ti avvisa se la richiesta è troppo vaga."),
          },
          {
            icon: 'ShieldPlus',
            title: it('Cognition compra Corridor (28 ottobre)'),
            text: it("Corridor è una startup di sicurezza informatica nata circa due anni fa, specializzata nel proteggere il codice scritto con l'AI. I fondatori, Jack Cable e Ashwin Ramaswami, hanno passato la carriera a trovare falle in sistemi critici. Ora lavorano su Devin Security."),
          },
          {
            icon: 'Wrench',
            title: it('Un plugin gratis per le falle di Node e PHP (22 ottobre)'),
            text: it("Il 21 ottobre Node.js e PHP hanno corretto falle gravi. Cognition ha reso open source il metodo usato su di sé: un plugin per Devin e per qualsiasi altro agente che trova i progetti colpiti, chiede prima di toccare, aggiorna, testa prima e dopo e apre una PR per progetto. github.com/CognitionAI/devin-vuln-fixes"),
          },
        ],
        footnote: it('Già visti stasera: Security 2.0, Oncall, Memoria, Fusion e il piano ChatGPT.'),
      },
      notes: it("Budget a cascata (2 novembre). Solo per i piani Enterprise. Devin si paga in ACU, i crediti di lavoro. L'amministratore dà un budget mensile a ogni reparto, fino a tre livelli sotto quello principale, con limiti per persona dentro ogni budget. Un responsabile può anche dare un aumento temporaneo, per esempio per una settimana di lancio. Attenzione: la frase «quando il budget finisce, la sessione si ferma» è imprecisa, non dirla. Fonte: https://devin.ai/blog/hierarchical-budgets\n\nUn voto a come usate Devin (19 ottobre). Per le aziende. Efficiency Score, da 0 a 100: per ogni sessione Devin stima quante ore ci avrebbe messo una persona e le confronta con quanto è costata. Conta anche il lavoro che non finisce in una PR, come un'indagine su un bug. Chi ha un voto buono, quando arriva al limite, se lo vede alzare da solo fino a un tetto deciso dall'admin. Devin Coach, prima di partire, segnala gli errori tipici: richiesta vaga, modello troppo costoso per un lavoro semplice, compiti diversi nella stessa sessione. Non riscrive il prompt da solo. Fonte: https://devin.ai/blog/efficiency-based-cost-controls\n\nCognition compra Corridor (28 ottobre). Corridor è nata circa due anni fa per rendere sicuro lo sviluppo fatto con l'AI: si definisce «il livello di sicurezza per i team AI-native». I fondatori Jack Cable e Ashwin Ramaswami lavoreranno su Devin Security, insieme ad Alex Stamos, il responsabile della sicurezza di Cognition. Fonte: https://cognition.com/blog/corridor-joining-cognition\n\nIl plugin per le falle di Node e PHP (22 ottobre). Il 21 ottobre Node.js e PHP hanno pubblicato aggiornamenti per falle che permettono di eseguire codice da remoto. Cognition ha impacchettato il procedimento usato su di sé in Vulnerability Fixes, plugin open source per Devin e qualsiasi agente: trova i repo colpiti, chiede prima di cambiare, aggiorna a una versione corretta verificata, testa prima e dopo e apre una PR per repo. Codice: https://github.com/CognitionAI/devin-vuln-fixes (sono Agent Skills: funzionano in qualsiasi agente che legge i file SKILL.md). Fonte: https://devin.ai/blog/vulnerability-fixes-plugin\n\nSe ti chiedono, altre novità (non leggere):\n- Cognition apre un nuovo ufficio a Londra, con il team inglese più che triplicato in sei mesi (22 ottobre): https://cognition.com/blog/building-in-london\n- Devin dentro Pylon, uno strumento di assistenza clienti: il supporto avvia un'indagine di Devin direttamente dal ticket (13 ottobre): https://devin.ai/blog/devin-in-pylon\n- Partnership con MongoDB per migrare applicazioni vecchie su MongoDB Atlas (29 settembre): https://devin.ai/blog/devin-for-mongodb-modernizations\n- Nuova scheda Activity e report HTML dentro i messaggi di Devin (26 ottobre): release notes.\n- Series E: oltre 2 miliardi raccolti a 48 miliardi di valutazione (settembre): https://cognition.com/blog/series-e\n\nContesto per la Q&A (non leggere):\n- Raccolta di oltre 1 miliardo a 26 miliardi di valutazione, 27 maggio 2026: https://cognition.com/blog/series-d . Poi, a settembre 2026, oltre 2 miliardi a 48 miliardi (Series E): https://cognition.com/blog/series-e\n- AI Productivity Guarantee, 4 giugno 2026 (firmato Scott Wu): se Devin produce meno valore di quanto pagate, Cognition finanzia l'uso fino a 10 milioni di dollari. https://cognition.com/blog/ai-guarantee\n- Devin con un PC Windows tutto suo, 21 maggio 2026: https://cognition.com/blog/devin-is-getting-a-windows-pc\n- Devin che gestisce altri Devin, 19 marzo 2026: https://cognition.com/blog/devin-can-now-manage-devins\n- Acquisizioni: TierZero (20 luglio 2026, https://cognition.com/blog/welcoming-tierzero) e Dioxus (10 settembre 2026, https://cognition.com/blog/welcoming-dioxus).\n- Eventi pubblici: Cognition Builder Day a Dublino il 7 novembre 2026 (https://luma.com/cognition-dublin) e Merge Tokyo il 24 novembre 2026 (https://merge-tokyo.jp/). Verifica: la pagina Luma \"Cognition Builder Day\" esiste (Dublino, Baseline, organizzata da Give(a)Go, 200 $ di crediti Devin a partecipante); la data non compare nel testo della pagina. Merge Tokyo confermato: 24 novembre 2026, Tokyo, oltre 400 partecipanti, organizzato da Cognition. Fonti: https://luma.com/cognition-dublin ; https://merge-tokyo.jp/\n- Valutazione da 70-80 miliardi (28 ottobre 2026): indiscrezione di Business Insider non confermata da Cognition; il dato ufficiale più recente è 48 miliardi (Series E, settembre 2026). Non dirla come fatto."),
      funAside: it('Budget, voti, coach: Devin è diventato anche il mio commercialista.'),
    },
  ],
};

export default mod;
