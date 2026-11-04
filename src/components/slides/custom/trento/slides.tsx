import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useDeckStore } from '../../../../store/deckStore';
import BrandLogo from '../../../BrandLogo';
import type { CustomSlideComponent, CustomSlideProps } from '..';

const A = '/events/2026-11-04-trento';

const FUN_LINES = [
  'Sto scaldando la lontra…',
  'Sto aspettando gli ultimi ritardatari…',
  'Sto controllando che la demo funzioni. Incrociamo le dita…',
  'Sto contando le fette di pizza…',
  'Sto chiedendo a Devin di aprire una PR per il proiettore…',
];

const isStaticSlide = () =>
  typeof document !== 'undefined' &&
  (document.documentElement.hasAttribute('data-static') ||
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true);

/* 00 — Benvenuti (welcome / loading) */
export const Trento00: CustomSlideComponent = () => {
  const fun = useDeckStore((s) => s.tone) === 'fun';
  const [now, setNow] = useState(() => new Date());
  const [line, setLine] = useState(0);
  const [staticMode] = useState(isStaticSlide);

  useEffect(() => {
    if (staticMode) return;
    const id = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(id);
  }, [staticMode]);

  useEffect(() => {
    if (!fun || staticMode) return;
    const id = setInterval(() => setLine((l) => (l + 1) % FUN_LINES.length), 4_000);
    return () => clearInterval(id);
  }, [fun, staticMode]);

  const clock = now.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Rome',
  });

  return (
    <div className="tn">
      <div className="tn-welcome">
        <BrandLogo brand="devin" height={30} className="tn-wlogo" />
        <div className="tn-kicker">Benvenuti</div>
        <h1 className="tn-wtitle">Devin AI Trento #1</h1>
        <div className="tn-wmeta">Mercoledì 4 novembre 2026 · Impact Hub Trento</div>
        <div className="tn-wbar">
          <div className="tn-wseg" />
        </div>
        <div className="tn-wstatus">Prendete posto, arriviamo.</div>
        {fun && (
          <div key={staticMode ? 0 : line} className="tn-wfun">
            {FUN_LINES[staticMode ? 0 : line]}
          </div>
        )}
        {!staticMode && <div className="tn-wclock">{clock}</div>}
      </div>
      <img className="tn-wotter" src="/assets/devin.png" alt="" aria-hidden="true" />
    </div>
  );
};

/* 01 — Ciao, sono Bogdan */
const flagClip = (
  <clipPath id="tn-flag-clip">
    <rect width="64" height="46" rx="6" />
  </clipPath>
);

