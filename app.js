const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();
const { PORT = 3001 } = process.env;
mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "6a628c93d4fd138cc4141f72",
  };
  next();
});
app.use(cors());
app.use("/", mainRouter);
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
