import React from 'react';

interface Props {
  label: string;
}

export const FileInputPlaceholder = ({ label }:Props) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <i className='fa-solid fa-image text-lg text-marine-4' />

      <span className='text-sm text-green-blue-3'>{label}</span>
    </div>
  );
};
