import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();
// Funcion para no estar importanto el AuthContext =>
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(" El useAuth deberia estar dentro de un Provider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Usuario que va hacer leido en la aplicacion
  const [isAuthenticated, setIsAuthenticated] = useState(false); //

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
