export const dynamic = "force-dynamic"; // 👈 ADD THIS at top

import { getIndustryInsights } from '@/actions/dashboard';
import getJobListingsByIndustry from '@/actions/jobs';
import JobListingsPageClient from './_component/JobListingsPageClient';

const JobListingsPage = async () => {
  try {
    const insights = await getIndustryInsights();
    const userIndustry = insights?.industry || "Unknown";

    let jobListings = [];
    if (userIndustry) {
      jobListings = await getJobListingsByIndustry(userIndustry) || [];
    }

    return <JobListingsPageClient jobListings={jobListings} userIndustry={userIndustry} />;
  } catch (err) {
    console.error('Error in JobListingsPage:', err);
    return <div>Failed to load job listings.</div>;
  }
};

export default JobListingsPage;
