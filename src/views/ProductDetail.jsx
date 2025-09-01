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
        <span className={`status ${product.available ? "available" : "unavailable"}`}>
          {product.available ? "Disponible" : "Agotado" }
        </span>

        {!product.isDecantOnly && (
          <div className="price-container">
            <p className="price old">Antes ${product.oldPrice}</p>
            <p className="price new"><span>Ahora</span> ${product.price}</p>
          </div>
        )}

        {product.isDecantOnly && (
          <div className="product-detail__decant-only">
            <p className="product-detail__decant-price">
              Precio por mililitro: <strong>${product.priceDecant}</strong>
            </p>
            <p className="product-detail__decant-note">
              *La venta de decants es a partir de 5ml.
            </p>
          </div>
        )}

        <p className="description">{product.description}</p>

        {product.accords && (
          <div className="accords">
            <h3>Acordes principales:</h3>
            <div className="tags">
              {product.accords.map((acc, index) => (
                <span key={index} className="tag">{acc}</span>
              ))}
            </div>
          </div>
        )}

        {product.isDecant && !product.isDecantOnly && (
          <div className="product-detail__decant">
            <p className="product-detail__decant-price">Precio por mililitro: <strong>${product.priceDecant}</strong></p>
            <p className="product-detail__decant-note">*La venta de decants es a partir de 5ml.</p>
          </div>
        )}

        {product.specialFor && (
          <div className="special-for">
            <h3>Especial para:</h3>
            <div className="tags">
              {product.specialFor.map((s, index) => (
                <span key={index} className="tag">{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
