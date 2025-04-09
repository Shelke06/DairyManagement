import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <>
      <style>
        {`
          .content-section {
            padding: 20px;
            min-height: 100vh;
            border-radius: 8px;
          }

          .content-section h1 {
            font-size: 2.5rem;
            color: #343a40; 
          }

          .content-section p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: #555; 
            text-align: center;
          }

          .row {
            display: flex;
            justify-content: space-between;
            gap: 20px; 
            flex-wrap: wrap; 
          }

          .col-md-4 {
            flex: 1;
            max-width: 30%; 
            min-width: 250px; 
          }

          .card {
            background-color: #ffffff; 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
            transition: transform 0.3s ease, box-shadow 0.3s ease; 
            cursor: pointer; /* Add pointer cursor for clickable cards */
          }

          .card:hover {
            transform: translateY(-5px); /* Slight lift on hover */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
          }

          .card-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: rgb(133, 92, 227);
          }

          .card-text {
            font-size: 1.2rem;
            color: #555; 
          }
        `}
      </style>
      <div className="content-section">
        <h1>Dashboard</h1>
        <p>Welcome to the farmer portal dashboard. Here you can view an overview of your activities.</p>
        <div className="row">
          {/* Card 1: Milk Collected Today */}
          <div className="col-md-4">
            <div
              className="card text-center"
              onClick={() => navigate('/dashboard/daily-records')} // Redirect to Daily Records
            >
              <div className="card-body">
                <h5 className="card-title">Milk Collected Today</h5>
                <p className="card-text">25 Liters</p>
              </div>
            </div>
          </div>

          {/* Card 2: Pending Payments */}
          <div className="col-md-4">
            <div
              className="card text-center"
              onClick={() => navigate('/dashboard/payments')} // Redirect to Payments & Bank
            >
              <div className="card-body">
                <h5 className="card-title">Pending Payments</h5>
                <p className="card-text">₹1,500</p>
              </div>
            </div>
          </div>

          {/* Card 3: Profit of This Month */}
          <div className="col-md-4">
            <div
              className="card text-center"
              onClick={() => navigate('/dashboard/profit-analysis')} // Redirect to Profit Analysis
            >
              <div className="card-body">
                <h5 className="card-title">Profit of This Month</h5>
                <p className="card-text">₹10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;