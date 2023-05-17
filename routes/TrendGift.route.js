const express = require("express");
const router = express.Router();
const trendGiftController = require("../controllers/TrendGift.controller");

router
  .route("/trendgift")
  .get(trendGiftController.getTrendGift)
  .post(trendGiftController.createTrendGift);

router
  .route("/trendgift/:id")
  .get(trendGiftController.getTrendGiftById)
  .patch(trendGiftController.updateTrendGift)
  .delete(trendGiftController.deleteTrendGift);

module.exports = router;
