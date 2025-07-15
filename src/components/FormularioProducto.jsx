import React, { useState } from "react";

const FormularioProducto = ({ onAgregar }) => {
  const [producto, setProducto] = useState({
    title: "",
    price: "",
    stock: "",
    thumbnail: "",
  });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(producto);
    setProducto({
    title: "",
    price: "",
    stock: "",
    thumbnail: "",
    });
  };

    return (
    <form className="formulario" onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text" name="title" value={producto.title} onChange={handleChange} required />
                {errores.nombre && <p style={{ color: 'red' }}>{errores.title}</p>}
            </div>
            <div>
                <label>Precio:</label>
                <input type="text" name="price" value={producto.price} onChange={handleChange} required
                    min="0" />
                {errores.precio && <p style={{ color: 'red' }}>{errores.price}</p>}
            </div>

            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
            </div>
            <div>
                <label>Imagen URL:</label>
                <input
                    type="text"
                    name="thumbnail"
                    value={producto.thumbnail || ''}
                    onChange={handleChange}
                    required
                />
                {errores.imagen && <p style={{ color: 'red' }}>{errores.thumbnail}</p>}
            </div>
            <div>
                <label>Categoría:</label>
                <input
                    type="text"
                    name="category"
                    value={producto.category || ''}
                    onChange={handleChange}
                    required
                />
                {errores.category && <p style={{ color: 'red' }}>{errores.category}</p>}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormularioProducto;
