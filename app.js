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
const brandRoute = require("./routes/Brand.route");
const giftBoxRoute = require("./routes/GiftBox.route");
const trendGiftRoute = require("./routes/TrendGift.route");
const eventRoute = require("./routes/Event.route");

// Home page
app.get("/", (req, res) => {
  res.send("Wow..!!! Route is Running for Chocolate Project");
});

app.use("/api/v1", regionRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", productsRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", giftBoxRoute);
app.use("/api/v1", trendGiftRoute);
app.use("/api/v1", eventRoute);

module.exports = app;
