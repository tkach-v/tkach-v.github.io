import React, { createContext, PropsWithChildren, useContext } from "react";

type TelegramState = {
  telegramUser: WebAppUser | null;
  // userPayload?: WebAppUser | null;
};

const TelegramContext = createContext({} as TelegramState);

export const TelegramProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user || null;
  // const userPayload = telegramUser;

  const value = {
    telegramUser,
    // userPayload,
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
    throw new Error("useTelegram must be used within TelegramProvider");
  }
  return context;
};
