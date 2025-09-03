import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TelegramProvider } from './contexts/TelegramContext';
import { UserProvider } from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <TelegramProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </TelegramProvider>
  </React.StrictMode>,
);

reportWebVitals();
