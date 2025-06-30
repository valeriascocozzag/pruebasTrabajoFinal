import React from "react";
import "./../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Cuida a tus mascotas como nunca antes </h1>
        <p>Planifica vacunas, citas y peso con recordatorios inteligentes.</p>
        <Link to="/signup">
          <button className="btn-primary">Comenzar gratis</button>
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/037/749/723/non_2x/ai-generated-dog-and-cat-on-transparent-background-free-png.png"
          alt="Perrito feliz"
          className="hero-img"
        />
      </div>
    </div>
  </section>
);

export default Hero;
