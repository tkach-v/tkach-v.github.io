import React from 'react';

const LoadingSpinner = () => (
  <div className='flex items-center justify-center py-12'>
    <div className='relative'>
      <div className={`
        border-gray-700 h-16 w-16 animate-spin rounded-full border-4 border-t-blue-500
      `}></div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className={`
          h-8 w-8 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600
        `}></div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
