import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {FaBars, FaHome, FaClipboardList, FaChartLine, FaMoneyBill, FaChartPie, FaBell, FaLifeRing, FaSignOutAlt,
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ onSidebarToggle }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
    onSidebarToggle && onSidebarToggle(!isSidebarVisible);
  };

  const logout = () => {
    localStorage.removeItem('farmerUser');
    navigate('/farmer-login');
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? 'open' : 'closed'}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {isSidebarVisible && <h2 className="logo">DairyPro</h2>}
      </div>

      {/* Farmer Profile */}
      {isSidebarVisible && (
        <div className="profile-section" onClick={() => navigate('/dashboard/profile')} style={{ cursor: 'pointer' }}>
          <img
            src="src/assets/icons/profile.png"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h5>John Doe</h5> {/* Replace with dynamic farmer name */}
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav>
        <ul className="sidebar-menu" style={{ paddingLeft: '0.5rem' }}>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaHome style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Dashboard'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/daily-records"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaClipboardList style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Daily Records'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/monthly-reports"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaChartLine style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Monthly Reports'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/payments"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaMoneyBill style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Payments & Bank'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/profit-analysis"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaChartPie style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Profit Analysis'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/notifications"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaBell style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Notifications'}
            </NavLink>
          </li>
          <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <NavLink
              to="/dashboard/support"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaLifeRing style={{ fontSize: '20px', marginRight: '10px' }} />
              {isSidebarVisible && 'Support'}
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className="sidebar-menu">
        <li className="logout" onClick={logout}>
          <FaSignOutAlt /> {isSidebarVisible && 'Logout'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;