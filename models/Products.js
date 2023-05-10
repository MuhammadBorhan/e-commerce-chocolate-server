const mongoose = require("mongoose");

// Schema Design
const roductsSchema = mongoose.Schema(
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
    brandImage: {
      type: String,
      required: [true, "Please provide a name "],
    },
    products: [
      {
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const products =
  mongoose.models.Products || mongoose.model("Products", roductsSchema);

module.exports = products;