export const Trento01: CustomSlideComponent = ({ props }: CustomSlideProps) => {
  const [photoOk, setPhotoOk] = useState(true);
  const linkedin = props?.linkedin?.trim() ?? '';
  const linkedinShort = linkedin
    .replace(/^https?:\/\//i, '')
    .replace(/^www\./i, '')
    .replace(/\/+$/, '');
  return (
    <div className="tn">
      <div className="tn-kicker">Devin AI Trento #1 · Devin è cambiato molto</div>
      <div className="tn-s1grid">
        <div>
          <h1 className="tn-xl">Ciao, sono Bogdan Nistor</h1>
          <div className="tn-flags" role="img" aria-label="Romania, poi Italia, poi Trentino">
            <svg className="tn-flag" viewBox="0 0 64 46" aria-hidden="true">
              {flagClip}
              <g clipPath="url(#tn-flag-clip)">
                <rect width="22" height="46" fill="#002B7F" />
                <rect x="21" width="22" height="46" fill="#FCD116" />
                <rect x="42" width="22" height="46" fill="#CE1126" />
              </g>
            </svg>
            <span className="tn-step" aria-hidden="true">→</span>
            <svg className="tn-flag" viewBox="0 0 64 46" aria-hidden="true">
              <g clipPath="url(#tn-flag-clip)">
                <rect width="22" height="46" fill="#009246" />
                <rect x="21" width="22" height="46" fill="#FFFFFF" />
                <rect x="42" width="22" height="46" fill="#CE2B37" />
              </g>
            </svg>
            <span className="tn-step" aria-hidden="true">→</span>
            <span className="tn-flag-emoji" aria-hidden="true">
              🏔️
            </span>
          </div>
          <div className="tn-amb">Ambassador Devin AI</div>
          <div className="tn-roles">
            Full Stack Developer <span className="tn-sep">|</span> Freelance{' '}
            <span className="tn-sep">|</span> Fractional? <span className="tn-sep">|</span>{' '}
            <span className="tn-blank" aria-label="spazio da riempire" />
          </div>
          <div className="tn-quote">
            “Quando in azienda qualcosa si inceppa, mi piace capire dov'è il problema e
            sistemarlo.”
          </div>
          <div className="tn-products">
            <div>
              <div className="tn-pname">TuttoCalcolato.it</div>
              <div className="tn-pdesc">calcolatori di ogni genere</div>
            </div>
            <div>
              <div className="tn-pname">minipim.io</div>
              <div className="tn-pdesc">gestire le informazioni di prodotto</div>
            </div>
          </div>
        </div>
        <div className="tn-s1side">
          {photoOk && (
            <img
              className="tn-photo"
              src={`${A}/bogdan-hello.gif`}
              alt=""
              onError={() => setPhotoOk(false)}
            />
          )}
          {linkedin && (
            <div className="tn-lincard">
              <span className="tn-linqr">
                <QRCodeSVG value={linkedin} size={126} level="M" />
              </span>
              <span className="tn-lintext">
                <b>LinkedIn</b>
                <span className="tn-mono">{linkedinShort}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* 02 — Il principio */
export const Trento02: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-prin">
      <div className="tn-prin-text">
        <div className="tn-kicker">Perché sono qui</div>
        <div className="tn-pq">
          “Cercare occasioni per aiutare le persone, indipendentemente dal fatto che utilizzino
          Devin o meno, e{' '}
          <span className="tn-accent">aiutarle senza aspettarsi nulla in cambio.</span>”
        </div>
        <div className="tn-psrc">Linee guida ambassador Devin</div>
      </div>
      <img
        className="tn-prin-img"
        src={`${A}/not-expecting-anything.png`}
        alt="Finding opportunities to help people regardless if they are using Devin or not, and help them without expecting anything in return."
      />
    </div>
  </div>
);

/* 03 — Perché questa serata */
export const Trento03: CustomSlideComponent = () => {
  const fun = useDeckStore((s) => s.tone) === 'fun';
  return (
  <div className="tn">
    <h2 className="tn-h2 tn-h2-tight">Perché questa serata</h2>
    <p className="tn-why">
      Per creare community, conoscerci, e perché no mettere le fondamenta per{' '}
      <span className="tn-accent">costruire qualcosa insieme sul territorio</span>, grazie anche
      agli strumenti che Devin ci offre.
    </p>
    <div className="tn-agenda-label">
      Programma <span className="tn-sep">/</span> orari indicativi, probabilmente sbagliati
    </div>
    <div className="tn-agenda">
      <div className="tn-ag">
        <div className="tn-t">19:10</div>
        <div className="tn-w">Talk</div>
      </div>
      <div className="tn-ag">
        <div className="tn-t">19:35</div>
        <div className="tn-w">Demo live</div>
      </div>
      <div className="tn-ag">
        <div className="tn-t">20:00</div>
        <div className="tn-w">Q&amp;A senza filtri</div>
      </div>
      <div className="tn-ag">
        <div className="tn-t">20:15</div>
        <div className="tn-w">Lightning talk</div>
      </div>
      <div className="tn-ag tn-hl">
        <div className="tn-t">20:35</div>
        <div className="tn-w">Sorpresa</div>
      </div>
      <div className="tn-ag">
        <div className="tn-t">
          20:40 <span className="tn-flag-emoji">🍕</span>
        </div>
        <div className="tn-w">Pizza e networking</div>
      </div>
    </div>
    <div className="tn-s2bottom">
      <div className="tn-nosell">Nessuno vi vende niente stasera.</div>
      <div className="tn-prizebox">
        {fun && (
          <span className="tn-flag-emoji" aria-hidden="true">
            🎁{' '}
          </span>
        )}
        <b>Sorpresa alla fine.</b>
      </div>
    </div>
  </div>
  );
};

/* 04 — Marzo 2024, il video che ha fatto il giro del mondo */
export const Trento04: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s3grid">
      <div className="tn-s3left">
        <div className="tn-kicker">12 marzo 2024</div>
        <div className="tn-quoteline">“Il primo AI software engineer”</div>
        <div className="tn-bignum">
          <div className="tn-n tn-accent">13,86%</div>
          <div className="tn-l">su SWE-bench</div>
        </div>
        <div className="tn-s3sub">
          il migliore prima: meno del 2% <span className="tn-sep">/</span> su 100 bug, ne
          sistemava 14
        </div>
      </div>
      <div className="tn-s3right">
        <img
          className="tn-tweetshot"
          src={`${A}/tweet-introducing-devin-2024.png`}
          alt="Post Introducing Devin di Cognition"
        />
      </div>
    </div>
  </div>
);

/* 05 — 500 dollari al mese e un test spietato */
export const Trento05: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">500 dollari al mese e un test spietato</h2>
    <div className="tn-s4grid">
      <div className="tn-s4left">
        <div className="tn-bignum">
          <div className="tn-n tn-accent">500 $/mese</div>
          <div className="tn-l">dicembre 2024, per team</div>
        </div>
        <div className="tn-bignum">
          <div className="tn-n">3 su 20</div>
          <div className="tn-l">
            Answer.AI, gennaio 2025
            <br />3 successi · 14 fallimenti · 3 “boh”
          </div>
        </div>
      </div>
      <figure className="tn-meme">
        <div className="tn-memebox">
          <img src={`${A}/meme-thisisfine.jpg`} alt="This is fine" />
          <span className="tn-cap tn-c-fine1">14 task falliti su 20</span>
          <span className="tn-cap tn-tag tn-c-fine2">500 $/mese</span>
        </div>
      </figure>
    </div>
  </div>
);

/* 06 — It actually works now */
export const Trento06: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s5grid">
      <div className="tn-s5left">
        <div className="tn-kicker">Hamel Husain, uno degli autori del test di Answer.AI</div>
        <div className="tn-hugequote">“It actually works now”</div>
        <div className="tn-sub">
          “Some of it is models are better but the UX/harness is also better.”
        </div>
        <div className="tn-src5">Quote-tweet del suo post di gennaio 2025</div>
      </div>
      <div className="tn-s5right">
        <img
          className="tn-tweetshot"
          src={`${A}/tweet-hamel-quote.png`}
          alt="Quote-tweet di Hamel Husain"
        />
      </div>
    </div>
  </div>
);

/* 07 — Chatbot, agente, harness */
export const Trento07: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s6grid">
      <div className="tn-s6left">
        <h2 className="tn-h2">Chatbot, agente, harness</h2>
        <div className="tn-kitchen">
          <div className="tn-kc">
            <div className="tn-k1">Chef</div>
            <div className="tn-k2">= LLM</div>
            <div className="tn-k3">il modello: capisce e scrive testo, ma da solo non tocca niente</div>
          </div>
          <div className="tn-op">+</div>
          <div className="tn-kc">
            <div className="tn-k1">Cucina</div>
            <div className="tn-k2">= harness</div>
            <div className="tn-k3">gli attrezzi, e il sistema che li usa davvero: file, terminale, browser</div>
          </div>
          <div className="tn-op">=</div>
          <div className="tn-kc">
            <div className="tn-k1 tn-accent">Agente</div>
            <div className="tn-k2">chef + cucina</div>
            <div className="tn-k3">lavora in ciclo: decide, usa un attrezzo, guarda il risultato, corregge</div>
          </div>
        </div>
        <p className="tn-chatbot">
          <b>E il chatbot?</b> È lo chef al telefono: vi detta la ricetta, ma ai fornelli ci
          state voi.
        </p>
        <div className="tn-qcard">
          <div className="tn-qhead">
            <img src={`${A}/avatar-theo.jpg`} alt="" />
            <div>
              <div className="tn-qn">Theo · t3.gg</div>
              <div className="tn-qh">@theo · 23 ott 2026 · “What is a ‘harness’?”</div>
            </div>
          </div>
          <div className="tn-qt">
            “An agent is what happens when you combine a harness and an LLM.”
          </div>
        </div>
      </div>
      <figure className="tn-meme tn-pigeon">
        <div className="tn-memebox">
          <img src={`${A}/meme-pigeon.jpg`} alt="Is this a pigeon" />
          <span className="tn-cap tn-outline tn-c-pg1">io nel 2023</span>
          <span className="tn-cap tn-outline tn-c-pg2">
            ChatGPT che mi scrive una funzione
          </span>
          <span className="tn-cap tn-outline tn-c-pg3">Is this an agent?</span>
        </div>
      </figure>
    </div>
  </div>
);

