import React from "react";
import TabBar from "./TabBar";
import LoadingSpinner from "./LoadingSpinner";
import { useUser } from "../contexts/UserContext";
import { Outlet } from "react-router";
import HandsUp from "../assets/icons/HandsUp";


const Layout: React.FC = () => {
  const { loading, error, userData } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-2xl mx-auto p-4 pb-20">
        {userData && (
          <header className="flex flex-row gap-2 mb-4 items-center">
            {userData.googlePicture && (
              <img
                src={userData.googlePicture}
                alt="Profile"
                className="w-12 h-12 rounded-full ring-2 ring-marine shadow-glow-inset"
              />
            )}
            <h1
              className="text-2xl font-semibold text-marine flex flex-col">
              Hello,
              <span className="inline-flex items-center gap-1 ">
                {userData.telegramFirstName}
                <HandsUp />
              </span>
            </h1>
          </header>
        )}

        <TabBar />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center py-8">
            <i className="fas fa-exclamation-circle text-4xl text-red-500 mb-4"></i>
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Layout;
