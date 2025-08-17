import React from "react";
import { Link } from 'react-router-dom';
import disenador from '../images/disenador.webp';
import arabes from '../images/arabes.webp';
import '../styles/components/decantsSection.scss';

function DecantsSection() {
    return(
        <section className="decants__section">
            <h2 className="decants__title">DECANTS</h2>
            <div className="decants__container">
                <div className="decants__card">
                    <img src={disenador} alt="Decants de diseñador" />
                    <div className="decants__content">
                        <h2>Decants de Diseñador</h2>
                        <Link to="/decants-disenador" className="btn">
                            Ver más
                        </Link>
                    </div>
                </div>

                <div className="decants__card">
                    <img src={arabes} alt="Decants árabes"/>
                    <div className="decants__content">
                        <h2>Decants Árabes</h2>
                        <Link to="/decants-arabes" className="btn">
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DecantsSection;

