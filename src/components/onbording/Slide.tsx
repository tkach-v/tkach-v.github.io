import React from 'react';
import { OnboardingSlide } from '../../types';
import { cn } from '../../utils';

type Props = {
  slide: OnboardingSlide;
  children?: React.ReactNode;
};

const Slide: React.FC<Props> = ({ slide, children }) => {
  const { title, description, Icon } = slide;

  return (
    <div
      className={cn('flex h-full w-full flex-col items-center justify-center', {
        'justify-between': !!children,
      })}
    >
      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <span className='text-sm font-bold text-black'>{title}</span>

          <span className='text-xs font-medium text-black'>{description}</span>
        </div>

        <div className={`
          flex h-10 w-10 items-center justify-center rounded-full
          bg-[radial-gradient(421.88%_421.88%_at_50%_50%,_#002135_0%,_#96D1F6_100%)]
        `}>
          <Icon />
        </div>
      </div>

      {children}
    </div>
  );
};

export default Slide;
