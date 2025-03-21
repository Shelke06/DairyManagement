import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const FarmerDashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name}</h2>
      <p>Milk Collection: 150L this month</p>
      <p>Current FAT: 3.8%</p>
      <p>Pending Payment: ₹12,500</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default FarmerDashboard;
