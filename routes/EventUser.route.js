const express = require("express");
const router = express.Router();
const eventUserController = require("../controllers/EventUser.controller");

router
  .route("/eventuser")
  .get(eventUserController.getEventUser)
  .post(eventUserController.createEventUser);

// router
//   .route("/event/:id")
//   .get(eventController.getEventById)
//   .patch(eventController.updateEvent)
//   .delete(eventController.deleteEvent);

module.exports = router;
