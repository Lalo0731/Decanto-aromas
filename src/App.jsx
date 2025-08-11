import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home.jsx'; 
import ProductDetail from './views/ProductDetail';
import PerfumesArabes from './views/PerfumesArabes';
import PerfumesDisenador from './views/PerfumesDisenador';
import DecantsArabe from './views/DecantsArabe';
import DecantsDisenador from './views/DecantsDisenador';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/perfumes-arabes" element={<PerfumesArabes />} />
        <Route path="/perfumes-disenador" element={<PerfumesDisenador />} />
        <Route path="/decants-disenador" element={<DecantsDisenador />} />
        <Route path="/decants-arabe" element={<DecantsArabe />} />
      </Routes>
    </Router>
  );
}