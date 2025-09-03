import React from "react";
import { cn } from "../../utils";

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: Props) => {
  return (
    <div className="flex items-center">
      <input
        id="controlled-checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={cn(
          "w-5 h-5 rounded-sm border border-green-blue-1 focus:ring-green-blue-1 accent-green-blue-1",
          checked ? "bg-green-blue-1" : "appearance-none",
        )}
      />
      <label
        htmlFor="controlled-checkbox"
        className="ms-3 text-sm font-medium text-green-blue-2"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
