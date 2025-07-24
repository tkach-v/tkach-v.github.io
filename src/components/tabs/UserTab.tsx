// components/tabs/UserTab.jsx
import React, { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useTelegram } from "../../contexts/TelegramContext";
import { API_CONFIG } from "../../config/api";
import UserInfoCard from "../cards/UserInfoCard";
import Button from "../ui/Button";

const UserTab = () => {
  const { userData, fetchUserData } = useUser();
  const { telegramUser } = useTelegram();

  useEffect(() => {
    if (telegramUser?.id && !userData) {
      fetchUserData();
    }
  }, [telegramUser?.id]);

  const handleGoogleAuth = () => {
    if (userData?.googleSub) {
      alert("Disconnect functionality coming soon!");
    } else {
      window.Telegram.WebApp.openLink(
        `${API_CONFIG.BASE_URL}/auth/google?telegram_id=${telegramUser?.id}`
      );
    }
  };

  const deleteUser = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete all your data? This action cannot be undone."
      )
    )
      return;

    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/user`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(telegramUser),
      });

      if (res.status === 204) {
        window.Telegram.WebApp.close();
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <UserInfoCard userData={userData} />

      <div className="space-y-3">
        {!userData?.googleSub && (
          <Button
            onClick={handleGoogleAuth}
            variant="primary"
            icon="fab fa-google"
          >
            Connect Google Account
          </Button>
        )}

        <Button
          onClick={fetchUserData}
          variant="secondary"
          icon="fas fa-sync-alt"
        >
          Refresh Data
        </Button>

        <Button onClick={deleteUser} variant="danger" icon="fas fa-trash">
          Delete All Data
        </Button>
      </div>
    </div>
  );
};

export default UserTab;