/* 08 — PR e test end-to-end */
export const Trento08: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">PR e test end-to-end</h2>
    <div className="tn-s7grid">
      <div className="tn-s7left">
        <svg className="tn-pricon" viewBox="0 0 24 24" aria-hidden="true">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="6" cy="5" r="2.2" />
            <circle cx="6" cy="19" r="2.2" />
            <circle cx="18" cy="19" r="2.2" />
            <path d="M6 7.2v9.6" />
            <path d="M18 16.8V9a3 3 0 0 0-3-3h-4" />
            <path d="M13 3.5 10.5 6 13 8.5" />
          </g>
        </svg>
        <div className="tn-pr1">Pull request</div>
        <div className="tn-pr2">una proposta di modifica</div>
        <div className="tn-pr3">
          Il bottone <span className="tn-mono">merge</span> lo premete voi.
        </div>
      </div>
      <div className="tn-s7right">
        <svg className="tn-pyr" viewBox="0 0 600 460" aria-hidden="true">
          <polygon points="300,10 400,150 200,150" className="tn-pt" />
          <polygon points="195,160 405,160 505,300 95,300" className="tn-pm" />
          <polygon points="90,310 510,310 600,450 0,450" className="tn-pb" />
        </svg>
        <div className="tn-pyl tn-pyl-top">
          <b>End-to-end</b>
          <span>pochi, grandi</span>
        </div>
        <div className="tn-pyl tn-pyl-bot">
          <b>Unit test</b>
          <span>tanti, piccoli</span>
        </div>
      </div>
    </div>
    <div className="tn-tagline">Non “fidati”, ma “guarda”.</div>
  </div>
);

