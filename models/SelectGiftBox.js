const mongoose = require("mongoose");

// Schema Design
const selectGiftBoxSchema = mongoose.Schema(
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
const SelectGiftBox =
  mongoose.models.SelectGiftBox ||
  mongoose.model("SelectGiftBox", selectGiftBoxSchema);

module.exports = SelectGiftBox;
