const mongoose = require("mongoose");

// Schema Design
const packageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a package name "],
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: [true, "Please provide a type name "],
      trim: true,
    },
    payment: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Package =
  mongoose.models.Package || mongoose.model("Package", packageSchema);

module.exports = Package;
