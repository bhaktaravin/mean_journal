const express = require("express");
const Entry = require("../model/entry");
const router = new express.Router();

//Get All Entries
router.get("/", async (req, res) => {
  Entry.find().then((doc) => {
    if (doc) {
      res.status(200).json({
        message: "All Entries fetched",
        post: doc,
      });
    }
  });
});

//Get Single Entry by Id
router.get("/:id", (req, res, next) => {
  Entry.findById(req.params.id).then((post) => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  });
});

//Create an Entry
router.post("/", async (req, res) => {
  const entry = new Entry({
    title: req.body.title,
    content: req.body.content,
    createdOn: Date.now(),
    updatedOn: Date.now(),
  });

  entry
    .save()
    .then((i) => {
      if (i) {
        res.status(201).json({
          message: "Post added successfully",
          post: {
            ...i,
            id: post_id,
          },
        });
      } else {
        res.status(500).json({ message: "Error adding post" });
      }
    })
    .catch((e) => {
      console.log("ERROR");
    });
});

//Update Entry by id
router.put("/update/:id", function (req, res) {
  const entry = new Entry({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    createdOn: Date.now(),
    updatedOn: Date.now(),
  });

  Entry.updateOne(
    {
      _id: req.params.id,
    },
    entry
  ).then((result) => {
    if (result) {
      res.status(200).json({ message: "Update successful!" });
    } else {
      res.status(500).json({ message: "Error Updating Post" });
    }
  });
});

module.exports = router;
