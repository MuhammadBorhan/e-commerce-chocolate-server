const mongoose = require("mongoose");

// Schema Design
const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: true,
    },
    logo: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);

module.exports = Brand;
