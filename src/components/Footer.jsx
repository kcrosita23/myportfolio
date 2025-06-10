import React from 'react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`py-8 ${
      isDark ? 'border-t border-white/10' : 'border-t border-gray-200'
    }`}>
      <div className={`container mx-auto px-4 text-center ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <p>&copy; 2025 Kim Carlo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;