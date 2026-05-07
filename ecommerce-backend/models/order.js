const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
