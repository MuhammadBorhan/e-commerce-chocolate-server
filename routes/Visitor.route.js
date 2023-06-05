const express = require("express");
const router = express.Router();
const visitorController = require("../controllers/Visitor.controller");

// router.use(visitorController.saveVisitor);
router.get("/visitor", visitorController.saveVisitor);
router.get("/visitors", visitorController.getVisitors);

module.exports = router;
