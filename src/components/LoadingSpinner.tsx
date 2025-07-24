import React from "react";

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
