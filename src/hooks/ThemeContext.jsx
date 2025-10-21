/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Always set to dark mode
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  const value = {
    theme: "dark",
    isDark: true,
    toggleTheme: () => {}, // No-op function for compatibility
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
