import type { DeckPayload } from '../store/deckStore';

export function exportDeckFile(payload: DeckPayload): void {
  const data = { app: 'DevinExplained', version: 1, ...payload };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'devin-deck.json';
  a.click();
  URL.revokeObjectURL(url);
}

export async function importDeckFile(file: File): Promise<Partial<DeckPayload> | null> {
  try {
    const data = JSON.parse(await file.text());
    if (!data || typeof data !== 'object') return null;
    const d = data as Partial<DeckPayload>;
    return {
      moduleIds: Array.isArray(d.moduleIds) ? d.moduleIds : undefined,
      lang: d.lang,
      tone: d.tone,
      theme: d.theme,
      density: d.density,
      fit: d.fit,
      presenter: d.presenter,
      event: d.event,
    };
  } catch {
    return null;
  }
}