/* 09 — E no, non è Windsurf. Però... */
export const Trento09: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">E no, non è Windsurf. Però...</h2>
    <div className="tn-s9grid">
      <figure className="tn-meme tn-spidey">
        <div className="tn-memebox">
          <img src={`${A}/meme-spiderman3.jpg`} alt="Spider-Man pointing" />
          <span className="tn-cap tn-outline tn-c-sp1">Codeium</span>
          <span className="tn-cap tn-outline tn-c-sp2">Windsurf</span>
          <span className="tn-cap tn-outline tn-c-sp3">Devin Desktop</span>
        </div>
        <figcaption className="tn-figcap">
          Lo stesso IDE, tre nomi in tre anni.
        </figcaption>
      </figure>
      <div className="tn-umbrella">
        <div className="tn-ubig">Devin</div>
        <div className="tn-ubar" />
        <div className="tn-uitems">
          <div className="tn-ui">
            <b>Cloud</b>
            <span>agente nella sua macchina</span>
          </div>
          <div className="tn-ui">
            <b>Desktop</b>
            <span>IDE ex Windsurf</span>
          </div>
          <div className="tn-ui">
            <b>CLI</b>
            <span>agente nel terminale</span>
          </div>
          <div className="tn-ui">
            <b>Review</b>
            <span>code review delle PR</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* 10 — Prezzi, allora vs oggi */
export const Trento10: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">Prezzi, allora vs oggi</h2>
    <div className="tn-s10grid">
      <table className="tn-price">
        <thead>
          <tr>
            <th></th>
            <th>2024</th>
            <th>Oggi (novembre 2026)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tn-rl">Ingresso</td>
            <td>500 $/mese, solo team</td>
            <td className="tn-now">Free, 0 $ (senza Devin Cloud)</td>
          </tr>
          <tr>
            <td className="tn-rl">Individuale</td>
            <td className="tn-muted">non esisteva</td>
            <td className="tn-now">Pro 20 $ · Max 200 $ al mese</td>
          </tr>
          <tr>
            <td className="tn-rl">Team</td>
            <td>500 $/mese</td>
            <td className="tn-now">Teams: da 80 $/mese, 40 $ a full seat</td>
          </tr>
          <tr>
            <td className="tn-rl">Come si misura</td>
            <td>ACU</td>
            <td className="tn-now">
              quota giornaliera e settimanale + crediti
              <br />
              <span className="tn-muted">ACU e budget gerarchici solo Enterprise</span>
            </td>
          </tr>
          <tr>
            <td className="tn-rl">Cosa consuma</td>
            <td className="tn-muted">ACU</td>
            <td className="tn-now">
              azioni e macchina, non l'attesa
              <br />
              <span className="tn-muted">dorme dopo 30 min di inattività</span>
            </td>
          </tr>
        </tbody>
      </table>
      <figure className="tn-meme tn-drake">
        <div className="tn-memebox">
          <img src={`${A}/meme-drake.jpg`} alt="Drake" />
          <span className="tn-cap tn-dark tn-c-dr1">500 $/mese solo per team</span>
          <span className="tn-cap tn-dark tn-c-dr2">Free, poi 20 $/mese</span>
        </div>
      </figure>
    </div>
  </div>
);

