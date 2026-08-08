import React from "react";
import '../styles/components/cart.scss';
import { useCart } from "../context/CartContext";

export default function Cart(){
    const { cartItems, removeFromCart, clearCart } = useCart();
    // console.log("cartItems",cartItems);
    const total = cartItems.reduce(
        (acc, item) =>
          acc +
          Number(
            item.type === "decant"
              ? item.subtotal
              : item.price
          ),
        0
    );

    const handleWhatsApp = () => {
        const phone = "529617602165";
      
        let message = "Hola, me interesa el siguiente pedido:\n\n";
      
        cartItems.forEach((item) => {
          if (item.type === "full") {
            message += `${item.name}\n`;
            message += `Cantidad: 1\n`;
            message += `Precio: $${item.price}\n\n`;
          }
      
          if (item.type === "decant") {
            message += `${item.name} (Decant)\n`;
            message += `${item.ml}ml x $${item.priceDecant}\n`;
            message += `Total: $${item.subtotal}\n\n`;
          }
        });
      
        message += `TOTAL: $${total.toFixed(2)}`;
      
        const encodedMessage = encodeURIComponent(message);
      
        window.open(
          `https://wa.me/${phone}?text=${encodedMessage}`,
          "_blank"
        );
        
        clearCart();
    };

  return (
    <section className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Mi Carrito</h1>

        <div className="cart__empty">
            { cartItems.length === 0 ? 
                (
                    <p>No hay productos en el carrito.</p> 
                ) : (
                        <p>Productos en carrito: {cartItems.length}</p>
                    )
            } 
          
        </div>

        <div className="cart__items">
            {cartItems.map((item, index) => (
                <div
                    key={index}
                    className="cart__item"
                >
                <img
                    src={item.image}
                    alt={item.name}
                    className="cart__image"
                />
                    <div className="cart__info">
                        <h3>{item.name}</h3>

                        {item.type === "full" && (
                            <p>${item.price}</p>
                        )}

                        {item.type === "decant" && (
                            <>
                                <p>{item.ml}ml</p>
                                <p>${item.subtotal}</p>
                            </>
                        )}
                    </div>
                    <button
                        className="cart__remove"
                        onClick={() => removeFromCart(index)}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
        </div>

        <div className="cart__summary">
          <h2>Total: ${total.toFixed(2)}</h2>

          <button 
            className="cart__btn"
            onClick={handleWhatsApp}
            disabled={cartItems.length === 0}
          >
            Solicitar pedido por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}