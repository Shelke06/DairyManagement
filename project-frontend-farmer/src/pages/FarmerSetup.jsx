import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const FarmerSetup = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const completeSetup = () => {
    login({ ...user, isNew: false });
    navigate("/farmer-dashboard"); // Move to Dashboard after setup
  };

  return (
    <div className="auth-container">
      <h2>Complete Your Profile</h2>
      <form>
        <input type="text" placeholder="Bank Account Number" required />
        <input type="text" placeholder="Milk Collection Center" required />
        <input type="text" placeholder="Preferred Payment Mode" required />
        <button type="button" onClick={completeSetup}>Save & Continue</button>
      </form>
    </div>
  );
};

export default FarmerSetup;
