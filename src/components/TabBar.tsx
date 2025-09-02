import React from "react";
import { Tab } from "../types";
import { NavLink } from "react-router";
import { cn } from "../utils";
import { TabPathes } from "../types";

const tabs: Tab[] = [
  { id: 1,
    label: "Dashboard",
    path: TabPathes.DASHBOARD,
  },
  {
    id: 2,
    label: "Your Data",
    path: TabPathes.DATA,
  },
  {
    id: 3,
    label: "Your Assets",
    path: TabPathes.ASSETS,
  },
  {
    id: 4,
    label: "Wallet",
    path: TabPathes.WALLET,
  },
];

const TabBar: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-1 mb-6 bg-gray-900/30 p-1 rounded-xl backdrop-blur-sm">
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.id}
          className={({ isActive }) =>
            cn(
              'w-full flex items-center justify-center gap-2 py-3 px-2 rounded-lg transition-all duration-200 scale-95 "hover:bg-gray-800/50 text-gray-400',
              { "bg-indigo-500 text-white shadow-lg scale-100": isActive }
            )
          }
        >
          <span className="font-medium text-sm text-center">{tab.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
