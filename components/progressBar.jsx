"use client"; // This ensures it runs only on the client side

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Corrected for Next.js App Router
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the styles

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500); // Ensures progress ends smoothly

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]); // Triggers on route changes

  return null; // No UI needed
}
