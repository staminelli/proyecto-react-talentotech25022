import React from "react";
import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RutasProtegidas;
