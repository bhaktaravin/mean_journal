const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("dotenv").config({ path: "./config.env" });

const url = process.env.MONGO_URI;
let mong = mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connected...");
    } else {
      console.log("Error in DB Connection: " + err);
    }
  }
);
