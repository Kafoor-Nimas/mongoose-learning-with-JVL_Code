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

userSchema.methods.sayHi = function () {
  console.log(`My name is ${this.name}`);
};

userSchema.statics.findByName = function (name) {
  return this.find({ name: name });
};
userSchema.query.byName = function (name) {
  return this.where({ name: name });
};

userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});
const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
