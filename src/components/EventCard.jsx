import React from "react";
import { Badge } from "react-bootstrap";
import flyer1 from "../assets/Flyer1.jpg";
import "../styles/HardTechnoSite.css";

export default function EventCard({ event }) {
  const { title, date, location, description, tags = [], link } = event;

  const formattedDate = new Date(date).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const formattedTime = new Date(date).toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <article className="event-card">
      <img
        src={flyer1}
        alt={`Flyer de ${title}`}
        className="event-card-img"
        loading="lazy"
      />
      <div className="event-card-content">
        <h1>{title}</h1>
        <h3 className="event-date-location">
          {formattedDate}, {formattedTime} — {location}
        </h3>
        <p>{description}</p>
        <div className="mb-3">
          {tags.map((tag, idx) => (
            <Badge bg="secondary" key={idx} className="me-2">
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <a
            className="btn btn-primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            Comprar Entradas
          </a>
        )}
      </div>
    </article>
  );
}
