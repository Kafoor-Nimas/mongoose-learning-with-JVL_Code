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
    // const newuser = await User.create({
    //   name: "Nimas",
    //   age: 24,
    //   hobbies: ["Sports", "Music"],
    //   address: {
    //     street: "2nd Street",
    //   },
    //   bestFriend:"690b25a03741810531729125",
    //   email:"funNimas@gmail.com"
    // });
    // console.log(newuser);

    // const user = await User.where("_id")
    //   .equals("690b3b0d31606cca7e4cc195")
    //   .populate("bestFriend");

    // const user = await User.findByName("Nimas");
    // const user = await User.find().byName("Nimas");
    // const user = await User.findById("690b3b9b10a9deb7e7630435");
    // user.sayHi();
    const user = await User.findById("690b25a03741810531729125");
    user.name = "Manikandan";
    user.age = 22;
    await user.save();
    console.log(user);
    console.log(user.namedEmail);
  } catch (error) {
    console.log(error.message);
  }
}

run();
