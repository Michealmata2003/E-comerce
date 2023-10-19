import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './components/signin/Login';

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* //  <Route path="/" element={user ? <Home /> : <Home />} /> */}
        {/* // <Route path="/signup" element={user ? <Login /> : <SignUp />} /> */}
        {/* // <Route path="/login" element={user ? <Dashboard /> : <Login />} /> */}
        {/* // <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />  */}

      </Routes>
    </Router>
  );
}

export default App;
