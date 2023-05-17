const express = require("express");
const router = express.Router();
const brandController = require("../controllers/Brands.controller");

router
  .route("/brand")
  .get(brandController.getBrands)
  .post(brandController.createBrand);

router
  .route("/brand/:id")
  .get(brandController.getBrandById)
  .patch(brandController.updateBrandById)
  .delete(brandController.deleteBrandById);

module.exports = router;