/* 11 — Lo chef lo portate da casa (piano ChatGPT) */
export const Trento11: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-kicker">da fine settembre 2026 · Settings &gt; Connections</div>
    <h2 className="tn-h2">Lo chef lo portate da casa</h2>
    <div className="tn-s12img">
      <img src={`${A}/chatgpt-plan-toggle.jpg`} alt="Use your ChatGPT plan" />
    </div>
    <div className="tn-s12row">
      <div>
        <div className="tn-big2">ChatGPT Go, Plus o Pro</div>
        <div className="tn-l2">collegabile a Devin Pro, Max e Teams</div>
      </div>
      <div>
        <div className="tn-big2">Solo i modelli GPT</div>
        <div className="tn-l2">macchina, altri modelli e scansioni: quota Devin</div>
      </div>
    </div>
  </div>
);

/* 12 — Fusion: chef capo e aiuto cuoco */
export const Trento12: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s13grid">
      <div className="tn-s13left">
        <div className="tn-kicker">Devin Fusion · dal 29 giu 2026</div>
        <h2 className="tn-h2">Fusion: chef capo e aiuto cuoco</h2>
        <div className="tn-fu">
          <b>Chef capo</b>
          <span>modello di frontiera: piano, decisioni, review finale</span>
        </div>
        <div className="tn-fu">
          <b>Aiuto cuoco</b>
          <span>modello economico (es. SWE-2): codice, build, test</span>
        </div>
        <div className="tn-bignum tn-sm">
          <div className="tn-n tn-accent">fino a -60%</div>
          <div className="tn-l">
            di costo su FrontierCode, a parità di risultati
            <br />
            (benchmark e dati di Cognition)
          </div>
        </div>
        <div className="tn-fcdef">
          <b>FrontierCode</b> non chiede «passano i test?» ma{' '}
          <span className="tn-accent">«il maintainer farebbe merge di questa PR?»</span>
          <span className="tn-fcsub">
            task scritti da oltre 20 maintainer open source · correttezza, test, scope, stile
          </span>
        </div>
      </div>
      <div className="tn-s13right">
        <img
          className="tn-shot"
          src={`${A}/lifecycle-fusion.jpg`}
          alt="Fusion: a frontier lead with an efficient sidekick"
        />
      </div>
    </div>
  </div>
);

/* 13 — Dove lavora Devin */
export const Trento13: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">Dove lavora Devin</h2>
    <div className="tn-famlist">
      <div className="tn-fr">
        <div className="tn-fn">Sessione</div>
        <div className="tn-fa">
          una VM Linux sua (o macOS, Windows): shell, editor, browser
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Blueprint</div>
        <div className="tn-fa">un file YAML: cosa installare, come fare lint e test</div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Snapshot</div>
        <div className="tn-fa">
          l'immagine pronta da cui parte ogni sessione, rifatta ogni giorno
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Devin Cloud</div>
        <div className="tn-fa">lavora da solo; dorme dopo 30 min, riprendibile per 14 giorni</div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Devin Desktop</div>
        <div className="tn-fa">ex Windsurf: tabellone degli agenti + Devin Local</div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Devin CLI</div>
        <div className="tn-fa">
          agente nel terminale; <span className="tn-mono">/handoff</span> spedisce il lavoro
          al cloud
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Test con video</div>
        <div className="tn-fa">apre l'app, la usa come un utente, ti manda il video</div>
      </div>
    </div>
  </div>
);

