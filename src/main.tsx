// Safeguard window.fetch if sandbox environment or polyfill attempts assignment on accessor-only property
try {
  if (typeof window !== 'undefined') {
    const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch') || 
                       Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
    if (descriptor && descriptor.get && !descriptor.set) {
      let currentFetch = window.fetch.bind(window);
      Object.defineProperty(window, 'fetch', {
        configurable: true,
        enumerable: true,
        get() {
          return currentFetch;
        },
        set(val) {
          currentFetch = val;
        }
      });
    }
  }
} catch {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
