const express = require("express");
const app = express();
const geoip = require("geoip-lite");
const cors = require("cors");
const path = require("path");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware to save visitor data
app.use((req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const geo = geoip.lookup(ip);

  const visitor = new Visitor({
    ip: ip,
    isp: req.headers["isp"],
    country: geo ? geo.country : "Unknown",
    city: geo ? geo.city : "Unknown",
  });

  visitor
    .save()
    .then(() => {
      next();
    })
    .catch((error) => {
      console.error("Error saving visitor:", error);
      next();
    });
});

// routes
const regionRoute = require("./routes/Region.route");
const userRoute = require("./routes/user.route");
const productsRoute = require("./routes/Products.route");
const brandRoute = require("./routes/Brand.route");
const giftBoxRoute = require("./routes/GiftBox.route");
const trendGiftRoute = require("./routes/TrendGift.route");
const eventRoute = require("./routes/Event.route");
const Visitor = require("./models/Visitor");

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

module.exports = app;
