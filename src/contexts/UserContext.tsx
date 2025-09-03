import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { UserData } from '../types';
import { useTelegram } from './TelegramContext';
import { getCurrentUser } from '../api/user';

type UserState = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  fetchUserData: () => Promise<void>;
  loading: boolean;
  error: null | string;
};

const UserContext = createContext({} as UserState);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { tgUser } = useTelegram();

  const fetchUserData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!tgUser) {
        throw new Error('Telegram user data not available');
      }

      const data = await getCurrentUser(tgUser.id);

      setUserData(data);
    } catch (err) {
      //@ts-expect-error Type 'Error' includes message.
      setError(err.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  }, [tgUser]);

  const value = {
    userData,
    setUserData,
    fetchUserData,
    loading,
    error,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
