import React from "react";
import "../styles/HardTechnoSite.css";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";

import thumb1 from "../assets/thumb1.png";
import thumb2 from "../assets/thumb2.png";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.png";
import thumb5 from "../assets/thumb5.png";
import thumb6 from "../assets/thumb6.png";

import galeria1 from "../assets/galeria1.jpg";
import galeria2 from "../assets/galeria2.jpg";
import galeria3 from "../assets/galeria3.jpg";
import galeria4 from "../assets/galeria4.jpg";

export default function Gallery() {
  const fotos = [
    {
      src: galeria4,
      desc: "KRYNN domina diversos equipos de DJ, desde CDJs hasta mixers profesionales, garantizando sets impecables.",
    },
    {
      src: galeria1,
      desc: "Debuté con un warm-up en HOPFEN CLUB ROMA; fue mi entrada al mundo del techno.",
    },
    {
      src: galeria2,
      desc: "Compartí cabina con artistas reconocidos, afianzando mi identidad musical.",
    },
    {
      src: galeria3,
      desc: "Presentaciones destacadas en Rancagua, Valparaíso y Santiago con Schranz oscuro.",
    },
  ];

  const videos = [
    { src: video1, poster: thumb1 },
    { src: video2, poster: thumb2 },
    { src: video3, poster: thumb3 },
    { src: video4, poster: thumb4 },
    { src: video5, poster: thumb5 },
    { src: video6, poster: thumb6 },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="text-neon">Portafolio Visual</h2>
      <div className="gallery-photos">
        {fotos.map((foto, i) => (
          <figure className="gallery-item" key={i}>
            <img src={foto.src} alt={`Foto ${i + 1}`} />
            <figcaption>{foto.desc}</figcaption>
          </figure>
        ))}
      </div>

      <h2 className="text-neon">Material Multimedia</h2>
      <div className="gallery-videos">
        {videos.map((video, i) => (
          <video
            key={i}
            src={video.src}
            poster={video.poster}
            controls
            preload="none"
            className="gallery-video"
          />
        ))}
      </div>
    </section>
  );
}
