const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router
  .route("/products")
  .get(productsController.getProducts)
  .post(productsController.postProduct);

router.route("/products/:id").delete(productsController.deleteProduct);

module.exports = router;
