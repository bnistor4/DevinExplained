import type { CSSProperties } from 'react';
import type { Lang, Slide, SlideBlock } from '../../content/schema';
import { getL10n, modules } from '../../content/modules';

export type BlockOf<T extends SlideBlock['type']> = Extract<SlideBlock, { type: T }>;

/** Per-slide page chrome: module index, module title, position, band. */
export type Frame = {
  index: number;
  kicker: string;
  page: number;
  total: number;
  band?: Slide['band'];
  /** true for the generated deck title slide (moduleId '__deck') */
  isDeckTitle?: boolean;
};

export const ri = (i: number) => ({ '--i': i }) as CSSProperties;

export function slideHeading(block: SlideBlock, lang: Lang): string {
  switch (block.type) {
    case 'quote':
      return getL10n(block.text, lang);
    case 'media':
      return getL10n(block.title, lang) || `Media · ${block.kind}`;
    default:
      return getL10n(block.title, lang);
  }
}

/** Builds the Frame for a flattened deck entry (moduleId '__deck' = generated title). */
export function slideFrame(
  moduleId: string,
  moduleIds: string[],
  lang: Lang,
  page: number,
  total: number,
  band?: Slide['band'],
): Frame {
  const mi = moduleIds.indexOf(moduleId);
  const mod = mi >= 0 ? modules.find((m) => m.id === moduleId) : undefined;
  return {
    index: mi < 0 ? 0 : mi + 1,
    kicker: mod ? getL10n(mod.title, lang) : 'DevinExplained',
    page,
    total,
    band,
    isDeckTitle: moduleId === '__deck',
  };
}
