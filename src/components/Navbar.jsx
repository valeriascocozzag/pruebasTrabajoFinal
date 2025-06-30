// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-purple fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">🐾 PetCare</Link>
        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {["/", "/login", "/signup"].map((path, i) => (
              <li key={i} className="nav-item">
                <Link 
                  className="nav-link" 
                  to={path} 
                  onClick={() => setOpen(false)}
                >
                  {path === "/" ? "Inicio" : path === "/login" ? "Iniciar Sesión" : "Registrarse"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
