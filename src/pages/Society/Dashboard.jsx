import React from "react";
import "../../styles/SocietyDashboard.css"; // Import from the existing styles folder

const Dashboard = () => {
  return (
    <div className="society-dashboard">
      <h1>Society Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Milk Collected Today</h3>
          <p>1200L</p>
        </div>
        <div className="card">
          <h3>Monthly Milk Collection</h3>
          <p>25,000L</p>
        </div>
        <div className="card">
          <h3>Pending Payments</h3>
          <p>₹1,50,000</p>
        </div>
        <div className="card">
          <h3>Profit Ratio</h3>
          <p>25%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;