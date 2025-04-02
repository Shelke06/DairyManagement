import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-900 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">DairyPro</h2>
      <ul>
        <li><Link to="/farmer-dashboard">Dashboard</Link></li>
        <li><Link to="/daily-records">Daily Records</Link></li>
        <li><Link to="/monthly-reports">Monthly Reports</Link></li>
        <li><Link to="/payments-bank">Payments & Bank</Link></li>
        <li><Link to="/profile-settings">Profile Settings</Link></li>
        <li><Link to="/logout" className="text-red-500">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
