import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import '../styles/productDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <section className="product-detail">
      <div className="product-detail__gallery">
        <div className="product-detail__thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? 'active' : ''}
            />
          ))}
        </div>
        <div className="product-detail__main-image">
          <img src={selectedImage} alt="Selected product" />
        </div>
      </div>

      <div className="product-detail__info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        {/* <button className="btn-buy">Comprar ahora</button> */}
      </div>
    </section>
  );
};

export default ProductDetail;
