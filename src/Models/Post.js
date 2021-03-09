const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
      type: String,
      require: true 
  }
});

module.exports = mongoose.model("Post", Schema);
