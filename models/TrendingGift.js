const mongoose = require("mongoose");

// Schema Design
const trendGiftSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please provide a brand name "],
      trim: true,
    },
    region: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const TrendingGift =
  mongoose.models.TrendingGift ||
  mongoose.model("TrendingGift", trendGiftSchema);

module.exports = TrendingGift;
