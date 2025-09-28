import { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");
  const toggleTheme = () => setThemeMode(prev => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export default function useTheme() {
  return useContext(ThemeContext);
}
