const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");

router.route("/regions").get(regionController.getRegions);
router
  .route("/region")
  .get(regionController.getRegionsDistrict)
  .post(regionController.postRegion);

module.exports = router;
