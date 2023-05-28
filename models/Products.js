const mongoose = require("mongoose");

// Schema Design
const roductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Please provide a brand name "],
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: [true, "Please provide a color name "],
      trim: true,
    },
    desc: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const products =
  mongoose.models.Products || mongoose.model("Products", roductsSchema);

module.exports = products;
