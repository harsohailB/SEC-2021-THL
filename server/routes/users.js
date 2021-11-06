var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const { SUCCESS, NOT_FOUND } = require("../utils/http");

/* Check if a user exists */
router.get("/user", async (req, res) => {
    const { username, password } = req.query;

    const foundUser = await User.findOne({ username: username, password: password });

    if (foundUser) {
        res.status(SUCCESS).send("OK");
    }
    else {
        res.status(NOT_FOUND).send("User not found");
    }
})

/* Creating a user endpoint. */
router.post("/user", async (req, res) => {
    const { username, password } = req.body;

    await new User({ username, password }).save();
    res.status(SUCCESS).send("OK");
});

module.exports = router;
