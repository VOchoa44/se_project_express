const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT = 3001 } = process.env;
mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db").then(() => {
  console.log("connected to DB");
});
const mainRouter = require("./routes/index");
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "6a628c93d4fd138cc4141f72",
  };
  next();
});
app.use("/", mainRouter);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
