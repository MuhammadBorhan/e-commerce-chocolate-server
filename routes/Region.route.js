const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router.route("/regions").get(regionController.getRegions);
router
  .route("/region")
  .get(regionController.getRegionsDistrict)
  .post(verifyToken, authorization("admin"), regionController.postRegion);
router
  .route("/region/:id")
  .get(regionController.getRegionById)
  .patch(verifyToken, authorization("admin"), regionController.updateRegion)
  .delete(verifyToken, authorization("admin"), regionController.deleteRegion);

module.exports = router;
