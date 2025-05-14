// "use client"

// import React, { useEffect } from 'react'
// import getAdminDashboardData from '@/actions/adminData'
// import useFetch from '@/hooks/use-fetch'

// const page = () => {
//     const {
//         loading, 
//         fn: getAdminDataFn, 
//         data, 
        
//     } = useFetch(getAdminDashboardData); 

//     // Fetch data when the component mounts
//     useEffect(() => {
//         getAdminDataFn();
//     }, []);

//     // If loading, show a loading indicator
//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     // If there's an error, show the error message


//     // If data is available, display it
//     return (
//         <div>
//             <h1>Admin Dashboard</h1>
            
//             <h2>Users:</h2>
//             <ul>
//                 {data?.users?.map((user) => (
//                     <li key={user.id}>{user.name} - {user.email}</li>
//                 ))}
//             </ul>
            
//             <h2>Feedbacks:</h2>
//             <ul>
//                 {data?.feedbacks?.map((feedback) => (
//                     <li key={feedback.id}>
//                         <strong>Name:</strong> {feedback.name} <br />
//                         <strong>Helpful:</strong> {feedback.helpful} <br />
//                         <strong>Improvement:</strong> {feedback.improvement} <br />
//                         <strong>Reason:</strong> {feedback.reason} <br />
//                         <strong>Created At:</strong> {new Date(feedback.createdAt).toLocaleString()} <br />
//                     </li>
//                 ))}
//             </ul>

//             <h2>Job Listings:</h2>
//             <ul>
//                 {data?.jobListings?.map((jobListing, index) => (
//                     <li key={index}>{jobListing.title}</li>
//                 ))}
//             </ul>

//             <h2>Total Assessments: {data?.totalAssessments}</h2>
//         </div>
//     )
// }

// export default page;

"use client"


import React, { useState, useEffect } from 'react';

import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Brain,
  Clock 
} from 'lucide-react';
import useFetch from '@/hooks/use-fetch';
import DashboardLayout from './_components/DashboardLayout';
import StatCard from './_components/StatCard';
import UserTable from './_components/userTable';
import JobListingTable from './_components/JobListingTable';
import FeedbackStats from './_components/FeedBackStats';
import FeedbackCard from './_components/FeedBackCard';
import getAdminDashboardData from '@/actions/adminData';
import AssessmentStats from './_components/AssessmentStats';

function App() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);

//   Fetch data from the backend
    const {
        loading, 
        fn: getAdminDataFn, 
        data, 
        
    } = useFetch(getAdminDashboardData); 

    // Fetch data when the component mounts
    useEffect(() => {
        getAdminDataFn();
    }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  // If no data loaded
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center text-red-600 dark:text-red-400">
          <p>Error loading dashboard data. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="py-8 space-y-8">
        <div id='dashboard'>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Dashboard Overview</h2>
          
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <StatCard 
              title="Total Users" 
              value={data.users.length} 
              icon={<Users className="h-6 w-6" />} 
              change={12}
              changeLabel="vs. last month"
            />
            
            <StatCard 
              title="Feedback Received" 
              value={data.feedbacks.length} 
              icon={<MessageSquare className="h-6 w-6" />} 
              change={-3}
              changeLabel="vs. last month"
            />
            
            <StatCard 
              title="Active Jobs" 
              value={data.jobListings.length} 
              icon={<Briefcase className="h-6 w-6" />} 
              change={20}
              changeLabel="vs. last month"
            />
            
            <StatCard 
              title="Total Assessments" 
              value={data.totalAssessments} 
              icon={<Brain className="h-6 w-6" />} 
              change={8}
              changeLabel="vs. last month"
            />
          </div>
        </div>
        
        {/* <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Assessment Analytics</h2>
          <AssessmentStats totalAssessments={data.totalAssessments} />
        </div> */}
        
        <div id='user'>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">User Management</h2>
          <UserTable users={data.users} />
        </div>

        <div id='joblisting'>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Job Listings</h2>
          <JobListingTable jobListings={data.jobListings} />
        </div>
        
        <div id='feedback'>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Feedback Analysis</h2>
          <FeedbackStats feedbacks={data.feedbacks} />
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        </div>
        
        <div className="pt-4 mt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Last updated: {new Date().toLocaleString()}</span>
            </div>
            <div>
              AdminDash v1.0.0
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
