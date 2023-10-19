import React from 'react';
import { useAuth } from '../../context/Context';


const Dashboard = () => {
    const { authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn } = useAuth()
        const logOut = (e)=>{
            e.preventDefault()
            isLoggedIn(false)
            setAuthUser(null)
        }
    return (
        <div>
            <button>Log Out</button>

        </div>
    )
}

export default Dashboard
