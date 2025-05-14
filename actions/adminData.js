"use server";

import { db } from "@/lib/prisma";  // Assuming the Prisma client is set up correctly

// Fetches admin dashboard data for the admin page
export default async function getAdminDashboardData() {
  try {
    // Fetch all the required data in parallel for admin
    const [users, feedbacks, jobListings, assessments] = await Promise.all([
      db.user.findMany(),          // Fetch all users
      db.feedback.findMany(),      // Fetch all feedbacks
      db.jobListing.findMany(),    // Fetch all job listings
      db.assessment.findMany(),    // Fetch all assessments
    ]);

    // Print fetched data in the console
    // console.log("Users:", users);
    // console.log("Feedbacks:", feedbacks);
    // console.log("Job Listings:", jobListings);
    // console.log("Assessments:", assessments);

    // Return the data structured for use in the admin dashboard
    return {
        users,                      // List of all users
      feedbacks,                  // List of all feedbacks
      jobListings,                // List of all job listings
      totalAssessments: assessments.length,  // Total number of assessments
      assessments,                // List of all assessments
    };
  } catch (error) {
    console.error("❌ Error fetching admin dashboard data:", error);

    // In case of error, return empty data
    return {
      users: [],
      feedbacks: [],
      jobListings: [],
      totalAssessments: 0,
      assessments: [],
    };
  }
}
