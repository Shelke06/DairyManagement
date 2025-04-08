import React from "react";
import "../../styles/SocietyCss/PaymentManagement.css"; // Import from the existing styles folder

const PaymentManagement = () => {
  return (
    <div className="payment-management">
      <h1>Payment Management</h1>
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Amount Paid (₹)</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>₹5000</td>
            <td>Paid</td>
            <td>2025-04-01</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>₹4000</td>
            <td>Unpaid</td>
            <td>2025-04-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;