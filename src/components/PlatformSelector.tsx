import React from 'react';
import { Platform } from '../types';

type Props = {
  platforms: Platform[];
  selectedPlatform: string;
  selectedDataType: string;
  onPlatformChange: React.Dispatch<React.SetStateAction<string>>;
  onDataTypeChange: React.Dispatch<React.SetStateAction<string>>;
};

const PlatformSelector: React.FC<Props> = ({
  platforms,
  selectedPlatform,
  selectedDataType,
  onPlatformChange,
  onDataTypeChange,
}) => {
  const currentPlatform = platforms.find((p) => p.value === selectedPlatform);

  return (
    <div className='space-y-4'>
      <div>
        <label className='text-gray-400 mb-2 block text-sm font-medium'>
          Select Platform
        </label>

        <div className='relative'>
          <select
            value={selectedPlatform}
            onChange={(e) => {
              const newPlatform = e.target.value;
              const platform = platforms.find((p) => p.value === newPlatform);
              onPlatformChange(newPlatform);
              platform && onDataTypeChange(platform.types[0].value);
            }}
            className={`
              border-gray-700 bg-gray-800 w-full cursor-pointer appearance-none rounded-lg border
              px-4 py-3 text-white
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
            `}
          >
            {platforms.map((p) => (
              <option key={p.value} value={p.value}>
                {p.platform}
              </option>
            ))}
          </select>

          <i className={`
            fas fa-chevron-down text-gray-400 pointer-events-none absolute right-4 top-1/2
            -translate-y-1/2 transform
          `}></i>
        </div>
      </div>

      <div>
        <label className='text-gray-400 mb-2 block text-sm font-medium'>
          Data Type
        </label>

        <div className='relative'>
          <select
            value={selectedDataType}
            onChange={(e) => onDataTypeChange(e.target.value)}
            className={`
              border-gray-700 bg-gray-800 w-full cursor-pointer appearance-none rounded-lg border
              px-4 py-3 text-white
              focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
            `}
          >
            {currentPlatform?.types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <i className={`
            fas fa-chevron-down text-gray-400 pointer-events-none absolute right-4 top-1/2
            -translate-y-1/2 transform
          `}></i>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector;
