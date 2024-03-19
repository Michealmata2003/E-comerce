import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './components/signin/Login';
import Profile from './userdashboard/pages/profile/Profile';

function App() {
  const user = false;
  return (
    <Router>
      <Routes>

        {/* <Route path="/" element={user ? <Home /> : <Home />} />
        <Route path="/signup" element={user ? <Login /> : <SignUp />} />
        <Route path="/login" element={user ? <Dashboard /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Dashboard />} /> */}
 
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={user ? <Dashboard /> : <SignUp />} />
        <Route path="/login" element={user ? <Dashboard /> : <Login />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
        {/* <Route path="/profile" element={ <Profile /> } /> */}
     
      </Routes>
    </Router>
  );
}

export default App;



        // const res  = await axios.post('https://prakem-api.onrender.com/api/auth/login', {
        //     email,
        //     password
        // });
        // if (res.status === true) {
        //     localStorage.setItem('values', JSON.stringify(res.data));
        //     setProfileData(res.data); 


        // }
        // navigate('/dashboard')