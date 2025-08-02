import React from 'react';
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
          <button>Explorar</button> 
        </div>
      </div>
    </section>
  );
}

export default Hero;
