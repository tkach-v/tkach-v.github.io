// components/tabs/SourcesTab.jsx
import React, { useEffect, useRef } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useTelegram } from '../../contexts/TelegramContext';
import { API_CONFIG, SOURCES_DATA } from '../../config/api';
import SourceCard from '../cards/SourceCard';

const SourcesTab = () => {
  const { userData, fetchUserData, loading } = useUser();
  const { telegramUser, userPayload } = useTelegram();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      fetchUserData();
      hasInitialized.current = true;
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchUserData();
      }
    };

    const handleMessage = (event) => {
      if (event.data.type === 'AUTH_SUCCESS') {
        fetchUserData();
        console.log('Authentication successful, refreshing data...');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('message', handleMessage);

    return () => {
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