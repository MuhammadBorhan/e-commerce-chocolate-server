const mongoose = require("mongoose");

// Schema Design
const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name "],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Please provide a image"],
    },
    district: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const chocolateBrands =
  mongoose.models.Brands || mongoose.model("Brands", brandSchema);

module.exports = chocolateBrands;
