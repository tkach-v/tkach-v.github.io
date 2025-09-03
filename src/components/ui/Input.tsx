import React from 'react';

type Props = {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  currency?: boolean;
};

const Input = ({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  currency = false,
}: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label
          htmlFor={id}
          className='block text-sm font-semibold text-green-blue-0'
        >
          {label}
        </label>
      )}

      <div className='relative w-full'>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            block h-9 w-full rounded border border-marine-4 bg-coral-9 p-[6px] text-sm font-medium
            text-coral
            placeholder:text-coral-6
            focus:border-marine-4 focus:outline-none focus:ring-0 focus:ring-marine-4
            ${
    currency ? 'pr-12' : ''
    }
          `}
        />

        {currency && (
          <div
            className={`
              pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 rounded bg-dark-blue p-1
              text-sm font-medium text-marine
            `}>
            DAAC
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
