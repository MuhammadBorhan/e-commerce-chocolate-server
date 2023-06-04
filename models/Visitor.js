const mongoose = require("mongoose");

// Schema Design
const visitorSchema = mongoose.Schema(
  {
    ip: String,
    isp: String,
    country: String,
    city: String,
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

// SCHEMA -> MODEL -> QUERY
const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
