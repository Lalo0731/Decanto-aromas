import React from "react";
import { Link } from "react-router-dom";
import imageComingSoon from '../images/proximamente.png';

function ComingSoonBanner() {
    return(
        <Link to="/decants-nicho" className="banner__coming">
            <img src={imageComingSoon} alt="Productos próximamente" />
            <div className="banner__soon">
                <h2 className="banner__title">Perfumes Nicho</h2>
                <p className="banner__subtitle">Conoce los perfumes tan único como el secreto que guardas</p>
            </div>
      </Link>
    );
};

export default ComingSoonBanner;