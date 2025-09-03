import React from 'react';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  rotated?: boolean;
  className?: string;
};

const Arrow = ({ width = 16, height = 17, color = '#B5CFD6', rotated = false, className = '' }: Props) => {
  return (
    <svg
      width={width}
      className={`
        transition-transform duration-300
        ${rotated ? 'rotate-180' : 'rotate-0'}
        ${className}
      `}
      height={height} viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.5 6L8 12.5L14.5 6' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};

export default Arrow;
