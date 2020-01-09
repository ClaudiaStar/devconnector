const mongoose = require("mongoose");

UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now() }
});

// Mongoose.model takes 2 inputs, model name & actual model
module.exports = User = mongoose.model("user", UserSchema);
