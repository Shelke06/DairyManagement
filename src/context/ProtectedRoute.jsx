import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />; // Redirect to home if not logged in
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // Redirect if the user's role is not allowed
  }

  return children;
};

export default ProtectedRoute;