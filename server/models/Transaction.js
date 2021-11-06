const mongoose = require("mongoose");
const { Schema } = mongoose;

const history = new Schema({
    symbol: String,
    transaction: Number
})

const transaction = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" },
  history: [history]
});

mongoose.model("transaction", transaction);