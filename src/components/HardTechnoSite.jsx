import React, { useState, useEffect, useRef } from "react";
import "../styles/HardtechnoSite.css";
import logo from "../assets/logo.jpg";

export default function HardTechnoSite({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Cerrar menú si se clickea fuera o se presiona ESC (mejora UX y seguridad)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    function handleEscapeKey(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [menuOpen]);

  // Alterna menú de forma segura, previniendo dobles clicks o eventos inesperados
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="bg-dark text-white min-vh-100 d-flex flex-column">
      <header
        className="site-header d-flex align-items-center justify-content-between px-4 py-3"
        role="banner"
      >
        {/* Logo y texto */}
        <div className="d-flex align-items-center gap-3">
          <img
            src={logo}
            alt="Logo DJ Krynn"
            className="krynn-logo"
            loading="lazy"
            width={60}
            height={60}
            // Evita que la imagen sea manipulada con onError para prevenir ataques
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/fallback-logo.jpg"; // fallback seguro si no carga logo
            }}
          />
          <h1 className="mb-0 fw-bold text-neon">DJ Krynn</h1>
        </div>

        {/* Menú */}
        <nav aria-label="Menú principal" role="navigation" ref={menuRef}>
          <button
            className="menu-toggle d-lg-none"
            onClick={toggleMenu}
            aria-label="Alternar menú"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            type="button"
            ref={toggleButtonRef}
          >
            ☰
          </button>

          <ul
            id="primary-navigation"
            className={`nav-links d-lg-flex list-unstyled gap-4 mb-0 ${
              menuOpen ? "active" : "d-none d-lg-flex"
            }`}
            role="menu"
          >
            {[
              { href: "#gallery", label: "Galería" },
              { href: "#sets", label: "Sets" },
              { href: "#events", label: "Eventos" },
              { href: "#social", label: "Social" },
            ].map(({ href, label }) => (
              <li key={href} role="none">
                <a
                  href={href}
                  onClick={closeMenu}
                  role="menuitem"
                  tabIndex={menuOpen || window.innerWidth >= 992 ? 0 : -1}
                  // Si quisieras evitar links externos no confiables, asegúrate que href sea seguro.
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container flex-grow-1 py-5" role="main">
        {children}
      </main>

      <footer
        className="text-center py-3 border-top border-secondary text-muted"
        role="contentinfo"
      >
        © 2025 DJ Krynn. Todos los derechos reservados.
      </footer>
    </div>
  );
}
