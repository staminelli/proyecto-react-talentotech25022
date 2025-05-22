import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  isOpen,
  onClose,
  eliminarDelCarrito,
  agregarAlCarrito,
  //eliminarDelCarritoTodos,
  //setIsCartOpen,
}) => {
  //const [cantidad, setCantidad] = React.useState(1);
  // const incrementar = () => {
  //   setCantidad(cantidad + 1);
  // }
  // const decrementar = () => {
  //   if (cantidad > 1) {
  //     setCantidad(cantidad - 1);
  //   }
  // }
  // console.log(cartItems)
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrito de compras</h2>
        <button onClick={onClose} className="close-button">
          &gt;
        </button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.cantidad}</p>
              <button onClick={() => agregarAlCarrito(item)}>+</button>
              <button onClick={() => eliminarDelCarrito(item)}>-</button>
              <button
                onClick={() => {
                  item.cantidad = 1;
                  eliminarDelCarrito(item);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              {/* <button onClick={()=>eliminarDelCarritoTodos(item)}><i className="fa-solid fa-trash"></i></button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
