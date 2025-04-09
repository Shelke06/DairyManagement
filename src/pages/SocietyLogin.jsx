
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/AuthForms.css";
import societyImage from "../assets/icons/login.png";

const SocietyLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulating API request (replace with backend call)
    const societyData = {
      id: "456",
      name: "Society ABC",
      email: email,
      role: "society", // Indicate the role as society
    };

    login(societyData); // Update authentication state
    navigate("/society-dashboard"); // Redirect to society dashboard
  };

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>Society Login</h2>
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
        <img src={societyImage} alt="Society Login" />
      </div>
    </div>
  );
};

export default SocietyLogin;