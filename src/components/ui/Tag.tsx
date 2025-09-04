import React from 'react';
import { cn } from '../../utils';

type Props = {
  active?: boolean;
  text: string;
}

const Tag: React.FC<Props> = ({ active = false, text }) => {
  return (
    <div
      className={cn(
        `
          flex w-fit min-w-10 flex-shrink-0 justify-center rounded border px-2 py-1 text-sm
          font-medium
        `,
        {
          // eslint-disable-next-line max-len
          'disable:bg-coral-32 disable:border-transparent disable:text-coral-3 disable:shadow-inset-combo border-marine bg-radial-border text-marine shadow-glow-inset hover:bg-linear-custom active:bg-green-blue-6': active,
          'border-transparent text-coral-3 shadow-inset-combo': !active,
        },
      )}
    >
      {text}
    </div>
  );
};


export default Tag;