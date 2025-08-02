// src/views/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <Banner />
    </>
  );
}