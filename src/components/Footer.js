import React from "react";
import '../styles/Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Selma Dahi. Tous droits réservés.</p>
      <div className="socials">
      <a href="#" className="icon">Contactez-moi</a>
        <a href="https://github.com/amles7" className="icon">GitHub</a>
        <a href="#" className="icon">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
