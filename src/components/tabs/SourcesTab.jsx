// components/tabs/SourcesTab.jsx
import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../contexts/TelegramContext';
import { API_CONFIG, SOURCES_DATA } from '../../config/api';
import SourceCard from '../cards/SourceCard';

const SourcesTab = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { telegramUser, userPayload } = useTelegram();

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_CONFIG.BASE_URL}/user/me`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPayload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);

    } catch (err) {
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('SourcesTab mounted, fetching data...');
    fetchUserData();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log('Page became visible, refreshing data...');
        fetchUserData();
      }
    };

    const handleMessage = (event) => {
      if (event.data.type === 'AUTH_SUCCESS') {
        console.log('Auth success message received, refreshing data...');
        fetchUserData();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('message', handleMessage);

    return () => {
      console.log('SourcesTab unmounting, cleaning up...');
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  if (loading && !userData) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const handleSourceToggle = async (source) => {
    const connected = userData?.[source.key];

    if (connected) {
      if (!window.confirm(`Disconnect ${source.name}?`)) return;

      try {
        const res = await fetch(`${API_CONFIG.BASE_URL}/${source.name.toLowerCase()}/disconnect`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userPayload)
        });

        if (res.status === 204) {
          await fetchUserData();
        }
      } catch (err) {
        alert(`Error: ${err.message}`);
      }
    } else {
      window.Telegram.WebApp.openLink(`${API_CONFIG.BASE_URL}/auth/${source.name.toLowerCase()}?telegram_id=${telegramUser.id}`);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">Connect Your Accounts</h3>
        <p className="text-gray-400">Link your social media accounts to access your data</p>
      </div>

      {SOURCES_DATA.map(source => (
        <SourceCard
          key={source.key}
          source={source}
          connected={userData?.[source.key]}
          onToggle={() => handleSourceToggle(source)}
        />
      ))}
    </div>
  );
};

export default SourcesTab;