import type { Module } from '../../schema';
import { it } from '../types';

export const funStoryModules: Module[] = [
  {
    id: 'ev-20261104-fun-nome',
    category: 'events',
    icon: 'Tag',
    title: it("Fun story · Perché si chiama Devin"),
    summary: it("Aggancio: slide 1 (Ciao, sono Bogdan Nistor)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Domanda per la sala: perché si chiama Devin?"), title: it("DevWalden + DevSteven = Devin"), text: it("All'inizio ogni cofondatore si costruiva il suo sviluppatore virtuale personale, con il proprio nome attaccato davanti."), beats: [{ label: "1", text: it("Walden si fa il suo DevWalden") }, { label: "2", text: it("Steven si fa il suo DevSteven") }, { label: "3", text: it("li fondono in un prodotto solo: Devin") }], punchline: it("Un nome nato da un merge. Ovviamente."), source: "Scott Wu al Lenny's Podcast, 4 maggio 2025" },
        notes: it("Storia: All'inizio ogni cofondatore costruiva per conto suo il proprio \"sviluppatore virtuale\". Walden ha fatto DevWalden, Steven ha fatto DevSteven. Quando hanno messo tutto insieme in un unico prodotto il nome è venuto da sé: Devin, \"il dev universale con cui tutti volevamo lavorare\".\n\nAggancio: \"Prima di parlarvi di Devin: sapete perché si chiama così?\"\n\nData: racconto di Scott Wu al Lenny's Podcast, 4 maggio 2025.\n\nFonte: trascrizione, https://github.com/ChatPRD/lennys-podcast-transcripts/blob/main/episodes/scott-wu/transcript.md (video: https://www.youtube.com/watch?v=gI0ZNhA0rvE, verso 1:30:00).\n\nSlide: 4 (Marzo 2024) oppure 1-2, come rompighiaccio."),
        funAside: it("Io avrei votato DevBogdan. Nessuno me l'ha chiesto."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-lontra',
    category: 'events',
    icon: 'PawPrint',
    title: it("Fun story · La lontra"),
    summary: it("Aggancio: slide 1 (Ciao, sono Bogdan Nistor)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Avete notato la lontra in queste slide?"), title: it("La mascotte di Devin è una lontra"), text: it("Oltre agli esagoni del logo, Devin ha una seconda faccia: una lontrina con il portatile in grembo. In Cognition hanno discusso a lungo su quale tenere, e alla fine hanno tenuto tutte e due."), beats: [{ label: "Scrivanie", text: it("peluche di lontre ovunque, nell'ufficio di San Francisco") }, { label: "Pareti", text: it("quadri con la lontra a Hollywood e sul Fuji") }, { label: "Palestra", text: it("la lontra pure sul barattolo di creatina") }, { label: "Scott Wu", text: it("tiene sulla scrivania un peluche di Devin con il computer: «il mio amico che ti aiuta a costruire di più»") }], punchline: it("Se vedete una lontra col portatile in queste slide, ora sapete chi è."), source: "Lenny's Podcast, mag 2025 · SF Standard, mar 2026 · TechCrunch, mag 2026", image: "/assets/devin.png", imageAlt: "Mascotte Devin", credit: "Mascotte Devin · Cognition" },
        notes: it("Storia: Oltre agli esagoni del logo c'è una seconda immagine di Devin: una lontrina con il portatile in grembo. Scott racconta che hanno discusso a lungo su quale tenere e alla fine hanno tenuto entrambe. Nell'ufficio di San Francisco le lontre sono ovunque: peluche sulle scrivanie, quadri con la lontra a Hollywood e sul Fuji, perfino sul barattolo di creatina in palestra. E Scott in un'intervista ha mostrato il suo peluche sulla scrivania: \"questo è il mio amico che ti aiuta a costruire di più\".\n\nAggancio: \"Se vedete una lontra col portatile in queste slide, ora sapete chi è.\" (Stasera niente adesivi: la frase originale parlava degli adesivi, l'ho adattata.) (Il peluche di Scott: TechCrunch parla di \"a little stuffed animal holding a computer\", che sia la lontra è una deduzione non confermata: vedi Verifica.)\n\nData: Lenny's Podcast, 4 maggio 2025; SF Standard, 24 marzo 2026; TechCrunch, 29 maggio 2026.\n\nFonte: https://github.com/ChatPRD/lennys-podcast-transcripts/blob/main/episodes/scott-wu/transcript.md ; https://sfstandard.com/2026/03/24/grind-sf-startup-racing-build-ai-software-engineer/ ; https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/\n\nSlide: 1 o 20 (chiusura).\n\nVerifica: TechCrunch dice \"a little stuffed animal holding a computer, his own Devin teddy bear of sorts\"; non dice \"lontra\". Dirlo come \"il suo peluche-mascotte di Devin con il computer\", non come lontra certa. Fonte: https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/\n\nSe ti chiedono (non leggere): \"Extreme performance culture\" (marzo 2026). SF Standard scrive che molti lasciano l'ufficio \"solo per dormire\" in appartamenti dietro l'angolo. Fonte: https://sfstandard.com/2026/03/24/grind-sf-startup-racing-build-ai-software-engineer/ . Perché: stesso tema del punto 1. Va bene la parte simpatica dell'articolo (lontre, creatina), non insistere su questa."),
        funAside: it("Nessuna lontra è stata maltrattata per preparare queste slide."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-airbnb',
    category: 'events',
    icon: 'Home',
    title: it("Fun story · Nato in un Airbnb"),
    summary: it("Aggancio: slide 4 (Marzo 2024)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Prima del video virale c'era una casa in affitto"), title: it("Cognition è nata come hackathon in un Airbnb"), text: it("All'inizio non c'era nessuna azienda: solo un gruppo di ragazzi delle olimpiadi di informatica in un Airbnb, intorno al Ringraziamento. Primo esperimento: un agente che risolve problemi di programmazione competitiva."), beats: [{ label: "Nov 2023", text: it("hackathon nell'Airbnb") }, { label: "Dic 2023", text: it("secondo hackathon") }, { label: "Gen 2024", text: it("nasce l'azienda") }, { label: "Mar 2024", text: it("il video che fa il giro del mondo") }], punchline: it("Quattro mesi da una casa in affitto al video di lancio. Scott la racconta così: «da hacker house a hacker house»."), source: "Scott Wu al Lenny's Podcast · Turing Post" },
        notes: it("Storia: Cognition all'inizio non era nemmeno un'azienda: era un hackathon. Hanno affittato un Airbnb per un paio di settimane, intorno al Ringraziamento, e la prima cosa che hanno provato è stato un agente per risolvere problemi di programmazione competitiva. Da lì, racconta Scott, \"da hacker house a hacker house\".\n\nAggancio: \"Prima del video virale c'era una casa in affitto piena di ragazzi delle olimpiadi.\"\n\nData: Lenny's Podcast, 4 maggio 2025 (l'anno dell'Airbnb non lo dice, probabilmente il 2023).\n\nFonte: https://github.com/ChatPRD/lennys-podcast-transcripts/blob/main/episodes/scott-wu/transcript.md\n\nSlide: 4 (Marzo 2024).\n\nVerifica: novembre 2023, intorno al Ringraziamento (Turing Post); Scott Wu al Lenny's Podcast: hackathon a novembre, un altro a dicembre, azienda ufficiale a gennaio, lancio a marzo 2024. Fonti: https://www.turingpost.com/p/cognition ; https://lennydistilled.com/episodes/inside-devin-the-ai-engineer-thats-set-to-write-50-of-its-companys-code-this-year/"),
        funAside: it("Recensione dell'host: «Ospiti tranquilli, ma hanno lasciato un agente acceso.»"),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-olimpiadi',
    category: 'events',
    icon: 'Medal',
    title: it("Fun story · Le medaglie d'oro"),
    summary: it("Aggancio: slide 4 (Marzo 2024)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Chi c'era dietro quel video?"), title: it("Dieci persone, dieci ori alle olimpiadi di informatica"), text: it("Al lancio, nel marzo 2024, il team era di dieci persone e aveva in tutto dieci ori alle IOI. Tra loro Gennady Korotkevich, «tourist», forse il programmatore competitivo più famoso al mondo."), beats: [{ label: "9 anni", text: it("Scott Wu inizia a programmare") }, { label: "2ª elementare", text: it("vince una gara nazionale di matematica pensata per la prima media") }, { label: "IOI 2014", text: it("primo su 311, con 600 punti su 600") }, { label: "2026", text: it("Cognition sponsorizza le IOI") }], punchline: it("Eppure è proprio lui a dirlo: «Non l'abbiamo mai pensato come qualcosa che sostituisce le persone. Siamo tutti programmatori.»"), source: "IOI Stats · TechCrunch, 29 maggio 2026 · Codeforces", image: "/events/2026-11-04-trento/stories/bambino-prodigio.jpg", imageAlt: "Scott Wu, il bambino prodigio", credit: "TechCrunch" },
        notes: it("Storia: Scott Wu ha vinto tre ori alle Olimpiadi internazionali di informatica (IOI), e nel 2014 è arrivato primo su 311 con 600 punti su 600. Al lancio, nel marzo 2024, il team di dieci persone aveva in tutto dieci ori IOI, compreso Gennady Korotkevich, \"tourist\", forse il programmatore competitivo più famoso al mondo. Nel 2026 Cognition sponsorizza le IOI, e tourist scrive su Codeforces che ogni edizione dal 2006 al 2025 ha avuto almeno un futuro dipendente Cognition in gara.\n\nAggancio: \"Il video che ha fatto il giro del mondo veniva da gente che a 16 anni vinceva le olimpiadi di programmazione.\"\n\nData: IOI 2014; marzo 2024; post Codeforces del 2026.\n\nFonte: https://stats.ioinformatics.org/people/2686 ; https://en.wikipedia.org/wiki/Cognition_AI ; https://codeforces.com/blog/entry/155784\n\nSlide: 4 (Marzo 2024).\n\nStoria: Scott ha iniziato a programmare a nove anni. In seconda elementare ha vinto una gara nazionale di matematica pensata per ragazzi di prima media (seventh grade). Ed è lui a dire: \"Non l'abbiamo mai pensato come qualcosa che sostituisce le persone. Siamo tutti programmatori.\"\n\nAggancio: \"Lo dice il CEO stesso: Devin è un amico che ti aiuta a costruire di più, non il tuo sostituto.\"\n\nData: intervista TechCrunch, 29 maggio 2026.\n\nFonte: https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/\n\nSlide: 17 (Quello che resta vero) o 3 (Perché questa serata).\n\nImmagine: https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/"),
        funAside: it("Io a nove anni programmavo il videoregistratore. Male."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-umano',
    category: 'events',
    icon: 'Hand',
    title: it("Fun story · Un umano, per favore"),
    summary: it("Aggancio: slide 7 (Chatbot, agente, harness)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Il primo segnale che funzionava? Un volo spostato."), title: it("Devin che chiede «un umano, per favore»"), text: it("A Walden Yan, cofondatore, spostano un volo. Lui passa la pratica del rimborso a Devin."), beats: [{ label: "1", text: it("Devin apre il sito della compagnia e si legge i termini") }, { label: "2", text: it("chatta con il bot dell'assistenza, che gira a vuoto") }, { label: "3", text: it("scrive più o meno: «Così non funziona, passatemi subito un essere umano»") }, { label: "4", text: it("parla con una persona vera e ottiene il rimborso") }], punchline: it("Il chatbot vi risponde; l'agente si prende il compito e arriva fino in fondo, anche se deve chiedere del responsabile."), source: "SF Standard, 24 marzo 2026", image: "/events/2026-11-04-trento/stories/umano-per-favore.jpg", imageAlt: "Devin che chiede \"un umano, per favore\"", credit: "SF Standard" },
        notes: it("Storia: Uno dei primi segnali che l'idea funzionava è arrivato da un volo. A Walden Yan, cofondatore, avevano spostato un volo e lui ha chiesto a Devin di farsi rimborsare. Devin è andato sul sito della compagnia, si è letto i termini e ha iniziato a chattare con il bot dell'assistenza. A un certo punto ha scritto più o meno: \"Così non funziona, passatemi subito un essere umano\". Ha parlato con una persona vera e il rimborso l'ha ottenuto.\n\nAggancio: \"Ecco la differenza tra chatbot e agente: il chatbot vi risponde, l'agente si prende il compito e arriva fino in fondo, anche se deve chiedere di parlare col responsabile.\"\n\nData: aneddoto dei primi tempi, raccontato da Scott Wu nell'articolo del 24 marzo 2026.\n\nFonte: SF Standard, https://sfstandard.com/2026/03/24/grind-sf-startup-racing-build-ai-software-engineer/\n\nSlide: 7 (Chatbot, agente, harness).\n\nImmagine: https://sfstandard.com/2026/03/24/grind-sf-startup-racing-build-ai-software-engineer/"),
        funAside: it("Finalmente qualcuno che batte il bot dell'assistenza. Io ci provo da anni."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-devin-in-devin',
    category: 'events',
    icon: 'Repeat2',
    title: it("Fun story · Devin che usa Devin"),
    summary: it("Aggancio: slide 8 (PR e test end-to-end)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Il test end-to-end portato all'estremo"), title: it("Devin che si logga in Devin"), text: it("In Cognition, Devin lavora sul codice di Devin. Quando deve controllare il proprio lavoro, spesso entra in Devin e apre una sessione di Devin."), beats: [{ label: "Scott Wu", text: it("«è un po' esilarante»") }, { label: "Bonus", text: it("in azienda c'è chi usa Devin per ordinare la cena su DoorDash") }], punchline: it("Devin che testa Devin usando Devin. Inception, ma con la CI verde."), source: "Scott Wu al Lenny's Podcast, 4 maggio 2025" },
        notes: it("Storia: In Cognition, Devin lavora sul codice di Devin. Scott racconta che spesso, per verificare il proprio lavoro, Devin entra in Devin e apre una sessione di Devin: \"è un po' esilarante\". E aggiunge che c'è gente in azienda che usa Devin per ordinare la cena su DoorDash.\n\nAggancio: \"Il test end-to-end portato all'estremo: Devin che testa Devin usando Devin.\"\n\nData: Lenny's Podcast, 4 maggio 2025.\n\nFonte: https://github.com/ChatPRD/lennys-podcast-transcripts/blob/main/episodes/scott-wu/transcript.md\n\nSlide: 8 (PR e test end-to-end)."),
        funAside: it("La vera domanda: chi approva la PR della pizza?"),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-windsurf',
    category: 'events',
    icon: 'Zap',
    title: it("Fun story · Il weekend di Windsurf"),
    summary: it("Aggancio: slide 9 (E no, non è Windsurf. Però...)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Come si compra un'azienda in un weekend"), title: it("Windsurf entra in Cognition in 72 ore"), text: it("Venerdì 11 luglio 2025 esce la notizia: Google si porta via i vertici di Windsurf. Da lì parte il weekend più lungo di Scott Wu."), beats: [{ label: "Venerdì sera", text: it("contatto a freddo") }, { label: "Sabato", text: it("stretta di mano") }, { label: "Domenica", text: it("notte in bianco") }, { label: "Lunedì, 9:00", text: it("firma") }], punchline: it("«Devin scorreva Twitter per voi», scherza John Collison. Scott sta al gioco: «Sì, è tornato e ha detto: ragazzi, dovreste dare un'occhiata.» (Battuta, eh.)"), source: "Cheeky Pint con John Collison, 27 agosto 2025 · Cognition, 14 luglio 2025", image: "/events/2026-11-04-trento/stories/weekend-windsurf.jpg", imageAlt: "Il weekend di Windsurf", credit: "Cognition" },
        notes: it("Storia: Venerdì 11 luglio 2025 esce la notizia che Google si porta via i vertici di Windsurf. Nel podcast di John Collison (Stripe), lui scherza: \"Devin scorreva Twitter per voi\". Scott sta al gioco: \"Sì, Devin è tornato e ha detto: ragazzi, dovreste dare un'occhiata\". Contatto a freddo il venerdì sera, stretta di mano il sabato, notte in bianco la domenica, firma lunedì mattina alle 9. Commento di Scott: \"Vivo per questi momenti, sinceramente\".\n\nAggancio: \"Windsurf è entrata in Cognition in 72 ore, e la battuta è che a dare la notizia sia stato Devin.\" (Precisare che \"Devin scorreva Twitter\" è una battuta, non un fatto.)\n\nData: 11-14 luglio 2025 (annuncio Cognition 14 luglio 2025).\n\nFonte: https://cheekypint.transistor.fm/8/transcript ; https://techcrunch.com/2025/07/19/windsurf-ceo-opens-up-about-very-bleak-mood-before-cognition-deal/ ; https://cognition.com/blog/windsurf\n\nSlide: 9 (E no, non è Windsurf. Però...).\n\nVerifica: puntata #8 pubblicata il 27 agosto 2025. Fonte: https://cheekypint.transistor.fm/8\n\nSe ti chiedono (non leggere): \"Niente work-life balance\", 80 ore e buyout per lo staff Windsurf (agosto 2025). Tre settimane dopo l'acquisizione, Scott Wu ha offerto ai circa 200 dipendenti Windsurf rimasti nove mesi di stipendio per andarsene, oppure sei giorni in ufficio e settimane da oltre 80 ore (\"We don't believe in work-life balance\"); 30 persone erano già state licenziate. Fonti: https://techcrunch.com/2025/08/05/three-weeks-after-acquiring-windsurf-cognition-offers-staff-the-exit-door/ , https://timesofindia.indiatimes.com/technology/tech-news/we-dont-believe-in-ai-startup-ceo-shares-internal-mail-offering-buyouts-to-200-staff-of-newly-acquired-company/articleshow/123121803.cms . Perché è delicata: tema di lavoro e diritti, divide molto il pubblico italiano, e tu sei ambassador: rischi di sembrare che lo approvi o di criticare il tuo partner sul palco. Se te lo chiedono: confermi che è successo, è pubblico, e spieghi che non rappresenta il modo in cui si usa Devin.\n\nSe ti chiedono (non leggere): Il dramma Windsurf (luglio 2025). OpenAI aveva un accordo da 3 miliardi saltato, Google ha preso CEO e team di ricerca con una licenza da 2,4 miliardi, e il resto del team è rimasto in un \"umore cupo\" fino a Cognition. Fonti: https://techcrunch.com/2025/07/19/windsurf-ceo-opens-up-about-very-bleak-mood-before-cognition-deal/ , https://www.businessinsider.com/windsurf-ceo-jeff-wang-openai-google-cognition-deal-2025-7 . Perché: si sconfina nel gossip tra big tech. Usa solo la versione leggera (A10).\n\nImmagine: https://cognition.com/blog/windsurf"),
        funAside: it("Io in 72 ore non riesco nemmeno a scegliere il tema dell'editor."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-rsa',
    category: 'events',
    icon: 'KeyRound',
    title: it("Fun story · Record di crittografia"),
    summary: it("Aggancio: slide 12 (Fusion)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Un hobby che è sfuggito di mano"), title: it("Una flotta di Devin batte un record di crittografia"), text: it("Eric Lu, ricercatore in Cognition, fattorizza numeri per hobby da una decina d'anni. Per provare un nuovo scheduler mette al lavoro «una schiera di Devin»."), beats: [{ label: "Il lavoro", text: it("i Devin costruiscono il setacciatore su GPU più veloce al mondo, 10 volte più economico") }, { label: "3 set 2026", text: it("Eric pubblica su X un numero di 130 cifre: «divides RSA-260»") }, { label: "Il record", text: it("RSA-260, 260 cifre; il precedente, RSA-250, era del 2020") }, { label: "La verifica", text: it("altri hanno rimoltiplicato i fattori: torna tutto") }], punchline: it("Sul momento scherza di averlo fatto «con carta e penna». Nel blog poi precisa: no, non ha provato a mano numeri primi da 130 cifre."), source: "Cognition, 9 settembre 2026 · Scientific American · sdd.sh", image: "/events/2026-11-04-trento/stories/rsa-260.jpg", imageAlt: "Record di crittografia", credit: "Cognition" },
        notes: it("Storia: Eric Lu, del team di ricerca, fattorizza numeri per hobby da dieci anni. Per testare un nuovo scheduler ha messo al lavoro \"una schiera di Devin\", che hanno costruito il setacciatore a reticolo su GPU più veloce al mondo, dieci volte più economico dello stato dell'arte pubblico. Risultato: hanno fattorizzato RSA-260, un numero di 260 cifre, nuovo record della RSA Factoring Challenge. Il record precedente, RSA-250, era del febbraio 2020.\n\nAggancio: \"Se vi chiedete fin dove si spinge il lavoro in parallelo di tanti Devin: fino a un record mondiale.\" (Il record è dichiarato da Cognition; conferma indipendente: vedi Verifica.)\n\nData: 9 settembre 2026.\n\nFonte: https://cognition.com/blog/factoring-rsa-260\n\nSlide: 12 (Fusion) o 18 (Come la racconta Cognition).\n\nVerifica: conferma indipendente. sdd.sh ha rimoltiplicato i due fattori pubblicati (130 cifre ciascuno): il prodotto coincide cifra per cifra con RSA-260 ed entrambi passano il test di primalità. PostQuantum: il prodotto coincide con il valore e il checksum della lista RSA Laboratories. Fattore pubblicato su X il 3 settembre 2026, metodo descritto il 9 settembre. Fonti: https://sdd.sh/2026/09/cognition-devin-rsa-260-factorization/ ; https://postquantum.com/security-pqc/sa-260-factored-gpu-devin/\n\nSe ti chiedono (non leggere): RSA-260 e sicurezza. Perché: la storia è bella (A11), ma qualcuno può chiedere \"allora RSA è rotto?\". Risposta pronta: RSA-260 sono circa 862 bit, le chiavi in uso sono da 2048 bit in su, e il record misura proprio quanto siamo lontani. Verifica: 862 bit, confermato da PostQuantum. Cognition stessa scrive che RSA-2048 resta circa un miliardo di volte più difficile di RSA-1024 e non è toccata da questo lavoro. Fonti: https://postquantum.com/security-pqc/sa-260-factored-gpu-devin/ ; https://cognition.com/blog/factoring-rsa-260\n\nImmagine: https://cognition.com/blog/factoring-rsa-260\n\nCarta e penna: Scientific American riporta che Eric Lu, postando il fattore, ha scritto di aver usato «good old paper and pencil», probabilmente per scherzo. Nel blog del 9 settembre scrive: «Contrary to some circulating claims, I did not factor RSA-260 by guessing and checking 130-digit prime numbers by hand.» Fonti: https://www.scientificamerican.com/article/whats-the-tech-behind-the-record-breaking-rsa-260-crack/ ; https://cognition.com/blog/factoring-rsa-260"),
        funAside: it("Il mio record personale: dividere il conto della pizza tra sei persone."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-brasile',
    category: 'events',
    icon: 'Plane',
    title: it("Fun story · Tutti in Brasile"),
    summary: it("Aggancio: slide 13 (Dove lavora Devin)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Il primo cliente vero? Un messaggio privato su X."), title: it("Tutta Cognition su un aereo per il Brasile"), text: it("Fine 2023: Devin è ancora un prototipo da laboratorio quando il CTO di Nubank scrive a Scott Wu su X. Nubank diventa il primo cliente enterprise della loro storia."), beats: [{ label: "Il volo", text: it("tutto il team, una decina di persone, vola in Brasile per lavorare accanto agli ingegneri di Nubank") }, { label: "Il metodo", text: it("provano i task a mano, poi insegnano a Devin a farli: «costruire il prodotto quasi per una sola azienda»") }, { label: "Il risultato", text: it("una migrazione da oltre 6 milioni di righe, stimata in 18 mesi, chiusa in settimane") }, { label: "Oggi", text: it("un ufficio a San Paolo, e in Itaú Devin è diventato «Devinho»") }], punchline: it("«Siamo onesti: gli agenti in generale non funzionavano», racconta Scott. E allora sono saliti tutti sull'aereo."), source: "Scott Wu da David Senra, 28 giugno 2026 · Startups.com.br, 21 settembre 2026 · Cognition", image: "/events/2026-11-04-trento/stories/brasile.jpg", imageAlt: "Tutta Cognition su un aereo per il Brasile", credit: "Cognition" },
        notes: it("Storia: Nubank doveva spezzare un monolite ETL di oltre 6 milioni di righe: circa 100.000 classi da migrare, più di mille ingegneri, 18 mesi stimati. Con Devin, addestrato sulle migrazioni già fatte a mano, i team hanno chiuso in settimane, con un guadagno di efficienza di 8-12x e costi oltre 20 volte più bassi. Il dettaglio carino: Devin si è scritto da solo degli script per le parti più ripetitive, tipo capire dal percorso del file se una classe era per Brasile, Colombia o Messico.\n\nAggancio: \"Le migrazioni noiose sono il lavoro preferito di Devin.\"\n\nData: case study pubblicato a dicembre 2024 (post LinkedIn di Cognition di quel periodo).\n\nFonte: https://devin.ai/customers/nubank\n\nSlide: 13 (Dove lavora Devin) o 8.\n\nVerifica: case study pubblicato il 14 novembre 2024 (GILD), rilanciato da Cognition su LinkedIn a dicembre 2024 (\"da un progetto stimato di un anno e mezzo a 2 mesi\"). Fonti: https://gildhq.com/products/devin/insights ; https://www.linkedin.com/posts/cognition-ai-labs_nubank-refactors-millions-of-lines-of-code-activity-7272344991983628291-o0w1\n\nSe ti chiedono (non leggere): Marketing con numeri forti (\"centinaia di milioni\" in crediti, 89% delle PR, 480x). Perché: sono numeri dichiarati da Cognition. Dilli sempre come \"Cognition dichiara\".\n\nImmagine: https://devin.ai/customers/nubank\n\nIl DM: secondo Startups.com.br (21 settembre 2026, intervista a Guilherme Grupenmacher, head di Strategia e Operazioni per l'America Latina), a fine 2023, quando Cognition era ancora un laboratorio con il primo prototipo, il CTO di Nubank ha scritto in privato al CEO su X. Nubank è diventato il primo cliente enterprise. Fonte: https://startups.com.br/negocios/estrategia/com-mais-de-10-grandes-clientes-no-brasil-cognition-se-apronta-para-escalar/\n\nIl volo: Scott Wu nel podcast di David Senra (28 giugno 2026): «Our entire team was the forward-deployed team. We all flew to Brazil.» e «Let's be real here: agents did not work generally.» Il lavoro: provare i task a mano, capire com'erano fatti, insegnare a Devin e costruire l'orchestrazione giusta; «building the product was almost like building it for one company». I riassunti della puntata parlano di un team di 9 persone e di una migrazione Java 7 → Java 8 su una codebase da circa 50.000 file (dettaglio dai riassunti, non dalla trascrizione). Fonti: https://www.youtube.com/watch?v=PYobZzjW_ic ; https://www.podroma.com/podcast/298\n\nDevinho: in Itaú il soprannome «Devinho» è piaciuto così tanto che Cognition ha incaricato degli avvocati di registrare il marchio (Startups.com.br). Per servire Itaú e Santander, ingegneri dagli Stati Uniti hanno fatto per un periodo quattro giorni in Brasile e due a casa, ogni settimana (stessa fonte). Ufficio di San Paolo annunciato al MASP a settembre 2026: https://cognition.com/blog/devin-comes-to-sao-paulo\n\nImmagine: https://cognition.com/blog/devin-comes-to-sao-paulo"),
        funAside: it("In Itaú lo chiamano «Devinho», e Cognition ha chiamato gli avvocati per registrare il marchio. Per Trento propongo «Devinello»."),
      },
    ],
  },
  {
    id: 'ev-20261104-casi-reali',
    category: 'events',
    icon: 'Landmark',
    title: it("Casi reali · Goldman Sachs e Mercedes-Benz"),
    summary: it("Aggancio: slide 13 (Dove lavora Devin)"),
    durationMin: 2,
    sources: [],
    slides: [
      {
        id: "goldman",
        block: { type: 'story', kicker: it("Una banca che «assume» un agente"), title: it("Goldman Sachs: «il nostro nuovo dipendente»"), text: it("Luglio 2025: il CIO Marco Argenti presenta Devin come nuovo dipendente, accanto a 12.000 sviluppatori umani, e parla di «forza lavoro ibrida»."), beats: [{ label: "1", text: it("descrivere") }, { label: "2", text: it("delegare") }, { label: "3", text: it("supervisionare") }], punchline: it("Sono le competenze che contano per gli ingegneri, secondo Argenti. Ed è esattamente quello che vedrete nella demo."), source: "CNBC, 11 luglio 2025 · Observer, settembre 2025", image: "/events/2026-11-04-trento/stories/goldman-sachs.jpeg", imageAlt: "Goldman Sachs", credit: "CNBC" },
        notes: it("Storia: A luglio 2025 il CIO di Goldman Sachs, Marco Argenti, ha presentato Devin come \"il nostro nuovo dipendente\", con l'idea di arrivare a centinaia e poi forse migliaia di Devin accanto ai 12.000 sviluppatori umani: una \"forza lavoro ibrida\". Due mesi dopo ha riassunto le competenze che contano per gli ingegneri in tre verbi: descrivere, delegare, supervisionare.\n\nAggancio: \"Descrivere, delegare, supervisionare: è esattamente quello che vedrete nella demo.\"\n\nData: 11 luglio 2025 (CNBC); settembre 2025 (Observer).\n\nFonte: https://www.cnbc.com/2025/07/11/goldman-sachs-autonomous-coder-pilot-marks-major-ai-milestone.html ; https://observer.com/2025/09/interview-marco-argenti-goldman-sachs-ai-strategy/\n\nSlide: 13 (Dove lavora Devin) o 17.\n\nSe ti chiedono (non leggere): \"Centinaia, forse migliaia di Devin\" in Goldman Sachs. Perché: in sala può diventare \"l'AI ruba il lavoro\". Raccontalo con la frase di Argenti su \"ibrido\" e \"descrivere, delegare, supervisionare\", e con la frase di Scott Wu (A8).\n\nImmagine: https://www.cnbc.com/2025/07/11/goldman-sachs-autonomous-coder-pilot-marks-major-ai-milestone.html"),
      },
      {
        id: "mercedes",
        block: { type: 'story', kicker: it("Il codice che nessuno vuole toccare"), title: it("Mercedes-Benz: COBOL, da otto mesi a otto giorni"), text: it("In un pilota di quattro settimane, Devin analizza oltre 200.000 righe di COBOL."), beats: [{ label: "Stima iniziale", text: it("8 mesi di modernizzazione") }, { label: "Con Devin", text: it("8 giorni") }, { label: "Oggi", text: it("Devin e Windsurf nei team di Stati Uniti, Europa e Asia") }], punchline: it("Il COBOL non lo vuole toccare nessuno. Devin sì."), source: "Cognition, 27 aprile 2026", image: "/events/2026-11-04-trento/stories/mercedes-benz.jpg", imageAlt: "Mercedes-Benz", credit: "Cognition" },
        notes: it("Storia: Nel pilota di quattro settimane con Mercedes-Benz, Devin ha analizzato oltre 200.000 righe di COBOL e ha ridotto la modernizzazione da otto mesi stimati a otto giorni. Ora Mercedes usa Devin e Windsurf nei team di ingegneria in Stati Uniti, Europa e Asia.\n\nAggancio: \"Il COBOL non lo vuole toccare nessuno. Devin sì.\"\n\nData: 27 aprile 2026.\n\nFonte: https://cognition.com/blog/mercedes-benz-cognition\n\nSlide: 13 (Dove lavora Devin).\n\nSe ti chiedono (non leggere): Marketing con numeri forti (\"centinaia di milioni\" in crediti, 89% delle PR, 480x). Perché: sono numeri dichiarati da Cognition. Dilli sempre come \"Cognition dichiara\".\n\nImmagine: https://cognition.com/blog/mercedes-benz-cognition"),
        funAside: it("Il COBOL ha più anni di metà della sala."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-pagella',
    category: 'events',
    icon: 'ClipboardCheck',
    title: it("Fun story · La pagella di Devin"),
    summary: it("Aggancio: slide 17 (Quello che resta vero)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Anche gli agenti hanno la valutazione annuale"), title: it("La pagella di Devin"), text: it("A 18 mesi dal lancio, Cognition ha fatto a Devin la «performance review», come a un dipendente qualsiasi."), beats: [{ label: "Punto forte", text: it("senior nel capire una codebase") }, { label: "Da migliorare", text: it("junior nell'esecuzione") }, { label: "Disponibilità", text: it("capacità infinita") }, { label: "Note dell'HR", text: it("qualche difficoltà con le soft skill") }], punchline: it("Un collega con punti forti e punti deboli: il trucco è dargli i compiti giusti."), source: "Cognition, 14 novembre 2025", image: "/events/2026-11-04-trento/stories/la-pagella.png", imageAlt: "La pagella di Devin", credit: "Cognition" },
        notes: it("Storia: A 18 mesi dal lancio, Cognition ha fatto a Devin la \"valutazione annuale\", come a un dipendente. Il verdetto: senior nel capire una codebase, junior nell'esecuzione, capacità infinita ma qualche difficoltà con le soft skill. Nel frattempo aveva già fatto merge di centinaia di migliaia di PR presso clienti come Goldman Sachs, Santander e Nubank.\n\nAggancio: \"Anche loro ammettono che è un collega con punti forti e punti deboli, e il trucco è dargli i compiti giusti.\"\n\nData: 14 novembre 2025.\n\nFonte: https://cognition.com/blog/devin-annual-performance-review-2025\n\nSlide: 17 (Quello che resta vero).\n\nImmagine: https://cognition.com/blog/devin-annual-performance-review-2025"),
        funAside: it("Aumento di stipendio? Niente: gli hanno dato più GPU."),
      },
    ],
  },
  {
    id: 'ev-20261104-fun-cognition-da-devin',
    category: 'events',
    icon: 'Percent',
    title: it("Fun story · Cognition costruita da Devin"),
    summary: it("Aggancio: slide 18 (Come la racconta Cognition)"),
    durationMin: 1,
    sources: [],
    slides: [
      {
        id: "story",
        block: { type: 'story', kicker: it("Il cliente numero uno di Devin? Cognition."), title: it("In Cognition il codice lo scrive soprattutto Devin"), text: it("Chiunque in azienda, anche chi non sa usare Git, può taggare @Devin su Slack e ricevere una PR da revisionare."), beats: [{ label: "Miglior settimana 2025", text: it("154 PR di Devin mergiate") }, { label: "Una settimana di feb 2026", text: it("659 PR") }, { label: "Gen → mar 2026", text: it("commit di Devin sui repo di Devin: dal 16% all'80%") }, { label: "Mag 2026", text: it("l'89% del codice committato dagli ingegneri lo committa Devin") }], punchline: it("Numeri dichiarati da Cognition sul proprio codice. Il messaggio però è chiaro: lo usano loro per primi."), source: "Cognition, feb e mag 2026 · Latent Space con Walden Yan", image: "/events/2026-11-04-trento/stories/cognition-costruita-da-devin.jpg", imageAlt: "Cognition costruita da Devin", credit: "Cognition" },
        notes: it("Storia: A febbraio 2026 Cognition ha scritto che in una sola settimana aveva fatto merge di 659 PR di Devin nel proprio codice, contro le 154 della settimana migliore del 2025. A maggio 2026 la cifra ufficiale è diventata: l'89% del codice committato dagli ingegneri di Cognition lo committa Devin, il resto agenti locali. E chiunque in azienda, anche chi non sa usare Git, può taggare @Devin su Slack e ottenere una PR da revisionare.\n\nAggancio: \"Il cliente numero uno di Devin è Cognition stessa.\" (Il passaggio dal 16% all'80% in tre mesi circola su LinkedIn e in un video con Walden Yan: confermato, vedi Verifica.)\n\nData: 27 febbraio 2026 (659 PR); 27 maggio 2026 (89%).\n\nFonte: https://cognition.com/blog/how-cognition-uses-devin-to-build-devin ; https://cognition.com/blog/series-d\n\nSlide: 18 (Come la racconta Cognition) o 13 (Dove lavora Devin).\n\nVerifica: confermato nel podcast Latent Space con Walden Yan (cofondatore e CPO): i commit di Devin sui repo di Devin passano dal 16% di gennaio all'80% di marzo, con le PR mergiate cresciute di 7 volte a fronte di circa +10% di ingegneri. È un dato raccontato da Cognition, non misurato da terzi. Fonti: https://lspace.beehiiv.com/p/cognition ; https://www.youtube.com/watch?v=0fgJPhYcbVk\n\nSe ti chiedono (non leggere): Marketing con numeri forti (\"centinaia di milioni\" in crediti, 89% delle PR, 480x). Perché: sono numeri dichiarati da Cognition. Dilli sempre come \"Cognition dichiara\".\n\nImmagine: https://cognition.com/blog/how-cognition-uses-devin-to-build-devin"),
        funAside: it("E il restante 11%? Scommetto sul README."),
      },
    ],
  },
];
