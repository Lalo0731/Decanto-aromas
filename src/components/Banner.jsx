import React from 'react';
import { Link } from 'react-router-dom';
import arabe from '../images/per-arabes.jpg';
import disenador from '../images/per-disenador.jpg';
import '../styles/components/banner.scss';

const Banner = () => {

  return (
    <div className="banner__wrapper">
      <h2 className="banner__text">COLECCIONES ÚNICAS</h2>
      <div className="banner__container">
        <Link to={"/perfumes-arabes"} className="banner__half banner__half--arabe">
          <img src={arabe} alt="Perfumes Árabes" />
          <div className="banner__overlay">
            <h3>perfumes Árabes</h3>
          </div>
        </Link>

        <Link to={"/perfumes-disenador"} className="banner__half banner__half--designer">
          <img src={disenador} alt="Perfumes de Diseñador" />
          <div className="banner__overlay">
            <h3>perfumes de Diseñador</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
