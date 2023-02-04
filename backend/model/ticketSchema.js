// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketsSchema = new Schema({
  ticketName: {
    type: String,
    required: [true, "ticket Name must be provided"],
  },
  ticketDescription: {
    type: String,
    required: [true, "ticket description must be provided"],
  },
  timeEstimate: {
    type: String,
    required: [true, "time estimate must be provided"],
  },
  ticketComments: {
    type: Array,
    required: [true, "userName must be provided"],
  },
  ticketPriority: [
    { type: mongoose.Schema.Types.ObjectId, status: "Severe" },
    { type: mongoose.Schema.Types.ObjectId, status: "Mild" },
  ],
  ticketStatus: [
    { type: mongoose.Schema.Types.ObjectId, status: "resolved" },
    { type: mongoose.Schema.Types.ObjectId, status: "in progress" },
  ],
  ticketType: [
    { type: mongoose.Schema.Types.ObjectId, status: "Issue" },
    { type: mongoose.Schema.Types.ObjectId, status: "Bug" },
  ],
  phone: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Tickets", TicketsSchema);
