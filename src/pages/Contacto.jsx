import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

function Contacto({ cart, setIsCartOpen, isCartOpen ,
  agregarAlCarrito,
  eliminarDelCarrito, }) {
  return (
    <>
      <Header
        cartItems={cart}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
                eliminarDelCarrito={eliminarDelCarrito}
        //eliminarDelCarritoTodos={eliminarDelCarritoTodos}
        agregarAlCarrito={agregarAlCarrito}
      />
      <main>
        <h1>Contacto</h1>
      </main>
      <Footer />
    </>
  );
}

export default Contacto;
