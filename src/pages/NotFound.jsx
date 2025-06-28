import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 

function NotFound() {
  return (
    <>
      <div id="notFound">
        <h1>Error 404</h1>
        <p>Ups! No podemos mostrar esta página</p>
        <button>
          <Link to="/">Volver al inicio</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
