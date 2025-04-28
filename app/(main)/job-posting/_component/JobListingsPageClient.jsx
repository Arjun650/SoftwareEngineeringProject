"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const JobListingsPageClient = ({ jobListings, userIndustry }) => {
    const router = useRouter();
    return (
        <div className="container mx-auto p-6 ">
            <h1 className="text-3xl font-bold mb-8 text-center">Job Listings for {userIndustry}</h1>
            <div className="grid gap-8">
                {jobListings.length > 0 ? (
                    jobListings.map((job) => (
                        <div key={job.id} className="border p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-orange-50 dark:bg-background">
                            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                            <p className="dark:text-gray-300 mb-1"><strong>Company:</strong> {job.companyName}</p>
                            <p className="dark:text-gray-300 mb-1"><strong>Location:</strong> {job.location}</p>
                            <p className="dark:text-gray-300 mb-1"><strong>Salary Range:</strong> ${job.salaryRange?.min} - ${job.salaryRange?.max}</p>
                            <p className="dark:text-gray-300 mb-1"><strong>Job Type:</strong> {job.jobType}</p>
                            <p className="dark:text-gray-300 mb-4"><strong>Description:</strong> {job.description}</p>

                            <div className="mb-4">
                                <strong className="block mb-2">Skills:</strong>
                                <div className="flex flex-wrap gap-2 text-red-300">
                                    {job.skills.map((skill, id) => (
                                        <span
                                            key={id}
                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={() => window.open(job.applicationLink, "_blank")}
                                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Apply Now
                                </button>
                                <button
                                    onClick={() => router.push("../interview/mock")}
                                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                                >
                                    Prepare Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No job listings found for this industry.</div>
                )}
            </div>
        </div>
    );
};

export default JobListingsPageClient;
