const express = require("express");
const app = express();
const cors = require("cors");

// for image
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// Middlewares
app.use(cors());
app.use(express.json());

// for image
const imageSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});
const Image = mongoose.model("Image", imageSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const product = new Image({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file.path,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/products", async (req, res) => {
  try {
    const result = await Image.find({});
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
