# Modulo demo "Il caso TuttoCalcolato.it" (testi definitivi, lead, 4 nov 2026)

Fonti: istruzioni dell'Automation "Growth Engine" e report del run 2026-11-03 (PR tuttocalcolato#54) incollati dall'utente in chat.
Copia ALLA LETTERA. Non scrivere mai a schermo il nome del repo né i nomi dei secrets.

Modulo: id `ev-20261104-tuttocalcolato`, category 'events', icon 'Calculator' (se non esiste nel componente Icon usa 'TrendingUp'),
title "Il caso TuttoCalcolato.it", summary "La demo: crescita SEO con DataForSEO e Automation giornaliere", durationMin 6.
Va nel deck di default in moduleIds subito DOPO 'ev-20261104-demo' (prima di 'ev-20261104-estrazione').
La slide tc-06 è nascosta di default (pack.hiddenSlides: 'ev-20261104-tuttocalcolato/tc-06') finché l'utente non dà i numeri.

---

## tc-01 · title
- kicker: Demo · Il caso TuttoCalcolato.it
- title: Un sito di calcolatori che migliora ogni mattina
- subtitle: Ogni giorno un'Automation di Devin legge Search Console e DataForSEO, decide cosa sistemare e mi lascia una PR da rivedere.
- funAside: Il caffè non me lo fa ancora. Ci stiamo lavorando.
- notes:
  TuttoCalcolato.it è un mio progetto: calcolatori per tasse, stipendi, salute, sport. Stasera vi faccio vedere il processo che secondo me vale di più di tutta la serata.

  Non è un'app di esempio: è un sito vero, con traffico vero, e il lavoro SEO lo fa Devin tutti i giorni.

## tc-02 · story (con beats)
- kicker: Lo spoiler della serata
- title: DataForSEO + Automation giornaliera
- text: Un'Automation di Devin parte ogni mattina sul repository del sito e fa tutto il lavoro in una sola PR.
- beats:
  - Controllo | se la PR di ieri non è ancora mergiata si ferma: niente lavoro su dati vecchi
  - Livello 1 | dati da Search Console e DataForSEO: nuove keyword e searchTerms assegnati al calcolatore giusto
  - Livello 2 | fino a 10 work order: un articolo per il blog, FAQ e sezioni dove le query lo chiedono
  - Verifica e PR | tsc, lint, seo-score, poi una PR sola. Il merge lo faccio io.
- punchline: Il mio lavoro quotidiano sulla SEO? La review.
- source: Istruzioni dell'Automation Growth Engine
- image: nessuna (lontra)
- funAside: Devin lavora, io bevo il caffè. Divisione dei compiti onesta.
- notes:
  Le istruzioni sono un prompt solo, scritto una volta. Tre regole che contano:
  - se la PR del giorno prima non è mergiata, il run si ferma: così non lavora su dati vecchi e non crea conflitti;
  - le chiavi di Google e DataForSEO arrivano dai secrets di Devin, mai scritte in file, log o commit;
  - una PR sola al giorno, mai merge automatico.

  Livello 1 è lo script `growth:daily`: raccoglie le query da Search Console, le arricchisce con DataForSEO e propone i searchTerms. Devin controlla che ogni searchTerm sia finito sul calcolatore giusto, altrimenti lo annulla.

  Livello 2 sono i work order: ogni work order ha un brief con le fonti ammesse, i vincoli e i criteri di accettazione. Se una pagina ha almeno 3 query o priority sopra 20, non basta una FAQ: serve una sezione vera con tabella o esempio calcolato dal motore del sito.

## tc-03 · stats
- title: L'ultimo run: 3 novembre 2026
- stats:
  - 41 su 829 | proposte nuove sul totale
  - 20 | searchTerms aggiunti, nessuno annullato
  - 9 su 10 | work order fatti, 1 respinto
  - 0,015 $ | spesa DataForSEO del giorno, su un budget di 0,15 $
- funAside: Costa meno di un caffè. E il caffè almeno lo bevo io.
- notes:
  Numeri del run di ieri, PR numero 54.

  - 829 proposte in totale, 41 nuove ieri; 109 keyword candidate, 24 arricchite.
  - 20 searchTerms su 20 calcolatori, tutti tenuti perché ognuno era sul calcolatore giusto. Esempi: "tasse crypto 2026" su tassazione crypto, "ral netto" su RAL da netto.
  - DataForSEO: 0,0149 dollari ieri, 0,40 dollari in totale da quando è partito, su un budget di 50.

  Il punto: il costo dei dati è ridicolo. Quello che costa è il lavoro di trasformarli in pagine, ed è quello che fa Devin.

## tc-04 · cards
- title: Cosa c'era nella PR di ieri
- cards:
  - FileText | Un articolo nuovo | «Giorni lavorativi gennaio 2027»: 19 giorni su 31, 2.281 parole, score prosa 84. I numeri vengono dal motore del sito.
  - HelpCircle | 8 FAQ con esempi calcolati | Per esempio la tredicesima netta con una RAL di 30.000 €: 1.613,62 €. Mai in prima posizione, mai ripetute.
  - ShieldCheck | Verifiche tutte verdi | tsc senza errori, lint pulito e nessuna pagina con un seo-score peggiore di prima.
- notes:
  L'articolo nasce dalla query "giorni lavorativi gennaio 2027", priority 25. Dentro: tabella settimana per settimana, il ponte dell'Epifania (con 4 giorni di ferie ne hai 10 liberi), i 12 mesi del 2027.

  Le 8 FAQ sono su crypto, tredicesima della pensione, body fat, CAGR, imposte prima casa, tredicesima netta, ricarica dell'auto elettrica e calorie bruciate. Ogni esempio è calcolato con il calcolatore del sito, non inventato.

  Dopo il run ho chiesto a Devin di aprire le pagine nel browser e rifare gli esempi: ha trovato una differenza sul body fat (20,15% nella FAQ, 20,1% a schermo) e l'ha corretta.

## tc-05 · story (con beats)
- kicker: La parte che mi piace di più
- title: Quando non trova la fonte, Devin si ferma
- text: Work order sull'imposta di bollo dei titoli di Stato: il brief ammette solo fonti dell'Agenzia delle Entrate, e quelle pagine rispondevano 404.
- beats:
  - Cosa ha fatto | ha respinto il work order invece di inventare una cifra
  - Cosa ha notato | la pagina parla di un minimo di 34,20 € che il motore del calcolatore non applica
  - Cosa mi chiede | di verificare con una fonte ufficiale prima di correggere il testo
- punchline: Su un sito di calcoli fiscali, un «non lo so» vale più di una risposta inventata.
- source: Report del run, 3 novembre 2026
- image: nessuna (lontra)
- funAside: Il primo collaboratore che ammette di non sapere una cosa. Assunto.
- notes:
  Questo per me è il momento chiave della demo. Le regole dicono: cifre fiscali solo con l'URL della fonte ufficiale. La fonte non si trovava, quindi niente modifica.

  In più ha trovato un probabile errore già presente: la pagina dice che BOT, BTP e CCT sono esenti e cita un minimo di 34,20 euro sui titoli, ma il motore non applica nessun minimo. Su Normattiva, che non era tra le fonti ammesse, la norma sembra escludere solo fondi pensione e fondi sanitari. Me l'ha segnalato senza toccare il testo.

  Se ti chiedono: la pagina va ancora verificata con una fonte dell'Agenzia delle Entrate. Non dire che è sbagliata come fatto.

## tc-06 · stats (NASCOSTA di default, numeri da inserire)
- title: Quanto sta crescendo TuttoCalcolato.it
- stats:
  - da inserire | clic da Google, ultimi 3 mesi
  - da inserire | impressioni da Google, ultimi 3 mesi
  - da inserire | query per cui il sito compare
  - da inserire | PR del Growth Engine mergiate
- notes:
  Slide nascosta finché non arrivano i numeri di Search Console. Sostituisci i «da inserire» e poi rendila visibile dal builder (icona dell'occhio).

## tc-07 · compare
- title: Chi fa cosa
- left: Devin, ogni mattina
  - legge i dati di Search Console e DataForSEO
  - sceglie e scrive i work order
  - calcola gli esempi con il motore del sito
  - apre la PR con un report completo
- right: Io
  - ho scritto le regole una volta, nelle istruzioni dell'Automation
  - rivedo la PR
  - aggiungo la label e faccio il merge
  - controllo i dubbi che Devin mi segnala
- funAside: Il merge resta mio. Un po' di potere me lo tengo.
- notes:
  Chiudo la demo qui. Il valore non è che Devin scrive le FAQ: è che il processo gira tutti i giorni, con regole chiare, e io intervengo solo dove serve un giudizio.

  Dettaglio onesto: ieri la label della PR l'ho dovuta aggiungere a mano, perché dalla macchina cloud il comando gh non rispondeva. Devin l'ha scritto nel corpo della PR.

  Poi passo all'estrazione.
