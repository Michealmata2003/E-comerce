// PrivateRoute.js
// import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/Context';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;

