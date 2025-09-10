import React from 'react';
import { cn } from '../../utils';

type Props = {
  active?: boolean;
  text: string;
}

const Tag: React.FC<Props> = ({ active = false, text }) => {
  return (
    <button
      className={cn(
        `
          flex w-fit min-w-10 flex-shrink-0 cursor-pointer justify-center rounded border px-2 py-1
          text-sm font-medium
        `,
        {
          // eslint-disable-next-line max-len
          'disable:bg-coral-32 disable:border-transparent disable:text-coral-3 disable:shadow-inset-combo border-neon-green bg-radial-green text-white hover:bg-green-gradient hover:text-black active:bg-dark-blue': active,
          'border-transparent text-coral-3 shadow-inset-combo': !active,
        },
      )}
    >
      {text}
    </button>
  );
};


export default Tag;