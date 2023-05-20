const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

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
  .route("/products")
  .get(productsController.getProducts)
  .post(upload.single("image"), productsController.createProduct);

router
  .route("/products/:id")
  .get(productsController.getProductById)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
