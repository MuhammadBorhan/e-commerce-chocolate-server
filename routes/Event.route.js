const express = require("express");
const router = express.Router();
const eventController = require("../controllers/Event.controller");

router
  .route("/event")
  .get(eventController.getEvent)
  .post(eventController.createEvent);

router
  .route("/event/:id")
  .get(eventController.getEventById)
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
