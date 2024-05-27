import React from "react";
const Banner = "/images/main-banner.png";

const MainBanner = () => {
  return (
    <div className="container">
      <div className="text-center mt-3">
        <img className="w-100" src={Banner} alt={"Banner"} />
      </div>
    </div>
  );
};

export default MainBanner;
