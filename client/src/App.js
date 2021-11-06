import React, { useEffect, useContext, Suspense } from "react";
import { UserContext } from "./contexts/UserContext";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ls from "local-storage";
import { LinearProgress } from "@material-ui/core";
import history from "./utils/history";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Watchlist from "./components/Watchlist";
import Portfolio from "./components/Portfolio";
import { LOGIN } from "./contexts/types";

const App = () => {
  const [user, dispatchToUser] = useContext(UserContext);

  useEffect(() => {
    // if nothing, check localstorage to see if user is saved
    const userFromLocalStorage = ls.get("user");
    if (userFromLocalStorage) {
      dispatchToUser({ type: LOGIN, payload: userFromLocalStorage });
    } else {
      dispatchToUser({ type: LOGIN, payload: null });
    }
  }, [dispatchToUser]);

  return (
    <div className="px-8">
      <BrowserRouter history={history}>
        <Navbar />

        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/watchlist" exact component={Watchlist} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
