const mongoose = require("mongoose");

// Schema Design
const blankBoxSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a box name "],
      trim: true,
      unique: true,
    },
    festival: {
      type: String,
      required: [true, "Please provide a festival name "],
      trim: true,
    },
    image: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const BlankBox =
  mongoose.models.BlankBox || mongoose.model("BlankBox", blankBoxSchema);

module.exports = BlankBox;
