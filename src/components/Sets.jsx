import React from "react";
import "../styles/HardTechnoSite.css";

export default function Sets() {
  return (
    <section id="sets" className="sets-section">
      <h2 className="text-neon">Sets de KRYNN</h2>
      <p className="description">
        Escucha la evolución de los sets de KRYNN desde sus primeros
        lanzamientos.
      </p>

      <div className="sets-grid">
        <div className="set-container">
          <h3>HUELLA DIGITAL FINGERPRINT (155BPM)</h3>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/crow-mnsic/krynn-set-huella-digital-fingerprint-155bpm&color=%23ff5500&auto_play=false&show_user=true"
            title="Huella Digital Fingerprint"
            loading="lazy"
          />
        </div>

        <div className="set-container">
          <h3>ES TU POR TRANCE (THE HOUSE)</h3>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/crow-mnsic/krynn-set-es-tu-por-trance&color=%23ff5500&auto_play=false&show_user=true"
            title="Es Tu Por Trance"
            loading="lazy"
          />
        </div>

        <div className="set-container">
          <h3>RADIKALS 07-06-2025</h3>
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/E-iFa1EpeRY?rel=0&si=NmE_4hYY9A4v-e8P"
              title="KRYNN SET RADIKALS 07-06-2025"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="set-container">
          <h3>FOUR ELEMENTS (HARDTECHNO SCHRANZ)</h3>
          <div className="youtube-wrapper">
            <iframe
              src="https://www.youtube.com/embed/rhikdtaCt00?rel=0"
              title="KRYNN SET - FOUR ELEMENTS (HARDTECHNO SCHRANZ)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
