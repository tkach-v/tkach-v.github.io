import React from "react";
import FileInput from "./FileInput";

type Props = {
  type?: "img" | "document"
  label: string;
  file?: File | null;
  onChange: (file: File | null) => void;
};


const FileUpload = ({ label, file, type, onChange }: Props) => {

  if (file) {
    if (type === "img") {
      const fileURL = file ? URL.createObjectURL(file) : null;
      return (
        <div className="w-full h-16 flex items-center justify-center border border-marine rounded overflow-hidden">
          <img
            src={fileURL || ""}
            alt={file.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      );
    }

  }

  return (
    <FileInput
      label={label}
      onChange={(newFile) => onChange(newFile)}
    />
  );
};

export default FileUpload;