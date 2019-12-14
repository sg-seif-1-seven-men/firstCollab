const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commitmentsSchema = mongoose.Schema({
  commitment: String,
  // owner: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  // buddy: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  // referee: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  owner: String,
  buddy: String,
  referee: String,
  success: String,
  progress: String
});

const Commitments = mongoose.model("Commitments", commitmentsSchema);

module.exports = Commitments;
