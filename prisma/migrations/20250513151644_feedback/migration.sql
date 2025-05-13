-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "helpful" TEXT NOT NULL,
    "improvement" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
