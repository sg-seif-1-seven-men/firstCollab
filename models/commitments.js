const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commitmentsSchema = mongoose.Schema({
  commitment: String,
  frequency: String,
  duration: String,
  owner: { type: Schema.Types.ObjectId, ref: "Users" },
  buddy: { type: Schema.Types.ObjectId, ref: "Users" },
  referee: { type: Schema.Types.ObjectId, ref: "Users" },
  // owner: String,
  // buddy: String,
  // referee: String,
  // success: String,
  progress: [{ type: Schema.Types.ObjectId, ref: "Progress" }]
});

const Commitments = mongoose.model("Commitments", commitmentsSchema);

module.exports = Commitments;
