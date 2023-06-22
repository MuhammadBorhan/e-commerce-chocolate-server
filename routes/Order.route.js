const express = require("express");
const router = express.Router();
const orderController = require("../controllers/Order.controller");
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");

router
  .route("/orders")
  .get(orderController.getOrders)
  .post(orderController.postOrder);

router.route("/orderlist").get(orderController.getOrderList);
router
  .route("/order/:id")
  .get(orderController.getOrderById)
  .delete(orderController.deleteOrder)
  .patch(orderController.updateOrder);
//   .patch(verifyToken, authorization("admin"), orderController.updateRegion)

module.exports = router;
