# Devin AI Trento #1: "Devin è cambiato molto"
## File master della serata (talk, slide, link, risorse) · v3

Mercoledì 4 novembre 2026, Impact Hub Trento (sala Corallo, HDMI). Luma: https://luma.com/sle4gigc

**v3 del 3 novembre 2026.** 20 slide + slide Q; talk di **24:45** (slide 1-19). Fatti verificati su docs.devin.ai, devin.ai, cognition.com e blog il 3 nov 2026. La demo TuttoCalcolato è una presentazione separata (`tuttocalcolato-demo/`), non sta in questo deck.

Contenuto della cartella:
- `devin-trento-slides.html`: la presentazione (doppio clic, funziona offline in Chrome o Edge)
- `assets/`: immagini, meme e font
- `devin-trento-master.md`: questo file
- `docs/talk-v2.md`, `docs/talk-e-qa.md`: script e Q&A del 29 ottobre, lasciati com'erano. Dove contraddicono questo file, vale questo file (vedi sezione 11).

## Indice
1. Scaletta della serata
2. Tabella slide per slide
3. Cosa è cambiato rispetto al deck del 29 ottobre
4. Cosa tagliare se sei in ritardo
5. Note complete per ogni slide
6. Tutti i link e le fonti
7. Cartella risorse (assets)
8. Come sostituire i placeholder
9. Comandi da tastiera
10. Estrazione e checklist pre-evento
11. Q&A: risposte aggiornate al 3 novembre
12. Punti DA CONFERMARE

## 1. Scaletta della serata

| Orario | Cosa | Note |
|---|---|---|
| 18:15-18:30 | Porte aperte e accoglienza | nametag, sticker, QR Luma per il check-in |
| 19:00 | Rompighiaccio veloce |  |
| 19:10-19:35 | Talk "Devin oggi" (slide 1-19, 24:45) | teaser estrazione nella slide 3 |
| 19:35-20:00 | Demo live TuttoCalcolato (presentazione separata, circa 20 min + margine) | QR dell'estrazione (slide Q di questo deck) alla fine, circa 20:00 |
| 20:00-20:15 | Q&A "senza filtri" | QR sempre sullo schermo; chiusura iscrizioni annunciata per le 20:30 |
| 20:15-20:35 | 2 lightning talk della community | 5 min + 5 min di domande ciascuno |
| 20:35-20:40 | Estrazione live delle 3 licenze (slide 20) |  |
| 20:40 | Pizza, drink e networking |  |
| 22:00 | Chiusura |  |

Gli orari della slide 3 seguono questa scaletta (19:10, 19:35, 20:00, 20:15, 20:35, 20:40). Su Luma il networking è indicato alle 20:30: valuta di aggiornare Luma e Telegram.

Passaggio alla demo: alla slide 19 apri `tuttocalcolato-demo/tuttocalcolato-demo.html` (o il browser con la sessione Devin). Finita la demo torni a questo deck e premi Q.

## 2. Tabella slide per slide

