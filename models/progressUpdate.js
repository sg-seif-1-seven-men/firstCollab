const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = mongoose.Schema({
  date: Date,
  log: String,
  verificationStatus: Boolean,
  completionStatus: Boolean,
  refereeComments: String
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;