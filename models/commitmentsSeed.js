module.exports = [
  {
    commitment: "Go to the gym once a week for one month",
    buddy: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    referee: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    success: false,
    progress: []
  }
];
