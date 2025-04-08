import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Farmer/DailyRecords.css';

const DailyRecords = () => {
  const records = [
    { date: '2025-04-01', quantity: 25, fat: 4.5, snf: 8.5, amount: '₹750' },
    { date: '2025-04-02', quantity: 30, fat: 4.7, snf: 8.6, amount: '₹900' },
    { date: '2025-04-03', quantity: 28, fat: 4.6, snf: 8.4, amount: '₹840' },
  ];

  return (
    <div className="content-section">
      <h2>Daily Milk Records</h2>
      <p>Here you can view your daily milk collection records.</p>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Quantity (Liters)</th>
                <th>FAT (%)</th>
                <th>SNF (%)</th>
                <th>Amount Earned (₹)</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.quantity}</td>
                  <td>{record.fat}</td>
                  <td>{record.snf}</td>
                  <td>{record.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyRecords;
