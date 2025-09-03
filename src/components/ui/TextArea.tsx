import React from 'react';

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const TextArea = ({ id, label, value, onChange, placeholder = '', required = false }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label
        htmlFor={id}
        className='mb-2 block text-sm font-semibold text-green-blue-0'
      >
        {label}
      </label>

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`
          block max-h-32 min-h-16 w-full resize-y rounded border border-marine-4 bg-coral-9 p-[6px]
          text-sm font-medium text-coral
          placeholder:text-coral-6
          focus:border-marine-4 focus:outline-none focus:ring-0 focus:ring-marine-4
        `}
      />
    </div>
  );
};

export default TextArea;
