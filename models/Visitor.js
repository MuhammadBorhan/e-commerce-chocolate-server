const mongoose = require("mongoose");

// Schema Design
const visitorSchema = mongoose.Schema({
  ip: String,
  isp: String,
  country: String,
  city: String,
  timestamp: { type: Date, default: Date.now },
});

// SCHEMA -> MODEL -> QUERY
const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
