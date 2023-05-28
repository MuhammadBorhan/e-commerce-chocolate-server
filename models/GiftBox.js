const mongoose = require("mongoose");

// Schema Design
const giftBoxSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: [true, "Please provide a brand name "],
      trim: true,
    },
    isEnabled: {
      type: Boolean,
      default: false,
    },
    productList: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const GiftBox =
  mongoose.models.GiftBox || mongoose.model("GiftBox", giftBoxSchema);

module.exports = GiftBox;
