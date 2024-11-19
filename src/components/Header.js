import React from "react";
import '../styles/Header.css';
import Logo from'../image/télécharger.webp';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="logo du site" className="logo-image" />
        <h2 className="logo">Selma </h2>
      </div>
      <nav>
      <a href="#portfolio" className="navLink">Portfolio</a>
        <a href="#skills" className="navLink">Compétences</a>

      </nav>
    </header>
  );
}

export default Header;
