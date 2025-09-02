import React from "react";
import { Tab } from "../types";

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabBar: React.FC<Props> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-[3px] p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-[88px] py-1 px-2 border-b rounded font-medium text-sm transition-all duration-200 scale-95 whitespace-nowrap text-center ${
            activeTab === tab.id
              ? "text-marine border-marine bg-linear-custom scale-100"
              : "text-coral-3 bg-coral-32 shadow-inset-combo border-transparent"
          }`}
        >
          <span className="font-medium text-sm text-center">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
