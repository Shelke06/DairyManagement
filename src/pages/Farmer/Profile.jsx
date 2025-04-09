import React, { useState, useEffect } from 'react';
import '../../styles/Farmer/Profile.css';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    farmName: '',
    farmLocation: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    smsNotifications: false,
    emailNotifications: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfilePicture(data.profilePicture || 'https://via.placeholder.com/150');
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-section">
      <h2>Profile Settings</h2>

      {/* Profile Picture Section */}
      <div className="profile-picture-section">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <label htmlFor="profile-pic" className="btn">Upload Picture</label>
        <input
          type="file"
          id="profile-pic"
          accept="image/*"
          onChange={handleProfilePictureChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* Personal Information Section */}
      <h3 className="section-heading">Personal Information</h3>
      <div className="flex-container">
        <div className="flex-item">
          <label>Full Name</label>
          <input type="text" value={userInfo.name} placeholder="Full Name" />
        </div>
        <div className="flex-item">
          <label>Email</label>
          <input type="email" value={userInfo.email} placeholder="Email" />
        </div>
        <div className="flex-item">
          <label>Phone Number</label>
          <input type="tel" value={userInfo.phone} placeholder="Phone Number" />
        </div>
        <div className="flex-item">
          <label>Address</label>
          <input type="text" value={userInfo.address} placeholder="Address" />
        </div>
      </div>

      {/* Farm Information Section */}
      <h3 className="section-heading">Farm Information</h3>
      <div className="flex-container">
        <div className="flex-item">
          <label>Farm Name</label>
          <input type="text" value={userInfo.farmName} placeholder="Farm Name" />
        </div>
        <div className="flex-item">
          <label>Farm Location</label>
          <input type="text" value={userInfo.farmLocation} placeholder="Farm Location" />
        </div>
      </div>

      {/* Bank Information Section */}
      <h3 className="section-heading">Bank Information</h3>
      <div className="flex-container">
        <div className="flex-item">
          <label>Bank Name</label>
          <input type="text" value={userInfo.bankName} placeholder="Bank Name" />
        </div>
        <div className="flex-item">
          <label>Account Number</label>
          <input type="number" value={userInfo.accountNumber} placeholder="Account Number" />
        </div>
        <div className="flex-item">
          <label>IFSC Code</label>
          <input type="text" value={userInfo.ifscCode} placeholder="IFSC Code" />
        </div>
      </div>

      {/* Save Changes Button */}
      <button className="save-button">Save Changes</button>
    </div>
  );
};

export default Profile;