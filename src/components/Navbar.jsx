import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/navbar.scss';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const scrollToSection = (id) => {
    if(location.pathname === "/"){
      const section = document.getElementById(id);
      if(section){
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id }});
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar__logo">Decanto Aromas</Link>
      <ul className="navbar__links">
        <li><Link to="/">Inicio</Link></li>
        <li 
          className="navbar__dropdown"
          onMouseEnter={() => setOpenDropdown("perfumes")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="navbar__link">Perfumes</span>
          {openDropdown === "perfumes" && (
            <ul className="navbar__submenu">
              <li><Link to="/perfumes-disenador">Diseñador</Link></li>
              <li><Link to="/perfumes-arabes">Árabe</Link></li>
            </ul>
          )}
        </li>
        <li 
          className="navbar__dropdown"
          onMouseEnter={() => setOpenDropdown("decants")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span className="navbar__link">Decants</span>
          {openDropdown === "decants" && (
            <ul className="navbar__submenu">
              <li><Link to="/decants-disenador">Diseñador</Link></li>
              <li><Link to="/decants-arabes">Árabe</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/proximamente">Próximamente</Link></li>
        <li>
          <button
            className="navbar__link navbar__button"
            onClick={() => scrollToSection("lo-mas-nuevo")}
          >
            Lo más nuevo
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
