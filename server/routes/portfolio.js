var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Portfolio = mongoose.model("portfolio");
const { SUCCESS, NOT_FOUND, UNAUTHORIZED } = require("../utils/http");

router.get("/portfolio", async (req, res) => {
  const { userId } = req.query;

  const foundPortfolio = await Portfolio.findOne({ user: userId });

  if (!foundPortfolio) {
    res.status(NOT_FOUND).send("Portfolio not found");
  } else {
    res.send(foundPortfolio);
  }
});

/* Check if a user exists */
router.post("/portfolio/buy", async (req, res) => {
  const { ticker, quantity } = req.query;

  const foundUser = await User.findOne({
    username: username,
    password: password
  });

  if (foundUser) {
    delete foundUser.password; // TODO: password isnt deleted
    res.send(foundUser);
  } else {
    res.status(NOT_FOUND).send("User not found");
  }
});

module.exports = router;
