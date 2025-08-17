import React from "react";
import { Link } from "react-router-dom";
import imageComingSoon from '../images/proximamente.png';

function ComingSoonBanner() {
    return(
        <Link to="/proximamente" className="banner__coming">
            <img src={imageComingSoon} alt="Productos próximamente" />
            <div className="banner__soon">
                <h2 className="banner__title">Próximamente</h2>
                <p className="banner__subtitle">Conoce los perfumes que muy pronto serán tuyos</p>
            </div>
      </Link>
    );
};

export default ComingSoonBanner;