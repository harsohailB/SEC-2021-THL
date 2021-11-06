import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { LOGOUT } from "../contexts/types";

const Navbar = () => {
  const [user, dispatchToUser] = useContext(UserContext);
  console.log("user", user);

  const handleLogout = () => {
    dispatchToUser({ type: LOGOUT, payload: user });
  };

  return (
    <div className="flex-col flex md:flex-row items-center font-spartan pt-4 md:py-8 dark:text-white">
      <div className="flex justify-between items-center w-full mb-4 lg:mb-0">
        <div className="flex">
          {" "}
          <a className="font-extrabold" href="/">
            Crypto Tracker
          </a>
          {user && <span className="ml-4">User: {user.username}</span>}
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
              <span className="mx-4 hidden md:flex" onClick={handleLogout}>
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
