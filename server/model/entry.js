const mongoose = require("mongoose");

const Entry = mongoose.model("Entry", {
  title: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },

    createdOn: {
      type: Date,
      required: true,
    },
    updatedOn: {
      type: Date,
      required: true,
    },
  },
});

module.exports = Entry;
