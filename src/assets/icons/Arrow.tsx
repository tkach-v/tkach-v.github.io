import React from 'react';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  rotated?: boolean;
  className?: string;
};

const Arrow = ({ width = 16, height = 9, color = '#B5CFD6', rotated = false, className = '' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`
        transition-transform duration-300
        ${rotated ? 'rotate-180' : 'rotate-0'}
        ${className}
      `}
    >
      <path
        d='M1.5 8L8 1.5L14.5 8'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Arrow;
