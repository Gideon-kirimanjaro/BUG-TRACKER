// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const membersSchema = new Schema({
  name: {
    type: String,
    required: [true, "userName must be provided"],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Members", membersSchema);
