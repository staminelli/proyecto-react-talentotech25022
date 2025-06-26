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

  setLimit(0); //muestra todos los productos disponibles de la API (despues deberia hacer una paginacion)
  // limit = 100;
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
          <div className="loading"><img src={loading} /></div>
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
