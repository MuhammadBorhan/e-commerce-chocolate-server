const mongoose = require("mongoose");

// Schema Design
const eventUserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const EventUser =
  mongoose.models.EventUser || mongoose.model("EventUser", eventUserSchema);

module.exports = EventUser;
