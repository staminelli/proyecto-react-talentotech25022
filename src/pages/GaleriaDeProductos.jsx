import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";

function GaleriaDeProductos({
  productos,
  cargando,
  cart,
  agregarAlCarrito,
  eliminarDelCarrito,
  setIsCartOpen,
  isCartOpen,
  setLimit,
}) {

  setLimit(194);
  return (
    <>
      <Header
        cartItems={cart}
        eliminarDelCarrito={eliminarDelCarrito}
        //eliminarDelCarritoTodos={eliminarDelCarritoTodos}
        agregarAlCarrito={agregarAlCarrito}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />
      <main>
                {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList
            eliminarDelCarrito={eliminarDelCarrito}
            agregarAlCarrito={agregarAlCarrito}
            productos={productos}
            setIsCartOpen={setIsCartOpen}
            isCartOpen={isCartOpen}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default GaleriaDeProductos;
