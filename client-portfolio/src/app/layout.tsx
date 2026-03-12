import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";
import ScrollToTop from "@/components/ScrollToTop"; // Ensure this path is correct

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-mono",
});

export const metadata: Metadata = {
  title: "The Alchemist | PM & Fullstack Dev",
  description: "Transforming challenges into clarity and code into potential.",
  icons: {
    icon: "/fav1.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} bg-alchemy-dark text-slate-200 antialiased transition-colors duration-500`}
        suppressHydrationWarning
      >
        <PersonaProvider>
          <div className="relative min-h-screen flex flex-col">
            {/* If Header and Footer are shared across all pages, 
               import and place them here. 
            */}
            <main className="flex-grow">{children}</main>

            {/* The Global Scroll-to-Top Anchor */}
            <ScrollToTop />
          </div>
        </PersonaProvider>
      </body>
    </html>
  );
}
