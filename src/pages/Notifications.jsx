import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, farmer: "John Doe", date: "2025-04-01", message: "Milk collection reminder" },
    { id: 2, farmer: "Jane Smith", date: "2025-04-02", message: "Payment processed" },
  ]);

  const [newNotification, setNewNotification] = useState({
    farmer: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotification({ ...newNotification, [name]: value });
  };

  const handleSendNotification = (e) => {
    e.preventDefault();
    const newEntry = {
      id: notifications.length + 1,
      farmer: newNotification.farmer,
      date: new Date().toISOString().split("T")[0], // Current date
      message: newNotification.message,
    };
    setNotifications([...notifications, newEntry]);
    setNewNotification({ farmer: "", message: "" }); // Reset form
    alert("Notification sent successfully!");
  };

  return (
    <div className="notifications">
      <h2>Notifications</h2>

      {/* Form to Send Notifications */}
      <form onSubmit={handleSendNotification}>
        <div>
          <label>Farmer Name:</label>
          <input
            type="text"
            name="farmer"
            value={newNotification.farmer}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={newNotification.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Notification</button>
      </form>

      {/* Notification History */}
      <h3>Notification History</h3>
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td>{notification.farmer}</td>
              <td>{notification.date}</td>
              <td>{notification.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;