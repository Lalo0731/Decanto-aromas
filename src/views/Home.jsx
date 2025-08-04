// src/views/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import DecantsSection from '../components/DecantsSection';
import Footer from '../components/Footer';
import ComingSoonBanner from '../components/ComingSoonBanner';
import SocialMediaStrip from '../components/SocialMediaStrip';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DecantsSection/>
      <Banner />
      <ProductList />
      <ComingSoonBanner/>
      <SocialMediaStrip/>
      <Footer />
    </>
  );
}