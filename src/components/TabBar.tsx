import React from 'react';
import { Tab } from '../types';
import { NavLink } from 'react-router';
import { cn } from '../utils';
import { TabPathes } from '../types';

const tabs: Tab[] = [
  { id: 1, label: 'Dashboard', path: TabPathes.DASHBOARD },
  {
    id: 2,
    label: 'Your Data',
    path: TabPathes.DATA,
  },
  {
    id: 3,
    label: 'Your Assets',
    path: TabPathes.ASSETS,
  },
  {
    id: 4,
    label: 'Wallet',
    path: TabPathes.WALLET,
  },
];

const TabBar: React.FC = () => {
  return (
    <div className='flex gap-[3px] p-1'>
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.id}
          className={({ isActive }) =>
            cn(
              `
                flex-1 scale-95 whitespace-nowrap rounded border-b border-transparent bg-coral-32
                px-2 py-1 text-center text-sm font-medium text-coral-3 shadow-inset-combo
                transition-all duration-200
              `,
              {
                'scale-100 border-marine bg-linear-custom text-marine':
                  isActive,
              },
            )
          }
        >
          <span className='text-center text-sm font-medium'>{tab.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
