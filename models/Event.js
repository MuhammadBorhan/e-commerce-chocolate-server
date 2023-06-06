const mongoose = require("mongoose");

// Schema Design
const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    gmeet: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    desc: {
      type: String,
    },
    capacity: {
      type: Number,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

module.exports = Event;
