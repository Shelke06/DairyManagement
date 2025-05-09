import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/AuthForms.css";
import farmerImage from "../assets/icons/signin.png";

const FarmerLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulating API request (replace with backend call)
    const farmerData = {
      id: "123",
      name: "John Doe",
      email: email,
      role: "farmer", // Indicate the role as farmer
    };

    login(farmerData); // Update authentication state
    navigate("/dashboard"); // Redirect to farmer dashboard
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>Farmer Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>

      <div className="image-section">
        <img src={farmerImage} alt="Farmer Login" />
      </div>
    </div>
  );
};

export default FarmerLogin;
