var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("users");
const { UNAUTHORIZED } = require("../utils/http");

/* Authentication endpoint. */
router.get("/auth", async (req, res, next) => {
    const { username, password } = req.query;

    const user = await User.findOne({ username, password });

    if (!user) {
        return res.status(UNAUTHORIZED).send({ error: "Login failed" });
    }
    res.send(user);
})

module.exports = router;