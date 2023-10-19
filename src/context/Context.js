import { useContext, createContext ,useState, useEffect } from "react";

const AuthContext = createContext()

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





















// import { createContext, useReducer } from "react"
// import Reducer from "./Reducer";

// const INITIAL_STATE = {
//     user: null,
//     isFetching: false,
//     error: false
// }

// export const Context = createContext(INITIAL_STATE);

// export const ContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
//     return (
//         <Context.Provider value={{
//             user: state.user,
//             isFetching: state.isFetching,
//             error: state.error,
//             dispatch,
//         }}>
//             {children}
//         </Context.Provider>
//     )
// }