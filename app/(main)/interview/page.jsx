import { getAssessments } from "@/actions/interview";
import StatsCards from "./_component/statsCards";
import PerformanceChart from "./_component/performanceChart";
import QuizList from "./_component/quizList";


export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div>
      <div className="flex items-center justify-center mb-5">
        <h2 className="text-3xl sm:text-5xl md:text-[4vw] text-center font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient">How It Works</h2>

      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}