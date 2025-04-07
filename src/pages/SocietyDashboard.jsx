import React, { useEffect, useRef, useState } from "react";
import "../styles/SocietyDashboard.css";
import { Chart } from "chart.js/auto";

const SocietyDashboard = () => {
  const chartRef = useRef(null); // Reference for the chart canvas
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Milk collection scheduled for tomorrow." },
    { id: 2, message: "Payment processed for Farmer John Doe." },
    { id: 3, message: "New farmer registered: Jane Smith." },
  ]);

  useEffect(() => {
    // Initialize the chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line", // Line chart
        data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
              label: "Milk Collected (Liters)",
              data: [120, 150, 180, 200, 170, 190, 220], // Example data
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  }, []);

  const navigateTo = (path) => {
    // Simple navigation using window.location
    window.location.href = path;
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <button onClick={() => navigateTo("/farmer-management")}>
              Farmer Management
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo("/milk-collection")}>
              Milk Collection
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo("/payment-management")}>
              Payment Management
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo("/notifications")}>
              Notifications
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1>Society Dashboard</h1>
        <p>Welcome to the Society Dashboard!</p>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Milk Collected</h3>
            <p>1200L</p>
          </div>
          <div className="card">
            <h3>Total Farmers</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Pending Payments</h3>
            <p>₹50,000</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-container">
          <h2>Milk Collection Trends</h2>
          <canvas ref={chartRef}></canvas>
        </div>

        {/* Notifications Section */}
        <div className="notifications">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>{notification.message}</li>
            ))}
          </ul>
        </div>

        {/* Placeholder for Additional Features */}
        <div className="additional-section">
          <h2>Additional Features</h2>
          <p>Here you can add charts, notifications, or other features.</p>
        </div>
      </div>
    </div>
  );
};

export default SocietyDashboard;