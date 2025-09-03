import React from "react";

type Props = {
  id: string;
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  currency?: boolean;
};

const Input = ({
                 id,
                 label,
                 value,
                 onChange,
                 placeholder = "",
                 type = "text",
                 required = false,
                 currency = false,
               }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-green-blue-0"
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`bg-coral-9 border h-9 border-marine-4 placeholder:text-coral-6 text-coral text-sm rounded font-medium focus:outline-none focus:ring-0 focus:ring-marine-4 focus:border-marine-4 block w-full p-[6px] ${
            currency ? "pr-12" : ""
          }`}
        />
        {currency && (
          <div
            className="absolute right-1 top-1/2 -translate-y-1/2 p-1 text-marine rounded bg-dark-blue text-sm font-medium pointer-events-none">
            DAAC
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
