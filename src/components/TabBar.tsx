import React from 'react';
import { Tab, TabPathes } from '../types';
import { NavLink } from 'react-router';
import { cn } from '../utils';

const tabs: Tab[] = [
  { id: 1, label: 'Home Page', path: TabPathes.DASHBOARD },
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
    <div className='rounded-full bg-linear-dark p-[1px]'>
      <div className='flex justify-between gap-[3px] rounded-full bg-linear-dark-overlay px-4'>
        {tabs.map((tab) => (
          <NavLink
            to={tab.path}
            key={tab.id}
            className={({ isActive }) =>
              cn(
                `
                  flex-1 cursor-pointer whitespace-nowrap border-b border-transparent py-2
                  text-center text-sm font-medium text-light-gray
                `,
                {
                  'border-neon-green text-white': isActive,
                },
              )
            }
          >
            <span className='text-center text-sm font-medium'>{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
