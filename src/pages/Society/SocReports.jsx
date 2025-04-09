import React, { useState } from "react";
import "../../styles/SocietyCss/SocReports.css"; // Import styles

const SocReports = () => {
  // Sample data for monthly and yearly profits
  const [monthlyProfit, setMonthlyProfit] = useState([
    { month: "January", profit: 50000 },
    { month: "February", profit: 45000 },
    { month: "March", profit: 60000 },
    { month: "April", profit: 55000 },
    { month: "May", profit: 70000 },
    { month: "June", profit: 65000 },
    { month: "July", profit: 60000 },
    { month: "August", profit: 75000 },
    { month: "September", profit: 80000 },
    { month: "October", profit: 85000 },
    { month: "November", profit: 90000 },
    { month: "December", profit: 95000 },
  ]);

  const [yearlyProfit, setYearlyProfit] = useState([
    { year: 2021, profit: 720000 },
    { year: 2022, profit: 850000 },
    { year: 2023, profit: 900000 },
  ]);

  return (
    <div className="soc-reports">
      <h1>Society Profit Reports</h1>

      {/* Monthly Profit Section */}
      <div className="monthly-profit">
        <h2>Monthly Profit</h2>
        <table className="profit-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Profit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {monthlyProfit.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>{data.profit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Yearly Profit Section */}
      <div className="yearly-profit">
        <h2>Yearly Profit</h2>
        <table className="profit-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Profit (₹)</th>
            </tr>
          </thead>
          <tbody>
            {yearlyProfit.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.profit.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocReports;