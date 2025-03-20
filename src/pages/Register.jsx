import React, { useEffect } from "react";
import "../styles/AuthForms.css";
import mycreate from '../assets/icons/createacc.png';
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
      <div>
      <h2>Register</h2>
      <form>
        {/* User Type Selection */}
        <select name="userType">
          <option value="farmer">Farmer</option>
          <option value="society">Society</option>
        </select>

        {/* First Name & Last Name */}
        <div className="input-group">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="text" name="lastName" placeholder="Last Name" required />
        </div>

        {/* Gender Selection */}
        <div className="gender-group">
          <label>Gender:</label>
          <input type="radio" name="gender" value="male" id="male" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value="female" id="female" />
          <label htmlFor="female">Female</label>
          <input type="radio" name="gender" value="other" id="other" />
          <label htmlFor="other">Other</label>
        </div>

        {/* Email & Mobile Number */}
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="mobile" placeholder="+91 Phone Number" required />

        {/* Village Name & Shop Name */}
        <input type="text" name="village" placeholder="Village Name" required />
        <input type="text" name="shop" placeholder="Shop Name (e.g., Bhandari Milk Shop)" required />

        {/* Password & Confirm Password */}
        <input type="password" name="password" placeholder="Password" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" required />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <a href="/farmer-login">Login here</a>
      </p>
      </div>
      <div>
      <img src={mycreate} alt="Description" />
      </div>
    </div>
  );
};

export default Register;
