const router = require("express").Router();
const { protect } = require("../middlewares/auth.middleware");
const {
  createEvent,
  getEvents,
  getSingleEvent
} = require("../../../client/src/config/controllers/event.controller");

router.post("/", protect, createEvent);
router.get("/", getEvents);
router.get("/:id", getSingleEvent);

module.exports = router;