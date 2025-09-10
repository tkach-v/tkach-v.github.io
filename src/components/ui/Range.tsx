import React from 'react';

type Props = {
  value: number;
  setValue: (newValue: number) => void;
  label?: string;
};

const Range = ({ value, setValue, label }: Props) => {
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor='controlled-range'
          className='mb-7 block text-sm font-medium text-coral'
        >
          {label}
        </label>
      )}

      <div className='flex flex-row items-center gap-2'>
        <div className='relative w-full'>
          <div
            className='absolute -top-7 text-sm font-medium text-coral'
            style={{ left: `${value}%` }}
          >
            {value}%
          </div>

          <div className='h-2 rounded-full bg-white'>
            <div
              className='bg-purple-light-gradient h-2 rounded-full'
              style={{ width: `${value}%` }}
            />
          </div>

          <input
            id='controlled-range'
            type='range'
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={`
              absolute inset-0 h-2 w-full cursor-grab appearance-none bg-transparent
              focus:outline-none
              [&::-moz-range-thumb]:h-0 [&::-moz-range-thumb]:w-0
              [&::-moz-range-thumb]:appearance-none [&::-ms-thumb]:h-0 [&::-ms-thumb]:w-0
              [&::-ms-thumb]:appearance-none [&::-webkit-slider-thumb]:h-0
              [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:appearance-none
            `}
            aria-label={label || 'range'}
          />
        </div>

        <span className='text-sm font-medium text-coral'>100%</span>
      </div>
    </div>
  );
};

export default Range;
