import { useContext, createContext ,useState, useEffect } from "react";

const AuthContext = createContext()
const ProfileContext = createContext();


export const useProfile = () => useContext(ProfileContext);


export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return(
        <AuthContext.Provider value={value}>
            {props.children }
        </AuthContext.Provider>
    )

}


export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null);

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};










