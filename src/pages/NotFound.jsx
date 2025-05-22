import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div id="notFound">
        <h1>Error 404</h1>
        <button>
          <Link to="/">Volver al inicio</Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
