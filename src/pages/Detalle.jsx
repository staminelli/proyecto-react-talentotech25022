import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import "./Detalle.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Detalle = ({ productos }) => {
  // console.log(productos);
  const { id } = useParams();
  const producto = productos.products.find((item) => item.id == parseInt(id));
  // console.log(producto);

  const { agregarAlCarrito, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <Header />

      <main>
        <h2>{producto.title}</h2>
        <div>
          <div className="div_container">
            {producto.images.map((image, index) => (
              <div className="img_container">
                <img key={index} src={image} alt="Product" className="img" />
              </div>
            ))}
            <div className="aside_detalle">
              <p><b>Descripcion:</b> {producto.description}</p>
              <p className="precio">Precio ${producto.price}</p>
            </div>
            <button
              className="btn_detalle"
              onClick={() => {
                agregarAlCarrito(producto);
                setIsCartOpen(true);
              }}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Detalle;
