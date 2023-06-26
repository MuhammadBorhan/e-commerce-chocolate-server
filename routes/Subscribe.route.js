const express = require("express");
const router = express.Router();
const subscribeController = require("../controllers/Subscribe.controller");

router
  .route("/subscribe")
  .get(subscribeController.getAllSubscriber)
  .post(subscribeController.createSubscribe);

router.route("/subscribe/:id").delete(subscribeController.deleteSubscribe);
//   .get(subscribeController.getPackageById)
//   .patch(subscribeController.updatePackage)

module.exports = router;
