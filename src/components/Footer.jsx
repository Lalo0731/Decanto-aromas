import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import '../styles/components/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Decanto Aromas</h3>
          <p>Perfumes originales en presentación decantada.</p>
        </div>

        <div className="footer__section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/perfumes-arabes">Perfumes Árabes</a></li>
            <li><a href="/decants-disenador">Decants de Diseñador</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Síguenos</h4>
          <div className="footer__social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Decanto Aromas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
