// src/components/theme/theme-provider.tsx
import { useEffect, useState } from "react";
import type { Theme } from "./theme-context";
import { ThemeContext } from "./theme-context";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const darkMode =
      theme === "dark" || (theme === "system" && systemPrefersDark);

    root.classList.toggle("dark", darkMode);
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
