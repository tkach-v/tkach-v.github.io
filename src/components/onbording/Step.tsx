import React from 'react';
import { OnboardingStep } from '../../types';
import Flag from '../../assets/icons/Flag';
import { cn } from '../../utils';
import { Link } from 'react-router';

type Props = {
  step: OnboardingStep;
};

const Step: React.FC<Props> = ({ step }) => {
  const { title, description, completed, Icon } = step;

  return (
    <Link
      to={step.url}
      className='flex h-[40px] w-full flex-col justify-center'
    >
      <div className='flex w-full gap-3'>
        <div
          className={cn(
            `
              flex h-10 w-10 items-center justify-center rounded-full border border-white
              bg-[radial-gradient(421.88%_421.88%_at_50%_50%,#002135_0%,#91F800_100%)]
            `,
            {
              'bg-[radial-gradient(120%_120%_at_50%_50%,#002135_0%,#91F800_100%)]':
                completed,
            },
          )}
        >
          {completed ? <Flag /> : <Icon />}
        </div>

        <div className='flex flex-col justify-center'>
          <span className='text-sm font-bold text-black'>
            {completed ? 'Task is complete' : title}
          </span>

          <span className='text-xs font-medium text-black'>{description}</span>
        </div>
      </div>
    </Link>
  );
};

export default Step;
