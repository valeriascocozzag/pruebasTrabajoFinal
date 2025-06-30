import React from "react";
import "./../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} PetCare. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;