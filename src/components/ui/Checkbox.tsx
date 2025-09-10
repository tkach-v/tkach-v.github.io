import React from 'react';
import { cn } from '../../utils';

type Props = {
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: Props) => {
  return (
    <div className='flex items-center'>
      <input
        id='controlled-checkbox'
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={cn(
          `
            h-5 w-5 flex-shrink-0 rounded-sm border border-neon-green accent-neon-green
            focus:ring-neon-green
          `,
          checked ? 'bg-neon-green' : 'appearance-none',
        )}
      />

      <label
        htmlFor='controlled-checkbox'
        className='ms-3 text-sm font-medium text-green-blue-2'
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
