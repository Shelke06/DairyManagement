import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import FarmerLogin from './pages/FarmerLogin';
import SocietyLogin from './pages/Society/SocietyLogin';
import FarmerRegister from './pages/FarmerRegister';
import FarmerSetup from "./pages/FarmerSetup";
import FarmerDashboard from "./pages/FarmerDashboard";
import MilkCollection from "./pages/MilkCollection";
import FarmerManagement from "./pages/FarmerManagement";
import PaymentManagement from "./pages/PaymentManagement";
import Notifications from "./pages/Notifications";
import FarmerProfile from "./pages/FarmerProfile";
import Dashboard from "./pages/Society/Dashboard";
import FarmerManagements from "./pages/Society/FarmerManagement";
import MilkCollections from "./pages/Society/MilkCollection";
import PaymentManagements from "./pages/Society/PaymentManagement";

import { AuthProvider } from "./context/AuthContext"; // Import AuthContext

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <Routes>
          {/* Public Routes (Home, Login, Register) */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/farmer-login" element={<><Navbar /><FarmerLogin /><Footer /></>} />
          <Route path="/society-login" element={<><Navbar /><SocietyLogin /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><FarmerRegister /><Footer /></>} />

          {/* Farmer Portal (Dashboard, Setup, Collection) - No Navbar & Footer */}
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer-setup" element={<FarmerSetup />} />
          <Route path="/milk-collection" element={<MilkCollection />} />
          <Route path="/farmer-profile/:farmerName" element={<FarmerProfile />} />

          {/* Society Portal */}
          Route path="/society-dashboard" element={<Dashboard />} />
  <Route path="/society-farmer-management" element={<FarmerManagement />} />
  <Route path="/society-milk-collection" element={<MilkCollection />} />
  <Route path="/society-payment-management" element={<PaymentManagement />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
