import React, { useState } from "react";
import "../styles/MilkCollection.css";
import { FaEdit, FaTrash, FaDownload, FaFilter } from "react-icons/fa";

const MilkCollection = () => {
  const [records, setRecords] = useState([
    { id: 1, date: "2025-03-22", quantity: 12, fat: 3.8, snf: 8.6, amount: 960 },
    { id: 2, date: "2025-03-21", quantity: 10, fat: 3.7, snf: 8.5, amount: 800 },
  ]);

  const handleDelete = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="milk-collection-container">
      <h2>📅 Daily Milk Collection Records</h2>

      {/* Filter & Download */}
      <div className="controls">
        <button className="filter-btn"><FaFilter /> Filter</button>
        <button className="download-btn"><FaDownload /> Download Report</button>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
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
              <td>{record.date}</td>
              <td>{record.quantity}L</td>
              <td>{record.fat}%</td>
              <td>{record.snf}%</td>
              <td>₹{record.amount}</td>
              <td>
                <button className="edit-btn"><FaEdit /></button>
                <button className="delete-btn" onClick={() => handleDelete(record.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MilkCollection;
