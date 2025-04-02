import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';
import Home from './src/components/Home';
import FarmerLogin from './src/pages/FarmerLogin';
import SocietyLogin from './src/pages/SocietyLogin';
import FarmerRegister from './src/pages/FarmerRegister';
import FarmerSetup from "./src/pages/FarmerSetup";
import FarmerDashboard from "./src/pages/FarmerDashboard";
import MilkCollection from "./src/pages/MilkCollection";
import DailyRecords from './src/pages/DailyRecords';
import MonthlyReports from './src/pages/MonthlyReports';
import PaymentBank from './src/pages/PaymentBank';
import ProfileSettings from './src/pages/ProfileSettings';
import Logout from './src/pages/Logout';
import { AuthProvider } from "./src/context/AuthContext"; // Import AuthContext

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
          <Route path="/daily-records" element={<DailyRecords />} />
            <Route path="/monthly-reports" element={<MonthlyReports />} />
            <Route path="/payment-bank" element={<PaymentBank />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
