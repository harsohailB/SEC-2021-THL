var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const { SUCCESS } = require("../utils/http");

/* Creating a user endpoint. */
router.post("/user", async (req, res) => {
    const { username, password } = req.body;

    await new User({ username, password }).save();
    res.status(SUCCESS).send("OK");
});

module.exports = router;
