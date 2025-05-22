import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

const AcercaDe = ({
  cart,
  agregarAlCarrito,
  eliminarDelCarrito,
  //eliminarDelCarritoTodos,
  setIsCartOpen,
  isCartOpen,
}) => {
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
        <h1>Acerca De</h1>
      </main>

      <Footer />
    </>
  );
};

export default AcercaDe;
