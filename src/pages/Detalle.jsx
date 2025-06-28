import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import "./Detalle.css";
import { use } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";

const Detalle = () => {
  // console.log(productos);
  const { productos } = use(ProductsContext);
  const { agregarAlCarrito, setIsCartOpen } = use(CartContext);

  const { id } = useParams();
  const producto = productos.products.find((item) => item.id == parseInt(id));
  // console.log(producto);

  return (
    <>
      <Header />

      <main>
        <h2 className="center">{producto.title}</h2>
        <div>
          <div className="detail_container">
            <div className="div_container" key={producto.id}>
              {producto.images.map((image, index) => (
                <div className="img_container">
                  <img key={index} src={image} alt="Product" className="img" />
                </div>
              ))}
            </div>
            <div className="aside_detalle">
              <p>
                <b>Descripción:</b> {producto.description}
              </p>
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
