import React, { FC } from 'react';

type Props = {
  total: number;
  ready: number;
  text?: string;
};

const ProgressBar: FC<Props> = ({ total, ready, text }) => {
  const progress = (ready / total) * 100;

  return (
    <div className='flex w-full items-center gap-2'>
      <div className='relative h-2 w-full rounded-md bg-white'>
        <div
          className={`
            absolute bottom-0 left-0 top-0 rounded-md bg-[#262A31]
            w-[${progress}%]
          `}
        ></div>
      </div>

      {text && <span className='text-xs font-bold text-black'>{text}</span>}
    </div>
  );
};

export default ProgressBar;
