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

module.exports = router;
