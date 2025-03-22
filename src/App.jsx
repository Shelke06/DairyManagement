import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import FarmerLogin from './pages/FarmerLogin';
import SocietyLogin from './pages/SocietyLogin';
import FarmerRegister from './pages/FarmerRegister';
import './styles/Home.css';
import FarmerSetup from "./pages/FarmerSetup";
import FarmerDashboard from "./pages/FarmerDashboard";
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer-login" element={<FarmerLogin />} />
          <Route path="/society-login" element={<SocietyLogin />} />
          <Route path="/register" element={<FarmerRegister />} />
          <Route path="/farmer-setup" element={<FarmerSetup />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
