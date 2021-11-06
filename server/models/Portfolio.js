const mongoose = require("mongoose");
const { Schema } = mongoose;

const symbols = new Schema({
  ticker: String,
  quantity: String
});

const portfolio = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
  portfolio_title: String,
  holdings: [symbols]
});

mongoose.model("portfolio", portfolio);
