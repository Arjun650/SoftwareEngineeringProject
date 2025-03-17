-- CreateTable
CREATE TABLE "JobListing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT,
    "industry" TEXT NOT NULL,
    "skills" TEXT[],
    "description" TEXT NOT NULL,
    "requirements" TEXT[],
    "salaryRange" JSONB,
    "jobType" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "applicationLink" TEXT,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_industry_fkey" FOREIGN KEY ("industry") REFERENCES "IndustryInsight"("industry") ON DELETE RESTRICT ON UPDATE CASCADE;
