const mongoose = require("mongoose");

// Schema Design
const brandItemSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please provide a brand name "],
    },
    name: {
      type: String,
      required: [true, "Please provide a name "],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    price: {
      type: Number,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const chocolateBrandsItem =
  mongoose.models.BrandsItem || mongoose.model("BrandsItem", brandItemSchema);

module.exports = chocolateBrandsItem;
