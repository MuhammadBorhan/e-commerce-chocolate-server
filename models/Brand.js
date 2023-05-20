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
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Brand = mongoose.models.Brand || mongoose.model("Brand", brandSchema);

module.exports = Brand;
