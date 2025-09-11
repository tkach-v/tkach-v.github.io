import React from 'react';
import ProgressBar from './ProgressBar';

type Props = {
  total: number;
  ready: number;
  text?: string;
  onClick?: () => void;
};

const Progress: React.FC<Props> = ({ total, ready, onClick }) => {
  return (
    <div className={'flex w-full flex-col justify-between'} onClick={onClick}>
      <span className='text-sm font-bold text-black'>Onboarding Progress:</span>

      <div className='flex flex-col gap-1'>
        <div className='flex gap-0.5 text-xs text-black'>
          <span className='font-medium'>Complete all steps to receive</span>

          <span className='font-bold'>10 DAAC</span>
        </div>

        <ProgressBar total={total} ready={ready} text={`${ready}/${total}`} />
      </div>
    </div>
  );
};

export default Progress;
