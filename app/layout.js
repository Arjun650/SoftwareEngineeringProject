import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import ClerkThemeProvider from "@/components/clerkThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import TopLoader from "@/components/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Carrier | ARJUN",
  description: "Software engineering project",

};

export default function RootLayout({ children }) {

  
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} bg-orange-100 dark:bg-background/60`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <TopLoader />
            <ClerkThemeProvider>
              {/* header */}
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors/>
            </ClerkThemeProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
