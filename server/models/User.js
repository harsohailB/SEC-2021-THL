const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  id: String,
  name: String,
  description: String,
  username: String,
  password: String
});

mongoose.model("users", user);