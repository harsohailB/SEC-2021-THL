const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchlist = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
    tickers: [String]
});

mongoose.model("watchlist", watchlist);