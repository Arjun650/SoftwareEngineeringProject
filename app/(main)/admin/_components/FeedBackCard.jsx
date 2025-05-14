import React from 'react';
import { ThumbsUp, ThumbsDown, Clock } from 'lucide-react';

const FeedbackCard = ({ feedback }) => {
  // Format date 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Determine if feedback is positive or negative
  const isPositive = feedback.helpful.toLowerCase().includes('yes') || 
                     feedback.helpful.toLowerCase().includes('helpful');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {feedback.name}
          </h3>
          <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDate(feedback.createdAt)}</span>
          </div>
        </div>
        <div className={`flex items-center p-2 rounded-full ${
          isPositive 
            ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
            : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
        }`}>
          {isPositive 
            ? <ThumbsUp className="w-5 h-5" /> 
            : <ThumbsDown className="w-5 h-5" />
          }
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Was it helpful?</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{feedback.helpful}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Improvements Needed</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{feedback.improvement}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{feedback.reason}</p>
        </div>
      </div>
      
      <div className="flex justify-end mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
          Respond
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
