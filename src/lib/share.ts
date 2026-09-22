import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import type { DeckPayload } from '../store/deckStore';

export function encodeDeck(payload: DeckPayload): string {
  return compressToEncodedURIComponent(JSON.stringify({ v: 1, ...payload }));
}

export function decodeDeck(hash: string): Partial<DeckPayload> | null {
  const match = hash.match(/#d=([^&]+)/);
  if (!match) return null;
  try {
    const json = decompressFromEncodedURIComponent(match[1]);
    if (!json) return null;
    const data = JSON.parse(json);
    return data && typeof data === 'object' ? (data as Partial<DeckPayload>) : null;
  } catch {
    return null;
  }
}

export function shareUrl(payload: DeckPayload): string {
  return `${window.location.origin}${window.location.pathname}#d=${encodeDeck(payload)}`;
}
