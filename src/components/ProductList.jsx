import React from 'react';
import '../styles/components/products.scss';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';

function ProductList() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="products">
      <h2>LO MÁS NUEVO</h2>
      <div className="products__grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleClick(product.id)}
          >
            <div className="image-container">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="price">
              <span className="before">${product.priceBefore}</span>
              <span className="now">${product.priceNow}</span>
          </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;




// import React from 'react';
// import '../styles/components/products.scss';

// import perfume1 from '../images/perfume1.webp';
// import perfume2 from '../images/perfume2.webp';
// import perfume3 from '../images/perfume3.webp';
// import perfume4 from '../images/perfume4.webp';

// function ProductList() {
//   return (
//     <section className="products">
//       <h2>LO MÁS NUEVO</h2>
//       <div className="products__grid">
//         <div className="product-card">
//           <img src={perfume1} alt="Perfume 1" />
//           <h3>Perfume Uno</h3>
//           <p>$950</p>
//         </div>
//         <div className="product-card">
//           <img src={perfume2} alt="Perfume 2" />
//           <h3>Perfume Dos</h3>
//           <p>$1,200</p>
//         </div>
//         <div className="product-card">
//           <img src={perfume3} alt="Perfume 2" />
//           <h3>Perfume Dos</h3>
//           <p>$1,200</p>
//         </div>
//         <div className="product-card">
//           <img src={perfume4} alt="Perfume 2" />
//           <h3>Perfume Dos</h3>
//           <p>$1,200</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductList;
