import axios from "axios";
// import config from "../config";
import { LOGIN } from "../contexts/types";

export const addUser = async ({ username, password, portfolio_title }) => {
  const body = { username, password, portfolio_title };

  // register user to database
  const response = await axios.post("/user", { ...body });

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return { type: LOGIN, payload: response.data };
};

export const loginUser = async (username, password) => {
  const body = { username, password };

  // register user to database
  const response = await axios.get("/user", {
    params: body
  });

  if (response.status !== 200) {
    throw "Login failed with error code " + response.status;
  }

  return { type: LOGIN, payload: response.data };
};
