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
import { AuthProvider } from "./context/AuthContext";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/galeriadeproductos" element={<GaleriaDeProductos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Detalle/:id" element={<Detalle />} />
        <Route
          path="/admin"
          element={
            <RutasProtegidas>
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
