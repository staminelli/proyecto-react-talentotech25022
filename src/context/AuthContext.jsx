import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!username || !password) alert("Por favor, ingresa tus credenciales");

  //   try {
  //     const res = await fetch("data/users.json");
  //     const users = await res.json();

  //     const foundUser = users.find(
  //       (user) => user.username === username && user.password === password
  //     );
  //     if (foundUser.role === "admin") {
  //       setIsAdmin(true);
  //       navigate("/admin");
  //     } else {
  //       navigate("/");
  //     }
  //   } catch (error) {
  //     console.error("Error al autenticar:", error);
  //     alert("Error al autenticar, por favor intenta de nuevo.");
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        // username,
        // setUsername,
        // password,
        // setPassword,
        // handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
