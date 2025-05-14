import React, { useState } from 'react';
import { PlusCircle, Filter, ExternalLink } from 'lucide-react';

const JobListingTable = ({ jobListings }) => {
  const [statusFilter, setStatusFilter] = useState('all');

  const enhancedListings = jobListings.map((job, index) => ({
    id: job.id || `job-${index}`,
    title: job.title || 'Untitled',
    location: job.location || 'Remote',
    type: job.jobType || ['Full-time', 'Part-time', 'Contract'][Math.floor(Math.random() * 3)],
    department: job.industry || ['Engineering', 'Marketing', 'Product', 'Design', 'Operations'][Math.floor(Math.random() * 5)],
    status: typeof job.status === 'string' ? job.status : 'active',
    posted: job.postedAt 
  ? new Date(job.postedAt).toLocaleDateString() 
  : `${Math.floor(Math.random() * 30) + 1} days ago`

  }));

  const filteredListings = statusFilter === 'all'
    ? enhancedListings
    : enhancedListings.filter(job => job.status === statusFilter);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-0">
          Job Listings ({filteredListings.length})
        </h3>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative">
            <select
              className="pl-4 pr-8 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 appearance-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="closed">Closed</option>
            </select>
            <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:ml-2">
            <PlusCircle className="w-4 h-4" />
            <span>Create Job</span>
          </button> */}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {['Job Title', 'Department', 'Type', 'Location',  'Status', 'Posted', 'Actions'].map(header => (
                <th key={header} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${header === 'Actions' ? 'text-right' : ''}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredListings.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{job.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : job.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {job.posted}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300 mr-3">
                    Edit
                  </button>
                  <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                    <ExternalLink className="w-4 h-4 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredListings.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          No job listings found matching selected filters
        </div>
      )}
    </div>
  );
};

export default JobListingTable;
