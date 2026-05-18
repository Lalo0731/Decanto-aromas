import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home.jsx'; 
import ProductDetail from './views/ProductDetail';
import PerfumesArabes from './views/PerfumesArabes';
import PerfumesDisenador from './views/PerfumesDisenador';
import DecantsArabe from './views/DecantsArabe';
import DecantsDisenador from './views/DecantsDisenador';
import DecantsNicho from './views/DecantsNicho.jsx';
import MainLayout from './layouts/MainLayout.jsx';

import ProductFullDetail from './views/ProductFullDetail.jsx';
import ProductDecantsDetail from './views/ProductDecantsDetail.jsx';

import RequestPerfume from './components/RequestPerfume.jsx';

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/perfumes-arabes" element={<PerfumesArabes />} />
          <Route path="/perfumes-disenador" element={<PerfumesDisenador />} />
          <Route path="/decants-disenador" element={<DecantsDisenador />} />
          <Route path="/decants-arabes" element={<DecantsArabe />} />
          <Route path="/decants-nicho" element={<DecantsNicho />} />
          <Route path="/solicitar-perfume" element={<RequestPerfume/>} />

          <Route path="/product-full/:id" element={<ProductFullDetail />} />
          <Route path="/product-decants/:id" element={<ProductDecantsDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}



