import axios from "axios";
// import config from "../config";
import { LOGIN, ADD_TO_WATCHLIST, GET_WATCHLIST } from "../contexts/types";

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

export const addToWatchlist = async (id, ticker, price) => {
  // body with req.query not working, use parameters for now
  console.log(price)

  // register user to database
  const response = await axios.post(`/watchlist/add/${id}/${ticker}/${price}`);

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return { type: ADD_TO_WATCHLIST, result: "SUCCESS" };
};

export const getWatchlist = async (id) => {
  // body with req.query not working, use parameters for now
  const body = { id: id };

  // register user to database
  const response = await axios.get(`/watchlist/list/${id}`);

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return { type: GET_WATCHLIST, payload: response.data };
};