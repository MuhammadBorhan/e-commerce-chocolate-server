const express = require("express");
const router = express.Router();
const brandItemController = require("../controllers/brandItem.controller");

router
  .route("/brandsItem")
  .get(brandItemController.getBrandsItem)
  .post(brandItemController.postBrandItem);

module.exports = router;
