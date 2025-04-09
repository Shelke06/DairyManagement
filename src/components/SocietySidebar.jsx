import React , {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";
import { FaBars, FaHome, FaClipboardList, FaChartLine, FaMoneyBill, FaUser, FaSignOutAlt } from 'react-icons/fa';

const SocietySidebar = ({ onSidebarToggle }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
    const navigate = useNavigate();
  
    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
      onSidebarToggle && onSidebarToggle(!isSidebarVisible);
    };
  
  return (
    <div className={`sidebar ${isSidebarVisible ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
              <button className="toggle-btn" onClick={toggleSidebar}>
                <FaBars />
              </button>
              {isSidebarVisible && <h2 className="logo">DairyPro</h2>}
            </div>

        {/* Society Profile */}
        {isSidebarVisible && (
        <div className="profile-section" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
          <img
            src="src/assets/icons/profile.png"
            alt="Profile"
            className="profile-pic"
          />
          <div>
            <h5>John Doe</h5>
          </div>
        </div>
      )}

      <nav>
              <ul className="sidebar-menu" style={{ paddingLeft: '0.5rem' }}>
                <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/society-dashboard"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }} // Inherit color from parent
                  >
                    <FaHome style={{ fontSize: '20px', marginRight: '10px' }} /> {/* Icon styling */}
                    {isSidebarVisible && 'Dashboard'}
                  </NavLink>
                </li>
                <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/society-farmer-management"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaClipboardList style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Farmer Management'}
                  </NavLink>
                </li>
                <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/society-milk-collection"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaChartLine style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Milk Collection'}
                  </NavLink>
                </li>
                <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/socieety-payments-management"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaMoneyBill style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Payments Management'}
                  </NavLink>
                </li>
                <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/society-reports"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaUser style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Reports'}
                  </NavLink>
                </li>
                  <li style={{ color: 'white', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <NavLink
                    to="/society-notifications"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaUser style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Notifications'}
                  </NavLink>
                </li>
              </ul>
              <ul className="sidebar-menu">
                  <NavLink
                    to="/society-login"
                    className={({ isActive }) => (isActive ? 'active-link' : '')}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <FaSignOutAlt style={{ fontSize: '20px', marginRight: '10px' }} />
                    {isSidebarVisible && 'Logout'}
                  </NavLink>
                
              </ul>
            </nav>
    </div>
  );
};

export default SocietySidebar;