const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

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
