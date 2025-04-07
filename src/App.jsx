import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import FarmerLogin from './pages/FarmerLogin';
import SocietyLogin from './pages/SocietyLogin';
import FarmerRegister from './pages/FarmerRegister';
import FarmerSetup from "./pages/FarmerSetup";
import FarmerDashboard from "./pages/FarmerDashboard";
import MilkCollection from "./pages/MilkCollection";
import SocietyDashboard from "./pages/SocietyDashboard";
import FarmerManagement from "./pages/FarmerManagement";
import PaymentManagement from "./pages/PaymentManagement";
import Notifications from "./pages/Notifications";

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

          {/* Society Portal */}
          <Route path="/society-dashboard" element={<SocietyDashboard />} />
          <Route path="/farmer-management" element={<FarmerManagement />} />
          <Route path="/payment-management" element={<PaymentManagement />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
