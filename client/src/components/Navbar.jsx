import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LOGOUT } from "../contexts/types";
import history from "../utils/history";

import logo from "../assets/images/favicon.svg";

const Navbar = () => {
  const [user, dispatchToUser] = useContext(UserContext);

  const handleLogout = () => {
    dispatchToUser({ type: LOGOUT, payload: user });
    history.push("/");
  };

  return (
    <div className="flex-col flex md:flex-row items-center font-spartan pt-4 md:py-8 dark:text-white">
      <div className="flex justify-between items-center w-full mb-4 lg:mb-0">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-8" />
          <a className="font-extrabold text-2xl" href="/">
            Crypto Tracker
          </a>
          {user && (
            <div className="flex ml-4">
              <p className="text-gray-400">{user.username}</p>
            </div>
          )}
        </div>

        <div className="items-center">
          {!user ? (
            <div className="flex">
              <a className="mx-4 hidden md:flex" href="signup">
                Sign Up
              </a>
              <a className="mx-4 hidden md:flex" href="login">
                Login
              </a>
            </div>
          ) : (
            <div className="flex">
              <a className="mx-4 hidden md:flex" href="portfolio">
                Portfolio
              </a>
              <a className="mx-4 hidden md:flex" href="Watchlist">
                Watchlist
              </a>
              <a className="mx-4 hidden md:flex" href="profit-loss">
                Profit/Loss Algorithm
              </a>
              <span
                className="mx-4 hidden md:flex cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
