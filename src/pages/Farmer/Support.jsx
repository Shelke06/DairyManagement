import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Farmer/Support.css'; // Updated path

const Support = () => {
  return (
    <div className="support-section container py-4">
      <h2 className="text-center mb-4">Support</h2>
      <div className="card">
        <div className="card-body">
          <h3>Contact Information</h3>
          <ul className="contact-info">
            <li><strong>Email:</strong> support@dairymanagement.com</li>
            <li><strong>Phone:</strong> +1234567890</li>
            <li><strong>Address:</strong> 123 Dairy Lane, Springfield</li>
          </ul>
        </div>
      </div>
      <div className="faq-section mt-4">
        <h3>Frequently Asked Questions</h3>
        <ul className="faq-list">
          <li><strong>Q:</strong> How can I reset my password?</li>
          <li><strong>A:</strong> Click on "Forgot Password" on the login page and follow the instructions.</li>
          <li><strong>Q:</strong> How can I contact customer support?</li>
          <li><strong>A:</strong> You can email us at support@dairymanagement.com or call us at +1234567890.</li>
        </ul>
      </div>
    </div>
  );
};

export default Support;