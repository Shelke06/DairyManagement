import React, { useState, useEffect } from 'react';
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import DailyRecords from './pages/DailyRecords';
import MonthlyReports from './pages/MonthlyReports';
import Payments from './pages/Payments';
import ProfitAnalysis from './pages/ProfitAnalysis';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import FarmerLogin from './pages/FarmerLogin';
import SocietyLogin from './pages/SocietyLogin';
import FarmerRegister from './pages/FarmerRegister';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Sidebar visibility state

  // Apply theme to the entire document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <AuthProvider>
      <Router>
        <ToastContainer /> {/* Toast notifications container */}
        <Routes>
          {/* Public Routes (Home, Login, Register) */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/farmer-login" element={<><Navbar /><FarmerLogin /><Footer /></>} />
          <Route path="/society-login" element={<><Navbar /><SocietyLogin /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><FarmerRegister /><Footer /></>} />

          {/* Farmer Portal (Dashboard, Daily Records, etc.) */}
          <Route
            path="/*"
            element={
              <div className="app">
                {/* Sidebar */}
                <Sidebar theme={theme} onSidebarToggle={handleSidebarToggle} />

                {/* Main Content */}
                <div
                  className={`main-content ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}
                  style={{
                    padding: '20px',
                    backgroundImage: 'url("D:\projectDairy\DairyManagement\src\assets\icons\WaterMarkImg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Global Theme Toggle */}
                  <div className="theme-toggle" style={{ textAlign: 'right', marginBottom: '20px' }}>
                    <button
                      className="btn btn-light"
                      onClick={toggleTheme}
                      style={{ fontSize: '20px' }}
                    >
                      {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                  </div>

                  {/* Routes */}
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/daily-records" element={<DailyRecords />} />
                    <Route path="/monthly-reports" element={<MonthlyReports />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/profit-analysis" element={<ProfitAnalysis />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
