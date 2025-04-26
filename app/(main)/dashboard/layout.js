import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-6xl font-bold gradient-title bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animated-gradient text-center">Industry Insights</h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
