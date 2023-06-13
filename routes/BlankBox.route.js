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
  .delete(blankBoxController.deleteBlankBox);
//   .patch(upload.single("image"), productsController.updateProductWithImage)
//   .patch(productsController.updateProduct)

// router.route("/product/:id").patch(productsController.updateProduct);

module.exports = router;
