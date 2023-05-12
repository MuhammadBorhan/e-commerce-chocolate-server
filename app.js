const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

// routes
const regionRoute = require("./routes/Region.route");
const userRoute = require("./routes/user.route");
const productsRoute = require("./routes/Products.route");

// Home page
app.get("/", (req, res) => {
  res.send("Wow..!!! Route is Running for Chocolate Project");
});
app.use("/api/v1", regionRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", productsRoute);

module.exports = app;
