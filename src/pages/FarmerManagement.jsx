import React, { useState } from "react";
import "../styles/FarmerManagement.css";

const FarmerManagement = () => {
  const [farmers, setFarmers] = useState([
    {
      id: 1,
      name: "John Doe",
      village: "Greenfield",
      totalMilkCollected: "120L",
      contact: "123-456-7890",
      totalMilk: 120,
      history: [
        { date: "2023-01-01", quantity: 30, fat: 3.5, snf: 8.5 },
        { date: "2023-01-02", quantity: 40, fat: 3.6, snf: 8.6 },
        { date: "2023-01-03", quantity: 50, fat: 3.7, snf: 8.7 },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      village: "Sunnyvale",
      totalMilkCollected: "100L",
      contact: "987-654-3210",
      totalMilk: 100,
      history: [
        { date: "2023-01-01", quantity: 20, fat: 3.4, snf: 8.4 },
        { date: "2023-01-02", quantity: 30, fat: 3.5, snf: 8.5 },
        { date: "2023-01-03", quantity: 50, fat: 3.6, snf: 8.6 },
      ],
    },
  ]);

  const [selectedFarmer, setSelectedFarmer] = useState(null);

  return (
    <div className="farmer-management-container">
      
      {/* Main Content */}
      <div className="main-content">
        <header>
          <h1>Farmer Management</h1>
        </header>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Farmers</h3>
            <p>{farmers.length}</p>
          </div>
          <div className="card">
            <h3>Total Milk Collected</h3>
            <p>220L</p>
          </div>
        </div>

        {/* Farmer Table */}
        <div className="farmer-table-container">
          <h2>Farmers</h2>
          <table className="farmer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Village</th>
                <th>Total Milk Collected</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {farmers.map((farmer) => (
                <tr key={farmer.id}>
                  <td>{farmer.name}</td>
                  <td>{farmer.village}</td>
                  <td>{farmer.totalMilkCollected}</td>
                  <td>
                    <button onClick={() => setSelectedFarmer(farmer)}>View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Farmer Details */}
        {selectedFarmer && (
          <div className="farmer-profile">
            <div className="profile-card">
              <h2>{selectedFarmer.name}</h2>
              <p>Village: {selectedFarmer.village}</p>
              <p>Contact: {selectedFarmer.contact}</p>
              <p>Total Milk Collected: {selectedFarmer.totalMilk}L</p>
            </div>
            <div className="contribution-history">
              <h3>Contribution History</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Quantity (L)</th>
                    <th>FAT (%)</th>
                    <th>SNF (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedFarmer.history.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.quantity}</td>
                      <td>{entry.fat}</td>
                      <td>{entry.snf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerManagement;