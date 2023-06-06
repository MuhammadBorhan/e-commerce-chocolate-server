const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
const regionRoute = require("./routes/Region.route");
const userRoute = require("./routes/user.route");
const productsRoute = require("./routes/Products.route");
const brandRoute = require("./routes/Brand.route");
const giftBoxRoute = require("./routes/GiftBox.route");
const trendGiftRoute = require("./routes/TrendGift.route");
const eventRoute = require("./routes/Event.route");
const visitorRoute = require("./routes/Visitor.route");
const eventUserRoute = require("./routes/EventUser.route");

// Home page
app.get("/", (req, res) => {
  res.send(`Wow..!!! Route is Running for Chocolate Project `);
});

app.use("/api/v1", regionRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", productsRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", giftBoxRoute);
app.use("/api/v1", trendGiftRoute);
app.use("/api/v1", eventRoute);
app.use("/api/v1", visitorRoute);
app.use("/api/v1", eventUserRoute);

module.exports = app;
