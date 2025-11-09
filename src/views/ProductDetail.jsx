import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPerfumeById } from '../services/perfumesService';
import { showWarning } from '../utils/alerts';
import '../styles/productDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ml, setMl] = useState('');

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

  const handleWhatsApp = () => {
    const phone = "529617602165";
    let message = `Hola, quieres adquirir el perfume *${product.name}*`;

    if(product.isDecant || product.isDecantOnly){
      if(!ml || isNaN(Number(ml)) || Number(ml) < 5) {
        showWarning("Por favor ingresa una cantidad válida (mínimo 5ml");
        return;
      }
      message += ` como decant de *${ml}ml* a $${product.priceDecant} por ml.`;
      message += `\nTotal: $${(Number(ml) * Number(product.priceDecant)).toFixed(2)}`;
    } else {
      message += ` en presentación completa a $${product.price}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }

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

        {(product.isDecant || product.isDecantOnly) && (
          <div className="product-detail__decant">
            <p>Ingrese la cantidad de Mililitros</p>
            <input
              type="number"
              min="5"
              value={ml}
              onChange={(e) => setMl(e.target.value)}
              placeholder="Ingresa los ml"
              className="input-ml"
            />
          </div>
        )}

        <p className="description">{product.description}</p>

        <button
          className="whatsapp-btn"
          onClick={handleWhatsApp}
          disabled={!product.available}
        >
          {product.isDecant || product.isDecantOnly ? "Adquirir Decant por WhatsApp" : "Comprar Perfume por WhatsApp"}
        </button>

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
