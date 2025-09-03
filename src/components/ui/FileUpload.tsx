import React from 'react';
import FileInput from './FileInput';
import { FileInputPlaceholder } from './FileInputPlaceholder';
import Csv from '../../assets/icons/Csv';

type Props = {
  name: string;
  type?: 'img' | 'document'
  label: string;
  file?: File | null;
  onChange: (file: File | null) => void;
};


const FileUpload = ({ name, label, file, type = 'img', onChange }: Props) => {

  if (file) {
    if (type === 'img') {
      const fileURL = file ? URL.createObjectURL(file) : null;
      return (
        <FileInput
          name={name}
          className={`
            flex h-16 w-full items-center justify-center overflow-hidden rounded border
            border-marine
          `}
          node={<img
            src={fileURL || ''}
            alt={file.name}
            className='max-h-full max-w-full object-contain'
          />}
          onChange={(newFile) => onChange(newFile)}
        />
      );
    }
    if (type === 'document') {
      return (
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1 text-xs font-medium'>
            <span className='text-green-blue-0'>Uploaded Files</span>

            <span className='truncate text-green-blue-2'>{file.name}</span>
          </div>

          <div className={`
            relative flex h-[72px] w-[64px] items-center justify-center rounded bg-teal-6
          `}>
            <button
              className={`
                absolute right-1 top-1 flex h-5 w-5 cursor-pointer items-center justify-center
                rounded bg-teal-7 text-teal
                hover:bg-green-blue-6
              `}
              onClick={() => onChange(null)}
            >
              -
            </button>

            <div className='flex w-10 flex-col items-center gap-1 overflow-hidden'>
              <Csv />

              <span className='w-full truncate text-center text-xs font-medium text-green-blue-2'>{file.name}</span>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <FileInput
      name={name}
      className={`
        h-16 cursor-pointer rounded border border-dashed border-marine-4 bg-coral-9
        hover:bg-coral-8
      `}
      node={<FileInputPlaceholder label={label} />}
      onChange={(newFile) => onChange(newFile)}
    />
  );
};

export default FileUpload;