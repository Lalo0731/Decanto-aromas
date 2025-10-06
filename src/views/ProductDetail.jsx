import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPerfumeById } from '../services/perfumesService';
import '../styles/productDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getPerfumeById(id);
      if (data) {
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(`http://127.0.0.1:3000/uploads/perfumes/${data.images[0].image_url}`);
        }
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando perfume...</p>;
  if (!product) return <p>No se encontró el perfume.</p>;

  return (
    <section className="product-detail">
      <div className="product-detail__gallery">
        <div className="product-detail__thumbnails">
          {product.images?.map((img, index) => {
            const imageUrl = `http://127.0.0.1:3000/uploads/perfumes/${img.image_url}`;
            return (
              <img
                key={index}
                src={imageUrl}
                alt={`thumbnail-${index}`}
                onClick={() => setSelectedImage(imageUrl)}
                className={selectedImage === imageUrl ? 'active' : ''}
              />
            );
          })}
        </div>
        <div className="product-detail__main-image">
          {selectedImage ? (
            <img src={selectedImage} alt={product.name} />
          ) : (
            <div className="no-image">Sin imagen</div>
          )}
        </div>
      </div>

      <div className="product-detail__info">
        <h1>{product.name}</h1>
        <span className={`status ${product.available ? 'available' : 'unavailable'}`}>
          {product.available ? 'Disponible' : 'Agotado'}
        </span>

        {!product.isDecantOnly && (
          <div className="price-container">
            {product.oldPrice && <p className="price old">Antes ${product.oldPrice}</p>}
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

        {product.accords?.length > 0 && (
          <div className="accords">
            <h3>Acordes principales:</h3>
            <div className="tags">
              {product.accords.map((acc) => (
                <span key={acc.id} className="tag">{acc.accord}</span>
              ))}
            </div>
          </div>
        )}

        {product.isDecant && !product.isDecantOnly && (
          <div className="product-detail__decant">
            <p className="product-detail__decant-price">
              Precio por mililitro: <strong>${product.priceDecant}</strong>
            </p>
            <p className="product-detail__decant-note">
              *La venta de decants es a partir de 5ml.
            </p>
          </div>
        )}

        {product.specialFor?.length > 0 && (
          <div className="special-for">
            <h3>Especial para:</h3>
            <div className="tags">
              {product.specialFor.map((s) => (
                <span key={s.id} className="tag">{s.context}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
