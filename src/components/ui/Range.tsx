import React from "react";

type Props = {
  value: number;
  setValue: (newValue: number) => void;
  label?: string;
};

const Range = ({ value, setValue, label }: Props) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor="controlled-range"
          className="block mb-2 text-sm font-medium text-green-blue-2"
        >
          {label}
        </label>
      )}

      <div className="flex items-center flex-row gap-2">
        <div className="relative w-full">
          <div
            className="absolute -top-7 font-medium text-sm text-coral"
            style={{ left: `calc(${value}% - 12px)` }}
          >
            {value}%
          </div>

          <div className="h-2 bg-white rounded-full">
            <div
              className="h-2 bg-pink-bright rounded-full"
              style={{ width: `${value}%` }}
            />
          </div>

          <input
            id="controlled-range"
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={`
              absolute inset-0 w-full h-2 appearance-none bg-transparent cursor-grab
              focus:outline-none
              [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:h-0 [&::-webkit-slider-thumb]:appearance-none
              [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:h-0 [&::-moz-range-thumb]:appearance-none
              [&::-ms-thumb]:w-0 [&::-ms-thumb]:h-0 [&::-ms-thumb]:appearance-none
            `}
            aria-label={label || "range"}
          />
        </div>

        <span className="text-sm font-medium text-coral">100%</span>
      </div>
    </div>
  );
};

export default Range;
