import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FeedbackStats = ({ feedbacks }) => {
  // Count positive and negative feedback
  const positiveCount = feedbacks.filter(feedback => 
    feedback.helpful.toLowerCase().includes('yes') || 
    feedback.helpful.toLowerCase().includes('helpful')
  ).length;
  
  const negativeCount = feedbacks.length - positiveCount;
  
  // Prepare data for pie chart
  const data = [
    { name: 'Positive', value: positiveCount },
    { name: 'Negative', value: negativeCount },
  ];
  
  const COLORS = ['#10B981', '#EF4444'];
  
  // Calculate percentages
  const positivePercentage = Math.round((positiveCount / feedbacks.length) * 100) || 0;
  const negativePercentage = 100 - positivePercentage;
  
  // Group feedbacks by date for trend analysis
  const feedbacksByMonth = {};
  
  feedbacks.forEach(feedback => {
    const date = new Date(feedback.createdAt);
    const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    if (!feedbacksByMonth[monthYear]) {
      feedbacksByMonth[monthYear] = 0;
    }
    
    feedbacksByMonth[monthYear]++;
  });
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 md:col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Feedback Sentiment
        </h3>
        
        <div className="flex items-center">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="ml-4">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Positive: {positiveCount} ({positivePercentage}%)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Negative: {negativeCount} ({negativePercentage}%)
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Common Themes
        </h3>
        
        <div className="space-y-3">
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                UI/UX Issues
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                65%
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
          
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Performance
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                45%
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Features
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                30%
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackStats;
