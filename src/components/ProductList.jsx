import React from 'react'
import Products from './Products'
import './ProductList.css'


const ProductList = ({productos, agregarAlCarrito, setIsCartOpen}) => {
  return (
    <>
      <div className="galeria">
      {productos.products.map((producto) => (
        <Products producto={producto} key={producto.id} agregarAlCarrito={agregarAlCarrito} setIsCartOpen={setIsCartOpen}/>
      ))}
      </div>
    </>
  )
}

export default ProductList
