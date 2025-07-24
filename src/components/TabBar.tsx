// components/TabBar.jsx
import React from 'react';

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-2 mb-6 bg-gray-900/30 p-1 rounded-xl backdrop-blur-sm">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-200 ${
            activeTab === tab.id 
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
              : 'hover:bg-gray-800/50 text-gray-400'
          }`}
        >
          <i className={tab.icon}></i>
          <span className="font-medium">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;