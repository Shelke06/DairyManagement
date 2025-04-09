import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ProtectedRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);

  // Check if the user is authenticated and has the correct role
  if (!user || user.role !== role) {
    return <Navigate to="/" />; // Redirect to home if not authenticated or role mismatch
  }

  return children;
};