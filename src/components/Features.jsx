// src/components/Features.jsx
import React from "react";
import "./../styles/Features.css";
import calendarIcon from "../icons/calendar-solid.svg";
import healthIcon from "../icons/notes-medical-solid.svg"; 
import aiIcon from "../icons/robot-solid.svg"; 
import shieldIcon from "../icons/shield-solid.svg"; 

const featuresList = [
  {
    icon: calendarIcon,
    title: "Plan de cuidado",
    items: [
      "Acciones recomendadas",
      "Fácil de planificar",
      "Creación de acciones personalizadas",
      "Recordatorios automatizados",
      "Sincronización con calendario"
    ]
  },
  {
    icon: healthIcon,
    title: "Gestor de salud",
    items: [
      "Perfil de salud",
      "Monitorización de peso",
      "Problemas de salud",
      "Veterinarios de confianza",
      "Historial médico"
    ]
  },
  {
    icon: aiIcon,
    title: "Pets AI",
    items: [
      "Inteligencia Artificial especializada para mascotas",
      "Cualquier consulta sobre el cuidado del animal",
      "Evaluación de síntomas",
      "Información sobre enfermedades",
      "Atención inmediata 24/7"
    ]
  },
  {
    icon: shieldIcon,
    title: "Consejos a medida",
    items: [
      "Información de la raza",
      "Rutinas de cuidados",
      "Recomendaciones nutricionales",
      "Problemas comunes de salud",
      "Tips de educación"
    ]
  }
];

const Features = () => (
  <section className="features">
    {/* Encabezado igual a Maskots */}
    <div className="features-header">
      <h2>La app todo en uno para el bienestar de tu mascota</h2>
      <p>
        Mejora sin esfuerzo la salud de tus amigos peludos con un plan de cuidado
        personalizado.
      </p>
    </div>

    {/* Grid de tarjetas */}
    <div className="features-container">
      {featuresList.map((f) => (
        <div key={f.title} className="feature-card">
          <div className="feature-icon-wrapper">
            <img src={f.icon} alt={f.title} className="feature-icon" />
          </div>
          <h3>{f.title}</h3>
          <ul>
            {f.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
