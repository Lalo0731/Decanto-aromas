import React from "react";
import '../styles/components/socialMediaStrip.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function SocialMediaStrip(){
    return(
        <section className="social">
            <div className="social__item">
                <FontAwesomeIcon icon={faFacebook}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </div>

            <div className="social__item">
                <FontAwesomeIcon icon={faInstagram}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </div>

            <div className="social__item">
                <FontAwesomeIcon icon={faTiktok}  className="social__icon" />
                <p className="social__text">@decanto.aromas</p>
            </div>
        </section>
    );
};

export default SocialMediaStrip;