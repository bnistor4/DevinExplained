import { useEffect } from 'react';
import { flushSync } from 'react-dom';
import Builder from './app/Builder';
import Presenter from './app/Presenter';
import PrintDeck from './components/PrintDeck';
import { useDeckStore } from './store/deckStore';
import { decodeDeck } from './lib/share';
import i18n from './i18n';

export default function App() {
  const view = useDeckStore((s) => s.view);
  const theme = useDeckStore((s) => s.theme);
  const lang = useDeckStore((s) => s.lang);
  const printing = useDeckStore((s) => s.printing);

  // load a shared deck from the URL hash on first mount
  useEffect(() => {
    const payload = decodeDeck(window.location.hash);
    if (payload) useDeckStore.getState().loadDeck(payload);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    void i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const before = () => flushSync(() => useDeckStore.getState().setPrinting(true));
    const after = () => useDeckStore.getState().setPrinting(false);
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  return (
    <>
      <div className="app-root">{view === 'present' ? <Presenter /> : <Builder />}</div>
      {printing && <PrintDeck />}
    </>
  );
}
