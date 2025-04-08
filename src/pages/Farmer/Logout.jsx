import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/Farmer/Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here (e.g., clearing tokens, session data)
    localStorage.clear(); // Clear any stored user data
    sessionStorage.clear(); // Clear session data

    // Show logout success toast
    toast.success('Logout successful!', {
      position: 'top-center',
      autoClose: 2000, // Automatically close after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });

    // Redirect to the home page after logout
    const timer = setTimeout(() => {
      navigate('/');
    }, 1000); // Redirect after 2 seconds

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [navigate]);

  return (
    <div className="logout-section container py-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Logging Out...</h1>
      <p>You are being logged out. Please wait...</p>
    </div>
  );
};

export default Logout;
