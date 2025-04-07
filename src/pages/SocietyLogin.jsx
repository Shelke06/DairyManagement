import React, { useEffect } from "react";
import "../styles/AuthForms.css";
import societyImage from "../assets/icons/login.png"; // Add an image in assets

const SocietyLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="auth-container">
      <div className="image-section">z
        <img src={societyImage} alt="Society Login" />
      </div>
      <div className="form-section">
        <h2>Society Login</h2>
        <form>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default SocietyLogin;
