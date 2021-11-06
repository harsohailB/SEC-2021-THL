import React from "react";

const Navbar = () => {
  return (
    <div className="flex-col flex md:flex-row items-center font-spartan pt-4 md:py-8 dark:text-white">
      <div className="flex justify-between items-center w-full mb-4 lg:mb-0">
        <a className="font-extrabold" href="/">
          Crypto Tracker
        </a>

        <div className="items-center flex">
          <a className="mx-4 hidden md:flex" href="signup">
            Sign Up
          </a>
          <a className="mx-4 hidden md:flex" href="login">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
