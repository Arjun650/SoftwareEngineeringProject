"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark, light } from "@clerk/themes";

export default function ClerkThemeProvider({ children }) {
  const { theme, systemTheme } = useTheme(); // Get both user-selected and system theme

  // Ensure a valid theme is used
  const resolvedTheme = theme === "system" ? systemTheme : theme; // Fallback to systemTheme if system mode is selected
  const clerkTheme = resolvedTheme === "dark" ? dark : light;

  return <ClerkProvider appearance={{ baseTheme: clerkTheme }}>{children}</ClerkProvider>;
}
