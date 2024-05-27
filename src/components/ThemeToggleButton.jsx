import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(">>>>>>>>>> mohit theme", theme);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default ThemeToggleButton;
