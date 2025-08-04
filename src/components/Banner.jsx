import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageBanner from '../images/perfumes_arabes.webp';
import '../styles/components/banner.scss';

const Banner = () => {
  const navigate = useNavigate();

  const goToPerfumesArabes = () => {
    navigate('/perfumes-arabes');
  };

  return (
    <div className="banner__arabe" onClick={goToPerfumesArabes}>
      <img src={imageBanner} alt="Perfumes Árabes" />
      <div className="banner__overlay">
        <h2>Descubra nuestra gama de perfumes árabes</h2>
      </div>
    </div>
    // <div className="perfumes-banner" onClick={goToPerfumesArabes}>
    //   <img src={imageBanner} alt="Perfumes Árabes" />
    //   <div className="overlay">
    //     <h2>Descubra nuestra gama de perfumes árabes</h2>
    //   </div>
    // </div>
  );
};

export default Banner;
