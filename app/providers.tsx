// app/providers.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeContextProvider } from "./lib/theme/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ClerkProvider>
  );
}
