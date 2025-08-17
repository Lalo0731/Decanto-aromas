import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import DecantsSection from '../components/DecantsSection';
import ComingSoonBanner from '../components/ComingSoonBanner';
import SocialMediaStrip from '../components/SocialMediaStrip';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if(location.state?.scrollTo){
      const section = document.getElementById(location.state.scrollTo);
      if(section){
        section.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({},document.title);
    }
  },[location]);

  return (
    <>
      <Hero />
      <DecantsSection/>
      <Banner />
      <div id="lo-mas-nuevo">
        <ProductList />
      </div>
      <ComingSoonBanner/>
      <SocialMediaStrip/>
    </>
  );
}
