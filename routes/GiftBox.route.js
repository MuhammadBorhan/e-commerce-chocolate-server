const express = require("express");
const router = express.Router();
const giftBoxController = require("../controllers/GiftBox.controller");

router
  .route("/giftbox")
  .get(giftBoxController.getGiftBox)
  .post(giftBoxController.createGiftBox);

router
  .route("/selectgiftbox")
  .get(giftBoxController.getSelectGiftBox)
  .post(giftBoxController.createSelectGiftBox);
router
  .route("/selectgiftbox/:id")
  .delete(giftBoxController.deleteSelectGiftBox);

router
  .route("/giftbox/:id")
  .get(giftBoxController.getGiftBoxById)
  .patch(giftBoxController.updateGiftBox)
  .delete(giftBoxController.deleteGiftBox);

module.exports = router;
