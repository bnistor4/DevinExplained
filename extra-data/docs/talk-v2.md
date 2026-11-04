# Devin AI Trento #1: "Devin è cambiato molto"
## Script del talk (v2), nella voce di Bogdan

Mercoledì 4 novembre 2026, Impact Hub Trento, Corallo.
Talk 19:10-19:35 (25 min) | Demo live 19:35-20:00 | Q&A "senza filtri" 20:00-20:15 | 2 lightning talk 20:15-20:35 | Estrazione licenze 20:35-20:40 | Pizza e networking dalle 20:40.
Scaletta completa della serata: vedi "Timeline della serata" più sotto.
Q&A completa e note di sicurezza per la demo: `talk-e-qa.md` (sezioni 2 e 3).
Fonti numerate [S#] in fondo. Ciò che non ho potuto confermare è marcato **DA VERIFICARE** o **DA TROVARE**.

Come leggere i blocchi:
- **Mostri**: cosa c'è sullo schermo (meme inclusi)
- **Dici**: testo parlato, da dire a voce, non da leggere parola per parola
- **Tempo**: durata indicativa e orario di fine slide

Tono: leggermente cinico, autoironico, onesto sui limiti. Non è un pitch. Se una battuta non arriva, si va avanti senza spiegarla.

---

## PARTE 1: Chi sono e perché siamo qui (19:10-19:14)

### [SLIDE 1: Ciao, sono Bogdan]
**Mostri:** foto tua, loghi o screenshot di minipim.io e TuttoCalcolato.it. Bandierine Roma, Romania, Trentino.

**Dici:**
"Ciao a tutti, sono Bogdan. Un romano di origini rumene, trasferito in Trentino. E già qui potrebbe essere l'inizio di una barzelletta.
Sono uno sviluppatore, costruisco prodotti. Il più recente è minipim.io, serve a gestire le informazioni di prodotto. Sto ancora cercando clienti, quindi se avete un catalogo che vi fa piangere, parliamone alla pizza.
L'altro è un side project, TuttoCalcolato.it: una piattaforma di calcolatori di ogni genere.
Uso agenti e AI per programmare tutti i giorni, principalmente Devin e Cursor.
E Claude e ChatGPT? Storia lunga. Se volete saperla, offritemi una birra dopo."

**Tempo:** 1:30 (fine 19:11:30)

### [SLIDE 2: Perché questa serata]
**Mostri:** il programma della serata (talk, demo, Q&A, lightning talk, estrazione, pizza). In basso: "Nessuno vi vende niente stasera." E un box: "20:35 estrazione live di 3 licenze Devin da 200 $".

**Dici:**
"Perché questa serata? Partiamo dal motivo che mi appassiona di più: il networking. Sono un topo da laboratorio, passo molto più tempo a sviluppare che a questi eventi. Però penso che più ce ne sono, meglio è. Cerco di andare a più eventi possibile, ma il tempo è quello che è.
Stasera è un'introduzione a come è cambiato Devin. Perché tutti lo conosciamo per un motivo storico, quando costava 500 dollari al mese, oppure perché abbiamo visto l'evoluzione da Windsurf a Devin.
Il formato: 25 minuti di contesto, 25 di demo live, poi Q&A senza filtri, poi i lightning talk della community.
Ah, una cosa importante per farvi restare fino alla fine: dopo i lightning talk facciamo un'estrazione live di 3 licenze Devin da 200 dollari. Per partecipare scansionate un QR code che vi faccio vedere dopo la demo. E il tool dell'estrazione l'ha costruito Devin, quindi se non funziona sapete con chi prendervela.
Facciamo un'alzata di mano veloce.
Chi ha provato Devin? ... Chi usa Cursor, Claude Code, Copilot o simili? ... E chi pensa che Devin costi ancora 500 dollari? ... Perfetto, voi siete il mio target stasera."

**Tempo:** 2:45, incluso il teaser dell'estrazione (fine 19:14:15)
Nota per te: guarda le mani. Se quasi nessuno ha provato Devin, allunga le spiegazioni terra terra (slide 6-7). Se tanti lo usano, accorciale.

---

## PARTE 2: Il Devin di due anni fa (19:14-19:18)

### [SLIDE 3: Marzo 2024, il video che ha fatto il giro del mondo]
**Mostri:** screenshot del post "Introducing Devin" [S1] + meme suggerito.
**Meme suggerito:** formato "Expectations vs Reality". Sopra: "Expectation: il primo AI software engineer" con un astronauta. Sotto: "Reality: 13,86% su SWE-bench" con un gatto che cade dal divano.

**Dici:**
"Marzo 2024. Cognition presenta Devin come 'il primo AI software engineer'. Video ovunque, LinkedIn in fiamme, tutti i CTO in ansia. [S1]
Il numero che hanno dichiarato era 13,86% su SWE-bench. SWE-bench, terra terra: una raccolta di bug veri presi da progetti open source su GitHub. Dai il bug all'AI e vedi se lo sistema davvero.
13,86% era tanto per l'epoca, il sistema migliore prima faceva meno del 2%. [S1] Ma traduciamolo: su 100 bug, ne sistemava 14. Gli altri 86... insomma, ci aveva provato."

**Tempo:** 1:30 (fine 19:15:45)

### [SLIDE 4: 500 dollari al mese e un test spietato]
**Mostri:** "$500/mese" grande [S2]. Accanto il risultato di Answer.AI: 3 su 20 [S3].
**Meme suggerito:** formato "This is fine" (il cane nella stanza in fiamme). Testo: "14 task falliti su 20" sulle fiamme, "This is fine" sul cane, con l'etichetta "500 $/mese" sulla tazza.

**Dici:**
"Dicembre 2024: Devin diventa disponibile a tutti. Prezzo di partenza: 500 dollari al mese, per team. [S2]
A gennaio 2025 il team di Answer.AI lo prova seriamente per un mese su 20 task veri. Risultato: 3 successi, 14 fallimenti, 3 'boh'. E la cosa peggiore, dicevano, era che non riuscivano a prevedere quali task sarebbero andati bene. [S3]
Questo è il Devin che molti di voi hanno in testa. Ed era una critica giusta. Io non sono qui a dirvi che avevano torto."

**Tempo:** 1:30 (fine 19:17:15)

### [SLIDE 5: "It actually works now"]
**Mostri:** il meme. Screenshot del quote-tweet di Hamel Husain (uno degli autori del test di Answer.AI) sopra il suo tweet originale del gennaio 2025. Evidenziato in giallo: "3. It actually works now".

**Dici:**
"E poi succede questa cosa. Hamel Husain, uno degli autori di quel test spietato, riprende il suo vecchio post e scrive: 'Questo post è completamente superato. Devin adesso è davvero buono, uno dei miei strumenti preferiti.' E nella lista dei motivi, al punto 3: 'It actually works now'. Adesso funziona davvero. [S29]
Che, detto da un'azienda che ha raccolto miliardi, è un complimento un po' strano. Tipo il ristorante che mette in vetrina: 'Ora il cibo è commestibile.'
La parte interessante però è il perché, secondo lui: un po' sono migliorati i modelli, ma è migliorato anche l'harness. Tenetevi questa parola, 'harness', tra due minuti la spieghiamo."

**Tempo:** 1:00 (fine 19:18:15)

---

## PARTE 3: Le basi, terra terra (19:18-19:22)

### [SLIDE 6: Chatbot, agente, harness]
**Mostri:** schema della cucina di Theo: Chef = LLM, Cucina = harness, Chef + cucina = agente. Screenshot del titolo del post di Theo "What is a 'harness'?" [S27].
**Meme suggerito:** formato "Is this a pigeon?". La persona: "io nel 2023". La farfalla: "ChatGPT che mi scrive una funzione". Didascalia: "Is this an agent?"

**Dici:**
"Facciamo un passo indietro, perché stasera userò parole che spesso diamo per scontate.
Un chatbot, tipo la chat classica, è uno chef che vi detta la ricetta al telefono. Bravissimo. Ma la cucina la fate voi: copiate, incollate, provate, tornate a lamentarvi.
Un agente è uno chef che entra in cucina e cucina davvero: apre i file, li modifica, lancia comandi, guarda il risultato, corregge.
E la cucina come si chiama? Harness. Theo, quello di T3, ha scritto un post a fine ottobre proprio su questo, perché era stufo di spiegarlo. [S27] Il succo: un modello linguistico da solo produce solo testo. Per fare cose gli servono degli attrezzi, tipo 'leggi file', 'modifica file', 'lancia un comando', 'cerca sul web', e un sistema che legge le sue richieste, esegue davvero l'attrezzo e gli riporta il risultato. Quel sistema è l'harness.
La sua frase: un agente è quello che ottieni mettendo insieme un harness e un LLM. Chef più cucina.
Theo nel post non parla di Devin, sia chiaro, non è una pubblicità. Ma il concetto spiega bene Devin: non è 'un modello', è una cucina attrezzata, con dentro una macchina sua, un browser e la possibilità di usare più chef diversi. Cognition dice proprio di voler restare indipendente dai modelli e di combinare quelli migliori, compresi i propri. [S10][S15]
Quindi quando confrontate Devin con Cursor o Claude Code, non state confrontando chef. State confrontando cucine."

**Tempo:** 2:00 (fine 19:20:15)

### [SLIDE 7: PR e test end-to-end]
**Mostri:** a sinistra un'icona di pull request su GitHub. A destra la piramide: unit test (tanti, piccoli) in basso, test end-to-end (pochi, grandi) in cima.

**Dici:**
"Altre due parole che sentirete spesso nella demo.
PR, pull request. Terra terra: è una proposta di modifica. Come un documento Word con le revisioni attive che mandate al capo: 'Ho cambiato queste righe, approvi?' Finché nessuno approva e fa merge, il codice vero non cambia. Devin lavora così: non tocca il vostro main, vi apre una PR. Il bottone 'merge' lo premete voi.
Test end-to-end. Qui ci tengo, perché la demo è tutta su questo.
Un unit test controlla un pezzo singolo. In cucina: il forno arriva a 200 gradi? Il coltello taglia? Utile, veloce, ma non vi dice se la cena è buona.
Un test end-to-end prova tutto il percorso come lo farebbe un utente vero: il cliente entra, ordina, mangia, paga, esce contento. Nel software: apro il browser, mi registro, faccio login, aggiungo un prodotto, salvo, controllo che sia salvato davvero.
Puoi avere tutti gli unit test verdi e il sito che non ti fa fare login. Ci siamo passati tutti.
La cosa che mi interessa di Devin oggi è proprio questa: dopo aver aperto la PR, può avviare l'app, aprire il browser, cliccare come un utente e mandarti un video di quello che ha fatto, come prova. [S19] Non 'fidati', ma 'guarda'."

**Tempo:** 2:00 (fine 19:22:15)

---

## PARTE 4: Cosa è cambiato (19:22-19:27)

### [SLIDE 8: Timeline 2025-2026]
**Mostri:** timeline orizzontale con 6 tappe.

**Dici (veloce, è una slide da scorrere):**
"In due anni è successo di tutto.
Aprile 2025: Devin 2.0. Più Devin in parallelo, un IDE nel browser, e un piano d'ingresso a 20 dollari a consumo. [S4]
Luglio 2025: Google si porta via il CEO e parte del team di Windsurf, e Cognition compra il resto: prodotto, marchio, persone. [S6]
Aprile 2026: nuovi piani, addio ai 500 dollari. [S7]
Giugno 2026: Windsurf cambia nome e diventa Devin Desktop. [S8][S9]
Settembre 2026: raccolgono oltre 2 miliardi e fanno uscire SWE-2, il loro modello per programmare, che gira solo dentro Devin. [S10][S11]
Ottobre 2026: Devin Oncall per gli incidenti in produzione e Devin Security 2.0. [S13][S14]
Se vi sembra tanto, è perché è tanto."

**Tempo:** 1:00 (fine 19:23:15)

### [SLIDE 9: E no, non è Windsurf. Però...]
**Mostri:** meme + schema "ombrello Devin" con sotto 4 icone: Cloud, Desktop, CLI, Review.
**Meme suggerito:** formato "Spider-Man pointing at Spider-Man" (tre Spider-Man). Etichette: "Codeium", "Windsurf", "Devin Desktop". Didascalia: "Lo stesso IDE, tre nomi in tre anni."

**Dici:**
"Il titolo della serata dice 'non è Windsurf'. Facciamo chiarezza, perché è confuso anche per me.
Windsurf prima si chiamava Codeium. Poi Windsurf. Da giugno 2026 si chiama Devin Desktop. L'ex CEO di Windsurf ha scritto che ha dovuto cambiare indirizzo email praticamente ogni anno. [S30] Lo stesso IDE, tre nomi.
Oggi 'Devin' è un ombrello con dentro: Devin Cloud, l'agente che lavora da solo nella sua macchina; Devin Desktop, l'IDE ex Windsurf; Devin CLI, l'agente nel terminale; e Devin Review per la code review. [S8]
Quindi: Windsurf è un pezzo di Devin. Devin non è Windsurf. Stasera nella demo vedete soprattutto Devin Cloud."

**Tempo:** 1:00 (fine 19:24:15)

### [SLIDE 10: Prezzi, allora vs oggi]
**Mostri:** tabella + meme.
**Meme suggerito:** formato "Drake" (Drakeposting). Sopra, Drake che rifiuta: "500 $/mese solo per team". Sotto, Drake che approva: "Free, poi 20 $/mese".

| | 2024 | Oggi (ottobre 2026) |
|---|---|---|
| Ingresso | 500 $/mese, solo team [S2] | Free, 0 $ [S15] |
| Individuale | non esisteva | Pro 20 $/mese, Max 200 $/mese [S15] |
| Team | 500 $/mese | Teams: minimo 80 $/mese, 40 $/mese per "full seat", fino a 200 persone [S15][S16] |
| Come si misura | ACU | quota inclusa + crediti on-demand in dollari; ACU solo per Enterprise [S7][S31] |

**Dici:**
"Ed eccoci al titolo della serata. Scordatevi i 500 dollari.
Oggi c'è un piano gratuito, poi Pro a 20 dollari al mese, Max a 200 per chi lo usa tanto, Teams per i gruppi ed Enterprise per le aziende grandi. [S15]
Tre parole da spiegare, perché sul sito le danno per scontate.
Quota: è il pieno incluso nel piano. Si ricarica da sola ogni giorno e ogni settimana. [S15] Pensatela come i giga del telefono, ma con ricarica giornaliera.
Crediti on-demand: quando finite la quota, potete comprare extra, e li pagate 'a prezzi API'. Cioè più o meno quello che costano i modelli sotto. È il traffico extra fuori dall'offerta. [S15][S16]
ACU: Agent Compute Unit. Era il vecchio 'gettone' di Devin, nel 2025 un ACU valeva circa 15 minuti di lavoro attivo. [S5] Oggi lo vedono solo i clienti Enterprise. Se partite da Pro, non lo vedrete mai. [S7][S31]
E nei Teams: 'full seat' è la persona che lo usa ogni giorno, 40 dollari al mese con la sua quota. 'Flex seat' è gratis ma pesca dai crediti condivisi del team, per chi lo usa ogni tanto. [S16]
Una nota cinica ma onesta: quando sono cambiati i piani, Cognition stessa ha scritto che per alcuni utenti leggeri il nuovo sistema era un passo indietro, e che alcune cose prima gratuite, come Ask Devin, DeepWiki e Devin Review, sarebbero diventate a pagamento oltre la quota. [S7] Il prezzo d'ingresso è sceso. L'uso pesante si paga. Niente pasti gratis."

**Tempo:** 2:30 (fine 19:26:45)

### [SLIDE 11: Cosa consuma, in pratica]
**Mostri:** tre righe: "consuma: azioni + macchina" / "non consuma: mentre aspetta te o i test" / "dorme dopo 30 min".

**Dici:**
"Cosa fa consumare? Le azioni che Devin fa, pianificare, leggere codice, usare il browser, eseguire codice, e un po' di tempo macchina. Mentre aspetta una vostra risposta o aspetta che girino i test, quasi non consuma. Dopo 30 minuti di inattività va a dormire e smette di consumare. [S31]
Terra terra: è un taxi che fa pagare i chilometri, non l'attesa al semaforo."

**Tempo:** 0:30 (fine 19:27:15)

---

## PARTE 5: Gli attrezzi di Devin, uno per uno (19:27-19:31)

Nota per te: sono due slide compatte con tabella. Non leggerle tutte: per ogni riga di' solo la frase "terra terra". Se sei in ritardo, vedi "Cosa tagliare" più sotto.

### [SLIDE 12: La famiglia Devin: dove lavora]
**Mostri:** tabella compatta.

| Nome | Cos'è | Analogia | Quando lo uso | Fonte |
|---|---|---|---|---|
| **Sessione** | Un singolo lavoro che dai a Devin, con la sua macchina virtuale: terminale, editor, browser | Un collega a cui dai un ticket e una scrivania tutta sua | Ogni volta che delego un task | [S17] |
| **Devin Cloud** | L'agente autonomo che lavora nel cloud e torna con una PR | Il collega in smart working: gli scrivi, sparisce, torna con il lavoro | Task chiari che posso delegare e controllare dopo | [S8][S17] |
| **Devin Desktop** | L'IDE ex Windsurf, con un "centro di controllo" per gestire più agenti, locali e cloud | La scrivania con il tabellone dei lavori in corso | Quando programmo io e voglio vedere tutti gli agenti in un posto | [S8][S9] |
| **Devin Local** | L'agente locale dentro Devin Desktop, ha sostituito Cascade | Il collega seduto accanto a te | Modifiche veloci sul mio computer | [S8] |
| **Devin CLI** | Devin nel terminale; con /handoff passi il lavoro lungo al cloud | Il collega che sta nel terminale con te, e che puoi mandare "in trasferta" | Fix veloci ed esplorazione; poi handoff dei task lunghi | [S17][S21] |
| **Computer Use / testing mode** | Devin usa un desktop vero con mouse e tastiera, testa l'app e ti manda un video | Il collega che ti filma mentre prova l'app, così non devi fidarti sulla parola | Dopo ogni PR che tocca l'interfaccia | [S18][S19] |

**Dici:**
"Prima la famiglia, cioè dove lavora Devin. Una sessione è un lavoro con una scrivania tutta sua: terminale, editor, browser. Devin Cloud è il collega in smart working: gli dai il task, sparisce, torna con una PR. Devin Desktop è l'ex Windsurf, con un tabellone per vedere tutti gli agenti al lavoro. Devin Local è l'agente sul vostro computer, ha preso il posto di Cascade. La CLI è Devin nel terminale, e quando il lavoro si fa lungo lo spedite al cloud con un comando. E poi la cosa che vedrete nella demo: il testing mode, dove Devin usa mouse e tastiera su un desktop vero e vi manda il video."

**Tempo:** 1:30 (fine 19:28:45)

### [SLIDE 13: La cassetta degli attrezzi]
**Mostri:** tabella compatta.

| Nome | Cos'è | Analogia | Quando lo uso | Fonte |
|---|---|---|---|---|
| **Ask Devin** (nel 2025 si chiamava Devin Search) | Fai domande sul tuo codice e pianifichi il task prima di scrivere codice; alla fine genera il prompt per la sessione | Chiedere al collega anziano "come funziona questa parte?" prima di toccarla | Prima di un task complesso, o su un repo che non conosco | [S4][S32] |
| **DeepWiki** (nel 2025 "Devin Wiki") | Documentazione generata in automatico dal codice, con diagrammi e link al sorgente | Il manuale del condominio che nessuno ha mai scritto, scritto da qualcuno che ha letto tutti i verbali | Onboarding su un repo nuovo. Per i repo pubblici c'è deepwiki.com gratis | [S4][S33] |
| **Devin Review** | Code review delle PR: riorganizza il diff, spiega, cerca bug; con Auto-Fix risponde ai commenti e ai fallimenti della CI | Il revisore pignolo che legge la PR prima di te | PR grandi, o per avere un secondo paio d'occhi | [S20][S24] |
| **Skills** | File SKILL.md nel repo con procedure passo passo; Devin li ritrova da solo e propone lui di crearne di nuovi | Il quaderno delle ricette di casa | "Come si avvia l'app", "come si testa", "come si fa il deploy" | [S34] |
| **Playbooks** | Prompt riutilizzabili e condivisi. Stanno diventando Skills: dal 24 ottobre 2026 i nuovi account partono senza Playbooks | La ricetta stampata appesa in cucina, ora spostata nel quaderno | Se li hai già, continuano a funzionare come skill | [S35] |
| **Knowledge** | Istruzioni e contesto che Devin consulta in tutte le sessioni. Deprecato, migrato in Skills dentro i plugin | Il foglio "benvenuto in azienda" per il nuovo assunto | Legacy: per le cose nuove usa Skills o AGENTS.md | [S23] |
| **AGENTS.md** | Un file nel repo con le regole del progetto; Devin legge anche .cursorrules, CLAUDE.md, .windsurf | Il cartello "qui si fa così" sulla porta | Sempre, è il modo più semplice di dare contesto | [S23] |
| **MCP** | Protocollo aperto per collegare Devin a strumenti esterni (Sentry, Datadog, Notion, Stripe, database...) | Gli attrezzi non stanno in cucina: sono un servizio esterno, tipo il fornitore che chiami al telefono (Theo li paragona a siti web) | Quando Devin deve leggere log, ticket, dati | [S36][S27] |
| **Automations** | Regole tipo "quando succede X, avvia Devin": un messaggio Slack, una CI rotta, un ticket Linear, un orario | La sveglia programmata, ma che fa anche il lavoro | Lavori ripetitivi: CI rotte, triage dei bug, report giornalieri | [S37] |

**Dici:**
"Poi la cassetta degli attrezzi. Ve li dico in una riga, terra terra.
Ask Devin, che nel 2025 si chiamava Devin Search: fate domande sul vostro codice prima di toccarlo, e alla fine vi prepara il prompt per il task.
DeepWiki, ex Devin Wiki: la documentazione che nessuno ha mai scritto, generata leggendo il codice. Per i repo pubblici c'è gratis su deepwiki.com.
Devin Review: il revisore pignolo che legge la PR prima di voi.
Skills: il quaderno delle ricette di casa. 'Così si avvia l'app, così si testa.' Li mettete nel repo e Devin li segue. Playbooks e Knowledge erano versioni precedenti della stessa idea e stanno confluendo nelle Skills. Sì, anche qui hanno cambiato nome. Abituatevi.
MCP: il modo standard per collegare Devin a strumenti esterni, log, ticket, database.
Automations: 'quando si rompe la CI, chiama Devin'. La sveglia che fa anche il lavoro."

**Tempo:** 2:15 (fine 19:31). Se serve, leggi solo le prime tre righe.

---

## PARTE 6: Limiti e ponte verso la demo (19:31-19:35)

### [SLIDE 14: Quello che resta vero]
**Mostri:** 4 punti secchi.
**Meme suggerito:** formato "Two buttons" (l'uomo sudato davanti a due pulsanti). Pulsanti: "Faccio review della PR" e "Faccio merge, tanto ha fatto i test". Didascalia: "Ogni dev alle 18:59 di venerdì".

**Dici:**
"Ora la parte onesta.
Uno: sbaglia. Non lo dico io, lo dice la loro documentazione: può avere allucinazioni, introdurre bug, suggerire codice insicuro. Quindi review e branch protetti. [S22]
Due: compiti vaghi, risultati vaghi. La loro regola pratica è: se un task ci mettete meno di tre ore a farlo voi, Devin probabilmente ce la fa. Oltre, spezzatelo. [S20]
Tre: costa. Il prezzo dipende dal modello, da quanto è grande il task, da quanto deve ragionare. [S15]
Quattro: privacy. Sui piani a pagamento non Enterprise, di default i vostri dati possono essere usati per l'addestramento. Si può disattivare dalle impostazioni, Data Controls. Su Enterprise no, serve il vostro consenso scritto. [S22] Leggetelo prima di collegare il codice del cliente.
Se qualcuno vi dice che con gli agenti non serve più saper programmare, tra poco vedrete il contrario: serve sapere cosa chiedere e come verificare."

**Tempo:** 1:30 (fine 19:32:30)

### [SLIDE 15: Come la racconta Cognition]
**Mostri:** screenshot del post di Cognition su Mercor [S28]. Evidenziato: "They give Devin long-running tasks before bed... They come back to tested features and PRs ready to merge."

**Dici:**
"Questo è un post di Cognition della settimana scorsa, il 28 ottobre. Parla di Mercor, un'azienda che secondo loro ha superato i 2 miliardi di fatturato annuo ricorrente. Il punto che mi interessa è questo: gli ingegneri danno a Devin task lunghi prima di andare a dormire, durante le riunioni, mentre vanno in palestra, e quando tornano trovano feature testate e PR pronte per il merge. [S28]
Bella promessa. È marketing loro, su un cliente loro, quindi prendetelo con le pinze. Io in palestra non ci vado comunque.
Però la promessa si può verificare. Ed è quello che facciamo adesso."

**Tempo:** 1:30 (fine 19:34)

### [SLIDE 16: Demo, cosa stiamo per vedere]
**Mostri:** nome dell'app, il task, il criterio di successo.
- App: [PLACEHOLDER: nome e cosa fa]
- Task: [PLACEHOLDER]
- Criterio di successo: [PLACEHOLDER, es. "test end-to-end verdi + video del test"]

**Dici:**
"L'app è [PLACEHOLDER]. Il task che do a Devin è [PLACEHOLDER]. Lo considero riuscito se [PLACEHOLDER].
Guardate tre cose: come pianifica, come lavora, come verifica. E se si rompe qualcosa, lo vedete con me. Anzi, se si rompe è la parte più utile della serata."

**Tempo:** 1:00 (fine 19:35)

---

## Riepilogo tempi

| # | Slide | Durata | Fine |
|---|---|---|---|
| 1 | Ciao, sono Bogdan | 1:30 | 19:11:30 |
| 2 | Perché questa serata (+ teaser estrazione) | 2:45 | 19:14:15 |
| 3 | Marzo 2024, il video che ha fatto il giro del mondo | 1:30 | 19:15:45 |
| 4 | 500 dollari al mese e un test spietato | 1:30 | 19:17:15 |
| 5 | "It actually works now" | 1:00 | 19:18:15 |
| 6 | Chatbot, agente, harness | 2:00 | 19:20:15 |
| 7 | PR e test end-to-end | 2:00 | 19:22:15 |
| 8 | Timeline 2025-2026 | 1:00 | 19:23:15 |
| 9 | E no, non è Windsurf. Però... | 1:00 | 19:24:15 |
| 10 | Prezzi, allora vs oggi | 2:30 | 19:26:45 |
| 11 | Cosa consuma, in pratica | 0:30 | 19:27:15 |
| 12 | La famiglia Devin: dove lavora | 1:30 | 19:28:45 |
| 13 | La cassetta degli attrezzi | 2:15 | 19:31 |
| 14 | Quello che resta vero | 1:30 | 19:32:30 |
| 15 | Come la racconta Cognition | 1:30 | 19:34 |
| 16 | Demo, cosa stiamo per vedere | 1:00 | 19:35 |
| Q | QR dell'estrazione (fine demo, schermata Q&A) | 0:30 | dentro la demo |
| 17 | Non è molto, ma è un lavoro onesto (estrazione) | 5:00 | 20:40 |

È stretto. 25 minuti senza margine. Prova a cronometrarti almeno una volta.

### Cosa tagliare se sei in ritardo (in quest'ordine)
1. **Slide 8 (timeline):** salta, i punti chiave sono già nelle slide 9 e 10. Recuperi 1 min.
2. **Slide 11 (cosa consuma):** dilla in una frase dentro la slide 10 ("è un taxi che fa pagare i chilometri, non il semaforo"). Recuperi 30 s.
3. **Slide 13 (cassetta degli attrezzi):** di' solo Ask Devin, DeepWiki e Devin Review, e per il resto "lo trovate nella tabella, ve la mando sul Telegram". Recuperi 1:30.
4. **Slide 12:** tieni solo Cloud vs Desktop vs CLI e testing mode. Recuperi 45 s.
5. **Slide 3 + 4:** uniscile in una ("13,86%, 500 dollari, 3 su 20"). Recuperi 1 min.
Mai tagliare: slide 1-2 (tue, compreso il teaser dell'estrazione), 6-7 (le basi, servono per capire la demo), 14 (limiti), 16 (ponte alla demo).

### Se sei in anticipo
Allunga la slide 7 chiedendo alla sala: "Chi ha test end-to-end nel proprio progetto?" Di solito le mani sono poche, ed è un bel momento.

---

## PARTE 7: Il QR durante la demo (19:35-20:00)

### [SLIDE Q: Scansiona e partecipa]
**Quando:** negli ultimi 30 secondi della demo (circa 19:59), poi lascialo sullo schermo durante tutta la Q&A e rimettilo prima dell'estrazione.
**Mostri:** QR code grande + URL breve scritto in chiaro (per chi ha il telefono scarico o la fotocamera ballerina) + "Estrazione alle 20:35. Devi essere in sala."

**Dici:**
"Prima di passare alle domande: ecco il QR. Scansionatelo, mettete il nome, e siete dentro all'estrazione delle 3 licenze. Una sola iscrizione a testa, il tool se ne accorge. Almeno spero, l'ha scritto Devin.
E visto che stasera parliamo di verifica: il tool è stato costruito da Devin, con i suoi test. Se volete, alla pizza vi faccio vedere la PR."

**Opzionale, se nella demo avanza un minuto:** apri per 30-60 secondi la sessione Devin o la PR con cui è stato costruito il tool dell'estrazione, mostrando il video del test end-to-end. "Questo è lo stesso flusso che avete appena visto, applicato a una cosa stupida ma vera."
[PLACEHOLDER: link alla sessione o alla PR del tool]

---

## PARTE 8: Estrazione (20:35-20:40)

### [SLIDE 17: Non è molto, ma è un lavoro onesto]
**Mostri:** il meme `meme-lavoro-onesto.png` (il contadino nel campo, "Non è molto, ma è un lavoro onesto"). Sotto: "3 licenze Devin da 200 $". Poi passi allo schermo del tool di estrazione.

**Dici:**
"Ok, il momento che stavate aspettando, o almeno il motivo per cui alcuni di voi sono ancora qui.
Abbiamo 3 licenze Devin da 200 dollari. Tre. Non trenta, non 'una per tutti'. Tre.
[mostri il meme]
Lo so. Non è molto, ma è un lavoro onesto.
Le regole sono semplici: estraggo un nome alla volta, se il nome che esce è in sala alza la mano e vince. Se non è in sala, si estrae di nuovo. Non vale gridare 'è andato in bagno'.
E ricordatevi chi ha scritto il software dell'estrazione. Se esce tre volte lo stesso nome, abbiamo un bug report per la prossima demo.
[estrazione 1, 2, 3]
Complimenti ai vincitori. Per tutti gli altri: c'è il piano gratuito, e c'è la pizza. Che è comunque un ottimo premio."

**Tempo:** 5:00 (20:35-20:40)
Dopo l'estrazione: "Grazie a tutti, ci vediamo al prossimo. Ora pizza e networking. E chi voleva sapere la storia di Claude e ChatGPT, sa dove trovarmi."

### Checklist estrazione
**Prima della serata**
- [ ] Tool costruito con Devin, deployato, URL breve e QR generati. Annota link a sessione/PR per mostrarlo. [PLACEHOLDER]
- [ ] QR testato da almeno 3 telefoni diversi (iPhone, Android), sia con il Wi-Fi di Impact Hub sia in 4G/5G.
- [ ] Una sola iscrizione per persona: decidi la regola (es. nome + email, blocco dei duplicati per email) e testala provando a iscriverti due volte.
- [ ] Dati raccolti al minimo indispensabile (nome e un contatto) e una riga che dice a cosa servono e quando li cancelli. Niente newsletter nascoste.
- [ ] Prova l'estrazione completa con 20-30 iscrizioni finte, poi svuota il database prima dell'evento.
- [ ] Il tool deve escludere i vincitori già estratti e permettere di ri-estrarre se il vincitore non è in sala.
- [ ] Piano B se il tool non va: lista iscritti esportata + estrazione con un generatore casuale o bigliettini in un cappello. Dillo ridendo, non nasconderlo.
- [ ] **Come vengono consegnate le licenze: DA CHIEDERE A NADER.** Codice, invito via email, credito sull'account? Chi le fornisce e con quali condizioni (durata, piano, scadenza)? Non dichiarare sul palco nulla che non sia confermato.
- [ ] Controllo normativo: vedi nota DPR 430/2001 sotto (DA VERIFICARE).

**Durante la serata**
- [ ] QR sullo schermo a fine demo, durante la Q&A e prima dell'estrazione.
- [ ] Chiusura iscrizioni annunciata (es. "si chiude alle 20:30").
- [ ] Il vincitore deve essere in sala. Se non risponde entro 10 secondi, si ri-estrae.
- [ ] Annota nome e contatto dei 3 vincitori subito, per la consegna.

### Nota legale: DPR 430/2001 (DA VERIFICARE, non è una consulenza legale)
In Italia i concorsi a premio sono disciplinati dal DPR 26 ottobre 2001, n. 430: secondo il MIMIT sono iniziative di produttori e rivenditori per stimolare gli acquisti o promuovere l'immagine aziendale, promosse da imprese (anche straniere, tramite un rappresentante fiscale) con comunicazione preventiva al Ministero tramite il servizio "Prema online". [S38]
L'art. 6 esclude solo casi specifici: concorsi per opere o progetti in cui il premio riconosce il merito, premi di emittenti radiotelevisive, sconti e quantità aggiuntive, buoni spesa nella stessa insegna, oggetti di minimo valore (tipo gadget e calendari), premi destinati a enti pubblici o benefici. [S39][S40]
Un'estrazione a sorte di licenze di un prodotto da 200 $ non sembra rientrare a prima vista in nessuna di queste esclusioni, quindi potrebbe essere considerata un concorso a premio con i relativi adempimenti. Non so dirlo con certezza.
**Cosa fare:** chiedere a Nader / Cognition come gestiscono di solito i giveaway ai meetup in Italia, oppure a un consulente. Alternativa più semplice: dare le licenze per merito invece che a sorte, per esempio ai 2 speaker dei lightning talk e alla domanda migliore della Q&A (votata dalla sala). L'esclusione dell'art. 6 lettera a) riguarda premi che riconoscono il merito per opere o progetti: se si applichi a un talk o a una domanda è comunque **DA VERIFICARE**.

---

## Timeline della serata (aggiornata)

| Orario | Cosa |
|---|---|
| 18:15-18:30 | Porte aperte e accoglienza |
| 19:00 | Rompighiaccio veloce |
| 19:10-19:35 | Talk "Devin oggi" (slide 1-16, con teaser dell'estrazione nella slide 2) |
| 19:35-20:00 | Demo live (QR dell'estrazione negli ultimi 30 secondi) |
| 20:00-20:15 | Q&A "senza filtri" (QR sempre sullo schermo) |
| 20:15-20:35 | 2 lightning talk della community (5 min + 5 min di domande ciascuno) |
| 20:35-20:40 | Estrazione live delle 3 licenze (slide 17) |
| 20:40 | Pizza, drink e networking |
| 21:30/22:00 | Chiusura |

Nota: su Luma il networking è indicato alle 20:30. Con l'estrazione slitta alle 20:40: valuta di aggiornare Luma e il canale Telegram.


---

## I meme: cosa ho trovato e cosa è suggerito

**"It actually works now" (slide 5): TROVATO.**
- È una frase di Hamel Husain, coautore del test di Answer.AI "Thoughts On A Month With Devin" (gennaio 2025, 3 successi su 20). [S3]
- Il tweet originale di Hamel che lanciava quel test, del 17 gennaio 2025: https://x.com/HamelHusain/status/1880129024737104118 (verificato via fxtwitter). [S29]
- Più tardi Hamel ha fatto un quote-tweet di quel post scrivendo: "This post is completely outdated FWIW. Devin is really good now. One of my favorite tools. What's good about it: 1. UX is really great and super polished 2. Love how it gives me a video and visual proof of work 3. It actually works now. Some of it is models are better but the UX/harness is also better. I suspect this blog post would not be written today." (Testo trovato su mirror di X, ad esempio nitter, e sul "muro dei tweet" di Cognition devin-tweets-wall.vercel.app.) [S29]
- **DA TROVARE:** il link diretto al quote-tweet. I mirror lo datano "1 maggio" senza anno (probabilmente 2026). Prima di usarlo, cercalo dal profilo @HamelHusain e fai lo screenshot dall'originale.
- Non ho trovato un'immagine "meme" a sé con questa frase: il meme è il tweet stesso (e il contrasto con il suo post di un anno prima). Lo screenshot affiancato "gennaio 2025 vs dopo" funziona da solo.

**"Non è molto, ma è un lavoro onesto" (slide 17):** file fornito da Bogdan, `meme-lavoro-onesto.png`.

**Meme suggeriti (formati noti, testo nostro; non esistono già online, li crei tu, ad esempio con imgflip):**
1. Slide 3, **Expectations vs Reality**: "il primo AI software engineer" vs "13,86% su SWE-bench".
2. Slide 4, **This is fine**: "14 task falliti su 20", tazza con "500 $/mese".
3. Slide 6, **Is this a pigeon?**: "io nel 2023" / "ChatGPT che mi scrive una funzione" / "Is this an agent?"
4. Slide 9, **Spider-Man pointing**: "Codeium", "Windsurf", "Devin Desktop".
5. Slide 10, **Drake**: no a "500 $/mese solo team", sì a "Free, poi 20 $/mese".
6. Slide 14, **Two buttons**: "faccio review della PR" / "faccio merge, tanto ha fatto i test".
Consiglio: massimo 4 meme in 25 minuti, altrimenti diventa uno show. Se devi scegliere: 5 ("it actually works now"), 9 (Spider-Man), 10 (Drake), 14 (Two buttons).

---

## DA VERIFICARE / DA TROVARE (solo talk)
1. **DA TROVARE:** link diretto e data esatta del quote-tweet di Hamel Husain "It actually works now".
2. Nome attuale di "Devin Search": oggi la funzione è Ask Devin (l'app la serve all'indirizzo /search); che "Devin Search" sia stato rinominato Ask Devin è una mia deduzione dal post Devin 2.0 e dalla doc attuale. **DA VERIFICARE**
3. Stato della migrazione Playbooks e Knowledge in Skills sul tuo account (la doc dice che avviene un account alla volta).
4. Quanto Devin Cloud include il piano Free (vedi talk-e-qa.md).
5. Cosa mostra il video Mercor nel post di Cognition (letto solo il testo).
6. I numeri su Mercor (2 miliardi di ARR) sono di Cognition, non verificati in modo indipendente.
7. **DA CHIEDERE A NADER:** chi fornisce le 3 licenze, cosa sono esattamente ("licenza da 200 $" = un mese di piano Max? crediti?), e come vengono consegnate ai vincitori.
8. Applicabilità del DPR 430/2001 all'estrazione (concorso a premio sì/no) e, se si passa ai premi per merito, se rientra nell'esclusione dell'art. 6 lettera a).
9. Aggiornare l'orario del networking su Luma e Telegram (20:30 diventa 20:40).

---

## Fonti
Numerazione condivisa con `talk-e-qa.md`. Nuove in questo file: S29-S37.
- [S1] Cognition, "Introducing Devin" (12 mar 2024): https://cognition.com/blog/introducing-devin
- [S2] Cognition, "Devin is now generally available" (10 dic 2024): https://cognition.com/blog/devin-generally-available
- [S3] Answer.AI, "Thoughts On A Month With Devin" (8 gen 2025): https://www.answer.ai/posts/2025-01-08-devin.html
- [S4] Cognition, "Devin 2.0" (3 apr 2025): https://cognition.com/blog/devin-2
- [S5] TechCrunch (3 apr 2025): https://techcrunch.com/2025/04/03/devin-the-viral-coding-ai-agent-gets-a-new-pay-as-you-go-plan/
- [S6] Reuters (14 lug 2025): https://www.reuters.com/legal/transactional/cognition-ai-buy-windsurf-doubling-down-ai-driven-coding-2025-07-14/
- [S7] Cognition, "New self-serve plans for Devin" (14 apr 2026): https://cognition.com/blog/new-self-serve-plans-for-devin
- [S8] Devin Docs, "Devin Desktop FAQ": https://docs.devin.ai/desktop/devin-desktop-faq
- [S9] Cognition, "Introducing Devin Desktop" (2 giu 2026): https://cognition.com/blog/introducing-devin-desktop
- [S10] Cognition, "Announcing our Series E" (8 set 2026): https://cognition.com/blog/series-e
- [S11] Cognition, "Introducing SWE-2" (10 set 2026): https://cognition.com/blog/swe-2
- [S13] Devin blog, "Introducing Devin Oncall" (15 ott 2026): https://devin.ai/blog/introducing-devin-oncall
- [S14] Devin blog, "Devin Security 2.0" (26 ott 2026): https://devin.ai/blog/devin-security-2
- [S15] Pagina prezzi: https://devin.ai/pricing
- [S16] Devin Docs, "Self-serve plans": https://docs.devin.ai/admin/billing/self-serve
- [S17] Devin Docs, "Introducing Devin": https://docs.devin.ai/get-started/devin-intro
- [S18] Devin Docs, "Computer Use": https://docs.devin.ai/work-with-devin/computer-use
- [S19] Devin Docs, "Testing & Video Recordings": https://docs.devin.ai/work-with-devin/testing-and-recordings
- [S20] Devin Docs, "When to Use Devin": https://docs.devin.ai/essential-guidelines/when-to-use-devin
- [S21] Devin Docs, indice: https://docs.devin.ai/llms.txt
- [S22] Devin Docs, "Security at Cognition": https://docs.devin.ai/admin/security
- [S23] Devin Docs, "Knowledge Onboarding": https://docs.devin.ai/onboard-devin/knowledge-onboarding
- [S24] Devin Docs, "Devin Review": https://docs.devin.ai/work-with-devin/devin-review
- [S27] Theo, "What is a 'harness'?" (23 ott 2026): https://x.com/theo/status/2113424203345265053 (letto via api.fxtwitter.com)
- [S28] Cognition su Mercor (28 ott 2026): https://x.com/cognition/status/2115488769306673267 (letto via api.fxtwitter.com)
- [S29] Hamel Husain, tweet originale del 17 gen 2025: https://x.com/HamelHusain/status/1880129024737104118 ; quote-tweet "It actually works now" riportato su https://devin-tweets-wall.vercel.app/ e su mirror nitter (link diretto DA TROVARE)
- [S30] Jeff Wang (ex CEO Windsurf), "Today we are saying goodbye to Windsurf" (LinkedIn): https://www.linkedin.com/posts/jefflinwang_today-we-are-saying-goodbye-to-windsurf-activity-7467657749397581825-oocx
- [S31] Devin Docs, "Usage": https://docs.devin.ai/admin/billing/usage
- [S32] Devin Docs, "Ask Devin": https://docs.devin.ai/work-with-devin/ask-devin
- [S33] Devin Docs, "DeepWiki": https://docs.devin.ai/work-with-devin/deepwiki
- [S34] Devin Docs, "Devin Skills": https://docs.devin.ai/product-guides/skills
- [S35] Devin Docs, "Using Playbooks": https://docs.devin.ai/product-guides/using-playbooks
- [S36] Devin Docs, "MCP servers and marketplace": https://docs.devin.ai/work-with-devin/mcp
- [S37] Devin Docs, "Automations": https://docs.devin.ai/product-guides/automations
- [S38] MIMIT, "Manifestazioni a premio": https://www.mimit.gov.it/it/mercato-e-consumatori/concorrenza-e-commercio/manifestazioni-a-premio
- [S39] MIMIT, "Le manifestazioni escluse (art. 6)": https://www.mimit.gov.it/it/mercato-e-consumatori/concorrenza-e-commercio/manifestazioni-a-premio/manifestazioni-escluse
- [S40] DPR 26 ottobre 2001, n. 430, art. 6 (testo MIMIT): https://www.mimit.gov.it/images/stories/normativa/dPR_26_ottobre_2001_n430.pdf
