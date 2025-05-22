import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import "./statics.css";

function Header({
  cartItems,
  eliminarDelCarrito,
  agregarAlCarrito,
  setIsCartOpen,
  isCartOpen

  //eliminarDelCarritoTodos,
}) {
  //const [isCartOpen, setIsCartOpen] = useState(false); Lo agrego en App para usarlo en Home y abrir el carrito al añadir un producto 

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/galeriadeproductos" className="link">
              Galeria de productos
            </Link>
          </li>
          <li>
            <Link to="/acercade" className="link">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link">
              Contacto
            </Link>
          </li>
          <li>
            <button
              className="btnCart"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart
              cartItems={cartItems}
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              eliminarDelCarrito={eliminarDelCarrito}
              agregarAlCarrito={agregarAlCarrito}
              //setIsCartOpen={setIsCartOpen}
              //eliminarDelCarritoTodos={eliminarDelCarritoTodos}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
