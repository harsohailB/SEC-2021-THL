var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Portfolio = mongoose.model("portfolio");
const { SUCCESS, NOT_FOUND, UNAUTHORIZED } = require("../utils/http");

/* Check if a user exists */
router.get("/user", async (req, res) => {
  const { username, password } = req.query;

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

/* Creating a user endpoint. */
router.post("/user", async (req, res) => {
  const { username, password, portfolio_title } = req.body;

  const foundUser = await User.findOne({
    username: username
  });

  if (foundUser) {
    res.status(UNAUTHORIZED).send("User already exists.");
  } else {
    const newUser = await new User({ username, password }).save();
    await new Portfolio({
      user: newUser._id,
      portfolio_title: portfolio_title,
      holdings: []
    }).save();
    delete newUser.password; // TODO: password isnt deleted
    res.send(newUser);
  }
});

module.exports = router;
