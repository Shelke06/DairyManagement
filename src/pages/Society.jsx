import React from 'react';

const Society = () => {
  return (
    <div>
      <h1>Society Page</h1>
      <p>Welcome to the society management page. Here you can manage society-related details and activities.</p>
      <div>
        <h2>Society Information</h2>
        <ul>
          <li><strong>Society Name:</strong> Green Valley Dairy Society</li>
          <li><strong>Location:</strong> Springfield</li>
          <li><strong>Members:</strong> 120</li>
        </ul>
      </div>
      <div>
        <h2>Actions</h2>
        <button>View Members</button>
        <button>Manage Payments</button>
        <button>Generate Reports</button>
      </div>
    </div>
  );
};

export default Society;