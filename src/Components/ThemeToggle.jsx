import React from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@Lib/utils";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs === "dark";
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    return userMedia.matches;
  }
  return false;
};

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(getInitialTheme);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-4 right-4 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-gray-400" />
      ) : (
        <Moon className="h-6 w-6 text-blue-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
