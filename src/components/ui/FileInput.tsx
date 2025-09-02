import React, { useRef } from "react";

type Props = {
  label: string;
  onChange: (file: File | null) => void;
};

const FileInput = ({ label, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } else {
      onChange(null);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex items-center justify-center w-full h-16 border border-marine-4 border-dashed rounded cursor-pointer bg-coral-9 hover:bg-coral-8"
      >
        <div className="flex flex-col items-center justify-center">
          <i className="fa-solid fa-image text-marine-4 text-lg" />
          <span className="text-sm text-green-blue-3">
            {label}
          </span>
        </div>
        <input
          ref={inputRef}
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
