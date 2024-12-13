// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";

import "./globals.css";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Party Planner",
    template: "%s | Party Planner",
  },
  description: "Plan your perfect party with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
