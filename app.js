const express = require("express");
const app = express();
const cors = require("cors");

// const productRoute = require("./routes/Product.route");

// Middlewares
app.use(cors());
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("Wow..!!! Route is Running for Chocolate Project");
});

const mongoose = require("mongoose");

// Schema Design
const regionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for Region"],
      trim: true,
    },
  },
  { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model("Region", regionSchema);

module.exports = Product;

// post and read data from database
app.post("/api/v1/region", (req, res, next) => {
  res.send("it is working");
});

module.exports = app;
