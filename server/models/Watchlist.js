const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchlist = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" },
    tickers: [Object]
});

mongoose.model("watchlist", watchlist);