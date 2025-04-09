import React, { useState, useEffect } from 'react';
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import DailyRecords from './pages/Farmer/DailyRecords';
import MonthlyReports from './pages/Farmer/MonthlyReports';
import Payments from './pages/Farmer/Payments';
import ProfitAnalysis from './pages/Farmer/ProfitAnalysis';
import Notifications from './pages/Farmer/Notifications';
import Support from './pages/Farmer/Support';
import FarmerLogin from './pages/FarmerLogin';
import FarmerRegister from './pages/FarmerRegister';
import Profile from './pages/Farmer/Profile';
import Logout from './pages/Farmer/Logout';
import SocietyLogin from './pages/SocietyLogin';
import Dashboard from './pages/Farmer/Dashboard';
import SocietyDashboard from './pages/Society/SocietyDashboard';
import { AuthProvider } from './context/AuthContext';
import MilkCollection from './pages/Society/MilkCollection';
import FarmerManagement from './pages/Society/FarmerManagement';
import PaymentManagement from './pages/Society/PaymentManagement';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './context/ProtectedRoute';
import SocietySidebar from "./components/SocietySidebar";
import NotificationsSoc from './pages/Society/Notifications';
import PaymentOptions from './pages/Society/PaymentOptions';
import SocReports from './pages/Society/SocReports';

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

          {/* Farmer Portal */}
          <Route
            path="/dashboard/*" 
            element={
              <ProtectedRoute role="farmer">
                <div className="app">
                  <Sidebar theme={theme} onSidebarToggle={handleSidebarToggle} />
                  <div
                    className={`main-content ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}
                    style={{
                      padding: '20px',
                      backgroundImage: 'url("WaterMarkImg.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <Routes>
                      <Route path="" element={<Dashboard />} />
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
              </ProtectedRoute>
            }
          />

          {/* Society Portal */}
          <Route
            path="/society-dashboard"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <SocietyDashboard />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/society-farmer-management"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <FarmerManagement />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/society-milk-collection"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <MilkCollection />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/society-payment-management"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <PaymentManagement />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/society-notifications"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <NotificationsSoc />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment-options/:farmerId"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <PaymentOptions />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/society-reports"
            element={
              <ProtectedRoute role="society">
                <div className="app">
                  <SocietySidebar />
                  <div className="main-content">
                    <SocReports />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;