const mongoose = require("mongoose");

// Schema Design
const orderSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your firstname"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide your lastname"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Please provide your address"],
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      trim: true,
    },
    region: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zip: {
      type: String,
      trim: true,
    },
    amount: {
      type: Number,
      trim: true,
    },
    quantity: {
      type: Number,
      trim: true,
    },
    product: {
      type: String,
      trim: true,
    },
    cod: {
      type: String,
      trim: true,
    },
    boxName: {
      type: [String],
      trim: true,
    },
    email: {
      type: String,
    },
    orderNumber: {
      type: String,
    },
    isEnabled: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;
