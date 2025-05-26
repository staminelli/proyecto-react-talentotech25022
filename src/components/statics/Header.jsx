import { NavLink } from "react-router-dom";
import Cart from "../Cart";
import "./statics.css";

function Header({
  cartItems,
  eliminarDelCarrito,
  agregarAlCarrito,
  setIsCartOpen,
  isCartOpen

}) {
  //const [isCartOpen, setIsCartOpen] = useState(false); //Lo agrego en App para usarlo en Home y abrir el carrito al añadir un producto 

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
