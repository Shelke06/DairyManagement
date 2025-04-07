import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("farmerUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData, navigate) => {
    setUser(userData);
    localStorage.setItem("farmerUser", JSON.stringify(userData));
    navigate("/farmer-dashboard"); // ✅ Now we pass navigate as an argument
  };

  const logout = (navigate) => {
    setUser(null);
    localStorage.removeItem("farmerUser");
    navigate("/farmer-login"); // ✅ Now we pass navigate as an argument
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
