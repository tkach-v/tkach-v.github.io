import React from "react";

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const TextArea = ({ id, label, value, onChange, placeholder = "", required = false }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-green-blue-0"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="resize-y min-h-16 max-h-32 bg-coral-9 border border-marine-4 placeholder:text-coral-6 text-coral text-sm rounded font-medium focus:outline-none focus:ring-0 focus:ring-marine-4 focus:border-marine-4 block w-full p-[6px]"
      />
    </div>
  );
};

export default TextArea;
