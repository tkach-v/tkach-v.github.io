import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Plus = ({ width = 20, height = 20 }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 1V13M1 7H13'
        stroke='#99D6FB'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Plus;
