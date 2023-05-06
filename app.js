const express = require("express");
const app = express();
const cors = require("cors");

// const productRoute = require("./routes/Product.route");

// Middlewares
app.use(cors());
app.use(express.json());

// routes
const regionRoute = require("./routes/Region.route");

// Home page
app.get("/", (req, res) => {
  res.send("Wow..!!! Route is Running for Chocolate Project");
});

app.use("/api/v1", regionRoute);

module.exports = app;
