// app/components/layout/Header.tsx
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl hover:opacity-80 transition-opacity"
        >
          Party Planner
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/events" className="hover:text-primary transition-colors">
            Events
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
