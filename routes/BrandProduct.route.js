const express = require("express");
const router = express.Router();
const brandProductController = require("../controllers/brandProduct.controller");

router
  .route("/brandproduct")
  .get(brandProductController.getBrandProduct)
  .post(brandProductController.postBrandProduct);

module.exports = router;
