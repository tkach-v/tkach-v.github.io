import React from "react";
import FileInput from "./FileInput";
import { FileInputPlaceholder } from "./FileInputPlaceholder";
import Csv from "../../assets/icons/Csv";

type Props = {
  type?: "img" | "document"
  label: string;
  file?: File | null;
  onChange: (file: File | null) => void;
};


const FileUpload = ({ label, file, type = "img", onChange }: Props) => {

  if (file) {
    if (type === "img") {
      const fileURL = file ? URL.createObjectURL(file) : null;
      return (
        <FileInput
          name="img-file"
          className="w-full h-16 flex items-center justify-center border border-marine rounded overflow-hidden"
          node={<img
            src={fileURL || ""}
            alt={file.name}
            className="max-w-full max-h-full object-contain"
          />}
          onChange={(newFile) => onChange(newFile)}
        />
      );
    }
    if (type === "document") {
      return (
        <div className="flex flex-col gap-2">
          <div className="font-medium text-xs flex flex-col gap-1">
            <span className="text-green-blue-0">Uploaded Files</span>
            <span className="text-green-blue-2 truncate">{file.name}</span>
          </div>
          <div className="relative h-[72px] w-[64px] bg-teal-6 rounded flex items-center justify-center">
            <button
              className="absolute top-1 right-1 w-5 h-5 hover:bg-green-blue-6 bg-teal-7 text-teal rounded cursor-pointer flex items-center justify-center"
              onClick={() => onChange(null)}
            >
              -
            </button>
            <div className="flex flex-col items-center gap-1 w-10 overflow-hidden">
              <Csv />
              <span className="text-green-blue-2 truncate text-xs text-center font-medium w-full">{file.name}</span>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <FileInput
      name="dropzone-file"
      className="h-16 border border-marine-4 border-dashed rounded cursor-pointer bg-coral-9 hover:bg-coral-8"
      node={<FileInputPlaceholder label={label} />}
      onChange={(newFile) => onChange(newFile)}
    />
  );
};

export default FileUpload;