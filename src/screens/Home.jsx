import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MainBanner from "../components/MainBanner";

const Home = () => {
  const { textColor } = useContext(ThemeContext);
  return (
    <div>
      <MainBanner />
      <div className={textColor}>Movie List</div>
    </div>
  );
};

export default Home;
