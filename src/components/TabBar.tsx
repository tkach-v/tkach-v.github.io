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
    <div className="flex gap-[3px] p-1">
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.id}
          className={({ isActive }) =>
            cn(
              'w-[88px] py-1 px-2 border-b rounded font-medium text-sm transition-all duration-200 scale-95 whitespace-nowrap text-center text-coral-3 bg-coral-32 shadow-inset-combo border-transparent',
              { "text-marine border-marine bg-linear-custom scale-100": isActive }
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
