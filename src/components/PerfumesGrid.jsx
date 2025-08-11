import React from 'react';
import { useNavigate } from 'react-router-dom';
import perfumes from '../data/products';
import '../styles/components/products.scss';

function PerfumesGrid({ title, filterFn }) {
  const navigate = useNavigate();
  const products = perfumes.filter(filterFn);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="products">
      <h2>{title}</h2>
      <div className="products__grid">
        {products.map((product) => {
          const mainImage = product.images?.[0] || product.image?.[0] || '';
          return (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleClick(product.id)}
            >
              <div className="image-container">
                {mainImage ? (
                  <img src={mainImage} alt={product.name} />
                ) : (
                  <div className="no-image">Sin imagen</div>
                )}
              </div>
              <h3>{product.name}</h3>
              <p className="price">
                <span className="before">Antes ${product.oldPrice}</span>
                <span className="now">Ahora ${product.price}</span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PerfumesGrid;
