import React from "react";
import '../styles/components/socialMediaStrip.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function SocialMediaStrip(){
    return(
        <section className="social">
            <a 
                href="https://www.facebook.com/share/18cKMvvaTv/"
                target="_blank"
                rel="noopener noreferrer"
                className="social__item"
                >
                <FontAwesomeIcon icon={faFacebook}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </a>

            <a 
                href="https://www.instagram.com/decanto.aromas?igsh=NGpxMTNyeGdjcHBq"
                target="_blank"
                rel="noopener noreferrer"
                className="social__item">
                <FontAwesomeIcon icon={faInstagram}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </a>

            <a 
                href="https://www.tiktok.com/@decanto.aromas?_r=1&_t=ZS-95Eq1foCiV3"
                target="_blank"
                rel="noopener noreferrer"
                className="social__item">
                <FontAwesomeIcon icon={faTiktok}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </a>
        </section>
    );
};

export default SocialMediaStrip;