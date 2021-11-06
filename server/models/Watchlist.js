const mongoose = require("mongoose");
const { Schema } = mongoose;

const symbol = new Schema({
    name: String
})

const watchlist = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    watchlist: [symbol]
});

mongoose.model("watchlist", watchlist);