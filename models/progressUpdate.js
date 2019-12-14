const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = mongoose.Schema({
  date: {type: Date, required: true},
  log: {type: String, required: true},
  verificationStatus: Boolean,
  refereeComments: String
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;