import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Impressum } from './pages/Impressum';

/**
 * Einfaches Routing basierend auf dem aktuellen Pfad.
 * Keine zusätzliche Library nötig.
 */
const Router: React.FC = () => {
  const path = window.location.pathname;

  switch (path) {
    case '/impressum':
      return <Impressum />;
    default:
      return <App />;
  }
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
