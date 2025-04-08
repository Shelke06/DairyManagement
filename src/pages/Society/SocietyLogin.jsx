import React, { useEffect } from "react";
import "../styles/AuthForms.css";
import societyImage from "../assets/icons/login.png"; // Add an image in assets

const SocietyLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Example login validation (replace with actual logic)
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "society@example.com" && password === "password123") {
      console.log("Login successful, redirecting to Society Dashboard...");
      window.location.href = "/society-dashboard"; // Redirect to Society Dashboard
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="image-section">
        <img src={societyImage} alt="Society Login" />
      </div>
      <div className="form-section">
        <h2>Society Login</h2>
        <form onSubmit={handleSubmit}>
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
