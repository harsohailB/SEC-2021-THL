import React, { useContext } from "react";

import homepagePic from "../../assets/images/homepage.svg";
import { UserContext } from "../../contexts/UserContext";

const HomePage = () => {
  const [user] = useContext(UserContext);

  return (
    <div className="flex h-full">
      <div className="flex flex-col w-1/2 p-8">
        <h1 className="text-7xl font-extrabold">Manage your crypto!</h1>
        <h1 className="text-3xl font-extrabold mt-4">
          View and manage your portfolio from a single interface!
        </h1>
        <div className="flex justify-center">
          <a
            href={user ? "/portfolio" : "/signup"}
            className="bg-green-400 p-1 w-80 text-xl font-bold text-center rounded-full mt-12"
          >
            {user ? "See your portfolio" : "Get Started"}
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <img src={homepagePic} alt="homepage_image" />
      </div>
    </div>
  );
};

export default HomePage;
