const express = require("express");
const router = express.Router();
const packageController = require("../controllers/Package.controller");

router
  .route("/package")
  .get(packageController.getAllPackage)
  .post(packageController.createPackage);

router
  .route("/package/:id")
  .get(packageController.getPackageById)
  .patch(packageController.updatePackage)
  .delete(packageController.deletePackage);

module.exports = router;
