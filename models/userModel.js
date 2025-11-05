const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    required: true,
    min: 10,
    max: 70,
    validate: {
      validator: (v) => v % 2 == 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    lowercase: true,
  },
  craetedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
