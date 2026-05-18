import React from "react";
import { Link } from "react-router-dom";
import imageComingSoon from '../images/proximamente.png';
import '../styles/components/comingSoonBanner.scss';

function ComingSoonBanner() {
    return(
        <Link to="/decants-nicho" className="nicho">
      
        <div className="nicho__bg">
          <img src={imageComingSoon} alt="Productos próximamente" />
        </div>
  
        <div className="nicho__overlay">
          <div className="nicho__content">
            <h2 className="nicho__title">Perfumes Nicho</h2>
            <p className="nicho__subtitle">
              Conoce los perfumes tan únicos como el secreto que guardas
            </p>
          </div>
        </div>
  
      </Link>
    );
};

export default ComingSoonBanner;