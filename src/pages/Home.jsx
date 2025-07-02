import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";
// import "../components/statics/staticsStyle.css";
import { use } from "react";
import { ProductsContext } from "../context/ProductsContext";

function Home() {
  const {
    cargando,
    setLimit,
  } = use(ProductsContext);

  setLimit(12);
  return (
    <>
      <Header />
      <main>
        <h1 className="center">React E-commerce</h1>

        {cargando ? (
          <div className="loading">
            <img src={loading} />
          </div>
        ) : (
          <ProductList/>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Home;
