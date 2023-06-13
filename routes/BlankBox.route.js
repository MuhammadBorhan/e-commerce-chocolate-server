const express = require("express");
const router = express.Router();
const blankBoxController = require("../controllers/BlankBox.controller");

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
  .route("/blankBox")
  .get(blankBoxController.getAllBlankBox)
  .post(upload.single("image"), blankBoxController.createBlankBox);

router
  .route("/blankBox/:id")
  .get(blankBoxController.getBlankBoxById)
  .patch(upload.single("image"), blankBoxController.updateBlankBox)
  .delete(blankBoxController.deleteBlankBox);

module.exports = router;
