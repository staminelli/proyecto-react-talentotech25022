import React from "react";
import Products from "./Products";
import "./ProductList.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({ productos }) => {
  
  // const { cart, agregarAlCarrito, eliminarDelCarrito, setIsCartOpen, isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="galeria">
        {productos.products.map((producto) => (
          <Products
            producto={producto}
            key={producto.id}
            // agregarAlCarrito={agregarAlCarrito}
            // setIsCartOpen={setIsCartOpen}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
