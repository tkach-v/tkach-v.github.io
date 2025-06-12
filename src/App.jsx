// App.jsx
import React, { useState, useEffect } from 'react';
import { UserProvider } from './contexts/UserContext';
import { TelegramProvider } from './contexts/TelegramContext';
import Layout from './components/Layout';
import UserTab from './components/tabs/UserTab';
import SourcesTab from './components/tabs/SourcesTab';
import PlatformTab from './components/tabs/PlatformTab';
import ErrorScreen from './components/ErrorScreen';
import { API_CONFIG } from './config/api';
import './styles/globals.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor('#1a1a1a');
      window.Telegram.WebApp.setBackgroundColor('#0a0a0a');
    }
  }, []);

  const telegramUser = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

  const userPayload = {
    id: telegramUser.id,
    first_name: telegramUser.first_name || "",
    last_name: telegramUser.last_name || "",
    username: telegramUser.username || "",
    language_code: telegramUser.language_code || ""
  };

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_CONFIG.BASE_URL}/user/me`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload)
      });

      if (!res.ok) throw new Error('Failed to fetch user data');

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (telegramUser.id) {
      fetchUserData();
    }
  }, [telegramUser.id]);

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
    <TelegramProvider value={{ telegramUser, userPayload }}>
      <UserProvider value={{ userData, setUserData, fetchUserData, loading, error }}>
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