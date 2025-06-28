import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const agregarAlCarrito = (producto) => {
    const productoExistente = cart.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (producto) => {
    const productoExistente = cart.find((item) => item.id === producto.id);
    if (productoExistente.cantidad === 1) {
      setCart(cart.filter((item) => item.id !== producto.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...productoExistente, cantidad: productoExistente.cantidad - 1 }
            : item
        )
      );
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
    
  };

  const onClose = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        isCartOpen,
        setIsCartOpen,
        onClose,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
