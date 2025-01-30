const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  email: { type: String, index: true },
  password: String,
  role: String,
  affiliation: String,
});
const conferenceSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  location: { type: String, index: true },
});
const submissionSchema = new Schema({
  title: String,
  abstract: String,
  status: { type: String, index: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  conferenceId: { type: Schema.Types.ObjectId, ref: "Conference" },
});
const User = mongoose.model("User", userSchema);
const Conference = mongoose.model("Conference", conferenceSchema);
const Submission = mongoose.model("Submission", submissionSchema);
module.exports = { User, Conference, Submission };