/* 14 — DeepWiki e Ask Devin: prima capire */
export const Trento14: CustomSlideComponent = () => (
  <div className="tn">
    <h2 className="tn-h2">DeepWiki e Ask Devin: prima capire</h2>
    <div className="tn-famlist tn-famlist-lg">
      <div className="tn-fr">
        <div className="tn-fn">Come nasce</div>
        <div className="tn-fa">
          indicizza il repo e scrive una wiki: pagine per modulo e diagrammi
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Cosa ti dà</div>
        <div className="tn-fa">
          ogni pagina cita file e righe da cui viene, e il commit indicizzato
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Come la uso</div>
        <div className="tn-fa">
          Ask Devin: domande con citazioni → piano → sessione pronta
        </div>
      </div>
      <div className="tn-fr">
        <div className="tn-fn">Quanto costa</div>
        <div className="tn-fa">
          repo pubblici: deepwiki.com e il suo MCP, gratis
          <br />
          repo privati: con un account Devin, livello base incluso
        </div>
      </div>
    </div>
  </div>
);

/* 15 — La cassetta degli attrezzi */
export const Trento15: CustomSlideComponent = () => {
  const groups: { label: string; tools: [string, string, string][] }[] = [
    {
      label: 'Controlla il lavoro',
      tools: [
        [
          'Devin Review',
          'Rilegge ogni PR prima di voi: segnala i possibili bug, dal più probabile al meno, e controlla sempre la sicurezza.',
          '«qui la variabile può arrivare vuota»',
        ],
        [
          'Auto-Fix',
          'I problemi che Review trova, li corregge lui nella stessa PR.',
          'trova il bug e aggiunge il commit con la correzione',
        ],
      ],
    },
    {
      label: 'Si ricorda come lavorate',
      tools: [
        [
          'AGENTS.md',
          'Un file nel repo con le regole della casa. Devin lo legge da solo a ogni sessione.',
          '«usa pnpm, non npm»',
        ],
        [
          'Skills',
          "Procedure scritte una volta e riusate: come si avvia l'app, come si fa un rilascio.",
          'SKILL.md «come testare il checkout»',
        ],
        [
          'Memoria',
          "Si ricorda le tue preferenze tra una sessione e l'altra, e ogni notte le riordina.",
          '«a Bogdan piacciono le PR piccole»',
        ],
      ],
    },
    {
      label: 'Parte da solo',
      tools: [
        [
          'Automations',
          '«Quando succede X, fai partire Devin»: un orario, un messaggio Slack, una issue, un webhook.',
          'il Growth Engine di TuttoCalcolato, ogni mattina alle 8:05',
        ],
        [
          'Oncall',
          'Pensato per gli incidenti: arriva un alert, indaga su log e metriche, trova la causa e propone come sistemare.',
          'un alert da PagerDuty alle 3 di notte',
        ],
      ],
    },
    {
      label: 'Si collega ad altro',
      tools: [
        [
          'MCP',
          'La presa per collegare Devin ai vostri strumenti: Datadog, Sentry, database, ticket.',
          "legge l'errore direttamente da Sentry",
        ],
        [
          'Data Analyst',
          'Domande sui dati a parole, risposte con query SQL e grafici.',
          '«quanti ordini a ottobre?», anche da Slack',
        ],
        [
          'API e Devin MCP',
          'Il contrario di MCP: sono script e altri agenti a comandare Devin.',
          'uno script che apre 10 sessioni insieme',
        ],
      ],
    },
  ];
  return (
    <div className="tn">
      <h2 className="tn-h2">La cassetta degli attrezzi</h2>
      <div className="tn-tg">
        {groups.map((g) => (
          <div className="tn-tgroup" key={g.label}>
            <div className="tn-tglabel">{g.label}</div>
            <div className="tn-tglist">
              {g.tools.map(([n, a, e]) => (
                <div className="tn-tgc" key={n}>
                  <div className="tn-tgname">{n}</div>
                  <div className="tn-tgline">{a}</div>
                  <div className="tn-tgex">Es.: {e}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 15b — Le domande che vi state facendo */
export const Trento15b: CustomSlideComponent = () => {
  const qa: [string, string][] = [
    [
      "Oncall e Automations: che differenza c'è?",
      'Le Automations sono il meccanismo generico: «quando succede X, parte Devin», per qualsiasi lavoro. Oncall è già pronto per gli incidenti: conosce i vostri sistemi e sa come si indaga.',
    ],
    [
      'AGENTS.md, Skills e Memoria non sono la stessa cosa?',
      'AGENTS.md: le regole del progetto, sempre lette. Skills: procedure passo passo, usate quando servono. Memoria: le tue preferenze, solo tue.',
    ],
    [
      'MCP e API: chi comanda chi?',
      'Con MCP è Devin a usare i vostri strumenti. Con API e Devin MCP sono script e altri agenti a usare Devin.',
    ],
    [
      'Devin Review funziona solo sul codice di Devin?',
      'No, anche sulle PR scritte da persone: basta commentare /devin review. Sulle PR pubbliche è gratis, anche senza account.',
    ],
  ];
  return (
    <div className="tn">
      <h2 className="tn-h2">Le domande che vi state facendo</h2>
      <div className="tn-qa15">
        {qa.map(([q, a]) => (
          <div className="tn-q15" key={q}>
            <div className="tn-q15q">{q}</div>
            <div className="tn-q15a">{a}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 16 — Devin Security 2.0 */
export const Trento16: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s18grid">
      <div className="tn-s18left">
        <div className="tn-kicker">26 ott 2026 · Devin Security 2.0</div>
        <h2 className="tn-h2">“A new dark age of cybersecurity”</h2>
        <ol className="tn-truths">
          <li>
            <b>Scansiona</b>
            <span>con modelli cyber di frontiera, anche Claude Mythos</span>
          </li>
          <li>
            <b>Dà priorità</b>
            <span>con un threat model del vostro ambiente</span>
          </li>
          <li>
            <b>Corregge</b>
            <span>una sessione per finding, una PR da rivedere</span>
          </li>
        </ol>
        <div className="tn-s18foot">
          Importa i finding di altri scanner <span className="tn-sep">/</span> crediti
          gratuiti per le enterprise
        </div>
      </div>
      <div className="tn-s18right">
        <img
          className="tn-tweetshot"
          src={`${A}/tweet-devin-security.png`}
          alt="Post Devin Security di Cognition"
        />
      </div>
    </div>
  </div>
);

/* 17 — Quello che resta vero */
export const Trento17: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s14grid">
      <div className="tn-s14left">
        <div className="tn-kicker">Quello che vale ancora, anche nel 2026</div>
        <h2 className="tn-h2">Tre cose da sapere per usarlo bene</h2>
        <ol className="tn-truths tn-truths-s17">
          <li>
            <b>Può sbagliare, certo. Come tutti.</b>
            <span>
              Anche il collega più bravo ogni tanto sbaglia: per questo, prima del merge, uno
              sguardo alla PR conviene sempre darlo.
            </span>
          </li>
          <li>
            <b>Richieste chiare, risultati migliori.</b>
            <span>
              Regola pratica di Cognition: se a te servirebbero meno di 3 ore, Devin ce la fa.
              Se di più, spezza il lavoro in pezzi.
            </span>
          </li>
          <li>
            <b>Si paga in base al lavoro.</b>
            <span>
              Il prezzo dipende dal modello scelto, dalla grandezza del compito e da quanto
              deve ragionare.
            </span>
          </li>
        </ol>
      </div>
      <figure className="tn-meme tn-buttons">
        <div className="tn-memebox">
          <img src={`${A}/meme-twobuttons.jpg`} alt="Two buttons" />
          <span className="tn-cap tn-dark tn-c-b1">Faccio review della PR</span>
          <span className="tn-cap tn-dark tn-c-b2">
            Faccio merge, tanto ha fatto i test
          </span>
          <span className="tn-cap tn-c-b3">Ogni dev alle 18:59 di venerdì</span>
        </div>
      </figure>
    </div>
  </div>
);

/* 18 — Come la racconta Cognition */
export const Trento18: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-kicker">Ottobre 2026, dai canali di Cognition</div>
    <h2 className="tn-h2">Come la racconta Cognition</h2>
    <div className="tn-qcard tn-big">
      <div className="tn-qhead">
        <img src={`${A}/avatar-cognition.jpg`} alt="" />
        <div>
          <div className="tn-qn">Cognition</div>
          <div className="tn-qh">
            @cognition · 28 ott 2026 · su Mercor, startup fondata nel 2023 da tre ventiduenni
          </div>
        </div>
      </div>
      <div className="tn-qt">
        “Mercor's engineers move at extraordinary speed.{' '}
        <mark>
          They give Devin long-running tasks before bed, during meetings, or on their way to
          the gym. They come back to tested features and PRs ready to merge.
        </mark>
        ”
      </div>
    </div>
    <div className="tn-claims">
      <div className="tn-claim">
        <div className="tn-cn">×5</div>
        <div className="tn-cl">PR mergiate in The Access Group, con Devin a più di 2.000 ingegneri</div>
        <div className="tn-cs">Cognition · 22 ott 2026</div>
      </div>
      <div className="tn-claim">
        <div className="tn-cn">3,5×</div>
        <div className="tn-cl">cause giuste trovate da AngelList negli incidenti, rispetto al loro strumento interno</div>
        <div className="tn-cs">Devin Oncall · 15 ott 2026</div>
      </div>
      <div className="tn-claim">
        <div className="tn-cn">89%</div>
        <div className="tn-cl">del codice committato dagli ingegneri di Cognition lo committa Devin</div>
        <div className="tn-cs">Cognition · 27 mag 2026</div>
      </div>
    </div>
    <div className="tn-footnote">
      Numeri loro, su clienti loro: con le pinze. Il modo migliore per giudicare? Provarlo su
      un progetto vero. Ed è quello che vi faccio vedere adesso.
    </div>
  </div>
);

/* 19 — Demo, cosa stiamo per vedere */
export const Trento19: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-kicker">Demo</div>
    <h2 className="tn-h2">Cosa stiamo per vedere</h2>
    <div className="tn-demo">
      <div className="tn-dr">
        <div className="tn-dk">Cosa</div>
        <div className="tn-dv">TuttoCalcolato.it, un mio sito vero, non un'app di esempio</div>
      </div>
      <div className="tn-dr">
        <div className="tn-dk">Dove</div>
        <div className="tn-dv">un'Automation di Devin Cloud che ogni mattina apre una PR</div>
      </div>
      <div className="tn-dr">
        <div className="tn-dk">Come</div>
        <div className="tn-dv">numeri veri e report veri, anche quando qualcosa va storto</div>
      </div>
    </div>
    <div className="tn-three">
      Come pianifica <span className="tn-sep">/</span> come lavora{' '}
      <span className="tn-sep">/</span> come verifica
    </div>
  </div>
);

/* Q — Scansiona e partecipa (QR estrazione) */
export const TrentoQ: CustomSlideComponent = ({ props }: CustomSlideProps) => {
  const url = props?.url?.trim() ?? '';
  const short = props?.shortUrl?.trim() ?? '';
  return (
    <div className="tn">
      <div className="tn-qgrid">
        <div className="tn-qrwrap">
          {url ? (
            <div className="tn-qrbox">
              <QRCodeSVG value={url} size={440} level="M" />
            </div>
          ) : (
            <div className="tn-qrph">
              QR licenze
              <br />
              (da inserire)
              <small>assets/qr-estrazione.png</small>
            </div>
          )}
        </div>
        <div className="tn-qtext">
          <h2 className="tn-h2">Scansiona e partecipa</h2>
          <div className="tn-qurl tn-mono">{url ? short || url : '[URL breve da inserire]'}</div>
          <div className="tn-qwhen">
            Niente sticker né magliette: al loro posto, <b>10 licenze Devin</b>.<br />
            Arrivano dopo l'evento, all'email del check-in su Luma.
          </div>
          <div className="tn-qprize">Tra piani Pro (20 $) e Max (200 $)</div>
        </div>
      </div>
    </div>
  );
};

/* 20 — Non è molto, ma è un lavoro onesto */
export const Trento20: CustomSlideComponent = () => (
  <div className="tn">
    <div className="tn-s22">
      <img
        className="tn-honest"
        src={`${A}/meme-lavoro-onesto.png`}
        alt="Non è molto, ma è un lavoro onesto"
      />
      <div className="tn-s22cap">10 licenze Devin tra Pro e Max, al posto di sticker e magliette</div>
    </div>
  </div>
);

