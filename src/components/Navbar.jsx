import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/components/navbar.scss';

import logo from '../images/logo.png';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    if(location.pathname === "/"){
      const section = document.getElementById(id);
      if(section){
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id }});
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar__logo">
        {/* Decanto Aromas */}
        <img src={logo} alt="Logo Decanto" className="navbar__logo-img" />
      </Link>
      <div className={`navbar__hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {isMobile ? (
          <>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/perfumes-disenador" onClick={() => setMenuOpen(false)}>Perfumes Diseñador</Link></li>
            <li><Link to="/perfumes-arabes" onClick={() => setMenuOpen(false)}>Perfumes Árabe</Link></li>
            <li><Link to="/decants-disenador" onClick={() => setMenuOpen(false)}>Decants Diseñador</Link></li>
            <li><Link to="/decants-arabes" onClick={() => setMenuOpen(false)}>Decants Árabe</Link></li>
            <li><Link to="/decants-nicho" onClick={() => setMenuOpen(false)}>Decants Nicho</Link></li>
            <li>
              <button
                className="navbar__link navbar__button"
                onClick={() => scrollToSection("lo-mas-nuevo")}
              >
                Lo más nuevo
              </button>
            </li>
          </>
        ) : (
          <>
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
                  <li><Link to="/decants-nicho">Nicho</Link></li>
                </ul>
              )}
            </li>
            {/* <li><Link to="/decants-nicho">Próximamente</Link></li> */}
            <li>
              <button
                className="navbar__link navbar__button"
                onClick={() => scrollToSection("lo-mas-nuevo")}
              >
                Lo más nuevo
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

