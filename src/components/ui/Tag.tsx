import React from 'react';
import { cn } from '../../utils';

type Props = {
  active?: boolean;
  text: string;
}

const Tag = ({ active = false, text }: Props) => {
  return (
    <div
      className={cn(
        `
          flex w-fit min-w-10 flex-shrink-0 justify-center rounded border px-2 py-1 text-sm
          font-medium
        `,
        active ? 'border-marine bg-radial-border text-marine shadow-glow-inset' : `
          border-transparent text-coral-3 shadow-inset-combo
        `,
      )}>
      {text}
    </div>
  );
};

export default Tag;