// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";
import EventsSidebar from "./components/sections/sidebars/EventsSidebar";

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
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* Main content container that pushes footer to bottom */}
            <div className="flex-1 relative">
              {/* Content with padding for sidebar */}
              <div className="pr-64">
                <main>{children}</main>
              </div>
              {/* Sidebar positioned below header */}
              <div className="fixed top-[64px] right-0 h-[calc(100vh-64px)]">
                <EventsSidebar />
              </div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
