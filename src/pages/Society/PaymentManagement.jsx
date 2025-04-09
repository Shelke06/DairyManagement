import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/SocietyCss/PaymentManagement.css";

const PaymentManagement = () => {
  const navigate = useNavigate();

  const [farmers, setFarmers] = useState([
    {
      id: 1,
      farmerId: "F001",
      name: "Farmer A",
      milkQuantity: 50,
      milkQuality: "A",
      ratePerLiter: 40,
      paymentStatus: "Pending",
    },
    {
      id: 2,
      farmerId: "F002",
      name: "Farmer B",
      milkQuantity: 30,
      milkQuality: "B",
      ratePerLiter: 35,
      paymentStatus: "Pending",
    },
    {
      id: 3,
      farmerId: "F003",
      name: "Farmer C",
      milkQuantity: 20,
      milkQuality: "C",
      ratePerLiter: 30,
      paymentStatus: "Paid",
    },
  ]);

  const handleViewDetails = (farmerId) => {
    alert(`Viewing details for Farmer ID: ${farmerId}`);
    // You can navigate to a detailed farmer page if needed
    // navigate(`/farmer-details/${farmerId}`);
  };

  const handlePayment = (farmerId) => {
    navigate(`/payment-options/${farmerId}`);
  };

  return (
    <div className="payment-management">
      <h1>Payment Management</h1>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Farmer ID</th>
            <th>Farmer Name</th>
            <th>Milk Quantity (Liters)</th>
            <th>Milk Quality</th>
            <th>Rate per Liter (₹)</th>
            <th>Total Amount (₹)</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.id}>
              <td>{farmer.farmerId}</td>
              <td>{farmer.name}</td>
              <td>{farmer.milkQuantity}</td>
              <td>{farmer.milkQuality}</td>
              <td>{farmer.ratePerLiter}</td>
              <td>{farmer.milkQuantity * farmer.ratePerLiter}</td>
              <td>
                {farmer.paymentStatus === "Paid" ? (
                  <span className="paid-label">Paid</span>
                ) : (
                  <span className="pending-label">Pending</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-details"
                  onClick={() => handleViewDetails(farmer.farmerId)}
                >
                  View Details
                </button>
                {farmer.paymentStatus === "Pending" && (
                  <button
                    className="btn btn-pay"
                    onClick={() => handlePayment(farmer.farmerId)}
                  >
                    Pay
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;