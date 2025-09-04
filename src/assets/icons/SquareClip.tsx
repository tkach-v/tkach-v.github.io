/* eslint-disable max-len */
import React from 'react';

type Props = {
  width?: number;
  height?: number;
  stroke?: string;
  color?: string;
};

const SquareClip = ({ width = 16, height = 16, color='#050A0B', stroke='#D7EAEF' }: Props) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='22' height='22' rx='2' fill={color} />

      <g clip-path='url(#clip0_622_23995)'>
        <path
          d='M9.00016 5.66683V4.3335M13.0002 16.3335V17.6668M5.66683 9.00016H4.3335M16.3335 13.0002H17.6668M6.27631 6.27631L5.3335 5.3335M15.724 15.724L16.6668 16.6668M11.0002 14.7714L9.58595 16.1856C8.54455 17.227 6.85611 17.227 5.81471 16.1856C4.77331 15.1442 4.77331 13.4558 5.81471 12.4144L7.22893 11.0002M14.7714 11.0002L16.1856 9.58595C17.227 8.54455 17.227 6.85611 16.1856 5.81471C15.1442 4.77332 13.4558 4.77332 12.4144 5.81471L11.0002 7.22893'
          stroke={stroke}
          stroke-width='1.25'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>

      <defs>
        <clipPath id='clip0_622_23995'>
          <rect
            width={width}
            height={height}
            fill='white'
            transform='translate(3 3)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareClip;
