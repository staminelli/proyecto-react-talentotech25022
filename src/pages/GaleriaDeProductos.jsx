import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

function GaleriaDeProductos({ cart }) {
  return (
    <>
      <Header cartItems={cart} />
      <main>
        <h1>Galeria de productos</h1>
        
        Maiores libero, nulla iusto, dolorem et praesentium officiis nisi qui facere impedit possimus vero debitis repudiandae cumque id, fugit vel nihil consectetur dicta rem quas voluptatibus ut illum. Quasi, nemo.
        Explicabo quia, ipsam mollitia praesentium numquam obcaecati rerum commodi et consequuntur aspernatur voluptas hic nisi voluptatem, neque culpa nemo. Ex facere recusandae rem, soluta et odit libero rerum at quo!
      </main>
      <Footer />
    </>
  );
}

export default GaleriaDeProductos;
