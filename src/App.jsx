import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home.jsx'; 
import ProductDetail from './views/ProductDetail';
import PerfumesArabes from './views/PerfumesArabes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/perfumes-arabes" element={<PerfumesArabes />} />
      </Routes>
    </Router>
  );
}