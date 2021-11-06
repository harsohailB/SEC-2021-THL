const mongoose = require("mongoose");
const { Schema } = mongoose;

const symbols = new Schema({
    symbol: String,
    value: String
});

const portfolio = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
    portfolio_title: String,
    coins: [symbols]
});

mongoose.model("portfolio", portfolio);