import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
