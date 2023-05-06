const express = require("express");
const app = express();
const cors = require("cors");

// const productRoute = require("./routes/Product.route");

// Middlewares
app.use(cors());
app.use(express.json());

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

// module.exports = Region;

// Home page
app.get("/", (req, res) => {
  res.send("Wow..!!! Route is Running for Chocolate Project");
});

// post and read data from database
app.post("/api/v1/region", async (req, res, next) => {
  try {
    const region = new Regions(req.body);
    const result = await region.save();

    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
});

// get all regions data from database
app.get("/api/v1/regions", async (req, res, next) => {
  try {
    const result = await Regions.find({});

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
});

// get all district of region from database
app.get("/api/v1/region", async (req, res, next) => {
  try {
    const region = req.query.region;
    const result = await Regions.find({ region: region });

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get data",
      error: error.message,
    });
  }
});

module.exports = app;
