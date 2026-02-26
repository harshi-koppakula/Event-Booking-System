const router = require("express").Router();
const { protect } = require("../middlewares/auth.middleware");
const { bookEvent } = require("../../../client/src/config/controllers/booking.controller");

router.post("/", protect, bookEvent);

module.exports = router;