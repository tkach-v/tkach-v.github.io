import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  PropsWithChildren,
} from "react";
import { API_CONFIG } from "../config/api";
import { UserData } from "../types";
import { useTelegram } from "./TelegramContext";

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
        throw new Error("Telegram user data not available");
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}/user/me`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tgUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
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
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};
