// Pacchetto del talk "Devin AI Trento #1" (4 novembre 2026, Impact Hub Trento).
// Le 21 slide sono portate da extra-data/devin-trento-slides.html: ogni slide usa
// il blocco 'custom' con componente 'trento-NN' (registry in
// src/components/slides/custom/). Titolo/agenda/community disattivati: il deck
// deve essere esattamente le slide del talk, niente slide generate.
import type { EventPack } from '../types';
import { it } from '../types';
import apertura from './apertura';
import daDoveVeniamo from './da-dove-veniamo';
import leBasi from './le-basi';
import devinOggi from './devin-oggi';
import comeLavora from './come-lavora';
import sicurezzaELimiti from './sicurezza-e-limiti';
import demo from './demo';
import tuttocalcolato from './tuttocalcolato';
import qa from './qa';
import estrazione from './estrazione';
import { talkModules } from './talks';
import { funStoryModules } from './fun-stories';
import news from './news';

const pack: EventPack = {
  id: '2026-11-04-trento',
  title: it('Devin AI Trento #1 · 4 novembre 2026'),
  date: '2026-11-04',
  lang: 'it',
  theme: 'dark',
  deckTitle: false,
  agenda: false,
  community: false,
  event: {
    name: 'Devin AI Trento #1',
    date: '4 novembre 2026',
    location: 'Impact Hub Trento',
    plannedMinutes: 25,
    links: [{ id: 'luma', kind: 'luma', label: 'Luma', url: 'https://luma.com/sle4gigc' }],
  },
  modules: [
    apertura,
    daDoveVeniamo,
    leBasi,
    devinOggi,
    comeLavora,
    sicurezzaELimiti,
    demo,
    tuttocalcolato,
    qa,
    estrazione,
    // talk della community: opzionali, attivabili dal catalogo
    ...talkModules,
    // moduli opzionali: fun stories e news, da trascinare nel deck.
    // NON vanno in moduleIds: il pacchetto caricato resta le 21 slide.
    ...funStoryModules,
    news,
  ],
  moduleIds: [
    'ev-20261104-apertura',
    'ev-20261104-da-dove-veniamo',
    'ev-20261104-le-basi',
    'ev-20261104-devin-oggi',
    'ev-20261104-come-lavora',
    'ev-20261104-sicurezza-e-limiti',
    'ev-20261104-demo',
    'ev-20261104-tuttocalcolato',
    'ev-20261104-qa',
    'ev-20261104-estrazione',
  ],
  sections: [
    {
      title: it('Il talk'),
      moduleIds: [
        'ev-20261104-apertura',
        'ev-20261104-da-dove-veniamo',
        'ev-20261104-le-basi',
        'ev-20261104-devin-oggi',
        'ev-20261104-come-lavora',
        'ev-20261104-sicurezza-e-limiti',
        'ev-20261104-demo',
        'ev-20261104-qa',
        'ev-20261104-estrazione',
      ],
    },
    { title: it('Demo'), moduleIds: ['ev-20261104-tuttocalcolato'] },
    {
      title: it('Talk della community'),
      moduleIds: ['ev-20261104-talk-fabrizio', 'ev-20261104-talk-diego'],
    },
    {
      title: it('Fun stories'),
      moduleIds: [
        'ev-20261104-fun-nome',
        'ev-20261104-fun-lontra',
        'ev-20261104-fun-airbnb',
        'ev-20261104-fun-olimpiadi',
        'ev-20261104-fun-umano',
        'ev-20261104-fun-devin-in-devin',
        'ev-20261104-fun-windsurf',
        'ev-20261104-fun-rsa',
        'ev-20261104-fun-brasile',
        'ev-20261104-fun-pagella',
        'ev-20261104-fun-cognition-da-devin',
      ],
    },
    {
      title: it('Casi reali e news'),
      moduleIds: ['ev-20261104-casi-reali', 'ev-20261104-news'],
    },
  ],
  suggestedAfter: {
    'ev-20261104-fun-nome': 'ev-20261104-apertura',
    'ev-20261104-fun-lontra': 'ev-20261104-apertura',
    'ev-20261104-fun-airbnb': 'ev-20261104-da-dove-veniamo',
    'ev-20261104-fun-olimpiadi': 'ev-20261104-da-dove-veniamo',
    'ev-20261104-fun-umano': 'ev-20261104-le-basi',
    'ev-20261104-fun-devin-in-devin': 'ev-20261104-le-basi',
    'ev-20261104-fun-windsurf': 'ev-20261104-devin-oggi',
    'ev-20261104-fun-rsa': 'ev-20261104-devin-oggi',
    'ev-20261104-fun-brasile': 'ev-20261104-come-lavora',
    'ev-20261104-casi-reali': 'ev-20261104-come-lavora',
    'ev-20261104-fun-pagella': 'ev-20261104-sicurezza-e-limiti',
    'ev-20261104-fun-cognition-da-devin': 'ev-20261104-sicurezza-e-limiti',
    'ev-20261104-news': 'ev-20261104-sicurezza-e-limiti',
    'ev-20261104-talk-fabrizio': 'ev-20261104-qa',
    'ev-20261104-talk-diego': 'ev-20261104-qa',
  },
};

export default pack;
