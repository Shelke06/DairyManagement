// filepath: d:\projectDairy\DairyManagement\src\pages\Notifications.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Farmer/Notifications.css';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Payment of ₹750 received on 2025-04-01.', type: 'success', date: '2025-04-01' },
    { id: 2, message: 'Milk quality report for 2025-04-02 is available.', type: 'info', date: '2025-04-02' },
    { id: 3, message: 'Upcoming society meeting on 2025-04-10.', type: 'warning', date: '2025-04-10' },
  ];

  return (
    <div className="notifications-section container py-4">
      <h2 className="text-center mb-4">Notifications</h2>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className={`notification-item alert alert-${notification.type}`}>
            <p className="notification-message">{notification.message}</p>
            <span className="notification-date">{notification.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;