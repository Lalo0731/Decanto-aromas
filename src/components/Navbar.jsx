import React from 'react';
import '../styles/components/navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Decanto Aromas</div>
      <ul className="navbar__links">
        <li>Inicio</li>
        <li>Perfumes</li>
        <li>Próximamente</li>
        <li>Ofertas</li>
        <li>Blog</li>
        <li>Registro / Login</li>
        <li>🛒</li>
      </ul>
    </nav>
  );
}

export default Navbar;
