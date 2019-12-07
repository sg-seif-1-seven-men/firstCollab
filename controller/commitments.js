const express = require("express");
const router = express.Router();
const Commitments = require("../models/commitments.js");

router.get("/", (req, res) => {
  Commitments.find({}, (err, foundCommitments) => {
    res.json(foundCommitments);
  });
});

router.delete("/:id", (req, res) => {
  Commitments.findByIdAndRemove(req.params.id, (err, deletedCommitments) => {
    res.json(deletedCommitments);
  });
});

router.post("/", (req, res) => {
  Commitments.create(req.body, (err, createdCommitments) => {
    res.json(createdCommitments);
  });
});

router.put("/:id", (req, res) => {
  Commitments.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTodo) => {
      res.json(updatedCommitments);
    }
  );
});

module.exports = router;