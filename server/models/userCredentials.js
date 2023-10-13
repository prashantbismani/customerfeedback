const mongoose = require("mongoose");

const userCredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

const myModel = mongoose.model("usercredentials", userCredentialsSchema);

module.exports = myModel;