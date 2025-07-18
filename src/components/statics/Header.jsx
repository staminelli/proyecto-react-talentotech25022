import { NavLink } from "react-router-dom";
import Cart from "../Cart";
import "./statics.css";
import { use } from "react";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { setIsCartOpen, isCartOpen } = use(CartContext);

  return (
    <header>
      <nav className="navbar navbar-expand{-sm|-md|-lg|-xl|-xxl}">
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
          <li>
            <NavLink className="link" to="/login">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/admin">
              <i className="fa-solid fa-user-tie"></i> Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
