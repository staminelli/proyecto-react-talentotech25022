import React from "react";
import Products from "./Products";
import "./ProductList.css";


const ProductList = ({ productos }) => {
  
  return (
    <>
      <div className="galeria">
        {productos.products.map((producto) => (
          <Products
            producto={producto}
            key={producto.id}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
