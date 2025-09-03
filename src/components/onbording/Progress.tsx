import React, { FC } from 'react';

type Props = {
  progress: number;
  text?: string;
};

const Progress: FC<Props> = ({ progress, text }) => {
  return (
    <div className='flex flex-1 items-center gap-2'>
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

export default Progress;
