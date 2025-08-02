import React from "react";
import { FaInstagram, FaSoundcloud, FaYoutube } from "react-icons/fa";
import "../styles/HardTechnoSite.css";

export default function Social() {
  return (
    <section id="social" className="social-section">
      <h2 className="text-neon">Redes Sociales</h2>
      <ul className="social-list">
        <li>
          <a
            href="https://www.instagram.com/krynn.dj?igsh=eHh2dWlvZjdtOHl3"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram size={32} />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://on.soundcloud.com/xpzpjmWkL04XQTF58e"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaSoundcloud size={32} />
            <span>SoundCloud</span>
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/@krynndjeison?si=lQyBYpQY5EMdUMU8"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaYoutube size={32} />
            <span>YouTube</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
