"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark, light } from "@clerk/themes";

export default function ClerkThemeProvider({ children }) {
  const { theme } = useTheme(); // Get the current theme dynamically

  // Ensure theme is valid (handle undefined on first load)
  const clerkTheme = theme === "dark" ? dark : light;

  return <ClerkProvider appearance={{ baseTheme: clerkTheme }}>{children}</ClerkProvider>;
}