import axios from "axios";

export const buyCoin = async ({ userId, coinId, quantity }) => {
  const body = { userId, coinId, quantity };

  // register user to database
  const response = await axios.post("/coins/buy", { ...body });

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return response.data;
};
