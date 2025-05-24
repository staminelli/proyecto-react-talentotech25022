import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/statics/Header'
import Footer from '../components/statics/Footer'
import { motion } from 'framer-motion'
import './Detalle.css'



const Detalle = ({cart,
  agregarAlCarrito,
  eliminarDelCarrito,
  //eliminarDelCarritoTodos,
  setIsCartOpen,
  isCartOpen,
  productos,
  }) => {
  console.log(productos)
  const { id } = useParams()
  const producto = productos.products.find((item) => item.id === parseInt(id))
  console.log(producto)
  
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
        <h2>{producto.title}</h2>
        <div>
          <div className="div_container">
            {producto.images.map((image, index) => (
              <div className="img_container"><img key={index} src={image} alt="Product" className="img"/></div>
            ))}
          </div>
          <div className="aside">
            <p>{producto.description}</p>
            <p className="precio">Precio ${producto.price}</p>
          </div>
          <button onClick={()=>{agregarAlCarrito(producto);setIsCartOpen(true)}}>Añadir al carrito</button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Detalle
