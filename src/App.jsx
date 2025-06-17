import React, { useState, useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import { TelegramProvider } from './contexts/TelegramContext';
import Layout from './components/Layout';
import UserTab from './components/tabs/UserTab';
import SourcesTab from './components/tabs/SourcesTab';
import PlatformTab from './components/tabs/PlatformTab';
import ErrorScreen from './components/ErrorScreen';
import './styles/globals.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('user');

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor('#1a1a1a');
      window.Telegram.WebApp.setBackgroundColor('#0a0a0a');
    }
  }, []);

  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

  if (!telegramUser.id) {
    return <ErrorScreen />;
  }

  const tabs = [
    { id: 'user', label: 'Profile', icon: 'fas fa-user', component: UserTab },
    { id: 'sources', label: 'Connections', icon: 'fas fa-link', component: SourcesTab },
    { id: 'platform', label: 'Data', icon: 'fas fa-database', component: PlatformTab }
  ];

  const ActiveComponent = tabs.find(t => t.id === activeTab)?.component || UserTab;

  return (
    <TelegramProvider>
      <UserProvider>
        <Layout 
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <ActiveComponent />
        </Layout>
      </UserProvider>
    </TelegramProvider>
  );
};

export default App;