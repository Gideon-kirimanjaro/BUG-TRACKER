// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "userName must be provided"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Users", userSchema);
