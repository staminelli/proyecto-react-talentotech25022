import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";
// import "../components/statics/staticsStyle.css";

function Home({
  productos,
  cargando,
  cart,
  agregarAlCarrito,
  eliminarDelCarrito,
  //eliminarDelCarritoTodos,
  setIsCartOpen,
  isCartOpen,
}) {
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
        <h1>Bienvenido a mi tienda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos
          molestiae, quam reprehenderit laboriosam aliquid enim iure est,
          dolorum necessitatibus tenetur? Neque, beatae animi dolore odit
          aperiam doloribus numquam repellendus.
        </p>
        {cargando ? (
          <img src={loading} />
        ) : (
          <ProductList
            eliminarDelCarrito={eliminarDelCarrito}
            //eliminarDelCarritoTodos={eliminarDelCarritoTodos}
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

export default Home;
