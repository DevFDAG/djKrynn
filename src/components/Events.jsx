import React from "react";
import EventCard from "./EventCard";
import "../styles/HardTechnoSite.css";

const events = [
  {
    _id: "1",
    title: "Techno United Rave - No Money Winter Edition",
    date: "2025-08-02T22:00:00",
    location: "Love Concept (Cuevas #699)",
    description:
      "Una noche de techno intensa en Love Concept con DJ Krynn y más artistas.",
    tags: ["Techno", "Rave", "Winter Edition"],
    link: "https://vesti.cl/events/techno-united-rave-no-money-winter-edition",
  },
];

export default function Events() {
  if (events.length === 0) {
    return <p className="empty-message">No hay eventos disponibles.</p>;
  }

  return (
    <section className="events-section" id="events">
      <h2 className="text-neon">Eventos</h2>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </section>
  );
}
