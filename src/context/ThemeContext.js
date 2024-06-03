import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const themeMode =
  //   localStorage.getItem("themeMode") !== undefined
  //     ? localStorage.getItem("themeMode")
  //     : "light";
  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const [textColor, setTextColor] = useState("white-text");

  const toggleTheme = () => {
    const themeMode = theme === "light" ? "dark" : "light";

    setTheme(themeMode);

    // set updated text color
    setTextColor(theme === "light" ? "black-text" : "white-text");

    // Local Storage
    localStorage.setItem("themeMode", themeMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, textColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
