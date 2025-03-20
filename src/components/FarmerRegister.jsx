import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FarmerRegister = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();

    // Simulating API request (replace with backend call)
    const newFarmer = { id: "456", ...formData, isNew: true };

    login(newFarmer);
    navigate("/farmer-setup"); // Redirect to Setup Page
  };

  return (
    <div className="auth-container">
      <h2>Farmer Registration</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FarmerRegister;
