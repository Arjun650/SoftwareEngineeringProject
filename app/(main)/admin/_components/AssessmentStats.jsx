import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Award, TrendingUp, Users, Brain } from 'lucide-react';

const AssessmentStats = ({ totalAssessments }) => {
  const assessmentData = [
    { name: 'Jan', assessments: 65 },
    { name: 'Feb', assessments: 78 },
    { name: 'Mar', assessments: 90 },
    { name: 'Apr', assessments: 81 },
    { name: 'May', assessments: 95 },
    { name: 'Jun', assessments: 110 },
    { name: 'Jul', assessments: 120 },
    { name: 'Aug', assessments: 130 },
    { name: 'Sep', assessments: 142 },
    { name: 'Oct', assessments: totalAssessments },
  ];

  const scoreTiers = [
    { name: '90-100', users: 18 },
    { name: '80-89', users: 27 },
    { name: '70-79', users: 32 },
    { name: '60-69', users: 25 },
    { name: '0-59', users: 14 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Assessments</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{totalAssessments}</p>
            </div>
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
              <Brain className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>12% increase</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Completion Rate</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">86%</p>
            </div>
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full">
              <Award className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>4% increase</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Avg. Score</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">76/100</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>2 points higher</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Unique Users</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">245</p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>18% increase</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Assessment Trends
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assessmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => value.toString()}
                />
                <Tooltip />
                <Bar dataKey="assessments" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Score Distribution
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreTiers} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis 
                  type="number" 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  stroke="#6B7280" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip />
                <Bar dataKey="users" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Popular Assessment Types
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Technical Coding', percent: 42 },
              { label: 'General Knowledge', percent: 28 },
              { label: 'Personality', percent: 17 },
              { label: 'Behavioral', percent: 13 },
            ].map(({ label, percent }) => (
              <div className="relative pt-1" key={label}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{percent}%</div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for Recently Completed Assessments */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Recently Completed Assessments
          </h3>
          <div className="text-gray-500 dark:text-gray-400">
            {/* Add your recent assessments UI here */}
            <p>No data available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentStats;
