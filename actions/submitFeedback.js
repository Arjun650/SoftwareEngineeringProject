// app/actions/submitFeedback.js
"use server";

import { db } from "@/lib/prisma";

export async function submitFeedback({ name, helpful, improvement, reason }) {
  try {
    const feedback = await db.feedback.create({
      data: {
        name,
        helpful,
        improvement,
        reason,
        // Remove `userId` since it's unauthenticated
      },
    });

    return feedback;
  } catch (error) {
    console.error("Error submitting feedback:", error.message);
    throw new Error("Failed to submit feedback");
  }
}
