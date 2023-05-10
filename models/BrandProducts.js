const mongoose = require("mongoose");

// Schema Design
const brandProductSchema = mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: [true, "Please provide a brand name "],
      trim: true,
    },
    brandUrl: {
      type: String,
      required: [true, "Please provide a name "],
    },
    productName: {
      type: String,
      required: [true, "Please provide an image"],
      trim: true,
    },
    productUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const brandProducts =
  mongoose.models.BrandProducts ||
  mongoose.model("BrandProducts", brandProductSchema);

module.exports = brandProducts;
