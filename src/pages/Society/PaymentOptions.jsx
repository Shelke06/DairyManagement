import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/SocietyCss/PaymentOptions.css";

const PaymentOptions = () => {
  const { farmerId } = useParams();

  const handlePaymentMethod = (method) => {
    alert(`Payment of Farmer ID: ${farmerId} via ${method} selected.`);
    // Add logic to process payment via the selected method
  };

  return (
    <div className="payment-options">
      <h1>Payment Options</h1>
      <p>Choose a payment method for Farmer ID: {farmerId}</p>
      <div className="payment-methods">
        <button
          className="btn btn-option"
          onClick={() => handlePaymentMethod("Online")}
        >
          Online
        </button>
        <button
          className="btn btn-option"
          onClick={() => handlePaymentMethod("Cash")}
        >
          Cash
        </button>
        <button
          className="btn btn-option"
          onClick={() => handlePaymentMethod("UPI")}
        >
          UPI
        </button>
        <button
          className="btn btn-option"
          onClick={() => handlePaymentMethod("Bank Transfer")}
        >
          Bank Transfer
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;