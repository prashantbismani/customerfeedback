const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  satisfaction: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});

const myModel = mongoose.model("Feedbacks", feedbackSchema);

module.exports = myModel;
