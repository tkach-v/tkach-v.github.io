import React, { useState, useEffect } from "react";
import { UserProvider } from "./contexts/UserContext";
import { TelegramProvider } from "./contexts/TelegramContext";
import Layout from "./components/Layout";
import UserTab from "./components/tabs/UserTab";
import SourcesTab from "./components/tabs/SourcesTab";
import ErrorScreen from "./components/ErrorScreen";
import SplashScreen from "./components/SplashScreen";
import "./index.css";
import { Tab } from "./types";

const App = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor("#1a1a1a");
      window.Telegram.WebApp.setBackgroundColor("#0a0a0a");
    }
  }, []);

  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user;

  if (!telegramUser || !telegramUser.id) {
    return <ErrorScreen />;
  }

  const tabs: Tab[] = [
    { id: "user", label: "Dashboard",  component: UserTab },
    {
      id: "sources",
      label: "Your Data",
      component: SourcesTab,
    },
    {
      id: "assets",
      label: "Your Assets",
      component: () => <></>,
    },
    {
      id: "wallet",
      label: "Wallet",
      component: () => <></>,
    },
  ];

  const ActiveComponent =
    tabs.find((t) => t.id === activeTab)?.component || UserTab;

  return (
    <TelegramProvider>
      <UserProvider>
        {isReady ? (
          <Layout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
            <ActiveComponent />
          </Layout>
        ) : (
          <SplashScreen setIsReady={setIsReady} />
        )}
      </UserProvider>
    </TelegramProvider>
  );
};

export default App;
