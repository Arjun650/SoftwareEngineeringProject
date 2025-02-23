import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI  Carrier | ARJUN",
  description: "Software engineering project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen bg-yellow-100 dark:bg-background/80">
              {children}
            </main>
            {/* footer */}
            <footer className="bg-orange-500 dark:bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200 dark:text-gray-200">
                <p>Made with love ARJUN</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
