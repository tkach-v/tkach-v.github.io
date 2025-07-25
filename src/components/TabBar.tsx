import React from "react";
import { Tab } from "../types";

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabBar: React.FC<Props> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-6 bg-gray-900/30 p-1 rounded-xl backdrop-blur-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-full flex items-center justify-center gap-2 py-3 px-2 rounded-lg transition-all duration-200 scale-95 ${
            activeTab === tab.id
              ? "bg-indigo-500 text-white shadow-lg scale-100"
              : "hover:bg-gray-800/50 text-gray-400"
          }`}
        >
          <i className={tab.icon}></i>
          <span className="font-medium text-sm text-center">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
