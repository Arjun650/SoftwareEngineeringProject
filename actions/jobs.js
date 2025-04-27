"use server"
import { auth } from "@clerk/nextjs/server";
import { db } from '../lib/prisma.js'; // Adjust this import if needed


const jobListings = [
    {
      title: "Frontend Developer",
      companyName: "TechNova",
      location: "San Francisco, CA",
      industry: "Software",
      skills: ["React", "TypeScript", "CSS", "HTML"],
      description: "We are looking for a skilled Frontend Developer to build beautiful and responsive interfaces.",
      requirements: ["2+ years experience in frontend development", "Proficiency in React", "Strong design sense"],
      salaryRange: { min: 80000, max: 120000, currency: "USD" },
      jobType: "Full-time",
      applicationLink: "https://technova.com/careers/frontend-developer",
    },
    {
      title: "Data Analyst",
      companyName: "FinInsights",
      location: "New York, NY",
      industry: "Finance",
      skills: ["SQL", "Python", "Excel", "Power BI"],
      description: "Analyze financial datasets and prepare actionable reports for internal teams.",
      requirements: ["Bachelor's degree in Finance or related field", "Expertise in SQL and Python", "Experience with Power BI"],
      salaryRange: { min: 70000, max: 95000, currency: "USD" },
      jobType: "Full-time",
      applicationLink: "https://fininsights.com/jobs/data-analyst",
    },
    {
      title: "Marketing Intern",
      companyName: "GreenLeaf",
      location: "Remote",
      industry: "Marketing",
      skills: ["Content Writing", "SEO", "Social Media"],
      description: "Assist in managing social media and content strategies for our eco-friendly brand.",
      requirements: ["Current enrollment in Marketing or related degree", "Strong writing skills", "Basic understanding of SEO"],
      salaryRange: { min: 1000, max: 1500, currency: "USD" },
      jobType: "Internship",
      applicationLink: "https://greenleaf.com/internships/marketing",
    },
    {
      title: "Mechanical Engineer",
      companyName: "AutoMek",
      location: "Detroit, MI",
      industry: "Automobile",
      skills: ["AutoCAD", "SolidWorks", "Mechanical Design"],
      description: "Join our design team to create innovative automotive components.",
      requirements: ["Bachelor's degree in Mechanical Engineering", "Experience with CAD software", "Problem-solving skills"],
      salaryRange: { min: 75000, max: 105000, currency: "USD" },
      jobType: "Full-time",
      applicationLink: "https://automk.com/careers/mechanical-engineer",
    },
    {
      title: "Healthcare Data Scientist",
      companyName: "MedInformatics",
      location: "Boston, MA",
      industry: "Healthcare",
      skills: ["Machine Learning", "Python", "Healthcare Analytics"],
      description: "Work on healthcare data models to drive better patient outcomes.",
      requirements: ["Master's degree in Data Science or related field", "Experience with healthcare datasets", "Strong ML background"],
      salaryRange: { min: 95000, max: 135000, currency: "USD" },
      jobType: "Full-time",
      applicationLink: "https://medinformatics.com/jobs/data-scientist",
    }
  ];

async function seedJobListings() {
  try {
    for (const listing of jobListings) {
      // Find the related IndustryInsight where the industry is a substring of the IndustryInsight industry
      const industryInsight = await db.industryInsight.findFirst({
        where: {
          industry: {
            contains: listing.industry.toLowerCase(), // Check if industry contains the job's industry as a substring
            mode: 'insensitive', // Makes the search case-insensitive
          },
        },
      });

      if (industryInsight) {
        // If the related IndustryInsight is found, connect it to the JobListing
        await db.jobListing.create({
          data: {
            title: listing.title,
            companyName: listing.companyName,
            location: listing.location,
            skills: listing.skills,
            description: listing.description,
            requirements: listing.requirements,
            salaryRange: listing.salaryRange,
            jobType: listing.jobType,
            applicationLink: listing.applicationLink,
            industryInsight: {
              connect: {
                industry: industryInsight.industry, // Connect to the existing IndustryInsight
              },
            },
          },
        });
        console.log(`Job listing for ${listing.title} created.`);
      } else {
        console.log(`No matching industry found for ${listing.title}, skipping.`);
      }
    }

    console.log("✅ Job listings seeded successfully!");
  } catch (error) {
    console.error("❌ Error processing job listings:", error);
  } finally {
    await db.$disconnect();
  }
}

// seedJobListings();

export default async function getJobListingsByIndustry(userIndustry) {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
    
      const user = await db.user.findUnique({
        where: { clerkUserId: userId },
      });
    
      if (!user) throw new Error("User not found");
      
    try {
      const jobListings = await db.jobListing.findMany({
        where: {
          industry: userIndustry,
        },
      });
  
    //   if (jobListings.length > 0) {
    //     console.log(`Found ${jobListings.length} job listings for industry: ${userIndustry}`);
    //     console.log(jobListings);
    //   } else {
    //     console.log(`No job listings found for industry: ${userIndustry}`);
    //   }
  
      return jobListings; // <-- RETURN this ✅
  
    } catch (error) {
      console.error("❌ Error fetching job listings by industry:", error);
      return []; // <-- return empty array if error ✅
    } finally {
      await db.$disconnect();
    }
  }
  
  
  // Example usage - you would call this with the user's profile industry
//   getJobListingsByIndustry('tech-software-development');
