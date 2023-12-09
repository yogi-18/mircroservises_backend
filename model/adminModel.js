const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  username: {
    type: String,
  },
  Password: {
    type: String,
  },
});

module.exports = mongoose.model("admin", adminSchema);
