import { NavLink } from "react-router-dom";
import Cart from "../Cart";
import "./statics.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Header() {
  const {
    setIsCartOpen,
    isCartOpen,
  } = useContext(CartContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/galeriadeproductos" className="link">
              Galeria de productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/acercade" className="link">
              Acerca de
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="link">
              Contacto
            </NavLink>
          </li>
          <li>
            <button
              className="btnCart"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
