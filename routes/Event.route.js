const express = require("express");
const router = express.Router();
const eventController = require("../controllers/Event.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router
  .route("/event")
  .get(eventController.getEvent)
  .post(upload.single("image"), eventController.createEvent);

router
  .route("/event/:id")
  .get(eventController.getEventById)
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
