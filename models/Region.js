const mongoose = require("mongoose");

// Schema Design
const regionSchema = mongoose.Schema(
  {
    region: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      unique: [true, "Name must be unique"],
    },
    district: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Regions =
  mongoose.models.Region || mongoose.model("Region", regionSchema);

module.exports = Regions;
