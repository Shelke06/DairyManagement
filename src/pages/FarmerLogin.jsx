import React, { useEffect } from "react";
import "../styles/AuthForms.css";
import farmerImage from "../assets/icons/signin.png"; // Add an image in assets

const FarmerLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="auth-container">
      <div className="form-section">
        <h2>Farmer Login</h2>
        <form>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
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
