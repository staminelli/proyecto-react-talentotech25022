import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import GaleriaDeProductos from "./pages/GaleriaDeProductos";
import NotFound from "./pages/NotFound";
import Detalle from "./pages/Detalle";
import Admin from "./pages/Admin";
import RutasProtegidas from "./auth/RutasProtegidas";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [limit, setLimit] = useState(10);
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
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    fetchData(limit);
  }, [limit]);


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
              setLimit={setLimit}
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
              productos={productos}
              cargando={cargando}
              setLimit={setLimit}
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
        <Route
          path="/Detalle/:id"
          element={
            <Detalle
              productos={productos}
              eliminarDelCarrito={eliminarDelCarrito}
              agregarAlCarrito={agregarAlCarrito}
              cart={cart}
              setIsCartOpen={setIsCartOpen}
              isCartOpen={isCartOpen}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <RutasProtegidas isAdmin={isAdmin}>
              <Admin />
            </RutasProtegidas>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
