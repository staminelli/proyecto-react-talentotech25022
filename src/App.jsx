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
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
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
        // console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    fetchData(limit);
  }, [limit]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productos={productos}
              cargando={cargando}
              setLimit={setLimit}
            />
          }
        />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route
          path="/galeriadeproductos"
          element={
            <GaleriaDeProductos
              productos={productos}
              cargando={cargando}
              setLimit={setLimit}
            />
          }
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="/Detalle/:id"
          element={<Detalle 
            productos={productos} 
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
