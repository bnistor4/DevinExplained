import type { EventPack } from './types';
import trento20261104 from './2026-11-04-trento';

// newest first; do NOT import from ../modules here (circular import)
export const eventPacks: EventPack[] = [trento20261104].sort((a, b) =>
  b.date.localeCompare(a.date),
);
