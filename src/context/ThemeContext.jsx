import React from "react";
import useLocalStroage from "../utils/useLocalStorage";

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStroage("theme", null);

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? null : "dark");
  };

  return (
    <ThemeContext.Provider value={{ handleToggleTheme, theme }}>
      <div className={`${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
