import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfileContext = createContext();
const AuthContext = createContext();

export const useProfile = () => useContext(ProfileContext);



export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
    // navigate('/')
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// export function useAuth() {
//     return useContext(AuthContext);
// }
// export function AuthProvider(props) {
//     const [authUser, setAuthUser] = useState(null)
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
    
//     const logout = () => {
//         setAuthUser(null);
//         setIsLoggedIn(false);
//     };

//     const value = {
//         authUser,
//         setAuthUser,
//         isLoggedIn,
//         setIsLoggedIn,
//         logout
//     }
//     return (
//         <AuthContext.Provider value={value}>
//             {props.children}
//         </AuthContext.Provider>
//     )

// }


export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};










