import React from 'react'
import Header from "../components/statics/Header";
import Footer from "../components/statics/Footer";

function Contacto({cart}) {
  return (
    <>
      <Header cartItems={cart}/>
      <main>
        <h1>Contacto</h1>
      </main>
      <Footer/> 
    </>
  )
}

export default Contacto
