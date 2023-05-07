const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brands.controller");

router
  .route("/brands")
  .get(brandController.getBrands)
  .post(brandController.postBrand);

module.exports = router;
