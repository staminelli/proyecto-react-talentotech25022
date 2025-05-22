import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import NotFound from "./pages/NotFound";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/?limit=50"
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        setProductos(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  const agregarAlCarrito = (producto) => {
    const productoExistente = cart.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...productoExistente, cantidad: productoExistente.cantidad + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...producto, cantidad: 1 }]);
    }
  };
  const eliminarDelCarrito = (producto) => {
    const productoExistente = cart.find((item) => item.id === producto.id);
    if (productoExistente.cantidad === 1) {
      setCart(cart.filter((item) => item.id !== producto.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...productoExistente, cantidad: productoExistente.cantidad - 1 }
            : item
        )
      );
    }
  };

  // const eliminarDelCarritoTodos = (producto) => {
  //   setCart(cart.filter((item) => item.id !== producto.id));
  // };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              eliminarDelCarrito={eliminarDelCarrito}
              //eliminarDelCarritoTodos={eliminarDelCarritoTodos}
              agregarAlCarrito={agregarAlCarrito}
              productos={productos}
              cargando={cargando}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          }
        />
        <Route
          path="/acercade"
          element={
            <AcercaDe
              eliminarDelCarrito={eliminarDelCarrito}
              agregarAlCarrito={agregarAlCarrito}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          }
        />
        <Route
          path="/galeriadeproductos"
          element={
            <GaleriaDeProductos
              eliminarDelCarrito={eliminarDelCarrito}
              agregarAlCarrito={agregarAlCarrito}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          }
        />
        <Route
          path="/contacto"
          element={
            <Contacto
              eliminarDelCarrito={eliminarDelCarrito}
              agregarAlCarrito={agregarAlCarrito}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
