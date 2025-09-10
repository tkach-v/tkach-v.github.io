import React from 'react';
import { cn } from '../utils';

const actions = [
  {
    id: 1,
    label: 'Send',
    icon: 'fa-solid fa-arrow-up',
  },
  {
    id: 2,
    label: 'Receive',
    icon: 'fa-solid fa-arrow-down',
  },
  {
    id: 3,
    label: 'Buy',
    icon: 'fa-solid fa-plus',
  },
  {
    id: 4,
    label: 'Sell',
    icon: 'fa-solid fa-minus',
  },
  {
    id: 5,
    label: 'Swap',
    icon: 'fa-solid fa-right-left',
  },
];

type Props = {
  active: number;
  onChange: (e:number) => void;
};

const WalletBar: React.FC<Props> = ({ active , onChange}) => {
  return (
    <div className='h-fit rounded-xl bg-linear-dark p-[1px]'>
      <div className='flex justify-between gap-3 rounded-xl bg-linear-dark-overlay p-2'>
        {actions.map((action) => (
          <button
            key={action.id}
            className='flex flex-col items-center gap-2 px-1'
            onClick={() => onChange(action.id)}
          >
            <div
              className={cn(
                `
                  flex h-10 w-10 items-center justify-center rounded-full border border-green-blue-0
                  bg-radial-border
                `,
                active === action.id && 'border-transparent bg-green-gradient',
              )}
            >
              <i
                className={cn(
                  action.icon,
                  'text-green-blue-2',
                  action.id === active && 'text-black',
                )}
              />
            </div>

            <label
              className={cn(
                'text-sm font-medium text-gray',
                active === action.id && 'text-green-blue-0',
              )}
            >
              {action.label}
            </label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WalletBar;
