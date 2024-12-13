import { HeroSection } from "./components/sections/HeroSection";
import EventsSidebar from "./components/sections/sidebars/EventsSidebar";

export default function Home() {
  return (
    // Container for entire page with relative positioning
    <div className="relative min-h-screen">
      {/* Main content area with right padding to make room for sidebar */}
      <div className="pr-64">
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroSection />
          </main>
        </div>
      </div>
    </div>
  );
}
