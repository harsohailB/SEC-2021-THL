import React from "react";

import homepagePic from "../../assets/images/homepage.svg";

const HomePage = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2">Manage your crypto!</div>
      <div className="w-1/2">
        <img src={homepagePic} alt="homepage_image" />
      </div>
    </div>
  );
};

export default HomePage;
