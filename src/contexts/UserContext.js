// contexts/UserContext.js
import { createContext, useContext, useState, useCallback } from 'react';
import { API_CONFIG } from '../config/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const tg = window.Telegram?.WebApp;
      if (!tg?.initDataUnsafe?.user) {
        throw new Error('Telegram user data not available');
      }

      const telegramUser = tg.initDataUnsafe.user;

      const response = await fetch(`${API_CONFIG.BASE_URL}/user/me`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telegram_id: telegramUser.id,
          username: telegramUser.username,
          first_name: telegramUser.first_name,
          last_name: telegramUser.last_name,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);

    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    userData,
    setUserData,
    fetchUserData,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};