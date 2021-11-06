import axios from "axios";

export const getPortfolio = async (userId) => {
  const body = { userId };

  // register user to database
  const response = await axios.get("/portfolio", {
    params: body
  });

  if (response.status !== 200) {
    throw "Registration failed with error code " + response.status;
  }

  // update store with user info if successfully registered
  return response.data;
};
