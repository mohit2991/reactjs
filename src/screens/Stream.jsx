import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Stream = () => {
  const { textColor } = useContext(ThemeContext);
  return <div className={textColor}>Stream</div>;
};

export default Stream;
