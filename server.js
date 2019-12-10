// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

// Environment Variables
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/merncrud";
const PORT = process.env.PORT || 3000;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log("MongoDB connection established:", mongoURI)
);

// Error / Disconnection
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static("public"));

// Routes
const commitmentsController = require("./controller/commitments.js");
app.use("/", commitmentsController);

// this will catch any route that doesn't exist
app.get("*", (req, res) => {
  res.status(404).json("Sorry, page not found");
});

app.get("/", (req, res) => {
  res.send("hello jello");
});

app.listen(PORT, () => {
  console.log("Let's get things done on port", PORT);
});
