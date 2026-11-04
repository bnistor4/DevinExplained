# Devin AI Trento #1: "Devin è cambiato molto"
## Appunti per Bogdan: talk, Q&A, demo

Mercoledì 4 novembre 2026, Impact Hub Trento, Corallo. Luma: https://luma.com/sle4gigc
Slot: 19:10-19:35 talk, 19:35-20:00 demo live, 20:00-20:15 Q&A, 20:15-20:35 due lightning talk, 20:35-20:40 estrazione di 3 licenze, poi pizza e networking. Timeline completa e checklist estrazione in `talk-v2.md`.
Ricerca aggiornata al 29 ottobre 2026. Ogni fatto su Devin ha una fonte (numerata [S#] in fondo). Quello che non ho potuto confermare è marcato **DA VERIFICARE**.

Regola d'oro per la serata: tu non devi essere "l'esperto di Devin". Sei un developer che lo ha provato su un progetto vero e racconta cosa ha visto. Quando non sai, lo dici e apri la doc insieme al pubblico. È più credibile di qualsiasi risposta inventata.

---

## 0. Il messaggio in una frase

> "Nel 2024 Devin era una demo virale da 500 dollari al mese. Oggi è una famiglia di strumenti (cloud, desktop, CLI, review) che parte da gratis, e la parte interessante non è che scrive codice, ma che verifica il proprio lavoro. Stasera ve lo faccio vedere, con i suoi limiti."

Tre idee da far uscire dalla sala:
1. Prezzo e forma del prodotto sono cambiati radicalmente (da $500/mese a Free / $20 / $200 / Teams).
2. "Windsurf" oggi si chiama Devin Desktop: stessa azienda, stesso IDE, nome nuovo. Ma Devin non è "solo" Windsurf.
3. Il valore sta nel ciclo completo: task chiaro, lavoro in una macchina sua, test end-to-end, PR da revisionare. Il codice lo rivedi tu.

---

## 1. Talk, 25 minuti

**Lo script aggiornato è in `talk-v2.md`** (16 slide, testo parlato nella voce di Bogdan, meme, spiegazioni terra terra delle feature, tempi e cosa tagliare se sei in ritardo). La versione precedente dell'outline è stata sostituita da quel file.

---

## 2. Q&A: domande probabili e risposte da dire ad alta voce

Formato: **D** domanda, **R** risposta breve e onesta, **Se non sai** frase di riserva.

### A. Prezzi e piani
1. **D: Quanto costa oggi?**
   R: C'è un piano Free, poi Pro a 20 dollari al mese, Max a 200, Teams con base di 80 al mese e 40 per ogni sviluppatore con seat completo, e poi Enterprise su misura. [S15][S16]
   Se non sai: "I prezzi cambiano spesso, apriamo devin.ai/pricing adesso e lo leggiamo insieme."
2. **D: Il Free cosa include davvero?**
   R: Una quota leggera, modelli limitati, completamenti Tab e modifiche inline illimitate nel Desktop; secondo la doc anche accesso a Devin Review e DeepWiki. Quanto Devin Cloud si riesce a usare col Free non l'ho verificato. [S15][S16] **DA VERIFICARE**
   Se non sai: "Provatelo, è gratis, e vedete subito dove finisce la quota."
3. **D: Cosa succede quando finisco la quota?**
   R: Sui piani a pagamento puoi comprare uso extra, che si paga "a prezzi API" in dollari. La quota si ricarica ogni giorno e ogni settimana. [S15][S7]
   Se non sai: "Il dettaglio è nella pagina billing della doc, ve la linko nel canale Telegram."
4. **D: Pro e Max sono condivisibili con il mio socio?**
   R: No, sono piani individuali. Per più persone serve Teams. [S16]
   Se non sai: rimanda alla pagina "Self-serve plans" della doc.
5. **D: Perché prima costava 500 e ora 20? Hanno peggiorato il prodotto?**
   R: Hanno cambiato modello di business: prima c'era un solo piano team a 500, ora ci sono piani individuali con quota. Il prezzo d'ingresso è sceso, ma l'uso pesante si paga. Cognition stessa ha scritto che per alcuni utenti leggeri il cambio è stato un peggioramento. [S7]
   Se non sai: "Il loro post del 14 aprile 2026 spiega le ragioni, è onesto anche sui lati negativi."

### B. ACU e costi reali
6. **D: Cosa sono le ACU?**
   R: Agent Compute Unit, l'unità con cui Devin misurava il lavoro (macchina, modello, rete). Nel 2025 un ACU era circa 15 minuti di lavoro attivo. Oggi le ACU restano solo per i contratti Enterprise; sui piani self-serve si ragiona in quota e dollari. [S5][S7]
   Se non sai: "Per voi che partite da Pro, non le vedrete proprio."
7. **D: Quanto mi costa un task tipico?**
   R: Non c'è un numero fisso: dipende dal modello, da quanto è grande il task e da quanto ragionamento serve. Per risparmiare la doc consiglia prompt precisi e modelli più piccoli per le cose di routine. [S15]
   Se non sai: "Vi dico quanto ha consumato la demo di stasera." [PLACEHOLDER: annota il consumo della demo]
8. **D: Si può mettere un tetto di spesa?**
   R: Su Enterprise sì, ci sono limiti di ACU per utente e per organizzazione. [S21] Per i piani self-serve non l'ho verificato. **DA VERIFICARE**
   Se non sai: "Guardiamo nelle impostazioni di billing dopo la serata."

### C. Come funziona
9. **D: Gira sul mio computer o nel cloud?**
   R: Entrambi. Devin Cloud lavora in una sua macchina virtuale; Devin Desktop e Devin CLI girano in locale; con la CLI puoi passare un task al cloud con /handoff. [S8][S17]
   Se non sai: "La differenza la vedete nella demo: io uso la versione cloud."
10. **D: Quale modello usa?**
    R: Non uno solo. Cognition dice di scegliere e combinare i modelli migliori, compresi i suoi. Il loro modello più recente è SWE-2, uscito a settembre 2026. Nel piano Pro ci sono anche modelli di OpenAI, Claude, Gemini, SpaceXAI e open source. [S10][S11][S15]
    Se non sai: "Nella sessione si vede quale modello sta usando, ve lo mostro."
11. **D: Come fa a testare l'app?**
    R: Ha un desktop vero con browser: avvia l'app, clicca, compila form, fa screenshot e registra un video del test, che ti manda come prova. [S18][S19]
    Se non sai: "Lo vedete tra 5 minuti nella demo."
12. **D: Come gli insegno le regole del mio progetto?**
    R: Con file come AGENTS.md nel repo e con le Skills. Legge anche file di regole di altri tool come .cursorrules, CLAUDE.md, .windsurf. Le vecchie funzioni "Knowledge" e "Playbooks" stanno confluendo nelle Skills (dal 24 ottobre 2026 i nuovi account partono senza Playbooks). [S23][S22][S34][S35]
    Se non sai: "Cercate 'AGENTS.md' nella doc Devin."
13. **D: Può lavorare a più task in parallelo?**
    R: Sì, puoi lanciare più sessioni in parallelo; Pro e Max hanno un limite di sessioni concorrenti indicato in pricing come "fino a 10". [S15][S20] **DA VERIFICARE** (la tabella pricing non è chiarissima su quale piano abbia quale limite)
    Se non sai: rimanda alla tabella "Compare plans".

### D. Devin vs Cursor, Claude Code, Copilot, Windsurf
14. **D: Quindi Devin è Windsurf?**
    R: Windsurf è stato comprato da Cognition a luglio 2025 e a giugno 2026 è stato rinominato Devin Desktop. Quindi l'IDE che era Windsurf oggi fa parte di Devin, ma Devin include anche l'agente cloud, la CLI e la review. [S6][S8]
    Se non sai: non serve, questa la sai.
15. **D: Meglio Devin o Cursor / Claude Code?**
    R: Onestamente dipende dal flusso. Devin è nato come agente autonomo in cloud che lavora da solo e torna con una PR testata; molti altri strumenti partono dall'editor o dal terminale con te accanto. Oggi i confini si stanno avvicinando. Non ho fatto un confronto rigoroso e non vi do un vincitore.
    Se non sai: "Chi qui usa Claude Code o Cursor ogni giorno? Raccontaci tu come ti trovi." (Ribalta la domanda alla sala, è un meetup.)
16. **D: E rispetto a GitHub Copilot?**
    R: Non ho verificato stasera le funzioni attuali di Copilot, quindi non vi do un confronto inventato. Quello che posso dire è come funziona Devin. **DA VERIFICARE** se vuoi un confronto puntuale.
    Se non sai: "Mettiamolo come tema per un prossimo meetup."
17. **D: Posso usare Claude Code e poi passare il lavoro a Devin?**
    R: La doc ha una pagina dedicata a fare handoff a Devin Cloud da Devin CLI, Claude Code, Codex o altri agenti. E Devin Desktop supporta ACP, quindi altri agenti compatibili ci girano dentro. [S21][S9]
    Se non sai: cita la pagina "Hand off to Devin Cloud from Any Agent".

### E. Sicurezza, privacy, codice aziendale
18. **D: Usano il mio codice per addestrare i modelli?**
    R: Dipende dal piano. Sui piani a pagamento non Enterprise, di default possono usarlo, ma puoi fare opt-out dalle Data Controls e da lì scatta anche la zero data retention con i provider dei modelli. Su Teams l'opt-out lo fa solo l'admin. Su Enterprise mai senza consenso scritto. [S22]
    Se non sai: "È nella pagina 'Security at Cognition' della doc, leggetela prima di collegare codice aziendale."
19. **D: Il codice generato di chi è?**
    R: Secondo Cognition l'output è proprietà intellettuale dell'utente, con l'eccezione di usarlo per addestrare un prodotto concorrente. [S22]
    Se non sai: "Per un contratto vero, fatelo leggere a un legale."
20. **D: Sono certificati?**
    R: SOC 2 Type II da settembre 2024, secondo la loro doc. [S22] GDPR e residenza dati in UE: non l'ho verificato. **DA VERIFICARE**
    Se non sai: "C'è un Trust Center, lo trovate dalla doc security."
21. **D: Posso farlo girare sui miei server?**
    R: Per le aziende ci sono opzioni: deployment dedicato, VPC, e "Outposts" per far girare le sessioni su infrastruttura propria. [S15][S21]
    Se non sai: "È roba Enterprise, si parla con il loro team."
22. **D: Come gli do le password e le API key?**
    R: Con la funzione Secrets nelle impostazioni, non incollandole in chat. [S22]
    Se non sai: questa la sai.

### F. Limiti e quando non usarlo
23. **D: Quando NON lo useresti?**
    R: Task vaghi senza criterio di successo, cose molto grandi non spezzate, decisioni di architettura o di prodotto. La loro regola è "se ci metti più di tre ore, dividi". [S20]
    Se non sai: aggiungi la tua esperienza. [PLACEHOLDER]
24. **D: Sbaglia?**
    R: Sì. La doc di Cognition dice che può avere allucinazioni, introdurre bug o suggerire codice insicuro. Per questo PR, review e branch protection. [S22]
    Se non sai: "E lo vedrete forse anche stasera."
25. **D: Ma quel test di Answer.AI dove falliva quasi tutto?**
    R: È vero, inizio 2025: 3 successi su 20. Era il Devin di allora. Da quel momento sono cambiati modelli, prezzo e prodotto, ma il punto loro resta valido: bisogna capire quali task dargli. [S3]
    Se non sai: "Non ho dati indipendenti recenti dello stesso tipo." **DA VERIFICARE** se esistono valutazioni indipendenti del 2026.

### G. Workflow di team, PR, review
26. **D: Come si inserisce nel nostro flusso?**
    R: Lo tagghi in Slack o Teams su un thread di bug, lo colleghi a Linear o Jira, e lui apre PR sul tuo Git. Con le Automations può partire da eventi (es. Slack, GitHub, Linear) o a orario. [S17][S20][S10]
    Se non sai: "Il post 'How does Devin fit into my existing SDLC' della doc è un buon punto di partenza."
27. **D: Chi fa la review?**
    R: Un umano, sempre. Esiste Devin Review che aiuta a leggere PR grandi e trova bug, e con Auto-Fix risponde ai commenti e ai fallimenti di CI. Ma il merge lo decidi tu. [S20][S24]
    Se non sai: questa la sai.
28. **D: Che Git supporta?**
    R: GitHub, GitLab, Bitbucket, Azure DevOps; su Enterprise anche provider Git custom. [S15][S24][S25]

### H. Lingue e stack
29. **D: Posso scrivergli in italiano?**
    R: Io gli parlo [PLACEHOLDER: italiano/inglese]. Che capisca prompt in italiano è probabile visto che usa modelli moderni, ma non ho una dichiarazione ufficiale. L'interfaccia per ora propone giapponese, spagnolo e portoghese, non italiano. [S25] **DA VERIFICARE**
    Se non sai: "Proviamolo dal vivo, scrivetemi un prompt in italiano."
30. **D: Che linguaggi e stack supporta?**
    R: Lavora in una macchina vera, quindi in principio tutto ciò che si installa lì. La doc ha guide per macOS con Xcode e iOS Simulator, Android emulator, VM Windows. [S18][S21] Non ho una lista ufficiale di linguaggi "supportati". **DA VERIFICARE**
    Se non sai: "Ditemi il vostro stack, dopo lo proviamo insieme."
31. **D: Funziona su un monolite legacy enorme?**
    R: La doc cita migrazioni e modernizzazioni come caso d'uso forte, e Cognition racconta clienti che lo usano per legacy. Ma conviene indicizzare il repo (DeepWiki/Ask Devin) e spezzare il lavoro. [S17][S20][S26]

### I. Lavoro e futuro dei developer
32. **D: Ci ruberà il lavoro?**
    R: Non lo so, e diffido di chi dice di saperlo. Quello che vedo è che il lavoro si sposta verso scrivere specifiche chiare, verificare e fare review. Anche Cognition descrive il futuro come "gestire squadre di agenti". [S8] Il giudizio resta tuo.
    Se non sai: "Questa domanda è perfetta per il networking con la pizza."
33. **D: Uno studente dovrebbe usarlo o imparare a programmare prima?**
    R: Opinione personale: imparare le basi resta fondamentale, perché per capire se la PR di un agente è giusta devi saper leggere il codice. L'agente amplifica quello che sai.

### J. Domande scettiche e trappola
34. **D: Sei pagato da Cognition?**
    R: [PLACEHOLDER: rispondi in modo trasparente sulla tua situazione reale, es. supporto per l'evento, pizza, nessun compenso]. Il meetup è gratuito e non vendo niente.
35. **D: La demo è truccata/preparata?**
    R: L'app è preparata, sì, come ogni demo. Il task lo lancio dal vivo e vedete la sessione intera, anche se fallisce. E ho una registrazione di backup se la rete ci tradisce: ve lo dico se la uso.
36. **D: 48 miliardi di valutazione, è una bolla?**
    R: Non commento valutazioni. I numeri pubblici: Series E da oltre 2 miliardi a settembre 2026, e revenue run-rate dichiarata vicina ai 900 milioni. [S10] Se sia giusto, decidetelo voi.
37. **D: I benchmark di SWE-2 non sono tutti fatti da loro?**
    R: Sì, i numeri di SWE-2 sono pubblicati da Cognition stessa. Per questo stasera vi mostro un uso reale invece delle tabelle. [S11]


### K. Domande personali e curiosità dalla serata
38. **D: Perché non puoi usare Claude e ChatGPT?**
    R: "Ve lo racconto al networking, davanti a una birra. Promesso." (Non dare il motivo sul palco, è voluto: è il teaser della slide 1.)
    Se insistono: "È una storia lunga e stasera il protagonista è Devin. Dopo, alla pizza, tutta la verità."
39. **D: Quindi è vero che "it actually works now"?**
    R: Quella frase è di Hamel Husain, che a gennaio 2025 aveva fatto il test più duro su Devin; poi ha scritto che quel post era superato. [S29] Io vi dico: per i task chiari e verificabili, nella mia esperienza [PLACEHOLDER: la tua esperienza in una frase]. Per quelli vaghi, no.
    Se non sai: "Giudicate voi dalla demo."
40. **D: Che differenza c'è tra Skills, Playbooks e Knowledge?**
    R: Sono tre versioni della stessa idea: insegnare a Devin come si lavora nel tuo progetto. Oggi la strada è Skills, file SKILL.md nel repo; Playbooks e Knowledge vengono migrati lì. [S34][S35][S23]

41. **D: Come funziona l'estrazione? Chi paga le licenze?**
    R: "3 licenze da 200 dollari, estrazione alle 20:35, si partecipa dal QR, una iscrizione a testa, bisogna essere in sala." Su chi le fornisce e come si ricevono: rispondi solo con quello che ti ha confermato Nader. [DA CHIEDERE A NADER]
    Se non sai: "I dettagli di consegna li mando ai vincitori direttamente, stasera mi segno i contatti."
42. **D: Il tool dell'estrazione l'ha fatto davvero Devin?**
    R: "Sì, ed è il motivo per cui l'ho testato con 30 iscrizioni finte prima di stasera." [PLACEHOLDER: link a PR o sessione]

### Come gestire le domande a cui non sai rispondere
- Ripeti la domanda ad alta voce (ti dà 5 secondi e la sentono tutti).
- Di' "Non lo so con certezza e non voglio inventare." È una frase forte, non debole.
- Tre vie d'uscita:
  1. **Apri la doc dal vivo**: docs.devin.ai ha una ricerca; per i prezzi devin.ai/pricing; per le novità docs.devin.ai/release-notes.
  2. **Chiedi alla sala**: "Qualcuno qui lo usa in azienda?"
  3. **Rimanda al canale**: "Me la segno e rispondo sul canale Telegram Devin AI Trento entro venerdì." Tieni un foglio o una nota sul telefono per segnarle.
- Se la domanda è un confronto con un competitor: non dare vincitori, descrivi Devin e passa la palla a chi usa l'altro tool.
- Se la domanda è aggressiva: ringrazia, riconosci la parte vera ("sì, nel 2024 era così"), rispondi con un fatto e una fonte, vai avanti.
- Tempo: la Q&A è 15 minuti. Massimo 2 minuti per risposta. Se una discussione si allunga: "Continuiamo durante la pizza."

---

## 3. Demo live: cosa può andare storto e piano B

### Prima della serata
- **Registra una sessione completa di backup** (stesso task, video intero più il video di test che produce Devin). Se lo usi, dillo al pubblico.
- **Prepara 2 task**: uno "sicuro" (piccolo, già provato almeno 2 volte) e uno "ambizioso". Parti dal sicuro.
- **Ambiente pronto**: repo collegato, environment/blueprint già configurato, secrets salvati, browser di Devin già autenticato se l'app richiede login. La doc dice che senza setup Devin perde tempo a installare dipendenze. [S19]
- **Pre-approva il testing** nelle preferenze, così non ti chiede conferma dal vivo. [S19]
- **Controlla la quota** la mattina stessa: non voglio che il piano finisca a metà demo. [PLACEHOLDER: piano usato e quota residua]
- **Status page**: controlla lo stato del servizio Devin prima di salire sul palco. (Indirizzo esatto della status page: **DA VERIFICARE**.)
- **Rete**: hotspot del telefono come backup del Wi-Fi di Impact Hub. Prova proiettore e risoluzione del browser.
- **Account**: niente secrets, email o dati di clienti visibili sullo schermo. Chiudi le altre tab.

### Cosa può andare storto e come reagire
| Problema | Cosa fai |
|---|---|
| Devin è lento (pianifica per minuti) | Previsto: mentre lavora, spiega cosa sta facendo mostrando il piano e lo shell. Tieni 2-3 punti da commentare (AGENTS.md, struttura dei test). |
| Il task non finisce in 25 minuti | Mostra la registrazione di backup dal punto in cui sei. Dichiaralo. |
| I test e2e falliscono | Ottimo materiale: fai vedere come Devin legge l'errore e riprova. Se non si sblocca in 3-4 minuti, passa al backup e commenta "ecco perché la review umana serve". |
| Devin chiede un secret o un login | Avevi preparato tutto, ma se succede: inseriscilo fuori schermo (spegni il proiettore un attimo). |
| Wi-Fi o servizio giù | Hotspot. Se è giù il servizio: backup video e trasforma il tempo in Q&A anticipata. |
| Quota finita | Backup video. Poi è anche una risposta concreta alla domanda "quanto costa". |
| Devin fa qualcosa di sbagliato o strano | Non nasconderlo. "Questo è il momento più utile della serata." Commenta cosa avresti scritto diversamente nel prompt. |

### Scaletta demo suggerita (25 min)
- 0-3: mostra l'app e il repo. Cosa c'è, cosa manca.
- 3-6: scrivi il prompt dal vivo, con criterio di successo esplicito (es. "aggiungi X, scrivi test e2e, fai passare la CI, registra un video del test").
- 6-18: guarda Devin pianificare e lavorare. Commenta piano, shell, browser.
- 18-23: PR e video di test. Apri il diff e fai una mini code review vera davanti a tutti.
- 23-25: conclusione: "cosa ha fatto bene, cosa avrei controllato meglio, quanto è costato". [PLACEHOLDER: consumo]
- ultimi 30 secondi: QR dell'estrazione sullo schermo (slide Q in `talk-v2.md`). Se avanza un minuto, mostra la PR o la sessione Devin con cui hai costruito il tool dell'estrazione.
- Rischio extra: il tool dell'estrazione stesso. Testalo come la demo (vedi checklist estrazione in `talk-v2.md`), con piano B cartaceo.

---

## 4. Elenco DA VERIFICARE
1. Quanto Devin Cloud è incluso nel piano Free (la tabella pricing non è leggibile su questo punto).
2. Limiti di sessioni concorrenti per piano (pricing riporta "Up to 10" senza chiarire per quale piano).
3. SWE-2 "gratis" per i piani a pagamento: la pagina pricing dice "Free use of SWE-2" nel Pro; MarkTechPost scriveva "gratis fino al 10 ottobre 2026". Controlla la pagina pricing il giorno stesso.
4. Tetto di spesa / limiti di budget sui piani self-serve (verificato solo per Enterprise).
5. GDPR / residenza dati in UE.
6. Supporto ufficiale per prompt in italiano (l'interfaccia propone solo JA/ES/PT).
7. Lista ufficiale di linguaggi/stack supportati.
8. Valutazioni indipendenti recenti (2026) paragonabili al test Answer.AI.
9. Confronto puntuale con GitHub Copilot, Cursor, Claude Code (nessuna fonte aperta sui competitor).
10. Contenuto del video Mercor nel post di Cognition (letto solo il testo).
11. Indirizzo della status page di Devin.
12. Placeholder personali: app e task della demo, consumo della demo, risposta su eventuali rapporti con Cognition, tua esperienza in una frase (Q39).
13. Link diretto al quote-tweet "It actually works now" di Hamel Husain (DA TROVARE, vedi talk-v2.md).
14. Licenze dell'estrazione: chi le fornisce, cosa includono e come si consegnano (DA CHIEDERE A NADER). Applicabilità del DPR 430/2001 (vedi talk-v2.md).

---

## 5. Fonti (aperte il 29 ottobre 2026)
- [S1] Cognition, "Introducing Devin" (12 mar 2024) e SWE-bench technical report: https://cognition.com/blog/introducing-devin , https://cognition.com/blog/swe-bench-technical-report
- [S2] Cognition, "Devin is now generally available" (10 dic 2024): https://cognition.com/blog/devin-generally-available
- [S3] Answer.AI, "Thoughts On A Month With Devin" (8 gen 2025): https://www.answer.ai/posts/2025-01-08-devin.html
- [S4] Cognition, "Devin 2.0" (3 apr 2025): https://cognition.com/blog/devin-2
- [S5] TechCrunch, "Devin gets a new pay-as-you-go plan" (3 apr 2025): https://techcrunch.com/2025/04/03/devin-the-viral-coding-ai-agent-gets-a-new-pay-as-you-go-plan/
- [S6] Reuters / TechCrunch, acquisizione di Windsurf (14 lug 2025): https://www.reuters.com/legal/transactional/cognition-ai-buy-windsurf-doubling-down-ai-driven-coding-2025-07-14/ , https://techcrunch.com/2025/07/14/cognition-maker-of-the-ai-coding-agent-devin-acquires-windsurf/
- [S7] Cognition, "New self-serve plans for Devin" (14 apr 2026): https://cognition.com/blog/new-self-serve-plans-for-devin
- [S8] Devin Docs, "Devin Desktop FAQ": https://docs.devin.ai/desktop/devin-desktop-faq
- [S9] Cognition, "Introducing Devin Desktop" (2 giu 2026): https://cognition.com/blog/introducing-devin-desktop
- [S10] Cognition, "Do it all with Devin: Announcing our Series E" (8 set 2026): https://cognition.com/blog/series-e ; Reuters: https://www.reuters.com/technology/cognition-ai-raises-2-billion-48-billion-valuation-2026-09-08/
- [S11] Cognition, "Introducing SWE-2" (10 set 2026): https://cognition.com/blog/swe-2
- [S12] MarkTechPost su SWE-2 (12 set 2026): https://www.marktechpost.com/2026/09/12/cognition-releases-swe-2-a-kimi-k3-post-trained-coding-model-that-matches-fable-5-1-on-frontiercode-at-64-lower-cost/
- [S13] Devin blog, "Introducing Devin Oncall" (15 ott 2026): https://devin.ai/blog/introducing-devin-oncall
- [S14] Devin blog, "Devin Security 2.0" (26 ott 2026): https://devin.ai/blog/devin-security-2
- [S15] Pagina prezzi: https://devin.ai/pricing
- [S16] Devin Docs, "Self-serve plans": https://docs.devin.ai/admin/billing/self-serve
- [S17] Devin Docs, "Introducing Devin": https://docs.devin.ai/get-started/devin-intro
- [S18] Devin Docs, "Computer Use": https://docs.devin.ai/work-with-devin/computer-use
- [S19] Devin Docs, "Testing & Video Recordings": https://docs.devin.ai/work-with-devin/testing-and-recordings
- [S20] Devin Docs, "When to Use Devin": https://docs.devin.ai/essential-guidelines/when-to-use-devin
- [S21] Devin Docs, indice (Outposts, handoff, usage policies, macOS/Android/Windows, MCP): https://docs.devin.ai/llms.txt
- [S22] Devin Docs, "Security at Cognition": https://docs.devin.ai/admin/security
- [S23] Devin Docs, "Knowledge Onboarding" e "AGENTS.md": https://docs.devin.ai/onboard-devin/knowledge-onboarding
- [S24] Devin Docs, "Devin Review": https://docs.devin.ai/work-with-devin/devin-review
- [S25] Devin Docs, Release notes (23-28 ott 2026): https://docs.devin.ai/release-notes/overview
- [S26] Cognition, "Building in London" (22 ott 2026): https://cognition.com/blog/building-in-london
- [S27] Post di Theo, "What is a 'harness'?" (23 ott 2026): https://x.com/theo/status/2113424203345265053 (letto via https://api.fxtwitter.com/theo/status/2113424203345265053)
- [S28] Post di Cognition su Mercor (28 ott 2026): https://x.com/cognition/status/2115488769306673267 (letto via https://api.fxtwitter.com/cognition/status/2115488769306673267)
- [S29]-[S37]: vedi l'elenco fonti in `talk-v2.md` (Hamel Husain, Jeff Wang, Devin Docs su Usage, Ask Devin, DeepWiki, Skills, Playbooks, MCP, Automations).
- Evento: https://luma.com/sle4gigc
