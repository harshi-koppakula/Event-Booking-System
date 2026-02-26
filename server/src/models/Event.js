const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    eventDate: Date,
    price: Number,
    totalSeats: Number,
    availableSeats: Number,
    category: String,
    image: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);