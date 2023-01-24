const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectsSchema = new Schema({
  projectTitle: {
    type: String,
    required: [true, "project title must be provided"],
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectMembers: {
    type: Array,
  },
  projectTickets: {
    type: Array,
  },
});
module.exports = mongoose.model("Projects", projectsSchema);
