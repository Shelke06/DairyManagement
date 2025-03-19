import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import userIcon from '../assets/icons/user.png';
import productIcon from '../assets/icons/product.png';
import reportIcon from '../assets/icons/report.png';
import deliveryIcon from '../assets/icons/delivery.png';
import moneyIcon from '../assets/icons/money.png';
import customizationIcon from '../assets/icons/customization.png';
import myImage from '../assets/icons/contact.png';

const Home = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrolledSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          scrolledSection = section.id;
        }
      });

      setVisibleSection(scrolledSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero-container">
        <div className="hero-overlay">
          <h1>Empowering Dairy Digitalization</h1>
          <p>Streamlining dairy operations for a sustainable future.</p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="content-section">
        <div className="container">
        <h2>About Us</h2>
        
        <p>
          Welcome to <strong>[Your App Name]</strong>, an innovative Dairy Management System developed by 
          students of <strong>Pratibha Institute of Business Management</strong>. 
          Our mission is to replace <strong>manual record-keeping with a digital platform</strong>, 
          making transactions <strong>faster, transparent, and efficient</strong> for both <strong>farmers</strong> and 
          <strong>society members</strong>.
        </p>
      
       <div className="about-box">
        <h3>Who We Are</h3>
        <p>
          We are a team of three passionate developers working together on this project. 
          Our goal is to create a <strong>user-friendly, secure, and efficient</strong> platform to 
          support farmers and dairy businesses.
        </p>
         </div>
         <div className="about-box">
        <h3>Our Vision</h3>
        <p>
          India is advancing in <strong>digitalization</strong>, yet <strong>dairy businesses rely on manual 
          processes</strong>. Our app bridges this gap by offering a <strong>smart digital solution</strong> for dairy operations, 
          ensuring <strong>transparency and trust</strong>.
        </p>
        </div>
        <div className="about-box">
        <h3>What Our App Offers</h3>
        <ul>
          <li>✅ <strong>Automated FAT & SNF Calculation</strong> – Ensuring precise milk quality assessment.</li>
          <li>✅ <strong>Digital Billing System</strong> – Generating invoices instantly.</li>
          <li>✅ <strong>Transportation & Tanker Tracking</strong> – Monitoring milk collection and delivery routes.</li>
          <li>✅ <strong>Data Security & Cloud Storage</strong> – Keeping records safe and accessible anytime.</li>
          <li>✅ <strong>User-Friendly Dashboard</strong> – Designed for farmers and society members.</li>
        </ul>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="main-heading">Our Services</h2>
          <p className="intro-text">
            At <strong>Dairy Management System</strong>, we transform the dairy industry by automating processes and building trust between farmers and societies.
          </p>

          <div className="service-box">
            <img src={userIcon} alt="User Management" className="service-icon" />
            <div className="service-content">
              <h3>Farmer & Society Management</h3>
              <p>Manage milk collection, track transactions, and ensure transparency.</p>
            </div>
          </div>

          <div className="service-box">
            <img src={productIcon} alt="Milk Collection" className="service-icon" />
            <div className="service-content">
              <h3>Milk Collection & Quality Analysis</h3>
              <p>Automated FAT, SNF, and quantity calculations reduce human errors.</p>
            </div>
          </div>

          <div className="service-box">
            <img src={reportIcon} alt="Billing & Reports" className="service-icon" />
            <div className="service-content">
              <h3>Automated Billing & Reports</h3>
              <p>Instant invoices, daily/monthly sales reports, and SMS/email notifications.</p>
            </div>
          </div>

          <div className="service-box">
            <img src={deliveryIcon} alt="Transport Management" className="service-icon" />
            <div className="service-content">
              <h3>Transportation & Distribution Tracking</h3>
              <p>Monitor tanker movement, track delivery routes.</p>
            </div>
          </div>

          <div className="service-box">
            <img src={moneyIcon} alt="Payment & Profit Analysis" className="service-icon" />
            <div className="service-content">
              <h3>Payment & Profit Analysis</h3>
              <p>Automated payments for farmers, financial tracking, and profit analysis.</p>
            </div>
          </div>

          <div className="service-box">
            <img src={customizationIcon} alt="Customization" className="service-icon" />
            <div className="service-content">
              <h3>Customization & Branding</h3>
              <p>Personalize settings based on dairy business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="content-section">
        <h2>Our Features</h2>

        <div className="feature-box">
          <h3>Real-time Data Analysis</h3>
          <p>Farmers and society members can track milk collection, sales, and earnings in real-time.</p>
        </div>

        <div className="feature-box">
          <h3>Monthly Reports & Analytics</h3>
            <ul>
              <li>✔ Milk quantity trends</li>
              <li>✔ Fat & SNF percentage records</li>
              <li>✔ Income & expenditure breakdown</li>
            </ul>
        </div>

        <div className="feature-box">
          <h3>Secure Transactions & Records</h3>
          <p>All financial transactions are encrypted with multi-factor authentication.</p>
        </div>

        <div className="feature-box">
          <h3>Automated Payment System</h3>
          <p>Milk prices are calculated automatically, and payments are transferred to farmers’ bank accounts.</p>
        </div>

        <div className="feature-box">
          <h3>User-friendly Interface</h3>
          <p>Our dashboard is intuitive, responsive, and easy to navigate for all users.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
      <div className="container-cont">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Let's Stay in Touch</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email (Optional)" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter Number" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter message"></textarea>
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>

        {/* Contact Details & Illustration */}
        <div className="contact-info">
          <h3>Our Sales Team Is Available Here!</h3>
          <p>Please contact us on <br />
            <strong>+91-8669771773</strong> and <strong>+91-9309350471</strong>
          </p>
          <img src={myImage} alt="Description" />        
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;
