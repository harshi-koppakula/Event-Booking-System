const Booking = require("../../../models/Booking");
const Event = require("../../../models/Event");

exports.bookEvent = async (req, res) => {
  const { eventId, ticketCount } = req.body;

  const event = await Event.findById(eventId);

  if (event.availableSeats < ticketCount)
    return res.status(400).json({ message: "Not enough seats" });

  event.availableSeats -= ticketCount;
  await event.save();

  const booking = await Booking.create({
    userId: req.user.id,
    eventId,
    ticketCount,
    totalAmount: ticketCount * event.price
  });

  res.json(booking);
};