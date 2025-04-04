import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl py-2 md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text leading-[1.2] text-transparent animate-gradient">
          Industry Insights
        </h1>
      </div>
      <Suspense
        fallback={
          <div className="mt-4 flex justify-center">
            <BarLoader width={200} color="gray" aria-label="Loading..." />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
