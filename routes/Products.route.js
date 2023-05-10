const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router
  .route("/products")
  .get(productsController.getProducts)
  .post(productsController.postProduct);

module.exports = router;
