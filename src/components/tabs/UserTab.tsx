import React, { useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useTelegram } from "../../contexts/TelegramContext";
import { API_CONFIG } from "../../config/api";
import UserInfoCard from "../cards/UserInfoCard";
import Button from "../ui/Button";

const UserTab = () => {
  const { userData, fetchUserData } = useUser();
  const { tgUser, tgApp } = useTelegram();

  useEffect(() => {
    if (tgUser?.id && !userData) {
      void fetchUserData();
    }
  }, [tgUser?.id]);

  const handleGoogleAuth = () => {
    if (userData?.googleSub) {
      alert("Disconnect functionality coming soon!");
    } else {
     tgApp?.openLink(
        `${API_CONFIG.BASE_URL}/auth/google?telegram_id=${tgUser?.id}`,
      );
    }
  };

  const deleteUser = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete all your data? This action cannot be undone.",
      )
    )
      return;

    try {
      const res = await fetch(`${API_CONFIG.BASE_URL}/user`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tgUser),
      });

      if (res.status === 204) {
       tgApp?.close();
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (err) {
      //@ts-expect-error Type 'Error' includes message.
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
