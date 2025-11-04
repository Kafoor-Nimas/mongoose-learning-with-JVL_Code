const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/jvlcode")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("connection error");
  });
