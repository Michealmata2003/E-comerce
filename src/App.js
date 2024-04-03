import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './components/signin/Login';
import PrivateRoute from './utils/PrivateRoute';
import {Puff} from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = React.useState(true); // State to manage loading status


  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Puff  color="#F25B2A" height={100} width={100} />
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
