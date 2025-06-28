import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";

function GaleriaDeProductos({
  productos,
  cargando,
  setLimit,

}) {

  setLimit(0); //muestra todos los productos disponibles de la API (despues deberia hacer una paginacion)

  
  return (
    <>
      <Header

      />
      <main>
                {cargando ? (
          <div className="loading"><img src={loading} /></div>
        ) : (
          <><h1>Listado de productos</h1>
          <ProductList
            productos={productos}
          />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default GaleriaDeProductos;
