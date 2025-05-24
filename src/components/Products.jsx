import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
// import Header from "./statics/Header";  


const Products = ({producto, agregarAlCarrito, setIsCartOpen}) => {
  return (
    <section className="card">
      <Link to={`/Detalle/${producto.id}`}><h3 className="nombre">{producto.title}</h3>
      <div className="card-main">
          <div className="img_container">
            <img src={producto.thumbnail} alt="Product" className="img"/>
          </div>
          
          <div className="aside">
            <div className="description">
              <p>{producto.description}</p>
            </div>
            <p className="precio">${producto.price}</p>
          </div>
      </div></Link>
      <button onClick={()=>{agregarAlCarrito(producto);setIsCartOpen(true)}}>Añadir al carrito</button>
      
        
      
    </section>
  );
};

export default Products;
