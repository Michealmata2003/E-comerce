// PrivateRoute.js
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/Context';


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;


// const PrivateRoute = ({ element: Component, ...rest }) => {
//     const { isLoggedIn } = useAuth();
  
//     return (
//       <Route
//         {...rest}
//         element={isLoggedIn ? <Component /> : <Navigate to="/login" replace />}
//       />
//     );
//   };
  
//   export default PrivateRoute;
