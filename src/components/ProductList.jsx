import React from 'react';
import '../styles/components/products.scss';
import PerfumesGrid from './PerfumesGrid';

function ProductList() {
  return <PerfumesGrid title="LO MÁS NUEVO" filterFn={(p) => p.isNew} />;
}

export default ProductList;