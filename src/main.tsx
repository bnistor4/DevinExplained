import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import '@fontsource-variable/source-serif-4';
import '@fontsource-variable/source-serif-4/wght-italic.css';
import './themes/themes.css';
import './themes/fonts-licensed.css';
import './index.css';
import './i18n';
import App from './App';

// Static mode (audit screenshots, reduced-motion users): no reveal/motion animation.
try {
  const staticMode =
    localStorage.getItem('devinexplained:static') === '1' ||
    new URLSearchParams(location.search).get('static') === '1' ||
    matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (staticMode) document.documentElement.setAttribute('data-static', '');
} catch {
  /* storage unavailable — ignore */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
