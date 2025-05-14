import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({
  title,
  value,
  icon,
  change,
  changeLabel,
  className = '',
}) => {
  const getChangeColor = (change) => {
    if (change === undefined) return '';
    return change >= 0 
      ? 'text-emerald-500 dark:text-emerald-400' 
      : 'text-red-500 dark:text-red-400';
  };

  const getChangeIcon = (change) => {
    if (change === undefined) return null;
    return change >= 0 
      ? <ArrowUp className="h-3 w-3" /> 
      : <ArrowDown className="h-3 w-3" />;
  };

  return (
    <div className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {value}
          </p>
          {change !== undefined && (
            <div className={`flex items-center mt-2 ${getChangeColor(change)}`}>
              {getChangeIcon(change)}
              <span className="text-xs font-medium ml-1">
                {Math.abs(change)}% {changeLabel || ''}
              </span>
            </div>
          )}
        </div>
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
