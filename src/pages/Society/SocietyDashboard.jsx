import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/SocietyCss/SocietyDashboard.css"; // Import from the existing styles folder

const SocietyDashboard = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="dashboard">
      <h1>Society Dashboard</h1>
      <div className="dashboard-cards">
        {/* Card 1: Redirect to Farmer Management */}
        <div
          className="card"
          onClick={() => navigate("/society-farmer-management")}
          style={{ cursor: "pointer" }}
        >
          <h3>Total Milk Collected Today</h3>
          <p>1,200 Liters</p>
        </div>

        {/* Card 2: Redirect to Milk Collection */}
        <div
          className="card"
          onClick={() => navigate("/society-milk-collection")}
          style={{ cursor: "pointer" }}
        >
          <h3>Monthly Milk Collection</h3>
          <p>36,000 Liters</p>
        </div>

        {/* Card 3: Redirect to Payment Management */}
        <div
          className="card"
          onClick={() => navigate("/society-payment-management")}
          style={{ cursor: "pointer" }}
        >
          <h3>Pending Payments</h3>
          <p>₹50,000</p>
        </div>

        {/* Card 4: Redirect to Reports */}
        <div
          className="card"
          onClick={() => navigate("/society-reports")}
          style={{ cursor: "pointer" }}
        >
          <h3>Profit Ratio</h3>
          <p>25%</p>
        </div>
      </div>

      <div className="dashboard-graphs">
        <div className="graph">
          <h3>Milk Collection Trends</h3>
          {/* Add a graph component here */}
          <p>Graph Placeholder</p>
        </div>
        <div className="graph">
          <h3>Payment Trends</h3>
          {/* Add a graph component here */}
          <p>Graph Placeholder</p>
        </div>
      </div>

      <div className="dashboard-notifications">
        <h3>Recent Notifications</h3>
        <ul>
          <li>Milk collection for today is complete.</li>
          <li>Payment of ₹10,000 is pending from Farmer A.</li>
          <li>Monthly report is ready for download.</li>
        </ul>
      </div>
    </div>
  );
};

export default SocietyDashboard;