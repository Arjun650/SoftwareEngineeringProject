"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

export const generateAIInsights = async (industry) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pinecone.index(process.env.PINECONE_INDEX).namespace("default");

  const embedder = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: "text-embedding-004",
  });

  const queryVector = await embedder.embedQuery(industry);
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
  const text = result.response.text();
  return JSON.parse(text.replace(/```(?:json)?\n?/g, "").trim());
};
