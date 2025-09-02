import React, { useState, useEffect } from "react";
import { useTelegram } from "./contexts/TelegramContext";
import Layout from "./components/Layout";
import UserTab from "./components/tabs/UserTab";
import SourcesTab from "./components/tabs/SourcesTab";
import ErrorScreen from "./components/ErrorScreen";
import SplashScreen from "./components/SplashScreen";
import "./styles/globals.css";
import { Tab } from "./types";

const App = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [isReady, setIsReady] = useState(false);

  const { tgApp, tgUser } = useTelegram();

  useEffect(() => {
    if (tgApp) {
      tgApp.ready();
      tgApp.expand();
      tgApp.setHeaderColor("#1a1a1a");
      tgApp.setBackgroundColor("#0a0a0a"); // TODO: take from vars
    }
  }, []);

  if (!tgUser || !tgUser.id) {
    return <ErrorScreen />;
  }

  const tabs: Tab[] = [
    { id: "user", label: "Profile", icon: "fas fa-user", component: UserTab },
    {
      id: "sources",
      label: "Connections",
      icon: "fas fa-link",
      component: SourcesTab,
    },
    {
      id: "assets",
      label: "Assets",
      icon: "fas fa-database",
      component: () => <></>,
    },
    {
      id: "wallet",
      label: "Wallet",
      icon: "fas fa-wallet",
      component: () => <></>,
    },
  ];

  const ActiveComponent =
    tabs.find((t) => t.id === activeTab)?.component || UserTab;

  return (
    <>
      {isReady ? (
        <Layout tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
          <ActiveComponent />
        </Layout>
      ) : (
        <SplashScreen setIsReady={setIsReady} />
      )}
    </>
  );
};

export default App;
