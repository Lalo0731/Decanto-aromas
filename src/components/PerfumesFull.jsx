import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPerfumes } from '../services/perfumesService';
// import perfumes from '../data/products';
import '../styles/components/products.scss';

function PerfumesFull({ title, filterFn, category, isNew }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const productsRef = useRef(null);
  const productsPerPage = 8;
  // const products = perfumes.filter(filterFn);

  useEffect(() => {
    const fetchPerfumes = async () => {
      const data = await getPerfumes(category, isNew);
      setProducts(filterFn ? data.filter(filterFn) : data);
      setCurrentPage(1);
    };
    fetchPerfumes();
  }, [category, isNew, filterFn]);

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex =
    (currentPage - 1) * productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );

  const changePage = (page) => {

    setCurrentPage(page);

    setTimeout(() => {
      productsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 50);
  };

  const handleClick = (id) => {
    navigate(`/product-full/${id}`);
  };

  return (
    <section className="products" ref={productsRef}>
      <h2>{title}</h2>
      <div className="products__search">
        <input type="text" placeholder='Buscar perfume...'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        />
      </div>
      <div className="products__grid">
        {/* {products.length > 0 ? ( */}
        {/* {filteredProducts.length > 0 ? ( */}
        {currentProducts.length > 0 ? (
          // products.map((product) => {
          // filteredProducts.map((product) => {
            currentProducts.map((product) => {
            const mainImage =
              product.images?.[0]?.image_url
              ? `http://127.0.0.1:3000/uploads/perfumes/${product.images[0].image_url}`
              : product.image || '';
              return(
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
  
                {product.price && !product.isDecantOnly && (
                  <p className="price">
                    {product.oldPrice && (
                      <span className="before">Antes ${product.oldPrice}</span>
                    )}
                    <span className="now">Ahora ${product.price}</span>
                  </p>
                )}
  
                {product.isDecant && !product.isDecantOnly && (
                  <span className="products__decants">
                    Disponible en Decants
                  </span>
                )}
  
                {product.isDecantOnly && (
                  <div className="products__decants-only">
                    <p className="price">
                      Precio por ML: $<strong>{product.priceDecant}</strong>
                    </p>
                    <p className="note">*Disponible solo en decants</p>
                  </div>
                )}
  
              </div>
              );
          })
        ) : (
          <p>No hay perfumes disponibles.</p>
        )}
      </div>
      {totalPages > 1 && (

        <div className="products__pagination">

          <button
            className="products__pagination-arrow"
            onClick={() =>
              changePage(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => {

              const page = index + 1;

              return (

                <button
                  key={page}
                  className={`products__pagination-number ${
                    currentPage === page
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    changePage(page)
                  }
                >
                  {page}
                </button>

              );

            }
          )}

          <button
            className="products__pagination-arrow"
            onClick={() =>
              changePage(currentPage + 1)
            }
            disabled={
              currentPage === totalPages
            }
          >
            ›
          </button>
        </div>
        )}
    </section>
  );
}

export default PerfumesFull;
