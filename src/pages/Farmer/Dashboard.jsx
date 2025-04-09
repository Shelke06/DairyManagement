import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the farmer portal dashboard. Here you can view an overview of your activities.</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Milk Collected Today</h5>
              <p className="card-text">25 Liters</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Pending Payments</h5>
              <p className="card-text">₹1,500</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Profit This Month</h5>
              <p className="card-text">₹10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;