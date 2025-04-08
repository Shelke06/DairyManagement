import React, { useState } from "react";
import "../../styles/SocietyCss/FarmerManagement.css"; // Import from the existing styles folder

const FarmerManagement = () => {
  const [farmers, setFarmers] = useState([
    { id: 1, name: "John Doe", village: "Greenfield", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", village: "Sunnyvale", contact: "987-654-3210" },
  ]);

  return (
    <div className="farmer-management">
      <h1>Farmer Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Village</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.id}>
              <td>{farmer.name}</td>
              <td>{farmer.village}</td>
              <td>{farmer.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerManagement;