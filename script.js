const mongoose = require("mongoose");
const User = require("./models/userModel");

mongoose
  .connect("mongodb://localhost:27017/jvlcode")
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("connection error");
  });

const user = new User({
  name: "Logesh",
  age: 28,
});
// user.save().then(() => {
//   console.log("User Saved");
// });

async function run() {
  const newUser = await user.save();
  console.log(newUser);
}

run()