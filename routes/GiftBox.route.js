const express = require("express");
const router = express.Router();
const giftBoxController = require("../controllers/GiftBox.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router
  .route("/giftbox")
  .get(giftBoxController.getGiftBox)
  .post(upload.single("image"), giftBoxController.createGiftBox);

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
