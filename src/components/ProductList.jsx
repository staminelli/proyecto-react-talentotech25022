import React from 'react'
import Products from './Products'
import './ProductList.css'


const ProductList = ({productos, agregarAlCarrito, setIsCartOpen}) => {
  return (
    <>
      <h2>Galeria de Productos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      <div className="galeria">
      {productos.map((producto) => (
        <Products producto={producto} key={producto.id} agregarAlCarrito={agregarAlCarrito} setIsCartOpen={setIsCartOpen}/>
      ))}
      </div>
    </>
  )
}

export default ProductList
