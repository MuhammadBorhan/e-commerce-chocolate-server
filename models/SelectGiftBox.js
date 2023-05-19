const mongoose = require("mongoose");

// Schema Design
const selectGiftBoxSchema = mongoose.Schema(
  {
    boxName: {
      type: String,
      required: true,
      trim: true,
    },
    boxImage: {
      type: String,
      required: true,
    },
    brandName: {
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
