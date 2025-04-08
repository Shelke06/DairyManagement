import React, { useState } from "react";
import "../styles/MilkCollection.css";
import { FaEdit, FaTrash, FaDownload, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MilkCollection = () => {
  const navigate = useNavigate();

  const [records, setRecords] = useState([
    { id: 1, farmer: "John Doe", date: "2025-03-22", quantity: 12, fat: 3.8, snf: 8.6, amount: 960 },
    { id: 2, farmer: "Jane Smith", date: "2025-03-22", quantity: 10, fat: 3.7, snf: 8.5, amount: 800 },
    { id: 3, farmer: "John Doe", date: "2025-03-21", quantity: 15, fat: 3.9, snf: 8.7, amount: 1200 },
  ]);

  // Calculate total milk collected for the day
  const totalMilkCollected = records.reduce((total, record) => total + record.quantity, 0);

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleFarmerClick = (farmerName) => {
    // Navigate to the Farmer Profile page with the farmer's name as a parameter
    navigate(`/farmer-profile/${farmerName}`);
  };

  return (
    <div className="milk-collection-container">
      <h2>📅 Daily Milk Collection Records</h2>

      {/* Total Milk Collected */}
      <div className="total-milk">
        <h3>Total Milk Collected Today: {totalMilkCollected}L</h3>
      </div>

      {/* Filter & Download */}
      <div className="controls">
        <button className="filter-btn">
          <FaFilter /> Filter
        </button>
        <button className="download-btn">
          <FaDownload /> Download Report
        </button>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Date</th>
            <th>Quantity (L)</th>
            <th>FAT (%)</th>
            <th>SNF (%)</th>
            <th>Amount (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>
                <button className="farmer-link" onClick={() => handleFarmerClick(record.farmer)}>
                  {record.farmer}
                </button>
              </td>
              <td>{record.date}</td>
              <td>{record.quantity}L</td>
              <td>{record.fat}%</td>
              <td>{record.snf}%</td>
              <td>₹{record.amount}</td>
              <td>
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(record.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MilkCollection;
