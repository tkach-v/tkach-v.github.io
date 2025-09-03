import React, { ReactNode, useRef } from 'react';
import { cn } from '../../utils';

type Props = {
  node: ReactNode;
  onChange: (file: File | null) => void;
  className?: string;
  name: string;
};

const FileInput = ({ node, onChange, className = '', name }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    } else {
      onChange(null);
    }
  };

  return (
    <div className='flex w-full items-center justify-center'>
      <label
        htmlFor={name}
        className={cn('flex w-full items-center justify-center', className)}
      >
        {node}

        <input
          ref={inputRef}
          id={name}
          type='file'
          className='hidden'
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
