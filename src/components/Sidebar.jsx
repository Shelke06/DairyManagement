import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ theme, onSidebarToggle }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    onSidebarToggle(!isSidebarVisible); // Notify parent component about sidebar visibility
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle btn btn-outline-primary"
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '20px',
          left: isSidebarVisible ? '260px' : '20px',
          zIndex: 1000,
        }}
      >
        {isSidebarVisible ? (
          <i className="fas fa-times"></i> // Cross icon for "Hide Sidebar"
        ) : (
          <i className="fas fa-bars"></i> // Bars icon for "Show Sidebar"
        )}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'} bg-${theme}`}>
        {/* Farmer Profile */}
        <div className="profile-section" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
          <img
            src="src/assets/icons/profile.png" // Default profile picture
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h5>John Doe</h5> {/* Replace with dynamic farmer name */}
          </div>
        </div>

        {/* Divider Line */}
        <hr className="sidebar-divider" />

        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/daily-records"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Daily Records
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/monthly-reports"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Monthly Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/payments"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Payments & Bank
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profit-analysis"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Profit Analysis
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notifications"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;