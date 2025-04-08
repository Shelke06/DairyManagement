import React from "react";
import { useParams } from "react-router-dom";
import "../styles/FarmerProfile.css";

const FarmerProfile = () => {
  const { farmerName } = useParams();

  // Example data for the farmer
  const farmerData = {
    name: farmerName,
    village: "Greenfield",
    totalMilkCollected: "500L",
    dailyMilkCollection: [
      { date: "2025-03-22", quantity: 12, fat: 3.8, snf: 8.6 },
      { date: "2025-03-21", quantity: 10, fat: 3.7, snf: 8.5 },
      { date: "2025-03-20", quantity: 15, fat: 3.9, snf: 8.7 },
    ],
  };

  return (
    <div className="farmer-profile-container">
      <h2>Farmer Profile: {farmerData.name}</h2>
      <p>Village: {farmerData.village}</p>
      <p>Total Milk Collected: {farmerData.totalMilkCollected}</p>

      {/* Daily Milk Collection Table */}
      <h3>Daily Milk Collection</h3>
      <table className="daily-collection-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quantity (L)</th>
            <th>FAT (%)</th>
            <th>SNF (%)</th>
          </tr>
        </thead>
        <tbody>
          {farmerData.dailyMilkCollection.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.quantity}L</td>
              <td>{entry.fat}%</td>
              <td>{entry.snf}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerProfile;