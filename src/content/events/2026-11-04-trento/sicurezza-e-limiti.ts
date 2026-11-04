import type { Module } from '../../schema';
import { it } from '../types';

const mod: Module = {
  id: 'ev-20261104-sicurezza-e-limiti',
  category: 'events',
  icon: 'ShieldCheck',
  title: it("Sicurezza e limiti"),
  summary: it("Security 2.0, cosa resta vero e come lo racconta Cognition"),
  durationMin: 4,
  sources: [],
  slides: [
    {
      id: 's16',
      block: { type: 'custom', component: 'trento-16', title: it("Devin Security 2.0") },
      notes: it("Tempo: 1:15 · a fine slide: minuto 21:30 su 24:45 · orario previsto 19:31:30\n\nTra gli attrezzi, quello su cui Cognition sta spingendo di più in queste settimane è la sicurezza. Novità del 26 ottobre. Cognition dice: 'stiamo entrando in una nuova età oscura della cybersecurity'. Allegria. [S42]\n\nNel video parla Alex Stamos, il responsabile della sicurezza di Cognition: l'AI trova vulnerabilità enormi, gli attaccanti usano agenti, ma l'AI può anche sistemare falle che stavano lì da decenni.\n\nDevin Security 2.0 fa tre cose. Scansiona il codice con i modelli cyber più potenti, compreso Claude Mythos di Anthropic. Dà priorità costruendo con il vostro team un threat model: cosa è raggiungibile, quanto danno farebbe. E corregge: per ogni falla una sessione Devin e una PR. La falla resta aperta finché la PR non entra. [S14][S59]\n\nE mettono centinaia di milioni di dollari di crediti per scansioni e correzioni gratuite, ma per le aziende enterprise. Un antifurto che oltre a suonare chiama anche il fabbro. Il punto per noi resta lo stesso: la correzione arriva come PR, il merge lo decidete voi.\n\nSe ti chiedono (non leggere):\n- Come scansiona: \"Agentic MapReduce\": mappa il repo rispetto al threat model, analizza a blocchi in parallelo, unisce ed elimina i doppioni, e verifica i finding più gravi in una sandbox contro l'app che gira. [S59]\n- Importa finding da Snyk, Wiz, CSV e, dal 30 ott, SonarQube, Linear e Vanta. Interfaccia in /security, serve l'accesso alle security scan per l'organizzazione. [S59][S52]\n- Crediti: il blog Devin dice \"$100M+ in credits to enterprises\" (con Claude Mythos, criteri di idoneità, si fa richiesta); il blog Cognition parla di \"hundreds of millions of dollars in Devin credits\" per scansioni gratuite e crediti di correzione. Quindi: oltre 100 milioni, per le enterprise. Per team piccoli o self-serve: da confermare. [S14]\n- Date: entrambi i blog (devin.ai e cognition.com), letti il 3 nov, riportano 26 ott 2026; nel documento di studio compare il 21 ott per il blog: da confermare, in slide resta 26 ott. Scansioni multi-repo fino a 1.000 repo dal 2 nov 2026. [S14][S52]\n- Contesto: il 28 ott Cognition ha annunciato che Corridor (sicurezza per team AI-native) entra in Cognition per lavorare su Devin Security. [S60]\n\n[S42] https://x.com/cognition/status/2114741368627335379 (video con Alex Stamos, CSO di Cognition). [S14] https://cognition.com/blog/devin-security e https://devin.ai/blog/devin-security-2 [S59] https://docs.devin.ai/work-with-devin/security-2-0 [S60] https://cognition.com/blog/corridor-joining-cognition"),
    },
    {
      id: 's17',
      block: { type: 'custom', component: 'trento-17', title: it("Tre cose da sapere per usarlo bene") },
      notes: it("Tempo: 1:30 · a fine slide: minuto 23:00 su 24:45 · orario previsto 19:33:00\n\nDevin è migliorato tantissimo. Ci sono però tre cose da tenere a mente per usarlo bene.\n\nUno: può sbagliare, certo, come tutti. Anche il collega più bravo ogni tanto sbaglia. Per questo, prima del merge, uno sguardo alla PR conviene sempre darlo. Lo dice anche la loro documentazione. [S22]\n\nDue: richieste chiare, risultati migliori. La loro regola pratica: se un task ci mettete meno di tre ore a farlo voi, Devin probabilmente ce la fa. Oltre, spezzatelo. [S20]\n\nTre: si paga in base al lavoro. Dipende dal modello, da quanto è grande il task, da quanto deve ragionare. [S15]\n\nE se qualcuno vi dice che con gli agenti non serve più saper programmare: serve sapere cosa chiedere e come verificare.\n\nMai tagliare. [S22] https://docs.devin.ai/admin/security [S20] https://docs.devin.ai/essential-guidelines/when-to-use-devin"),
    },
    {
      id: 's18',
      block: { type: 'custom', component: 'trento-18', title: it("Come la racconta Cognition") },
      notes: it("Tempo: 1:00 · a fine slide: minuto 24:00 su 24:45 · orario previsto 19:34:00\n\nFin qui vi ho detto come la vedo io. Adesso sentiamo come la racconta chi lo vende.\n\nIl post del 28 ottobre è su Mercor, una startup fondata nel 2023 da tre ventiduenni. Gli ingegneri danno a Devin task lunghi prima di dormire, durante le riunioni, mentre vanno in palestra, e quando tornano trovano feature testate e PR pronte per il merge. [S28] Io in palestra non ci vado comunque.\n\nSotto, tre numeri che Cognition ha pubblicato di recente:\n- The Access Group, software house inglese: Devin dato a più di 2.000 ingegneri su 250 prodotti, PR mergiate quintuplicate e alcune migrazioni legacy fino a 480 volte più veloci. [S62]\n- AngelList: con Devin Oncall trova la causa giusta di un incidente 3,5 volte più spesso del loro strumento interno, e metà degli incidenti li gestisce da solo dall'inizio alla fine. Lo strumento interno l'hanno spento. [S13]\n- Cognition stessa: l'89% del codice committato dai suoi ingegneri lo committa Devin, il resto agenti locali in Devin Desktop. [S63]\n\nSono numeri loro, su clienti loro: pinze. Ma una promessa così si può verificare, e io l'ho verificata su un mio progetto. Ve lo faccio vedere adesso.\n\n[S28] https://x.com/cognition/status/2115488769306673267. [S62] https://cognition.com/blog/building-in-london (22 ott 2026). [S13] https://devin.ai/blog/introducing-devin-oncall (15 ott 2026). [S63] https://cognition.com/blog/series-d (27 mag 2026). Cognition scrive che Mercor ha superato i 2 miliardi di fatturato annuo ricorrente: numero loro, non verificato in modo indipendente. Se ti chiedono: tolto dalla frase per stare nei tempi."),
    },
  ],
};

export default mod;
