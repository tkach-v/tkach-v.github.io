import React from "react";
import TabBar from "./TabBar";
import LoadingSpinner from "./LoadingSpinner";
import { useUser } from "../contexts/UserContext";

type Props = {
  children: React.ReactNode;
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const Layout: React.FC<Props> = ({
  children,
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const { loading, error } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-2xl mx-auto p-4 pb-20">
        <header className="mb-6 pt-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Profile Hub
          </h1>
          <p className="text-gray-400 mt-1">Manage your connected accounts</p>
        </header>

        <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-xl">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-center py-8">
              <i className="fas fa-exclamation-circle text-4xl text-red-500 mb-4"></i>
              <p className="text-red-400">{error}</p>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
