const express = require("express");
const progressUpdates = express.Router();
const progressUpdate = require("../models/progressUpdate.js");
const Commitments = require("../models/commitments.js");

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

progressUpdates.post("/:id", (req, res) => {
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
      //res.json(createdProgressUpdate);
      console.log(createdProgressUpdate);
      Commitments.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $addToSet: {
            progress: createdProgressUpdate
          }
        },
        { new: true },
        (err, updatedProgressUpdate) => {
          if(err) console.log(err);
          console.log('Added Progress');
          res.json(updatedProgressUpdate);
        }
      );
    }
  );

});

// progressUpdates.put("/:id", (req, res) => {
//   Commitments.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       $addToSet: {
//         progress: req.body
//       }
//     },
//     { new: true },
//     (err, updatedProgressUpdate) => {
//       if(err) console.log(err);
//       console.log('Added Progress');
//       res.json(updatedProgressUpdate);
//     }
//   );
// });

module.exports = progressUpdates;
