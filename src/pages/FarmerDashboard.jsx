import React, { useState } from "react";
import "../styles/FarmerDashboard.css";
import { FaBars, FaHome, FaUser, FaSignOutAlt, FaMoneyBill, FaChartLine, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FarmerDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    localStorage.removeItem("farmerUser");
    navigate("/farmer-login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
          {isSidebarOpen && <h2 className="logo">DairyPro</h2>} {/* Hide text when sidebar is closed */}
        </div>
        {isSidebarOpen && (
          <ul className="sidebar-menu">
            <li><FaHome /> Dashboard</li>
            <li><FaClipboardList /> Daily Records</li>
            <li><FaChartLine /> Monthly Reports</li>
            <li><FaMoneyBill /> Payments & Bank</li>
            <li><FaUser /> Profile Settings</li>
            <li className="logout" onClick={logout}><FaSignOutAlt /> Logout</li>
          </ul>
        )}
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Farmer Dashboard</h1>
          <p>Welcome back! Here's your latest dairy activity.</p>
        </header>

        {/* Overview Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Milk Collected</h3>
            <p>150L this month</p>
          </div>
          <div className="card">
            <h3>FAT & SNF</h3>
            <p>FAT: 3.8% | SNF: 8.6%</p>
          </div>
          <div className="card">
            <h3>Pending Payment</h3>
            <p>₹12,500</p>
          </div>
        </div>

        {/* Milk Collection Table */}
        <section className="records">
          <h2>Daily Milk Collection</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Quantity (L)</th>
                <th>FAT</th>
                <th>SNF</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16 Mar 2025</td>
                <td>12L</td>
                <td>3.8%</td>
                <td>8.6%</td>
                <td>₹960</td>
              </tr>
              <tr>
                <td>15 Mar 2025</td>
                <td>10L</td>
                <td>3.7%</td>
                <td>8.5%</td>
                <td>₹800</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default FarmerDashboard;
