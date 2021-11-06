const mongoose = require("mongoose");
const { Schema } = mongoose;

const symbols = new Schema({
  coinId: String,
  quantity: String,
  buyPrice: Number
});

const portfolio = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
  portfolio_title: String,
  holdings: [symbols]
});

mongoose.model("portfolio", portfolio);
