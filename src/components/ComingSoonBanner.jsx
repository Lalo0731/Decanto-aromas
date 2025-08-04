import React from "react";
import { useNavigate } from "react-router-dom";
import imageComingSoon from '../images/proximamente.png';

function ComingSoonBanner() {
    const navigate = useNavigate();

    const goToComingSoon = () => {
        navigate('/proximamente');
    }
    return(
        <div className="banner__coming" onClick={goToComingSoon}>
            <img src={imageComingSoon} alt="Productos próximamente" />
            <div className="banner__soon">
                <h2 className="banner__title">Próximamente</h2>
                <p className="banner__subtitle">Conoce los perfumes que muy pronto serán tuyos</p>
            </div>
      </div>
    );
};

export default ComingSoonBanner;