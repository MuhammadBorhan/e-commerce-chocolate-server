const mongoose = require("mongoose");

// Schema Design
const eventUserSchema = mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      require: true,
    },
    phone: String,
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const EventUser =
  mongoose.models.EventUser || mongoose.model("EventUser", eventUserSchema);

module.exports = EventUser;
