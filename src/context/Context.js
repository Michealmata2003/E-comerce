import { useContext, createContext, useState, useEffect } from "react";
import { StorageService } from "../lib/storage";
// import { useNavigate } from "react-router-dom";

const ProfileContext = createContext();
const AuthContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const initialAuthState = StorageService.getAuth() ? true : false;

  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

  const login = () => {
    // Perform login logic
    setIsAuthenticated(true);
    StorageService.setAuth(true)
  };

  const logout = () => {
    // Perform logout logic
    setIsAuthenticated(false);
    StorageService.removeAuth()
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};










