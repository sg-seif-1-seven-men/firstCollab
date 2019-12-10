const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commitmentsSchema = mongoose.Schema({
  commitment: ["Exercise once a week", "Quit Smoking"],
  owner: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  buddy: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  referee: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  success: Boolean,
  progress: ["Started", "On Track", "Need Help"]
});

const Commitments = mongoose.model("Commitments", commitmentsSchema);

module.exports = Commitments;
