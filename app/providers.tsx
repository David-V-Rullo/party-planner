// app/providers.tsx
"use client";

import { ThemeContextProvider } from "./lib/theme/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
