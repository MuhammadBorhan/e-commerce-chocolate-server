const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/signup").post(userController.postUser);
router.route("/login").post(userController.loginPost);

module.exports = router;
