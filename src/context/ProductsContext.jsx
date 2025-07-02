import { createContext, useState, useEffect } from "react";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(12);
  const [busqueda, setBusqueda] = useState("");
  let productosFiltrados = []

  useEffect(() => {
    const fetchData = async (limit) => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/?limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        setProductos(data);
        // console.log(data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    fetchData(limit);
  }, [limit]);

  // console.log(productos);
  if (!cargando) {
    productosFiltrados = productos.products.filter((producto) =>
      producto?.title.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  // console.log(productosFiltrados)

  return (
    <ProductsContext
      value={{
        productos,
        cargando,
        setLimit,
        error,
        productosFiltrados,
        setBusqueda,
        busqueda,
      }}
    >
      {children}
    </ProductsContext>
  );
};
