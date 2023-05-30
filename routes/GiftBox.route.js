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

router.route("/selectgiftbox").get(giftBoxController.selectGiftBox);
router.route("/selectgiftbox/:id").patch(giftBoxController.updateSelectGiftBox);

router
  .route("/giftbox/:id")
  .get(giftBoxController.getGiftBoxById)
  .patch(giftBoxController.updateWithoutImage)
  .delete(giftBoxController.deleteGiftBox);

router
  .route("/updateWithImage/:id")
  .patch(upload.single("image"), giftBoxController.updateGiftBoxWithImage);

module.exports = router;
