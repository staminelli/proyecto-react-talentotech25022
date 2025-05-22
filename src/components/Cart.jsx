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

  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.cantidad;
  });

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-container">
        
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
                  <div className="flex gap icent" style={{ height: "87px" }}>
                    <img
                      src={item.thumbnail}
                      alt="Product"
                      className="img-cart"
                    />
                    <div className="flex col">
                      <h3>{item.title}</h3>
                      <div className="flex gap sbtw icent" style={{ width: "190px" }}>
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
                          {/* <button onClick={()=>eliminarDelCarritoTodos(item)}><i className="fa-solid fa-trash"></i></button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        
        <h3 className="total">Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