| N | Titolo | Min | Fine slide (orario) | Messaggio chiave | Immagini (assets/ e fonte) |
|---|---|---|---|---|---|
| 1 | Ciao, sono Bogdan | 1:15 | 1:15 (19:11) | Chi sono: developer, minipim.io e TuttoCalcolato.it, Devin e Cursor ogni giorno, ambassador a Trento. | `bogdan.jpg (da inserire)` (foto tua) |
| 2 | Il principio | 0:45 | 2:00 (19:12) | Il principio ambassador: aiutare chiunque, Devin o no, senza aspettarsi niente in cambio. | nessuna |
| 3 | Perché questa serata | 2:00 | 4:00 (19:14) | Il formato della serata, nessuno vende niente, teaser estrazione delle 3 licenze. | nessuna |
| 4 | Marzo 2024, il video che ha fatto il giro del mondo | 1:00 | 5:00 (19:15) | Marzo 2024: 'il primo AI software engineer', 13,86% su SWE-bench. | `tweet-introducing-devin-2024.png` (https://x.com/cognition/status/1767548763134964000) |
| 5 | 500 dollari al mese e un test spietato | 1:00 | 6:00 (19:16) | Il Devin che molti ricordano: 500 $/mese e 3 task riusciti su 20. | `meme-thisisfine.jpg` (https://i.imgflip.com/wxica.jpg) |
| 6 | It actually works now | 0:45 | 6:45 (19:16) | Lo stesso critico oggi dice: adesso funziona davvero, anche grazie all'harness. | `tweet-hamel-quote.png` (https://x.com/HamelHusain/status/2050363550020055290) |
| 7 | Chatbot, agente, harness | 1:45 | 8:30 (19:18) | Chef = LLM, cucina = harness, chef + cucina = agente. | `avatar-theo.jpg` (https://x.com/theo/status/2113424203345265053)<br>`meme-pigeon.jpg` (https://i.imgflip.com/1o00in.jpg) |
| 8 | PR e test end-to-end | 1:45 | 10:15 (19:20) | PR = proposta di modifica, il merge lo fai tu. E2E = prova come un utente vero. | nessuna |
| 9 | E no, non è Windsurf. Però... | 1:00 | 11:15 (19:21) | Windsurf è un pezzo di Devin; Devin è un ombrello: Cloud, Desktop, CLI, Review. | `meme-spiderman3.jpg` (https://i.imgflip.com/3eqjd8.jpg) |
| 10 | Prezzi, allora vs oggi | 2:30 | 13:45 (19:23) | Da 500 $/mese solo team a Free, Pro 20 $, Max 200 $, Teams; si pagano le azioni, non l'attesa. | `meme-drake.jpg` (https://i.imgflip.com/30b1gx.jpg) |
| 11 | Lo chef lo portate da casa (piano ChatGPT) | 0:45 | 14:30 (19:24) | Potete collegare il vostro piano ChatGPT: l'uso dei modelli GPT in Devin scala da lì. | `chatgpt-plan-toggle.jpg` (https://x.com/cognition/status/2108692010056188048) |
| 12 | Fusion: chef capo e aiuto cuoco | 1:00 | 15:30 (19:25) | Fusion: modello di frontiera che decide + modello economico che esegue. | `lifecycle-fusion.jpg` (https://x.com/devindevelopers/status/2113444391146889440) |
| 13 | Dove lavora Devin | 1:30 | 17:00 (19:27) | Dove lavora Devin: sessione, blueprint, snapshot, Cloud, Desktop, CLI, test con video. | nessuna |
| 14 | DeepWiki e Ask Devin: prima capire | 1:15 | 18:15 (19:28) | DeepWiki: wiki generata dal codice con fonti verificabili; Ask Devin: domande, piano, sessione. Gratis sui repo pubblici. | nessuna |
| 15 | La cassetta degli attrezzi | 2:00 | 20:15 (19:30) | Gli attrezzi in una riga: Review, Auto-Fix, Skills, AGENTS.md, memoria, MCP, Automations, Oncall, Data Analyst, API. | nessuna |
| 16 | Devin Security 2.0 | 1:15 | 21:30 (19:31) | Devin Security 2.0: scansiona, dà priorità con un threat model, corregge con PR; crediti per le enterprise. | `tweet-devin-security.png` (https://x.com/cognition/status/2114741368627335379) |
| 17 | Quello che resta vero | 1:30 | 23:00 (19:33) | Sbaglia, i compiti vaghi danno risultati vaghi, costa, privacy: review sempre. | `meme-twobuttons.jpg` (https://i.imgflip.com/1g8my4.jpg) |
| 18 | Come la racconta Cognition | 1:00 | 24:00 (19:34) | La promessa: task lunghi prima di dormire, PR testate al risveglio. Verifichiamola. | `avatar-cognition.jpg` (https://x.com/cognition/status/2115488769306673267) |
| 19 | Demo, cosa stiamo per vedere | 0:45 | 24:45 (19:34) | Ponte alla demo live di un caso reale. | nessuna |
| Q | Scansiona e partecipa (QR estrazione) | 0:30 | fuori dal talk | QR per l'estrazione, a fine demo e durante la Q&A. | `qr-estrazione.png` (da inserire) |
| 20 | Non è molto, ma è un lavoro onesto | 5:00 | fuori dal talk | Estrazione delle 3 licenze. | `meme-lavoro-onesto.png` (file fornito da Bogdan) |

**Totale talk (1-19): 24:45.** Slide Q: 0:30 a fine demo. Slide 20: 5:00 alle 20:35.

Le note di ogni slide hanno due parti: il parlato (da dire, calibrato sui minuti della tabella) e un blocco **"Se ti chiedono (non leggere)"** con il dettaglio verificato, da usare solo nelle domande.

## 3. Cosa è cambiato rispetto al deck del 29 ottobre

| Nuova | Vecchia | Cosa è cambiato |
|---|---|---|
| 1 Ciao, sono Bogdan | 1 | Aggiunto "ambassador Devin a Trento" (trasparenza); tolta dalle note la frase sui clienti di minipim (stonava prima della slide sul principio). 1:30 → 1:15. |
| 2 Il principio | nuova | Nuova. |
| 3 Perché questa serata | 2 | Orari aggiornati al talk da 25 min (demo 19:35, Q&A 20:00). Note accorciate. 2:45 → 2:00. |
| 4 Marzo 2024, il video che ha fatto il giro del mondo | 3 | Note accorciate. 1:30 → 1:00. |
| 5 500 dollari al mese e un test spietato | 4 | Note accorciate. 1:30 → 1:00. |
| 6 It actually works now | 5 | Note accorciate. 1:00 → 0:45. |
| 7 Chatbot, agente, harness | 6 | Note leggermente accorciate. 2:00 → 1:45. |
| 8 PR e test end-to-end | 7 | Note accorciate; nel blocco "Se ti chiedono" come si attiva il test con video e l'esempio Kanban (ex slide 17, tagliata). 2:00 → 1:45. |
| 9 E no, non è Windsurf. Però... | 9 | Le date essenziali della timeline (ex slide 8) entrano nella frase e nel blocco "Se ti chiedono". Etichette dell'ombrello più precise. |
| 10 Prezzi, allora vs oggi | 10 + 11 | Unita con l'ex slide 11 (cosa consuma). Corretto: il Free non include Devin Cloud; "ottobre" → "novembre 2026"; aggiunti budget gerarchici Enterprise (2 nov). |
| 11 Lo chef lo portate da casa (piano ChatGPT) | 12 | Verificati i piani (Pro, Max, Teams; non Free né Enterprise) e cosa resta a carico di Devin; tolto il DA VERIFICARE. |
| 12 Fusion: chef capo e aiuto cuoco | 13 | Corretta la data (lancio 29 giu 2026, non 23 ott); aiuto cuoco concreto (SWE-2); FrontierCode spiegato nelle note. 1:30 → 1:00. |
| 13 Dove lavora Devin | 14 | Righe concrete al posto delle metafore (VM, YAML, snapshot giornaliero, 30 min / 14 giorni, /handoff). Blueprint e snapshot separati. Dettagli nel blocco "Se ti chiedono". |
| 14 DeepWiki e Ask Devin: prima capire | 15 (parte) | Nuova (DeepWiki e Ask Devin erano due celle della cassetta degli attrezzi): come si genera, cosa restituisce, uso nel flusso, attivazione pubblica e privata, costo. |
| 15 La cassetta degli attrezzi | 15 | Etichette vaghe sostituite da cosa fa ciascuno; aggiunti Oncall (per tutti da ottobre) e API/MCP; Playbooks e Knowledge dentro Skills; DeepWiki e Ask Devin spostati nella slide 14. 2:15 → 2:00. |
| 16 Devin Security 2.0 | 18 | Tre punti resi concreti (threat model, una sessione per finding); precisato che i crediti sono per le enterprise; aggiunti import da altri scanner e Corridor (28 ott) nelle note. 1:30 → 1:15. |
| 17 Quello che resta vero | 19 | Precisata la privacy: default per tutti i non Enterprise, opt-out solo sui piani a pagamento, nei Teams lo fa l'admin. |
| 18 Come la racconta Cognition | 20 | Note accorciate. 1:30 → 1:00. |
| 19 Demo, cosa stiamo per vedere | 21 | Diventata ponte neutro: niente segnaposto, nessun contenuto della demo nel deck principale. 1:00 → 0:45. |
| Q Scansiona e partecipa (QR estrazione) | Q | Orario aggiornato (circa 20:00). |
| 20 Non è molto, ma è un lavoro onesto | 22 | Invariata (rinumerata). |

**Slide tolte o fuse:**

- 8 Timeline 2025-2026: tagliata: le date principali sono nella frase della slide 9 e nel suo blocco "Se ti chiedono"
- 11 Cosa consuma: fusa nella slide 10 (riga "Cosa consuma")
- 16 Tutto il ciclo, secondo Devin: tagliata: i pezzi sono già nelle slide 13-15
- 17 Esempio scadenze sulle card: tagliata: l'esempio è nelle note della slide 8

**Correzioni di fatto rispetto al 29 ottobre:**

- Fusion: il kicker "Devin Cloud · 23 ott 2026" era la data del video, non del lancio. Fusion è stato annunciato il 29 giugno 2026 (blog Cognition) ed è arrivato in Desktop e CLI l'11 settembre 2026.
- Piano Free: oggi la pagina prezzi non include Devin Cloud, Ask Devin né API nel Free. La vecchia slide lasciava intendere che il Free fosse un Devin completo gratis.
- Prezzi: "Oggi (ottobre 2026)" diventa "novembre 2026"; aggiunti budget gerarchici Enterprise (2 nov 2026) e il limite di spesa per sessione impostabile dagli admin Teams.
- Piano ChatGPT: verificato. Funziona con Devin Pro, Max e Teams, non con Free né Enterprise; ChatGPT Go, Plus o Pro (non ChatGPT Free); tempo macchina, modelli non GPT e scansioni restano sulla quota Devin.
- Devin Security: i "centinaia di milioni di dollari di crediti" sono per scansioni e correzioni alle aziende enterprise, con criteri di idoneità. La vecchia slide li presentava come generici.
- Oncall: blog di lancio 15 ottobre 2026; nelle release notes "disponibile per tutte le organizzazioni" dal 19 ottobre.
- Budget: il limite di organizzazione blocca il nuovo lavoro; solo il limite per sessione delle Automations ferma la sessione.
- Privacy: l'uso dei dati per l'addestramento di default vale per tutti i piani non Enterprise (anche Free); l'opt-out da Data Controls c'è solo sui piani a pagamento, nei Teams lo fa l'admin.
- Timeline: SWE-2 non "gira solo dentro Devin" (la fonte non lo dice); è il modello di Cognition, post-addestrato da Kimi K3, gratis su Pro e in versione Slow sul Free.
- Playbooks e Knowledge: non "stanno confluendo" in modo vago: Knowledge è stata convertita in Skills dal 18 set 2026, Playbooks migrati account per account dal 23 ott 2026; i nuovi account dal 24 ott non hanno Playbooks.
- Ask Devin "che nel 2025 si chiamava Devin Search": tolto, non verificato.
- Slide demo: tolti i segnaposto App, Task, Successo se. Ora è un ponte neutro; tutto il materiale della demo è nel deck separato.

Novità aggiunte (tutte verificate il 3 nov 2026): Oncall per tutti (15 e 19 ott), Devin Security 2.0 (26 ott) e Corridor in Cognition (28 ott), budget gerarchici (2 nov), Playbooks e Knowledge diventati Skills, memoria con dreaming (9 ott), FrontierCode 2.0 (27 ott). Il lancio di metà novembre non è nelle slide: nelle note della slide 15 c'è solo "a novembre arrivano novità".

## 4. Cosa tagliare se sei in ritardo

Il talk è già stato riportato a circa 25 minuti applicando la vecchia lista tagli (via timeline, ciclo di vita ed esempio scadenze; "cosa consuma" dentro i prezzi). Se sei ancora in ritardo, in quest'ordine:

| # | Slide | Come | Recuperi | Totale dopo il taglio |
|---|---|---|---|---|
| 1 | Slide 15 (cassetta) | leggi solo Review, Skills, Automations | 1:00 | 23:45 |
| 2 | Slide 12 (Fusion) | una frase dentro la 11: "e c'è Fusion: uno chef capo caro che decide e un aiuto cuoco economico che esegue" | 0:50 | 22:55 |
| 3 | Slide 13 (dove lavora) | solo Cloud, Desktop, CLI | 0:40 | 22:15 |
| 4 | Slide 4 e 5 | unite a voce: "13,86%, poi 500 dollari al mese, poi 3 task su 20" | 0:45 | 21:30 |
| 5 | Slide 16 (Security) | una frase: "trova, mette in ordine, corregge con PR" | 0:45 | 20:45 |

Mai tagliare: 1-3 (tue, principio e teaser estrazione), 7-8 (le basi per capire la demo), 17 (limiti), 19 (ponte alla demo).
Se sei in anticipo: alla slide 14 apri deepwiki.com su un repo noto (20 secondi); alla slide 8 chiedi "Chi ha test end-to-end nel proprio progetto?"

## 5. Note complete per ogni slide

Stesso testo che vedi nell'HTML premendo N o S. Il parlato è da dire a voce, non da leggere.

### Slide 1: Ciao, sono Bogdan
**Tempo:** 1:15, a fine slide minuto 1:15 su 24:45, orario previsto 19:11

Ciao a tutti, sono Bogdan. Un romano di origini rumene, trasferito in Trentino. E già qui potrebbe essere l'inizio di una barzelletta.

Sono uno sviluppatore, costruisco prodotti. Il più recente è minipim.io, serve a gestire le informazioni di prodotto. L'altro è un side project, TuttoCalcolato.it: una piattaforma di calcolatori di ogni genere.

Uso agenti AI per programmare tutti i giorni, principalmente Devin e Cursor. E sono ambassador Devin qui a Trento, quindi tenetene conto: stasera vi dico anche cosa non funziona.

E Claude e ChatGPT? Storia lunga. Se volete saperla, offritemi una birra dopo.

Foto opzionale: salva assets/bogdan.jpg e compare a destra. Tolta la frase "sto ancora cercando clienti": con la slide 2 subito dopo, stonava.

### Slide 2: Il principio
**Tempo:** 0:45, a fine slide minuto 2:00 su 24:45, orario previsto 19:12

Una cosa prima di partire. Mi piace molto far parte del programma Devin, e il motivo sta tutto in questa riga.

*[pausa, lasciala leggere]*

È quello che ci chiedono di fare come ambassador: aiutare le persone, che usino Devin o no, senza aspettarsi niente in cambio. E per me non è una regola nuova, è più o meno come cerco già di lavorare.

Per questo mi sento grato, e anche un po' fortunato, di starci dentro. Quindi stasera, se usate Cursor, Claude Code o niente, va benissimo uguale.

Tono: detto semplice, senza enfasi. Non leggere la frase ad alta voce: si legge da sola. Fonte: linee guida del programma ambassador Devin, punto 4 (screenshot fornito da Bogdan, testo originale in inglese sotto la traduzione).

### Slide 3: Perché questa serata
**Tempo:** 2:00, a fine slide minuto 4:00 su 24:45, orario previsto 19:14

Perché questa serata? Il motivo che mi appassiona di più è il networking. Sono un topo da laboratorio, passo molto più tempo a sviluppare che a questi eventi. Però penso che più ce ne sono, meglio è.

Stasera è un'introduzione a come è cambiato Devin. Molti lo conoscono per i 500 dollari al mese del 2024, oppure per il passaggio da Windsurf a Devin.

Il formato: venticinque minuti di contesto, poi la demo live, poi Q&A senza filtri, poi i lightning talk della community.

E per farvi restare fino alla fine: dopo i lightning talk estraiamo 3 licenze Devin da 200 dollari. Il QR ve lo mostro dopo la demo. Il tool dell'estrazione l'ha costruito Devin, quindi se non funziona sapete con chi prendervela.

Alzata di mano veloce. Chi ha provato Devin? ... Chi usa Cursor, Claude Code, Copilot o simili? ... E chi pensa che Devin costi ancora 500 dollari? ... Perfetto, voi siete il mio target stasera.

Guarda le mani: se quasi nessuno ha provato Devin, allunga le spiegazioni terra terra (slide 7-8). Se tanti lo usano, accorciale. Orari calcolati sul talk da circa 25 minuti (vedi tabella nel master).

### Slide 4: Marzo 2024, il video che ha fatto il giro del mondo
**Tempo:** 1:00, a fine slide minuto 5:00 su 24:45, orario previsto 19:15

Marzo 2024. Cognition presenta Devin come 'il primo AI software engineer'. Video ovunque, LinkedIn in fiamme, tutti i CTO in ansia. [S1]

Il numero dichiarato era 13,86% su SWE-bench. SWE-bench, terra terra: una raccolta di bug veri presi da progetti open source su GitHub. Dai il bug all'AI e vedi se lo sistema davvero.

Il sistema migliore prima faceva meno del 2%. Ma traduciamolo: su 100 bug, ne sistemava 14. Gli altri 86... insomma, ci aveva provato.

[S1] https://cognition.com/blog/introducing-devin . Post originale su X: https://x.com/cognition/status/1767548763134964000 (13,86% senza aiuto contro 1,96% del precedente stato dell'arte senza aiuto e 4,80% assistito). Il post diceva anche che Devin aveva passato colloqui tecnici di aziende AI e fatto lavori su Upwork: battuta del CV tolta per stare nei tempi, usala se sei in anticipo.

### Slide 5: 500 dollari al mese e un test spietato
**Tempo:** 1:00, a fine slide minuto 6:00 su 24:45, orario previsto 19:16

Dicembre 2024: Devin diventa disponibile a tutti. Prezzo di partenza: 500 dollari al mese, per team. [S2]

A gennaio 2025 il team di Answer.AI lo prova per un mese su 20 task veri. Risultato: 3 successi, 14 fallimenti, 3 'boh'. E la cosa peggiore, dicevano, era non riuscire a prevedere quali task sarebbero andati bene. [S3]

Questo è il Devin che molti di voi hanno in testa. Ed era una critica giusta.

[S2] https://cognition.com/blog/devin-generally-available [S3] https://www.answer.ai/posts/2025-01-08-devin.html

### Slide 6: It actually works now
**Tempo:** 0:45, a fine slide minuto 6:45 su 24:45, orario previsto 19:16

Poi succede questa cosa. Hamel Husain, uno degli autori di quel test, riprende il suo vecchio post e scrive che è superato: Devin adesso è uno dei suoi strumenti preferiti. Motivo numero 3: 'It actually works now'. [S29]

Tipo il ristorante che mette in vetrina: 'Ora il cibo è commestibile.'

La parte interessante è il perché: un po' sono migliorati i modelli, ma è migliorato anche l'harness. Tenetevi questa parola, la spieghiamo adesso.

Quote-tweet: https://x.com/HamelHusain/status/2050363550020055290 (2 maggio 2026, 01:55 ora di Roma). Tweet originale del 17 gennaio 2025: https://x.com/HamelHusain/status/1880129024737104118.

### Slide 7: Chatbot, agente, harness
**Tempo:** 1:45, a fine slide minuto 8:30 su 24:45, orario previsto 19:18

Un passo indietro, perché stasera userò parole che spesso diamo per scontate.

*[indica il meme]* Questo ero io nel 2023: ChatGPT mi scriveva una funzione e io pensavo di avere un agente. No.

Un chatbot è uno chef che vi detta la ricetta al telefono. Bravissimo, ma la cucina la fate voi: copiate, incollate, provate, tornate a lamentarvi.

Un agente è uno chef che entra in cucina e cucina davvero: apre i file, li modifica, lancia comandi, guarda il risultato, corregge.

E la cucina si chiama harness. Theo, quello di T3, ci ha scritto un post a fine ottobre. [S27] Il succo: un modello da solo produce solo testo. Per fare cose gli servono attrezzi, 'leggi file', 'modifica file', 'lancia un comando', e un sistema che esegue davvero l'attrezzo e gli riporta il risultato. Quel sistema è l'harness. Chef più cucina uguale agente.

Theo non parla di Devin, sia chiaro. Ma il concetto spiega bene Devin: non è 'un modello', è una cucina attrezzata, con una macchina sua, un browser e la possibilità di usare chef diversi. Quindi quando confrontate Devin con Cursor o Claude Code, non state confrontando chef. State confrontando cucine.

**Se ti chiedono (non leggere):**
- Confronto aggiornato: anche GitHub Copilot dal 28 ott 2026 ha "Copilot in the cloud" sui piani a pagamento, con ambiente a scelta tra sandbox cloud, GitHub Actions o remoto. Cursor ha cloud agent su VM Ubuntu. Le cucine si somigliano sempre di più: cambia cosa c'è dentro. [S61]

[S27] https://x.com/theo/status/2113424203345265053 ("tl;dr - An agent is what happens when you combine a harness and an LLM."). Cognition dice di voler combinare i modelli migliori, compresi i propri [S10][S15].

### Slide 8: PR e test end-to-end
**Tempo:** 1:45, a fine slide minuto 10:15 su 24:45, orario previsto 19:20

Altre due parole che sentirete nella demo.

PR, pull request: una proposta di modifica. Come un documento Word con le revisioni attive che mandate al capo: 'ho cambiato queste righe, approvi?' Finché nessuno fa merge, il codice vero non cambia. Devin lavora così: non tocca il vostro main, vi apre una PR. Il bottone 'merge' lo premete voi.

Test end-to-end. Un unit test controlla un pezzo singolo: il forno arriva a 200 gradi? Utile, ma non vi dice se la cena è buona. Un test end-to-end prova tutto il percorso come un utente vero: apro il browser, faccio login, aggiungo un prodotto, salvo, controllo che sia salvato davvero.

Puoi avere tutti gli unit test verdi e il sito che non ti fa fare login. Ci siamo passati tutti.

Ed è la cosa che mi interessa di Devin oggi: dopo la PR può avviare l'app, cliccare come un utente e mandarti il video di quello che ha fatto. [S19] Non 'fidati', ma 'guarda'.

**Se ti chiedono (non leggere):**
- Come si attiva il test con video: dopo la PR clicchi "Test the app", oppure lo pre-approvi in Settings > Preferences. Devin prepara l'app, scrive un piano con il flusso end-to-end più importante e te lo manda prima, poi aspetta la CI verde, registra lo schermo con annotazioni e zoom e ti manda il video. Se servono credenziali le salva come secret. [S19]
- Esempio dal video ufficiale del 23 ottobre: task "aggiungi le scadenze alle card" di una app Kanban, 1 sessione, 1 PR, 40 test verdi più lint, build e un giro nel browser con Playwright; Devin Review trova 5 bug, Auto-Fix li risolve tutti. È il loro esempio, su un'app scelta da loro. [S41]

Se sei in anticipo: chiedi alla sala "Chi ha test end-to-end nel proprio progetto?" [S19] https://docs.devin.ai/work-with-devin/testing-and-recordings

### Slide 9: E no, non è Windsurf. Però...
**Tempo:** 1:00, a fine slide minuto 11:15 su 24:45, orario previsto 19:21

Il titolo della serata dice 'non è Windsurf'. Facciamo chiarezza, perché è confuso anche per me.

Windsurf prima si chiamava Codeium. A luglio 2025 Cognition l'ha comprato, e dal 2 giugno 2026 si chiama Devin Desktop. L'ex CEO di Windsurf ha scritto che ha dovuto cambiare indirizzo email praticamente ogni anno. [S6][S9][S30]

Oggi 'Devin' è un ombrello: Devin Cloud, l'agente che lavora da solo nella sua macchina; Devin Desktop, l'IDE ex Windsurf; Devin CLI, l'agente nel terminale; Devin Review per la code review. [S8]

Quindi: Windsurf è un pezzo di Devin. Devin non è Windsurf. Nella demo vedete soprattutto Devin Cloud.

**Se ti chiedono (non leggere):**
- Timeline (ex slide 8, tagliata): apr 2025 Devin 2.0 con piano da 20 $ a consumo [S4]; lug 2025 Cognition compra Windsurf [S6]; 14 apr 2026 nuovi piani, addio ai 500 $ [S7]; 2 giu 2026 Windsurf diventa Devin Desktop [S9]; 8 set 2026 Series E, oltre 2 miliardi raccolti a 48 miliardi di valutazione [S10]; 10 set 2026 SWE-2, il loro modello (post-addestrato da Kimi K3) [S11]; 25 set 2026 oltre 1 miliardo di fatturato annualizzato [S45]; fine set e ott 2026 piano ChatGPT, Oncall, Security 2.0.

[S8] https://docs.devin.ai/desktop/devin-desktop-faq [S9] https://cognition.com/blog/introducing-devin-desktop [S30] post LinkedIn di Jeff Wang. Corretto: SWE-2 non "gira solo dentro Devin" come diceva la vecchia timeline; la fonte dice solo che è il loro modello, disponibile in Devin.

### Slide 10: Prezzi, allora vs oggi
**Tempo:** 2:30, a fine slide minuto 13:45 su 24:45, orario previsto 19:23

Ed eccoci al titolo della serata. Scordatevi i 500 dollari.

Oggi c'è un piano gratuito, poi Pro a 20 dollari al mese, Max a 200 per chi lo usa tanto, Teams per i gruppi ed Enterprise per le aziende. Attenzione però: il Free oggi non include Devin Cloud, l'agente autonomo. Per quello serve almeno Pro. [S15]

Come funziona: il piano ha una quota che si ricarica ogni giorno e ogni settimana, tipo i giga del telefono. Quando la finite, comprate crediti extra a prezzo API, cioè quello che costano i modelli sotto, e non scadono. [S15][S16]

Cosa fa consumare? Le azioni di Devin, leggere codice, usare il browser, eseguire comandi, e un po' di tempo macchina. Mentre aspetta voi o aspetta i test, no. Dopo 30 minuti di inattività va a dormire. Un taxi che fa pagare i chilometri, non l'attesa al semaforo. [S31]

E gli ACU, il vecchio gettone? Oggi li vedono solo i clienti Enterprise, che da ieri hanno anche i budget gerarchici: un budget per l'azienda, sotto-budget per reparti e progetti, limiti per persona. [S47]

Nota cinica ma onesta: quando sono cambiati i piani, Cognition stessa ha scritto che per alcuni utenti leggeri era un passo indietro, e che Ask Devin, DeepWiki e Devin Review sarebbero diventati a pagamento. [S7] L'ingresso costa meno, l'uso pesante si paga.

**Se ti chiedono (non leggere):**
- Free (pagina prezzi al 3 nov 2026): quota leggera, modelli limitati, SWE-2 gratis in versione "Slow"; Devin Cloud, Ask Devin e API: no. Nella doc self-serve il Free include ancora DeepWiki e Devin Review: da confermare quale delle due è aggiornata. [S15][S16]
- Pro 20 $: modelli di frontiera (OpenAI, Claude, Gemini, SpaceXAI) e open source, SWE-2 gratis, Devin Cloud, extra a prezzo API. Max 200 $: quote molto più alte, solo limite settimanale. Sessioni in parallelo: la tabella prezzi riporta "Up to 10, Up to 10, Unlimited, Unlimited", cioè con ogni probabilità 10 su Pro e Max e illimitate su Teams ed Enterprise; abbinamento da confermare. [S15][S31]
- Teams: minimo 80 $/mese, 40 $/mese per ogni full seat (persona con quota sua), flex seat gratis che pesca dai crediti condivisi e non ha Desktop; fino a 200 utenti. L'admin può impostare un limite di spesa di default per sessione in Settings > Usage & limits. [S15][S16]
- Consumo: non conta mentre aspetta te, i test o il clone del repo. Dorme dopo 30 min (5 min per le sessioni Lite o da API); una sessione si può riprendere entro 14 giorni. Sessioni Windows circa il 9% in più. [S31][S52]
- Budget gerarchici (blog 2 nov 2026): un Account budget alla radice, fino a 3 livelli, limiti mensili, aumenti temporanei, limiti per persona e admin delegati. Solo Enterprise. Quando un limite di organizzazione è raggiunto, il nuovo lavoro viene bloccato (non vuol dire che ogni sessione in corso si fermi); il limite per sessione che ferma la sessione è quello delle Automations. [S47][S37]

[S15] https://devin.ai/pricing (letta il 3 nov 2026) [S16] https://docs.devin.ai/admin/billing/self-serve [S31] https://docs.devin.ai/admin/billing/usage [S7] https://cognition.com/blog/new-self-serve-plans-for-devin [S47] https://devin.ai/blog/hierarchical-budgets

### Slide 11: Lo chef lo portate da casa (piano ChatGPT)
**Tempo:** 0:45, a fine slide minuto 14:30 su 24:45, orario previsto 19:24

Questa è piccola ma piace. Se avete un abbonamento ChatGPT personale, Go, Plus o Pro, lo collegate a Devin con un interruttore, e l'uso dei modelli GPT dentro Devin scala dal vostro piano ChatGPT. Vale per Cloud, Desktop e CLI. [S43][S48]

Con la cucina di prima: lo chef lo portate da casa, e lo paga l'abbonamento che avete già. La cucina resta di Devin: il tempo macchina, gli altri modelli e le scansioni di codice restano sulla quota Devin.

**Se ti chiedono (non leggere):**
- Piani: funziona con Devin Pro, Max e Teams; non con Devin Free né Enterprise. Non con ChatGPT Free. [S48]
- Come: Settings > Connections > Continue with ChatGPT, poi l'interruttore "Use your ChatGPT plan"; nella CLI /billing on. [S48]
- Restano a carico di Devin: modelli non GPT, varianti fast o priority, tempo macchina della VM, scansioni di codice, sessioni non tue (per esempio Automations che non girano come te). Una sessione Cloud serve comunque un po' di quota Devin per partire; se finisce il limite ChatGPT, la sessione Cloud si mette in pausa. [S48]
- Fusion con piano ChatGPT nel Cloud: chef capo e aiuto cuoco girano entrambi su modelli GPT. [S48]

[S43] https://x.com/cognition/status/2108692010056188048 (9 ott 2026). [S48] https://docs.devin.ai/admin/billing/chatgpt ; blog "Sign in with ChatGPT" del 29 set 2026: https://devin.ai/blog/sign-in-with-chatgpt . Immagine: fotogramma del video del post.

### Slide 12: Fusion: chef capo e aiuto cuoco
**Tempo:** 1:00, a fine slide minuto 15:30 su 24:45, orario previsto 19:25

Restiamo in cucina. Fusion è una cucina con due chef.

Lo chef capo è un modello di frontiera, bravo e caro: fa il piano, prende le decisioni importanti e la review finale. L'aiuto cuoco è un modello economico, per esempio SWE-2 di Cognition: scrive il codice, lancia build e test. Ognuno ha il suo contesto, e Devin può cambiare modello a metà sessione.

Il numero che danno: sul loro benchmark FrontierCode, risultati da modello di frontiera fino al 60% di costo in meno. Numero loro, benchmark loro: pinze. [S49]

**Se ti chiedono (non leggere):**
- Cos'è FrontierCode: benchmark di Cognition che misura se il maintainer farebbe davvero merge della PR (correttezza, test, scope, stile). Task scritti da oltre 20 maintainer open source; versione 2.0 dal 27 ott 2026, 132 task. Gira anche su Artificial Analysis. [S50]
- Dove: annunciato il 29 giu 2026; nel Cloud si attiva dal selettore modello; in Desktop e CLI dall'11 set 2026. Default nella CLI: chef capo Claude Opus 5.5, aiuto cuoco SWE-2. Solo piani a pagamento, non sui vecchi piani a crediti. [S49][S51]
- Lavori grandi (migrazioni su più moduli o repo): un Devin coordinatore delega a più Devin, ognuno nella sua VM, controlla i progressi e unisce i risultati. [S41]

[S49] https://cognition.com/blog/devin-fusion (29 giu 2026) e https://cognition.com/blog/local-fusion (11 set 2026) [S50] https://cognition.com/frontiercode [S51] https://docs.devin.ai/cli/fusion [S41] https://x.com/devindevelopers/status/2113444391146889440. Corretto il kicker: "Devin Cloud · 23 ott 2026" era la data del video, non del lancio.

### Slide 13: Dove lavora Devin
**Tempo:** 1:30, a fine slide minuto 17:00 su 24:45, orario previsto 19:27

Dove lavora, in concreto. Una sessione è una macchina virtuale tutta sua, di solito Linux, con terminale, editor e browser. Parte pulita ogni volta. [S17][S53]

Da dove parte? Da uno snapshot. Voi scrivete un blueprint, un file YAML tipo Dockerfile: quali repo clonare, cosa installare, come si fanno lint e test. Devin lo costruisce in uno snapshot e lo rifà a ogni modifica e circa ogni giorno. Terra terra: la cucina apparecchiata ogni mattina. [S53]

Devin Cloud è il collega in smart working: gli dai il task, sparisce, torna con una PR. Devin Desktop è l'ex Windsurf, con un tabellone degli agenti e Devin Local al posto di Cascade. La CLI è Devin nel terminale: quando il lavoro si fa lungo, /handoff lo spedisce al cloud. E il test con video l'abbiamo già visto.

**Se ti chiedono (non leggere):**
- Blueprint: sezioni initialize (installazioni), maintenance (aggiornare dipendenze), knowledge (comandi di lint e test). La prima volta: "Set up your environment for this repo", Devin propone, tu approvi. Un solo snapshot attivo per piattaforma per organizzazione. Le modifiche fatte in una sessione non tornano nello snapshot. [S53]
- Secret: iniettati come variabili d'ambiente, mai da scrivere nei file. [S53]
- macOS e Windows: supportati per le sessioni, Windows consuma circa il 9% in più; disponibilità per piano da confermare. [S31][S18]
- CLI: macOS, Linux, WSL e Windows; installazione curl -fsSL https://cli.devin.ai/install.sh | bash o brew. /handoff manda al cloud conversazione, repo, branch e modifiche non committate; poi riporti in locale il branch della PR. Plugin Devin Handoff anche per Claude Code, Codex e Cursor. [S54]
- Desktop: lo stesso IDE di Windsurf, Agent Command Center come vista principale, legge .windsurfrules, .devin/rules e AGENTS.md; nei Teams serve un full seat. Local Hands: una sessione cloud può lanciare comandi sul tuo computer, con la tua approvazione. [S8][S16]

Non leggere tutta la tabella: per ogni riga solo la frase terra terra. Se sei in ritardo: tieni solo Cloud, Desktop, CLI. [S17] https://docs.devin.ai/get-started/devin-intro [S53] https://docs.devin.ai/onboard-devin/environment/blueprints [S54] https://docs.devin.ai/work-with-devin/devin-cli

### Slide 14: DeepWiki e Ask Devin: prima capire
**Tempo:** 1:15, a fine slide minuto 18:15 su 24:45, orario previsto 19:28

Prima di toccare il codice bisogna capirlo. DeepWiki fa questo: Devin indicizza il repository e scrive una wiki, una pagina per ogni parte del sistema, con diagrammi dell'architettura. [S33]

La cosa che la rende utile: ogni pagina dice da quali file e da quali righe viene, e su quale commit è stata generata. Quindi potete controllare. [S33]

Sopra c'è Ask Devin. Fate domande tipo 'da dove passa il login?', vi risponde citando il codice, poi in modalità Plan ci costruite il piano, e da lì parte la sessione con un prompt già pieno di contesto. È anche il modo più veloce che conosco per l'onboarding su un repo nuovo. [S32]

Per i repo pubblici è gratis: andate su deepwiki.com, incollate l'indirizzo GitHub. C'è anche un server MCP gratuito, senza account, da collegare a Cursor o Claude Code. Per i repo privati serve un account Devin. [S46]

**Se ti chiedono (non leggere):**
- Generazione: automatica quando colleghi i repo o li metti nel blueprint; altrimenti Settings > DeepWiki > Repositories > Add. Indicizza il branch di default, puoi aggiungerne altri. Si guida con .devin/wiki.json (repo_notes e pages, massimo 30 pagine, 80 su Enterprise). [S33]
- Costo della generazione: effort Low gratis (default); Medium circa 5-10 ACU; High circa 20-40 ACU; Enterprise sempre Low. [S33]
- MCP pubblico: https://mcp.deepwiki.com/mcp, nessuna autenticazione, tool read_wiki_structure, read_wiki_contents, ask_question. Per repo privati: Devin MCP https://mcp.devin.ai/ con chiave API. [S46]
- Piani: la pagina prezzi mette Ask Devin nel Devin Cloud da Pro in su; la doc self-serve dice che il Free include DeepWiki. Da confermare. [S15][S16]
- Nell'app si chiama anche "Devin Wiki". Ask Devin vede le sessioni avviate dalla conversazione, con lo stato. [S32][S52]

[S32] https://docs.devin.ai/work-with-devin/ask-devin [S33] https://docs.devin.ai/work-with-devin/deepwiki [S46] https://docs.devin.ai/work-with-devin/deepwiki-mcp . Se hai 20 secondi: apri deepwiki.com su un repo che conosce la sala (es. facebook/react) e mostra "Relevant source files".

### Slide 15: La cassetta degli attrezzi
**Tempo:** 2:00, a fine slide minuto 20:15 su 24:45, orario previsto 19:30

La cassetta degli attrezzi, una riga ciascuno.

Devin Review legge ogni PR prima di voi: raggruppa il diff, segnala i bug con un livello di confidenza e fa sempre anche un controllo di sicurezza. Con Auto-Fix i problemi trovati tornano nella stessa PR come correzioni. [S24]

Skills: un file SKILL.md nel repo, tipo 'così si avvia l'app, così si testa', e Devin lo segue. Playbooks e Knowledge, i nomi vecchi, stanno diventando tutti Skills. Sì, hanno cambiato nome anche qui. AGENTS.md: le regole del repo, Devin lo legge da solo. [S34][S23]

Memoria: si ricorda le vostre preferenze tra una sessione e l'altra, e una volta al giorno le riordina, lo chiamano dreaming. [S55]

MCP collega gli strumenti esterni. Automations: 'quando succede questo, fai partire Devin', da Slack, GitHub, un orario o un webhook. Nella demo ne vedete una. Oncall, da ottobre per tutti: arriva un alert, Devin indaga e propone il fix. [S36][S37][S56]

Data Analyst risponde a domande sui dati con SQL e grafici. E con API e MCP Devin si comanda da script o da altri agenti.

**Se ti chiedono (non leggere):**
- Devin Review: GitHub (anche Enterprise Server), GitLab, Azure DevOps, Bitbucket; commento /devin review o sostituisci github.com con devinreview.com nell'URL; PR pubbliche gratis senza account. Commenti in varie lingue, ma **non in italiano** secondo la doc. Dal 30 set i problemi su PR di una sessione Devin attiva vanno prima a quella sessione, in PR finisce solo ciò che non ha sistemato. [S24][S52]
- Skills: .agents/skills/<nome>/SKILL.md, standard aperto Agent Skills; anche in plugin personali, di org o enterprise; si richiama con @skills:nome. Knowledge convertita in Skills dal 18 set 2026; Playbooks migrati dal 23 ott, i nuovi account dal 24 ott non hanno più Playbooks, !macro funziona ancora. [S34][S35][S52]
- AGENTS.md: i primi 16 KiB entrano in automatico; legge anche .cursorrules, CLAUDE.md, .windsurf, .rules. [S23][S52]
- Memoria (9 ott 2026): repo git di markdown personale, ogni voce con il link alla fonte; il dreaming si può spegnere; le sessioni delle Automations non leggono né scrivono memoria, quindi le procedure condivise vanno nelle Skills. [S55]
- Automations: trigger + condizioni + Preflight facoltativo (filtro LLM o script) + azione. Trigger: Slack, GitHub, GitLab, Linear, Jira, Pylon, PagerDuty, Schedule (orario, giornaliero, settimanale, RRULE, con fuso orario), Webhook. Limite di consumo per sessione della singola Automation (raggiunto il limite, quella sessione si ferma), limite di 50 esecuzioni l'ora di default. Si crea anche "Generate with Devin". Sui Teams pescano dai crediti on-demand: finiti i crediti, le Automations non partono più. [S37][S16]
- Oncall: annunciato il 15 ott 2026, nelle release notes "disponibile per tutte le organizzazioni" dal 19 ott. Responder su canali Slack o Teams e PagerDuty, raggruppa alert ripetuti, entra nel canale dell'incidente con un report live. Setup: colleghi lo strumento di telemetria, Devin studia i sistemi per 1-2 ore e scrive le sue skill. [S13][S56]
- Data Analyst: Mode > Data nel selettore; non su piani free o trial. API v3 con service user e permessi; Terraform per automations e blueprint. Devin MCP: sessioni, skill e wiki privata da altri agenti. [S57][S58]

Se sei in ritardo: leggi solo Review, Skills, Automations; per il resto "è tutto nel master, ve lo mando sul gruppo". A novembre arrivano novità: se qualcuno chiede "cosa c'è dopo", rispondi solo così.

[S24] https://docs.devin.ai/work-with-devin/devin-review [S34] https://docs.devin.ai/product-guides/skills [S35] https://docs.devin.ai/product-guides/using-playbooks [S23] https://docs.devin.ai/onboard-devin/agents-md [S55] https://docs.devin.ai/product-guides/memory [S36] https://docs.devin.ai/work-with-devin/mcp [S37] https://docs.devin.ai/product-guides/automations [S56] https://docs.devin.ai/product-guides/devin-oncall [S57] https://docs.devin.ai/work-with-devin/data-analyst [S58] https://docs.devin.ai/api-reference/overview e https://docs.devin.ai/work-with-devin/devin-mcp [S13] https://devin.ai/blog/introducing-devin-oncall

### Slide 16: Devin Security 2.0
**Tempo:** 1:15, a fine slide minuto 21:30 su 24:45, orario previsto 19:31

Novità del 26 ottobre. Cognition dice: 'stiamo entrando in una nuova età oscura della cybersecurity'. Allegria. [S42]

Nel video parla Alex Stamos, il responsabile della sicurezza di Cognition: l'AI trova vulnerabilità enormi, gli attaccanti usano agenti, ma l'AI può anche sistemare falle che stavano lì da decenni.

Devin Security 2.0 fa tre cose. Scansiona il codice con i modelli cyber più potenti, compreso Claude Mythos di Anthropic. Dà priorità costruendo con il vostro team un threat model: cosa è raggiungibile, quanto danno farebbe. E corregge: per ogni falla una sessione Devin e una PR. La falla resta aperta finché la PR non entra. [S14][S59]

E mettono centinaia di milioni di dollari di crediti per scansioni e correzioni gratuite, ma per le aziende enterprise. Un antifurto che oltre a suonare chiama anche il fabbro. Il punto per noi resta lo stesso: la correzione arriva come PR, il merge lo decidete voi.

**Se ti chiedono (non leggere):**
- Come scansiona: "Agentic MapReduce": mappa il repo rispetto al threat model, analizza a blocchi in parallelo, unisce ed elimina i doppioni, e verifica i finding più gravi in una sandbox contro l'app che gira. [S59]
- Importa finding da Snyk, Wiz, CSV e, dal 30 ott, SonarQube, Linear e Vanta. Interfaccia in /security, serve l'accesso alle security scan per l'organizzazione. [S59][S52]
- Crediti: il blog Devin dice "$100M+ in credits to enterprises" (con Claude Mythos, criteri di idoneità, si fa richiesta); il blog Cognition parla di "hundreds of millions of dollars in Devin credits" per scansioni gratuite e crediti di correzione. Quindi: oltre 100 milioni, per le enterprise. Per team piccoli o self-serve: da confermare. [S14]
- Date: entrambi i blog (devin.ai e cognition.com), letti il 3 nov, riportano 26 ott 2026; nel documento di studio compare il 21 ott per il blog: da confermare, in slide resta 26 ott. Scansioni multi-repo fino a 1.000 repo dal 2 nov 2026. [S14][S52]
- Contesto: il 28 ott Cognition ha annunciato che Corridor (sicurezza per team AI-native) entra in Cognition per lavorare su Devin Security. [S60]

[S42] https://x.com/cognition/status/2114741368627335379 (video con Alex Stamos, CSO di Cognition). [S14] https://cognition.com/blog/devin-security e https://devin.ai/blog/devin-security-2 [S59] https://docs.devin.ai/work-with-devin/security-2-0 [S60] https://cognition.com/blog/corridor-joining-cognition

### Slide 17: Quello che resta vero
**Tempo:** 1:30, a fine slide minuto 23:00 su 24:45, orario previsto 19:33

Ora la parte onesta.

Uno: sbaglia. Lo dice la loro documentazione: può avere allucinazioni, introdurre bug, suggerire codice insicuro. Quindi review e branch protetti. [S22]

Due: compiti vaghi, risultati vaghi. La loro regola pratica: se un task ci mettete meno di tre ore a farlo voi, Devin probabilmente ce la fa. Oltre, spezzatelo. [S20]

Tre: costa. Dipende dal modello, da quanto è grande il task, da quanto deve ragionare. [S15]

Quattro: privacy. Di default i vostri dati possono essere usati per addestrare i modelli. Sui piani a pagamento si disattiva da Data Controls, nei Teams lo fa l'admin. Su Enterprise mai, senza consenso scritto. [S22] Leggetelo prima di collegare il codice del cliente.

E se qualcuno vi dice che con gli agenti non serve più saper programmare: serve sapere cosa chiedere e come verificare.

Mai tagliare. [S22] https://docs.devin.ai/admin/security [S20] https://docs.devin.ai/essential-guidelines/when-to-use-devin . Corretto rispetto al 29 ott: l'addestramento di default vale per tutti i piani non Enterprise, Free compreso; il Free però non ha l'opt-out.

### Slide 18: Come la racconta Cognition
**Tempo:** 1:00, a fine slide minuto 24:00 su 24:45, orario previsto 19:34

Post di Cognition del 28 ottobre, su Mercor, un loro cliente. Gli ingegneri danno a Devin task lunghi prima di dormire, durante le riunioni, mentre vanno in palestra, e quando tornano trovano feature testate e PR pronte per il merge. [S28]

Bella promessa. Marketing loro, su un cliente loro, quindi con le pinze. Io in palestra non ci vado comunque.

Però la promessa si può verificare.

[S28] https://x.com/cognition/status/2115488769306673267. Cognition scrive che Mercor ha superato i 2 miliardi di fatturato annuo ricorrente: numero loro, non verificato in modo indipendente. Se ti chiedono: tolto dalla frase per stare nei tempi.

### Slide 19: Demo, cosa stiamo per vedere
**Tempo:** 0:45, a fine slide minuto 24:45 su 24:45, orario previsto 19:34

Basta slide. Adesso passiamo alla demo dal vivo, su un caso reale e non su un'app di esempio.

Guardate tre cose: come pianifica, come lavora, come verifica. E se si rompe qualcosa, lo vedete con me. Anzi, se si rompe è la parte più utile della serata.

Mai tagliare. Ponte neutro: qui cambi schermo e apri la presentazione separata della demo. Il materiale della demo NON sta in questo deck.

### Slide Q: Scansiona e partecipa (QR estrazione)
**Tempo:** 0:30, fuori dal talk

Prima di passare alle domande: ecco il QR. Scansionatelo, mettete il nome, e siete dentro all'estrazione delle 3 licenze. Una sola iscrizione a testa, il tool se ne accorge. Almeno spero, l'ha scritto Devin.

E visto che stasera parliamo di verifica: il tool è stato costruito da Devin, con i suoi test. Se volete, alla pizza vi faccio vedere la PR.

Quando: alla fine della demo (circa 20:00), poi lascialo sullo schermo durante la Q&A e rimettilo prima dell'estrazione. Per inserire il QR: salva il PNG come assets/qr-estrazione.png e scrivi l'URL nel file HTML al posto di [URL breve da inserire]. [PLACEHOLDER: link alla sessione o alla PR del tool di estrazione]

### Slide 20: Non è molto, ma è un lavoro onesto
**Tempo:** 5:00, fuori dal talk

Ok, il momento che stavate aspettando, o almeno il motivo per cui alcuni di voi sono ancora qui.

Abbiamo 3 licenze Devin da 200 dollari. Tre. Non trenta, non 'una per tutti'. Tre.

*[mostri il meme]*

Lo so. Non è molto, ma è un lavoro onesto.

Le regole sono semplici: estraggo un nome alla volta, se il nome che esce è in sala alza la mano e vince. Se non è in sala, si estrae di nuovo. Non vale gridare 'è andato in bagno'.

E ricordatevi chi ha scritto il software dell'estrazione. Se esce tre volte lo stesso nome, abbiamo un bug report per la prossima demo.

*[estrazione 1, 2, 3]* Poi passi allo schermo del tool di estrazione.

Complimenti ai vincitori. Per tutti gli altri: c'è il piano gratuito, e c'è la pizza. Che è comunque un ottimo premio.

Dopo l'estrazione: Grazie a tutti, ci vediamo al prossimo. Ora pizza e networking. E chi voleva sapere la storia di Claude e ChatGPT, sa dove trovarmi.

20:35-20:40. Il vincitore deve essere in sala; se non risponde entro 10 secondi, si ri-estrae. Annota subito nome e contatto dei 3 vincitori.

## 6. Tutti i link e le fonti

### Post su X usati nelle slide
Letti tramite https://api.fxtwitter.com/<utente>/status/<id> e l'embed pubblico di X (nessuna chiamata all'API di X).

- [S44] Cognition, "Introducing Devin" (12 mar 2024), slide 4: https://x.com/cognition/status/1767548763134964000
- [S29] Hamel Husain, tweet originale (17 gen 2025), slide 6: https://x.com/HamelHusain/status/1880129024737104118
- [S29] Hamel Husain, quote-tweet "It actually works now" (2 mag 2026 ora di Roma), slide 6: https://x.com/HamelHusain/status/2050363550020055290
- [S27] Theo, "What is a 'harness'?" (23 ott 2026), slide 7: https://x.com/theo/status/2113424203345265053
- [S43] Cognition, "You can use any personal ChatGPT plan with Devin" (9 ott 2026), slide 11: https://x.com/cognition/status/2108692010056188048
- [S41] Devin (@devindevelopers), video sul ciclo di vita (23 ott 2026), slide 8, 12, 15: https://x.com/devindevelopers/status/2113444391146889440
- [S42] Cognition, "the new Devin Security" (26 ott 2026, video con Alex Stamos), slide 16: https://x.com/cognition/status/2114741368627335379
- [S28] Cognition su Mercor (28 ott 2026), slide 18: https://x.com/cognition/status/2115488769306673267

### Template dei meme (imgflip)

- This Is Fine, slide 5: https://i.imgflip.com/wxica.jpg
- Is This A Pigeon, slide 7: https://i.imgflip.com/1o00in.jpg
- Spider Man Triple, slide 9: https://i.imgflip.com/3eqjd8.jpg
- Drake Hotline Bling, slide 10: https://i.imgflip.com/30b1gx.jpg
- Two Buttons, slide 17: https://i.imgflip.com/1g8my4.jpg

### Fonti S1-S44 (dal deck del 29 ottobre, numerazione condivisa con `docs/talk-e-qa.md`)

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
- [S41] Devin (@devindevelopers), video "How Devin Covers Every Stage of the Software Lifecycle" (23 ott 2026): https://x.com/devindevelopers/status/2113444391146889440
- [S42] Cognition, "Introducing the new Devin Security" (26 ott 2026): https://x.com/cognition/status/2114741368627335379
- [S43] Cognition, "You can use any personal ChatGPT plan with Devin" (9 ott 2026): https://x.com/cognition/status/2108692010056188048
- [S44] Cognition, post su X "Today we're excited to introduce Devin" (12 mar 2024): https://x.com/cognition/status/1767548763134964000

### Fonti nuove v3 (lette il 3 novembre 2026)

- [S45] Cognition, "Cognition Crosses $1B in Annualized Revenue Run Rate" (25 set 2026): https://cognition.com/blog/1b-run-rate
- [S46] Devin Docs, "DeepWiki MCP": https://docs.devin.ai/work-with-devin/deepwiki-mcp
- [S47] Devin blog, "Hierarchical budgets" (2 nov 2026): https://devin.ai/blog/hierarchical-budgets ; doc: https://docs.devin.ai/enterprise/features/usage-policies
- [S48] Devin Docs, "Use your ChatGPT plan": https://docs.devin.ai/admin/billing/chatgpt ; blog "Sign in with ChatGPT" (29 set 2026): https://devin.ai/blog/sign-in-with-chatgpt
- [S49] Cognition, "Devin Fusion: Frontier Performance at 60% Lower Cost" (29 giu 2026): https://cognition.com/blog/devin-fusion ; "Introducing Fusion in Devin Desktop & CLI" (11 set 2026): https://cognition.com/blog/local-fusion
- [S50] Cognition, FrontierCode leaderboard e metodologia (2.0 del 27 ott 2026): https://cognition.com/frontiercode ; https://cognition.com/blog/frontier-code-2.0
- [S51] Devin Docs, "Fusion" (CLI): https://docs.devin.ai/cli/fusion
- [S52] Devin Docs, release notes 2026: https://docs.devin.ai/release-notes/2026
- [S53] Devin Docs, "Environment" e "Blueprints": https://docs.devin.ai/onboard-devin/environment ; https://docs.devin.ai/onboard-devin/environment/blueprints
- [S54] Devin Docs, "Devin CLI" e "Handoff": https://docs.devin.ai/work-with-devin/devin-cli ; https://docs.devin.ai/cli/handoff
- [S55] Devin Docs, "Memory": https://docs.devin.ai/product-guides/memory ; blog "Memory and dreaming": https://devin.ai/blog/memory-and-dreaming
- [S56] Devin Docs, "Devin Oncall": https://docs.devin.ai/product-guides/devin-oncall
- [S57] Devin Docs, "Data Analyst": https://docs.devin.ai/work-with-devin/data-analyst
- [S58] Devin Docs, API overview e Devin MCP: https://docs.devin.ai/api-reference/overview ; https://docs.devin.ai/work-with-devin/devin-mcp
- [S59] Devin Docs, "Devin Security 2.0": https://docs.devin.ai/work-with-devin/security-2-0 ; blog Cognition (26 ott 2026): https://cognition.com/blog/devin-security
- [S60] Cognition, "Corridor is Joining Cognition" (28 ott 2026): https://cognition.com/blog/corridor-joining-cognition
- [S61] GitHub Docs, "About Copilot cloud agent": https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent (dal documento di studio, F87)
- Documento di studio completo (93 fonti verificate il 3 nov 2026): `/workspace/devin-talk/devin-studio-completo.md` sul box.
- Slide 2: linee guida del programma ambassador Devin, punto 4 (documento del programma, screenshot fornito da Bogdan; non pubblico).

## 7. Cartella risorse (assets/)

| File | Cos'è | Fonte | Slide |
|---|---|---|---|
| `avatar-cognition.jpg` | Avatar @cognition per la card Mercor | fxtwitter, post https://x.com/cognition/status/2115488769306673267 | 18 |
| `avatar-theo.jpg` | Avatar @theo per la card sull'harness | fxtwitter, post https://x.com/theo/status/2113424203345265053 | 7 |
| `chatgpt-plan-toggle.jpg` | Fotogramma: interruttore "Use your ChatGPT plan" | video del post https://x.com/cognition/status/2108692010056188048 | 11 |
| `fonts/inter-latin.woff2` | Font Inter | https://fonts.google.com/specimen/Inter | tutte |
| `fonts/jetbrainsmono-latin.woff2` | Font JetBrains Mono | https://fonts.google.com/specimen/JetBrains+Mono | tutte |
| `lifecycle-fusion.jpg` | Fotogramma: schema Fusion | video del post https://x.com/devindevelopers/status/2113444391146889440 (circa 1:59) | 12 |
| `lifecycle-stages.jpg` | Fotogramma: le 7 fasi (non più usato, slide tagliata) | video del post https://x.com/devindevelopers/status/2113444391146889440 | nessuna |
| `lifecycle-tested.jpg` | Fotogramma: "How it was tested" (non più usato, slide tagliata) | video del post https://x.com/devindevelopers/status/2113444391146889440 | nessuna |
| `meme-drake.jpg` | Template Drake | https://i.imgflip.com/30b1gx.jpg | 10 |
| `meme-lavoro-onesto.png` | Meme "Non è molto, ma è un lavoro onesto" | file fornito da Bogdan | 20 |
| `meme-pigeon.jpg` | Template Is This A Pigeon | https://i.imgflip.com/1o00in.jpg | 7 |
| `meme-spiderman3.jpg` | Template Spider-Man triplo | https://i.imgflip.com/3eqjd8.jpg | 9 |
| `meme-thisisfine.jpg` | Template This Is Fine | https://i.imgflip.com/wxica.jpg | 5 |
| `meme-twobuttons.jpg` | Template Two Buttons | https://i.imgflip.com/1g8my4.jpg | 17 |
| `tweet-devin-security.png` | Screenshot del post Devin Security | https://x.com/cognition/status/2114741368627335379 | 16 |
| `tweet-hamel-quote.png` | Screenshot del quote-tweet di Hamel Husain | https://x.com/HamelHusain/status/2050363550020055290 | 6 |
| `tweet-introducing-devin-2024.png` | Screenshot del post "Introducing Devin" 2024 | https://x.com/cognition/status/1767548763134964000 | 4 |
| `bogdan.jpg` | **da aggiungere**: la tua foto | tua | 1 |
| `qr-estrazione.png` | **da aggiungere**: QR del tool dell'estrazione | da generare | Q |

## 8. Come sostituire i placeholder

- **Foto (slide 1):** salva una foto quadrata (almeno 600x600) come `assets/bogdan.jpg`. Se il file non c'è, la slide resta senza foto.
- **QR (slide Q):** salva il QR come `assets/qr-estrazione.png` (PNG quadrato, sfondo bianco).
- **URL breve (slide Q):** apri `devin-trento-slides.html` con un editor di testo, cerca `[URL breve da inserire]` e scrivi l'URL.
- **Link della PR del tool dell'estrazione (note slide Q):** cerca `[PLACEHOLDER: link alla sessione o alla PR del tool di estrazione]`.
- La slide 19 non ha più segnaposto: è un ponte neutro alla demo.
- Modifiche più grandi: sorgente in `/workspace/devin-talk/v3/build-main/slides_content.py` sul box; `python3 build.py && python3 master.py` rigenerano HTML e master.

## 9. Comandi da tastiera

| Tasto | Cosa fa |
|---|---|
| Freccia destra, Spazio, PagGiù, clic | slide successiva |
| Freccia sinistra, PagSu, Backspace, clic nel quarto sinistro, tasto destro | slide precedente |
| Home / Fine | prima / ultima slide |
| Q | vai alla slide QR |
| F | schermo intero |
| N | note sotto la slide (attenzione: le vede anche il pubblico se lo schermo è duplicato) |
| S (o P) | presenter view in una finestra separata: note, prossima slide, timer, minuto obiettivo a fine slide. Consenti i popup per il file. |
| T | mostra il timer e lo avvia; premuto di nuovo mette in pausa / riprende. Obiettivo 24:45, diventa rosso quando lo superi |
| R | azzera il timer |
| H | aiuto con l'elenco dei comandi |

Uso consigliato con il proiettore: Windows + P, "Estendi". Apri l'HTML in Chrome o Edge, premi S, trascina la finestra della presentazione sul proiettore e premi F; la presenter view resta sul tuo portatile. Indirizzo `#N` alla fine dell'URL per aprire direttamente la slide N.

## 10. Estrazione e checklist pre-evento

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

Aggiornamento v3: il QR va sullo schermo a fine demo (circa 20:00) e resta durante la Q&A; l'estrazione resta alle 20:35 (slide 20).

**DA CHIEDERE A NADER:** chi fornisce le 3 licenze; cosa sono esattamente ("licenza da 200 $" = un mese di Max? crediti?); come si consegnano; durata e scadenza; come Cognition gestisce di solito i giveaway ai meetup in Italia (DPR 430/2001).

**Kit da portare**
- [ ] Portatile carico + alimentatore
- [ ] Adattatore HDMI e USB-C (anche un secondo di riserva), cavo HDMI
- [ ] Ciabatta / prolunga
- [ ] Telefono con hotspot pronto (backup del Wi-Fi di Impact Hub)
- [ ] Timer o telefono in vista (oltre al timer T della presentazione)
- [ ] QR del check-in Luma stampato all'ingresso
- [ ] Nametag e pennarelli
- [ ] Sticker
- [ ] Piano B estrazione: bigliettini e un cappello (o lista iscritti esportata)

**Presentazione**
- [ ] Copia la cartella `devin-trento-slides` sul PC (non aprirla dallo zip) e aprila in Chrome o Edge
- [ ] Prova la presenter view (tasto S): consenti i popup per il file la prima volta
- [ ] Prova F (schermo intero) sul proiettore e la risoluzione via HDMI
- [ ] Prova T (timer) e R (azzera) prima di iniziare
- [ ] Inseriti `assets/bogdan.jpg`, `assets/qr-estrazione.png`, URL breve
- [ ] Cronometrato il talk almeno una volta (obiettivo 24:45)
- [ ] Aperta anche `tuttocalcolato-demo/tuttocalcolato-demo.html` in una seconda finestra, pronta per la demo

**Demo**
- [ ] Video di backup della demo completa registrato (stesso task, con il video di test di Devin)
- [ ] 2 task pronti: uno sicuro (già provato almeno 2 volte) e uno ambizioso
- [ ] Repo collegato, blueprint/ambiente configurato, secrets salvati, browser di Devin già autenticato se serve
- [ ] Testing pre-approvato nelle preferenze
- [ ] Quota controllata la mattina stessa
- [ ] Status page di Devin controllata (indirizzo da confermare)
- [ ] Niente secrets, email o dati di clienti visibili; altre tab chiuse
- [ ] Tool dell'estrazione testato da 3 telefoni (iPhone, Android), Wi-Fi e 4G/5G, database svuotato

Dettagli e cosa fare se qualcosa va storto: `docs/talk-e-qa.md`, sezione 3.

## 11. Q&A: risposte aggiornate al 3 novembre
Sostituiscono le risposte di `docs/talk-e-qa.md` dove diverse.

- **Il Free cosa include davvero?** Quota leggera, modelli limitati, SWE-2 in versione Slow. Secondo la pagina prezzi niente Devin Cloud, Ask Devin né API: per l'agente autonomo serve almeno Pro. La doc self-serve dice ancora che il Free include DeepWiki e Devin Review: da confermare. [S15][S16]
- **Quante sessioni in parallelo?** La tabella prezzi riporta Up to 10, Up to 10, Unlimited, Unlimited: con ogni probabilità 10 su Pro e Max, illimitate su Teams ed Enterprise. Abbinamento da confermare. [S15][S31]
- **SWE-2 è gratis?** La pagina prezzi dice SWE-2 gratis su Pro e in versione "Slow" sul Free. Il banner dice "SWE-2, our latest model, is now available". [S15]
- **Posso mettere un tetto di spesa?** Self-serve: l'admin imposta soglie di ricarica automatica e un limite di spesa di default per sessione (Settings > Usage & limits); nelle Automations c'è un limite di consumo per sessione. Enterprise: usage policies e, dal 2 novembre, budget gerarchici. [S16][S37][S47]
- **Usano il mio codice per addestrare i modelli?** Di default sì, sui piani non Enterprise. Sui piani a pagamento si disattiva in Data Controls (nei Teams solo l'admin); a quel punto vale anche la zero data retention con i provider. Enterprise: mai senza consenso scritto. [S22]
- **Skills, Playbooks e Knowledge?** Oggi è tutto Skills: file SKILL.md in `.agents/skills/<nome>/`, standard aperto. Knowledge convertita in Skills dal 18 set 2026; Playbooks migrati dal 23 ott, i nuovi account dal 24 ott non li hanno; `!macro` funziona ancora. [S34][S35][S52]
- **Cos'è FrontierCode?** Il benchmark di Cognition che misura se il maintainer farebbe merge della PR. Task scritti da oltre 20 maintainer open source; 2.0 dal 27 ott 2026 con 132 task. È loro, ma gira anche su Artificial Analysis. [S50]
- **Devin Oncall è a pagamento a parte?** Disponibile per tutte le organizzazioni dal 19 ottobre (release notes). Prezzo specifico: da confermare; consuma come le altre sessioni. [S52][S56]
- **Devin Review commenta in italiano?** Secondo la doc no: l'italiano non è tra le lingue dei commenti. [S24]
- **Cosa succede quando finisce il budget?** Enterprise: al limite dell'organizzazione il nuovo lavoro viene bloccato. Automations: se la singola sessione raggiunge il suo limite, quella sessione si ferma. Non dire che 'la sessione si ferma' in generale. [S47][S37]
- **E Copilot?** Dal 28 ott 2026 GitHub Copilot ha 'Copilot in the cloud' sui piani a pagamento, con sandbox cloud, GitHub Actions o ambiente remoto. [S61]
- **Cosa c'è dopo?** "A novembre arrivano novità, seguite il blog." Nient'altro.

## 12. Punti DA CONFERMARE

1. Free plan: la pagina prezzi (3 nov) dice niente Devin Cloud, Ask Devin e API; la doc self-serve dice che il Free include DeepWiki e Devin Review. Quale delle due è aggiornata.
2. Sessioni macOS e Windows: su quali piani sono disponibili.
3. Crediti Devin Security: idoneità per team piccoli, self-serve o in Europa.
4. Prezzo o consumo specifico di Devin Oncall e di Devin Security sui piani self-serve.
5. Numeri su Mercor (2 miliardi di ARR): sono di Cognition.
6. "Fino a -60%" di Fusion: dato e benchmark di Cognition (FrontierCode).
7. Indirizzo della status page di Devin.
8. Licenze dell'estrazione: chi le fornisce, cosa includono, come si consegnano (DA CHIEDERE A NADER).
9. DPR 430/2001: se l'estrazione è un concorso a premio (vedi sezione 10).
10. Orario del networking su Luma e Telegram (20:30 diventa 20:40).
11. Data del blog Devin Security 2.0: devin.ai/blog/devin-security-2 e cognition.com/blog/devin-security letti il 3 nov riportano 26 ott 2026; il documento di studio indica 21 ott. In slide: 26 ott.
12. Sessioni in parallelo per piano: abbinamento dei valori della tabella prezzi.
13. Testo della slide 2: fonte interna del programma ambassador; verifica che la traduzione italiana ti suoni bene.
