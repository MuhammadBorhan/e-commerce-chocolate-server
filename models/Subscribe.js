const mongoose = require("mongoose");

// Schema Design
const subscribeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Subscribe =
  mongoose.models.Subscribe || mongoose.model("Subscribe", subscribeSchema);

module.exports = Subscribe;
