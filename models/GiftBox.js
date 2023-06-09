const mongoose = require("mongoose");

// Schema Design
const giftBoxSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide gift box name "],
      trim: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    festival: {
      type: String,
      // required: [true, "Please provide a festival name "],
      trim: true,
    },
    desc: {
      type: String,
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
