import React, { useEffect, useState } from 'react';
import { 
  Bell, 
  Moon, 
  Sun, 
  Search,
  User
} from 'lucide-react';

const Header = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  
  // Initialize dark mode from system or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="z-10 py-4 bg-white shadow-sm dark:bg-gray-800 transition-colors duration-200">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Mobile hamburger */}
        {children}
        
        {/* Search */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              type="text"
              placeholder="Search for anything..."
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
          
          {/* Notifications */}
          <button
            className="relative p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1 -translate-y-1 bg-red-600 rounded-full"></span>
          </button>
          
          {/* Profile */}
          <button
            className="flex items-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-200"
            aria-label="Account"
          >
            <div className="p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
