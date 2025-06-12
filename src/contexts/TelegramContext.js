// contexts/TelegramContext.js
import { createContext, useContext } from 'react';

const TelegramContext = createContext();

export const TelegramProvider = ({ children }) => {
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

  const userPayload = {
    id: telegramUser.id,
    first_name: telegramUser.first_name || "",
    last_name: telegramUser.last_name || "",
    username: telegramUser.username || "",
    language_code: telegramUser.language_code || ""
  };

  const value = {
    telegramUser,
    userPayload
  };

  return (
    <TelegramContext.Provider value={value}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => {
  const context = useContext(TelegramContext);
  if (!context) {
    throw new Error('useTelegram must be used within TelegramProvider');
  }
  return context;
};