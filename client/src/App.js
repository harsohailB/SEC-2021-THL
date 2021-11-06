import React, { useEffect, useContext, Suspense, lazy } from "react";
import { UserContext } from "./contexts/UserContext";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import ls from "local-storage";
import Navbar from "./components/Navbar";
import { LOGIN } from "./contexts/types";
import { LinearProgress } from "@material-ui/core";
import history from "./utils/history";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="px-8">
      <BrowserRouter history={history}>
        <Navbar />

        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
