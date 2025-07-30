// ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setIsDarkMode(nextTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 md:p-0  rounded-full transition-all duration-500 "
    >
      <span className="relative inline-block top-1 w-7 h-7">
        <Sun
          className={`absolute transition-all duration-500 ease-in-out transform ${
            isDarkMode
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-45 scale-75"
          } text-yellow-300`}
        />
        <Moon
          className={`absolute transition-all duration-500 ease-in-out transform ${
            !isDarkMode
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-45 scale-75"
          } text-blue-900`}
        />
      </span>
    </button>
  );
};
