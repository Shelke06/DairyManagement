import React, { useState } from "react";
import "../../styles/SocietyCss/NotificationSoc.css"; // Import styles

const Notifications = () => {
  const [farmerId, setFarmerId] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!farmerId || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Add the new message to the sentMessages list
    const newMessage = {
      id: Date.now(),
      farmerId,
      message,
    };

    setSentMessages([newMessage, ...sentMessages]);
    setFarmerId("");
    setMessage("");
    alert("Message sent successfully!");
  };

  return (
    <div className="notifications">
      <h1>Send Notifications</h1>

      {/* Form to send a message */}
      <form className="notification-form" onSubmit={handleSendMessage}>
        <div className="form-group">
          <label htmlFor="farmerId">Farmer ID:</label>
          <input
            type="text"
            id="farmerId"
            value={farmerId}
            onChange={(e) => setFarmerId(e.target.value)}
            placeholder="Enter Farmer ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      {/* Display sent messages */}
      <div className="sent-messages">
        <h2>Sent Messages</h2>
        {sentMessages.length === 0 ? (
          <p>No messages sent yet.</p>
        ) : (
          <ul>
            {sentMessages.map((msg) => (
              <li key={msg.id}>
                <strong>Farmer ID:</strong> {msg.farmerId}
                <br />
                <strong>Message:</strong> {msg.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;