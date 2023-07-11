const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/signup").post(userController.postUser);
router.route("/login").post(userController.loginPost);
router.route("/me").get(verifyToken, userController.getMe);
router.route("/users").get(userController.getUsers);
router.route("/user/:id").get(userController.getUserById);
router.route("/user/:id").patch(userController.updateUser);
router.route("/user/:id").delete(userController.deleteUser);

module.exports = router;
