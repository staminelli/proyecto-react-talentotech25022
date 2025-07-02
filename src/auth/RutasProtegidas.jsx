import React, {use} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext";



const RutasProtegidas = ({ children }) => {

  const { isAdmin } = use(AuthContext);

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RutasProtegidas;
