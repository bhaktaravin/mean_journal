const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const entryRouter = require("./routes/entry");

const app = express();
app.use(cors({ origin: "*" }));
require("dotenv").config({ path: __dirname + "/config.env" });

const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.Promise = global.Promise;
const url = process.env.MONGO_URI;
console.log(url);
//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.error("Failed to connect to DB");
  });
app.use("/api/entries", entryRouter);

app.get("/test", (req, res) => {
  res.send("Testing...");
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
