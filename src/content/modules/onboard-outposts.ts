import type { Module } from '../schema';

const mod: Module = {
  id: 'onboard-outposts',
  category: 'onboarding',
  icon: 'Server',
  title: { en: 'Outposts: your own infra', it: 'Outposts: la tua infrastruttura' },
  summary: {
    en: 'Devin’s brain in the cloud, the execution on your machines — even a Mac Mini on your desk.',
    it: 'Il cervello di Devin nel cloud, l’esecuzione sulle tue macchine — anche un Mac Mini sulla scrivania.',
  },
  durationMin: 4,
  sources: [
    'https://docs.devin.ai/cloud/outposts/overview',
    'https://docs.devin.ai/cloud/outposts/quickstart',
    'https://docs.devin.ai/cloud/outposts/orchestration',
    'https://docs.devin.ai/cloud/outposts/reference',
    'https://docs.devin.ai/cloud/outposts/partners',
  ],
  slides: [
    {
      id: 'outposts-bullets',
      block: {
        type: 'bullets',
        title: { en: 'Sessions inside *your* network', it: 'Sessioni dentro la *tua* rete' },
        icon: 'Server',
        items: [
          { en: 'Agent loop runs in Devin’s cloud; commands, edits, repo access run on your machines', it: 'L’agent loop gira nel cloud di Devin; comandi, edit e accesso alle repo sulle tue macchine' },
          { en: 'An outpost is a named queue — e.g. gpu-h200 or dev-boxes', it: 'Un outpost è una coda con un nome — tipo gpu-h200 o dev-boxes' },
          { en: 'A worker is a machine running devin worker start --outpost=<name>', it: 'Un worker è una macchina che gira devin worker start --outpost=<nome>' },
          { en: 'N workers serve N concurrent sessions; the rest queue', it: 'N worker servono N sessioni in parallelo; le altre aspettano in coda' },
          { en: 'Workers need outbound HTTPS only — no inbound ports or VPN', it: 'Ai worker basta HTTPS in uscita: niente porte in ingresso né VPN' },
        ],
      },
      notes: {
        en: 'The split is the selling point: inference in Cognition’s cloud, execution inside your perimeter.',
        it: 'Lo split è il punto di vendita: inferenza nel cloud Cognition, esecuzione dentro il tuo perimetro.',
      },
    },
    {
      id: 'outposts-analogy',
      tone: 'fun',
      block: {
        type: 'analogy',
        title: { en: "It's like…", it: 'È come…' },
        text: {
          en: 'a *remote* driver for your own car — the GPS is ours, the garage is yours.',
          it: 'un pilota *remoto* per la tua auto: il GPS è nostro, il garage è tuo.',
        },
        emoji: '🏎️',
      },
      notes: {
        en: 'Good for the “but our code can’t leave the network” objection — it doesn’t have to.',
        it: 'Ottima per l’obiezione “il nostro codice non può uscire dalla rete”: non deve.',
      },
    },
    {
      id: 'outposts-usage',
      block: {
        type: 'bullets',
        title: { en: 'Day to *day*', it: 'Giorno per *giorno*' },
        icon: 'ListChecks',
        items: [
          { en: 'Pick the outpost under Configuration → Virtual environment', it: 'Scegli l’outpost in Configuration → Virtual environment' },
          { en: 'From Slack: @Devin !outpost gpu-h200 profile the training loop', it: 'Da Slack: @Devin !outpost gpu-h200 profile the training loop' },
          { en: 'Use cases: internal registries, GPUs, custom OS images, compliance', it: 'Casi d’uso: registry interni, GPU, immagini OS custom, compliance' },
          { en: 'Workers claim sessions, run every tool call locally, then go back to the queue', it: 'I worker prendono le sessioni, eseguono ogni tool call in locale, poi tornano in coda' },
        ],
      },
      notes: {
        en: 'Prereqs: org with Outposts enabled, v3 API token with outposts scopes, machine with CLI + repos cloned.',
        it: 'Prerequisiti: org con Outposts abilitati, token v3 con scope outposts, macchina con CLI e repo clonate.',
      },
    },
  ],
};

export default mod;
