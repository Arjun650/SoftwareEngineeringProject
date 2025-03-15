"use client"; // 👈 Ensure this is a Client Component

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HeroSection from "@/components/hero";
import Footer from "@/components/footer";
import Landing from "@/components/Landing";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Wait until component is mounted on the client
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900" />; // Prevent hydration mismatch
  }

  return (
    <div>
      {/* Apply correct grid background class dynamically */}
      <div className={theme === "dark" ? "grid-background" : "grid-background-light"}>
        <Landing/>
        <Footer />
        
      </div>
    </div>
  );
}
