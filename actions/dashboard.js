"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const generateAIInsights = async (industry) => {
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

  const index = pinecone.index(process.env.PINECONE_INDEX).namespace("default");

  // 🔎 Embed Question
  const embedder = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: "text-embedding-004",
  });

  const queryVector = await embedder.embedQuery(industry);

  // 🔍 Retrieve Similar Docs
  const results = await index.query({
    vector: queryVector,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches?.map((m) => m.metadata.text).join("\n\n");

  const prompt = `
    Analyze the current state of the **${industry}** industry and provide insights in ONLY the following JSON format:
  {
    "salaryRanges": [
      { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
    ], 
    "growthRate": number,
    "demandLevel": "High" | "Medium" | "Low",
    "topSkills": ["skill1", "skill2"],
    "marketOutlook": "Positive" | "Neutral" | "Negative",
    "keyTrends": ["trend1", "trend2"],
    "recommendedSkills": ["skill1", "skill2"],
    "topCompaniesIndia": ["company1", "company2"],
    "topCompaniesWorld": ["company1", "company2"]
  }

  RULES:
  - Return ONLY JSON. No quotes, no markdown, no explanations.
  - Include at least 5 roles for salary ranges.
  - Growth rate must be a % number.
  - Include at least 5 skills and trends.
  - Include at least 5 Indian and 5 global companies.
  - Sometimes make demand level Medium/Low, growth rate small, or market outlook negative depending on context.
  - Use the following context if useful. If not useful, answer based on your knowledge.

  Context:
  ${context}
  `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();

  return JSON.parse(cleanedText);
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // If no insights exist, generate them
  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return industryInsight;
  }

  return user.industryInsight;
}
