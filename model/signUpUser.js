const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  days_remaining: {
    type: String,
  },
  total_days: {
    type: String,
  },
  total_amount: {
    type: String,
  },
  amount_remaining: {
    type: String,
  },
  account_status: {
    type: String,
  },
  agent_id: {
    type: String,
  },
  shop_name: {
    type: String,
  },
  pancard: {
    type: String,
  },
  adharcard: {
    type: String,
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  next_amount_to_be_paid: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
