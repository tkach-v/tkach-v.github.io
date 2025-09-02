import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const Radio = ({ label, name, value, checked, onChange }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`${name}-${value}`}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className={`
          w-[20px] h-[20px] mr-3 cursor-pointer appearance-none rounded-full
          border border-green-blue-1 transition-all duration-300  focus:outline-none
          ${checked ? "border-[6px] border-green-blue-1" : "border-2 border-green-blue-1"}`}
      />
      <label
        htmlFor={`${name}-${value}`}
        className="text-sm font-medium text-green-blue-2"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
