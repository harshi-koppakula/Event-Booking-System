import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState(1);

  useEffect(() => {
    API.get(`/events/${id}`).then((res) => setEvent(res.data));
  }, [id]);

  const book = async () => {
    await API.post("/bookings", {
      eventId: id,
      ticketCount: tickets,
    });
    alert("Booked Successfully");
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <img src={event.image} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{event.title}</h1>
      <p>{event.description}</p>
      <p>Available Seats: {event.availableSeats}</p>

      <input
        type="number"
        value={tickets}
        min="1"
        className="border p-2 mt-3"
        onChange={(e) => setTickets(e.target.value)}
      />

      <button
        onClick={book}
        className="bg-green-600 text-white px-4 py-2 rounded mt-3 block"
      >
        Book Now
      </button>
    </div>
  );
};

export default EventDetails;