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

// const user = new User({
//   name: "Logesh",
//   age: 28,
// });
// user.save().then(() => {
//   console.log("User Saved");
// });

async function run() {
  try {
    const newuser = await User.create({
      name: "Nimas",
      age: 24,
      hobbies: ["Sports", "Music"],
      address: {
        street: "2nd Street",
      },
      email:"funNimas@gmail.com"
    });
    console.log(newuser);
  } catch (error) {
    console.log(error.message);
  }
}

run();
