import React, { useState } from "react";
import "../../styles/SocietyCss/MilkCollection.css"; // Import from the existing styles folder

const MilkCollection = () => {
  const [records, setRecords] = useState([
    { id: 1, farmer: "John Doe", date: "2025-04-01", quantity: 12, fat: 3.8, snf: 8.6 },
    { id: 2, farmer: "Jane Smith", date: "2025-04-01", quantity: 10, fat: 3.7, snf: 8.5 },
  ]);

  return (
    <div className="milk-collection">
      <h1>Milk Collection</h1>
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Date</th>
            <th>Quantity (L)</th>
            <th>FAT (%)</th>
            <th>SNF (%)</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.farmer}</td>
              <td>{record.date}</td>
              <td>{record.quantity}</td>
              <td>{record.fat}</td>
              <td>{record.snf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MilkCollection;