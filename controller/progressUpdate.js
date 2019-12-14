const express = require("express");
const progressUpdates = express.Router();
const progressUpdate = require("../models/progressUpdate.js");

progressUpdates.get("/", (req, res) => {
  progressUpdate.find({}, (err, foundProgressUpdate) => {
    res.json(foundProgressUpdate);
  });
});

progressUpdates.delete("/:id", (req, res) => {
  progressUpdate.findByIdAndRemove(
    req.params.id,
    (err, deletedProgressUpdate) => {
      res.json(deletedProgressUpdate);
    }
  );
});

progressUpdates.post("/", (req, res) => {
  progressUpdate.create(
    {
      date: req.body.date,
      log: req.body.log,
      verificationStatus: req.body.verificationStatus,
      refereeComments: req.body.refereeComments
    },
    (err, createdProgressUpdate) => {
      if (err) console.log(err);
      console.log("success");
      res.json(createdProgressUpdate);
      console.log(createdProgressUpdate);
    }
  );
});

progressUpdates.put("/:id", (req, res) => {
  progressUpdate.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedProgressUpdate) => {
      res.json(updatedProgressUpdate);
    }
  );
});

module.exports = progressUpdates;
