// src/components/Jumbotron.jsx
import React from "react";
import "../styles/Jumbotron.css";

const pets = [
  { name: "Tommy",   src: "https://img.freepik.com/fotos-premium/perro-golden-retriever-fondo-blanco_921721-6.jpg" },
  { name: "Milo",    src: "https://img.freepik.com/fotos-premium/gato-blanco-raza-mixta-aislado-blanco_191971-20582.jpg" },
  { name: "Lucca",     src: "https://tse2.mm.bing.net/th/id/OIP.CkBaQEYC1cCz9yrcwu7jlAHaHa?w=768&h=768&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Lola",    src: "https://tse1.mm.bing.net/th/id/OIP.lYRPBJzDutBgzUWMBtIQcAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Fresia",    src: "https://tse4.mm.bing.net/th/id/OIP.WPjJVwpigkffH-m1LVIziQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const Jumbotron = () => (
  <section className="jumbotron-section text-white py-5">
    <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
      {/* Texto */}
      <div className="mb-4 mb-lg-0 text-center text-lg-start">
        <h2 className="fw-bold display-6 jumbotron-title">
          Añade <u>todas las mascotas</u> que quieras
        </h2>
      </div>

      {/* Avatares */}
      <ul className="list-unstyled d-flex align-items-center mb-0 overflow-auto pet-list">
        {/* Botón “Añadir” */}
        <li className="me-4">
          <button className="btn btn-outline-light rounded-circle btn-add">
            <span className="fs-2">＋</span>
          </button>
        </li>

        {/* Mascotas */}
        {pets.map((p) => (
          <li key={p.name} className="text-center me-4">
            <img
              src={p.src}
              alt={p.name}
              className="rounded-circle pet-avatar mb-2"
            />
            <div className="pet-name">{p.name}</div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Jumbotron;
