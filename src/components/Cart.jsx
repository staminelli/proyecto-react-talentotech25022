import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    agregarAlCarrito,
    eliminarDelCarrito,
    setIsCartOpen,
    isCartOpen,
    onClose,
    vaciarCarrito,
  } = useContext(CartContext);

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.cantidad;
  });

  return (
    <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Carrito de compras</h2>
          <button onClick={onClose} className="close-button">
            &#10095;
          </button>
        </div>
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cart.map((item) => (
              <div key={item.id}>
                <div className="flex gap icent" style={{ height: "87px" }}>
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="img-cart"
                  />
                  <div className="flex col">
                    <h3>{item.title}</h3>
                    <div
                      className="flex gap sbtw icent"
                      style={{ width: "190px" }}
                    >
                      <div className="flex col">
                        <p>Precio: ${item.price}</p>
                        <p>Cantidad: {item.cantidad}</p>
                      </div>
                      <div className="flex">
                        <button
                          className="btn"
                          onClick={() => agregarAlCarrito(item)}
                        >
                          +
                        </button>
                        <button
                          className="btn"
                          onClick={() => eliminarDelCarrito(item)}
                        >
                          -
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            item.cantidad = 1;
                            eliminarDelCarrito(item);
                          }}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3 className="total">Total: ${total.toFixed(2)}</h3>
          <div className="buttons">
            <button
              className="total"
              onClick={() => {
                setIsCartOpen(false);
                alert("Gracias por tu compra!");
                vaciarCarrito();
              }}
            >
              Finalizar Compra
            </button>
            <button
              className="total"
              onClick={() => {
                if (!cart.length) {
                  alert("El carrito ya está vacío.");
                  return;
                }
                confirm("¿Estás seguro de que quieres vaciar el carrito?") && vaciarCarrito();
              }}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
