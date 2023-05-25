const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");

router.route("/regions").get(regionController.getRegions);
router
  .route("/region")
  .get(regionController.getRegionsDistrict)
  .post(regionController.postRegion);
router
  .route("/region/:id")
  .get(regionController.getRegionById)
  .patch(regionController.updateRegion)
  .delete(regionController.deleteRegion);

module.exports = router;
