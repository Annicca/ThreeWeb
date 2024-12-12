const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  login: String,
  password: String,
  role: String,
  img: { type: String, default: null },
});

module.exports = mongoose.model("profile", profileSchema, "profile");
