import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/hero.scss';

import Carousel from './Carousel';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__carousel">
        <Carousel />
        <div className="hero__content">
          <h1>Fragancias únicas para ti</h1>
          <p>Descubre la esencia de tu personalidad</p>
          <Link to="/perfumes-disenador" className='hero__btn'>Explorar</Link> 
        </div>
      </div>
    </section>
  );
}

export default Hero;
