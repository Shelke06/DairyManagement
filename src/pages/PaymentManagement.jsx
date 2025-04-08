import React, { useState } from "react";

const PaymentManagement = () => {
  const [payments, setPayments] = useState([
    { id: 1, farmer: "John Doe", date: "2025-04-01", amount: 5000, status: "Paid" },
    { id: 2, farmer: "Jane Smith", date: "2025-04-02", amount: 4000, status: "Unpaid" },
  ]);

  return (
    <div className="payment-management">
      <h2>Payment Management</h2>
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Amount (₹)</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.farmer}</td>
              <td>₹{payment.amount}</td>
              <td>{payment.status}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;