import React from "react";
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

const AcercaDe = ({ cart }) => {
  return (
    <>
      <Header cartItems={cart} />
      <main>
        <h1>Acerca De</h1>
      </main>

      <Footer />
    </>
  );
};

export default AcercaDe;
