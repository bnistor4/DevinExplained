import type { Module } from '../schema';

const mod: Module = {
  id: 'how-advanced-orchestration',
  category: 'how-it-works',
  icon: 'Network',
  title: { en: 'Devins managing Devins', it: 'Devin che gestiscono Devin' },
  summary: {
    en: 'Managed Devins for parallel workstreams, and Dynamic Workflows: orchestration as a Python script.',
    it: 'Managed Devins per lavori in parallelo e Dynamic Workflows: l’orchestrazione diventa uno script Python.',
  },
  durationMin: 5,
  sources: [
    'https://docs.devin.ai/work-with-devin/advanced-capabilities',
    'https://docs.devin.ai/work-with-devin/dynamic-workflows',
  ],
  slides: [
    {
      id: 'managed-devins',
      block: {
        type: 'bullets',
        title: { en: 'One Devin *coordinates*, many execute', it: 'Un Devin *coordina*, molti eseguono' },
        icon: 'Network',
        items: [
          { en: 'A coordinator session scopes work and delegates to managed Devins in parallel', it: 'Una sessione coordinatore delinea il lavoro e delega a managed Devin in parallelo' },
          { en: 'Each child session runs in its own isolated VM', it: 'Ogni sessione figlia gira nella sua VM isolata' },
          { en: 'The coordinator monitors progress, resolves conflicts, compiles results', it: 'Il coordinatore monitora, risolve i conflitti, raccoglie i risultati' },
          { en: 'It can message, pause or terminate child sessions — and schedule reminders to itself', it: 'Può scrivere, sospendere o terminare le sessioni figlie — e programmare promemoria per sé' },
          { en: 'Just ask: “spin up a managed Devin for each module”', it: 'Basta chiederlo: “avvia un managed Devin per ogni modulo”' },
        ],
      },
      notes: {
        en: 'Devin parallelizes automatically when it makes sense, or on request. Ideal for migrations and bulk test coverage.',
        it: 'Devin parallelizza da solo quando ha senso, oppure su richiesta. Ideale per migrazioni e copertura test di massa.',
      },
    },
    {
      id: 'workflow-cards',
      band: 'dark',
      block: {
        type: 'cards',
        title: { en: 'When to ask for a *workflow*', it: 'Quando chiedere un *workflow*' },
        cards: [
          {
            icon: 'Network',
            title: { en: 'Wide fan-out', it: 'Fan-out ampio' },
            text: {
              en: 'Five or more independent units — files, modules, tickets — with a combine step at the end.',
              it: 'Cinque o più unità indipendenti — file, moduli, ticket — con un passo di raccolta finale.',
            },
          },
          {
            icon: 'Workflow',
            title: { en: 'Staged pipeline', it: 'Pipeline a stadi' },
            text: {
              en: 'Later stages consume earlier agents’ structured output: audit → fix → verify.',
              it: 'Gli stadi successivi consumano l’output strutturato dei precedenti: audit → fix → verify.',
            },
          },
          {
            icon: 'X',
            title: { en: 'Not for', it: 'Non per' },
            text: {
              en: 'Mechanical codemods, one or two sessions, or tightly coupled sequential work.',
              it: 'Codemod meccanici, una o due sessioni, lavoro sequenziale e accoppiato.',
            },
          },
        ],
      },
      notes: {
        en: 'A dynamic workflow is a deterministic Python script Devin writes and runs — the orchestration itself is code, recorded and resumable.',
        it: 'Un dynamic workflow è uno script Python deterministico che Devin scrive ed esegue: l’orchestrazione è codice, registrata e riprendibile.',
      },
      funAside: {
        en: 'Devin writing a script that manages Devins. It’s turtles all the way down.',
        it: 'Devin che scrive uno script che gestisce altri Devin. Tartarughe fino in fondo.',
      },
    },
    {
      id: 'workflow-code',
      block: {
        type: 'code',
        title: { en: 'Orchestration, *as code*', it: 'Orchestrazione *come codice*' },
        language: 'python',
        code: 'async def main():\n    await register_workflow(META)\n    results = await pipeline(MODULES, analyze, fix)\n    for module, result in zip(MODULES, results):\n        log(f"{module}: {result or \'no fix needed\'}")',
        caption: {
          en: 'An audit-then-fix pipeline across modules — from the Dynamic Workflows docs.',
          it: 'Una pipeline audit-poi-fix su più moduli — dalla documentazione Dynamic Workflows.',
        },
      },
      notes: {
        en: 'agent() takes a JSON Schema and returns structured output — that is how one stage feeds the next.',
        it: 'agent() accetta una JSON Schema e restituisce output strutturato: così uno stadio alimenta il successivo.',
      },
    },
  ],
};

export default mod;
