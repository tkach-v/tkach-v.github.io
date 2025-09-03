import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Check = ({ width = 20, height = 20 }: Props) => {
  return (
    <svg
      fill='#99D6FB'
      width={width}
      height={height}
      viewBox='0 0 1920 1920'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z'
        fill-rule='evenodd'
      />
    </svg>
  );
};

export default Check;
