import React from "react";
import Products from "./Products";
import "./ProductList.css";
import { use } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { FaSearch } from "react-icons/fa";

const ProductList = () => {
  const { productosFiltrados, setBusqueda, busqueda } = use(ProductsContext);

  return (
    <>
      <div className="busqueda_container">
        <FaSearch className="icono-busqueda" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="galeria">
        {productosFiltrados.map((producto) => (
          <Products producto={producto} key={producto.id} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
