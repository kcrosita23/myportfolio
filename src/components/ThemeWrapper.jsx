import React from 'react';

const ThemeWrapper = ({ children, isDark }) => {
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-gray-900 via-black to-black text-white'
        : 'bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-900'
    }`}>
      {children}
    </div>
  );
};

export default ThemeWrapper;