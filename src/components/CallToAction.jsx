import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Home.css";

const CallToAction = () => (
  <section className="cta">
    <h2>¿Listo para cuidar mejor a tu mascota?</h2>
    <Link to="/signup">
      <button className="btn-main">Regístrate ahora</button>
    </Link>
  </section>
);

export default CallToAction;