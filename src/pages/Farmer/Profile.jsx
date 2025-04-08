import React, { useState, useEffect } from 'react';
import '../../styles/Farmer/Profile.css'; // Updated path
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Input } from "../../components/ui/input";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
        setUserInfo({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
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
    <div className="profile-section container py-4">
      <h2 className="text-center mb-4">Profile Settings</h2>

      <div className="card">
        <div className="card-body p-6 space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center space-x-4">
            <Avatar className="w-40 h-40">
              <AvatarImage src={profilePicture} alt="" />
              <AvatarFallback>
                <span className="text-gray-500">No Image</span>
              </AvatarFallback>
            </Avatar>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
              id="profile-pic"
            />
            <Label htmlFor="profile-pic" className="cursor-pointer px-3 py-2 bg-gray-200 rounded-md">
              Upload Picture
            </Label>
          </div>

          {/* Input Fields */}
          <Input placeholder="Full Name" value={userInfo.name} className="w-full" />
          <Input placeholder="Email" type="email" value={userInfo.email} className="w-full" />
          <Input placeholder="Phone Number" type="tel" value={userInfo.phone} className="w-full" />
          <Input placeholder="Address" value={userInfo.address} className="w-full" />

          {/* Save Changes Button */}
          <Button className="mt-4 w-full">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;