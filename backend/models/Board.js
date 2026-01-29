const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Board", boardSchema);
