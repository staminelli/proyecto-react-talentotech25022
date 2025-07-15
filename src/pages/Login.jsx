import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";



const Login = () => {
  const { setIsAdmin } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica de autenticación
    if (!username && !password) alert("Por favor, ingresa tus credenciales");

    try {
      const res = await fetch("data/users.json");
      const users = await res.json();
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (foundUser.role === "admin") {
        setIsAdmin(true);
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error al autenticar:", error);
      alert("Error al autenticar, por favor intenta de nuevo.");
    }
  };

  // const { username, setUsername, password, setPassword, handleSubmit } = useContext(AuthContext);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          margin: "auto",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <h2>Iniciar sesión</h2>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>{" "}
      </form>
    </div>
  );
};

export default Login;
