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

// post and read data from database
// app.use("/api/v1/product", productRoute);

module.exports = app;
