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
  Commitments.create(
    {
      commitment: req.body.commitment,
      owner: req.body.owner,
      buddy: req.body.buddy,
      referee: req.body.referee,
      success: req.body.success,
      progress: req.body.progress
    },
    (err, createdCommitments) => {
      if (err) console.log(err);
      console.log("success");
      res.json(createdCommitments);
      console.log(createdCommitments);
    }
  );
});

router.put("/:id", (req, res) => {
  Commitments.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCommitments) => {
      res.json(updatedCommitments);
    }
  );
});

module.exports = router;
