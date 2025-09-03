import React, { createContext, PropsWithChildren, useContext } from "react";

type TelegramState = {
  tgApp: WebApp | null;
  tgUser: WebAppUser | null;
};

const TelegramContext = createContext({} as TelegramState);

const mockUser = {
  id: 5300653520,
  first_name: "Artem",
};


export const TelegramProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const value = {
    tgApp: window.Telegram?.WebApp || null,
    tgUser: mockUser,
    // tgUser: window.Telegram?.WebApp?.initDataUnsafe?.user || null,
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