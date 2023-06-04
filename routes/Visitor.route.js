const express = require("express");
const router = express.Router();
const visitorController = require("../controllers/Visitor.controller");

// router.use(visitorController.saveVisitor);
router.post("/visitors", visitorController.saveVisitor);
router.get("/visitors", visitorController.getVisitors);

module.exports = router;
