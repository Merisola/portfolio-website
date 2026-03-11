import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alchemist Portfolio",
  description: "Transforming challenges into clarity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We apply the dark background here so it covers the whole screen */}
      <body className="bg-alchemy-dark antialiased">
        {/* The 'children' is where your page.tsx content is rendered */}
        {children}
      </body>
    </html>
  );
}
