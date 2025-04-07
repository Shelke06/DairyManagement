import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProfitAnalysis.css';

const ProfitAnalysis = () => {
  return (
    <div className="profit-analysis-section container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Profit Analysis</h2>
      </div>
      <div className="card">
        <div className="card-body">
          <p>Analyze your profits over time with detailed insights.</p>
          <ul className="profit-details">
            <li><strong>Total Profit:</strong> ₹15,000</li>
            <li><strong>Highest Earning Month:</strong> March</li>
            <li><strong>Lowest Earning Month:</strong> January</li>
          </ul>
        </div>
      </div>
      <div className="chart-section mt-4">
        <h4>Monthly Profit Trends</h4>
        <div className="chart-placeholder">
          {/* Placeholder for a chart (e.g., Bar Chart or Line Chart) */}
          <p>Chart will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfitAnalysis;