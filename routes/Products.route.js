const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const multer = require("multer");
const path = require("path");

// Multer configuration for handling file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// router.route("/fileUpload").post(productsController)

router
  .route("/products")
  .get(productsController.getProducts)
  .post(productsController.createProduct);

router
  .route("/products/:id")
  .get(productsController.getProductById)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;
