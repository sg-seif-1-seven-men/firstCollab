const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commitmentsSchema = mongoose.Schema({
  description: String,
  buddy: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  referee: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  success: Boolean,
  progress: []
});

const Commitments = mongoose.model("Commitments", commitmentsSchema);

module.exports = Commitments;
