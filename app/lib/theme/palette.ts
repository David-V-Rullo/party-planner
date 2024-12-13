// src/lib/theme/palette.ts
import { PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#7C3AED", // A vibrant purple
    light: "#9F67FF",
    dark: "#5B21B6",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#10B981", // A fresh teal
    light: "#34D399",
    dark: "#059669",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#F9FAFB",
    paper: "#FFFFFF",
  },
  error: {
    main: "#EF4444",
  },
  success: {
    main: "#10B981",
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#9F67FF", // Lighter purple for dark mode
    light: "#B794F4",
    dark: "#7C3AED",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#34D399",
    light: "#6EE7B7",
    dark: "#059669",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#111827",
    paper: "#1F2937",
  },
  error: {
    main: "#F87171",
  },
  success: {
    main: "#34D399",
  },
};
