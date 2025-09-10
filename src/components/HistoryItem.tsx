import React from 'react';

type Props = {
  label: string
  description: string
  price: string
  time: string
  icon: React.ReactNode
}

const HistoryItem: React.FC<Props> = ({ label, description, price, time, icon }) => {
  return (
    <div className='flex flex-row justify-between px-1 py-2'>
      <div className='flex flex-row items-center gap-2'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-dark'>{icon}</div>

        <div className='flex flex-col gap-[2px] text-sm font-medium'>
          <span className='text-teal'>
            {label}
          </span>

          <span className='text-coral-6'>
            {description}
          </span>
        </div>
      </div>

      <div className='flex flex-col items-end gap-[2px] text-sm font-medium'>
        <span className='text-teal'>
            +{price} DAAC
        </span>

        <span className='text-teal-2'>
          {time}
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;