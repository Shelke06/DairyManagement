import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate("/"); // Redirect to home before scrolling
      setTimeout(() => handleScroll(id), 300);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
      <Navbar.Brand 
  style={{ 
    cursor: "pointer", 
    fontSize: "1.8rem", 
    fontWeight: "bold", 
    color: "#FFD700", 
    fontFamily: "'Poppins', sans-serif",
    display: "flex", 
    flexDirection: "column", 
    textAlign: "left", 
  }} 
  onClick={() => handleScroll('hero')}
>
  <span style={{ 
    fontSize: "2rem", 
    fontWeight: "bold", 
    color: "#FFD700", 
    textShadow: "2px 2px 5px rgba(255, 255, 255, 0.5)"
  }}>
    Dairy<span style={{ color: "#ffffff" }}>Pro</span> by <span style={{ fontWeight: "bold" }}>PIBM</span>
  </span>
  <span style={{ 
    fontSize: "0.8rem", 
    color: "#ccc", 
    fontWeight: "500", 
    letterSpacing: "0.5px"
  }}>
    A Professional Dairy Management Solution
  </span>
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScroll('hero')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll('about')}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleScroll('services')}>Services</Nav.Link>
            <Nav.Link onClick={() => handleScroll('features')}>Features</Nav.Link>
            <Nav.Link onClick={() => handleScroll('contact')}>Contact</Nav.Link>
            <NavDropdown title="Sign In" id="signin-dropdown">
              <NavDropdown.Item onClick={() => navigate('/farmer-login')}>Farmer Login</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/society-login')}>Society Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('/register')}>Create Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
