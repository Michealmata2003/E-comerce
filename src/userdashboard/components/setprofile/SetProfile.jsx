import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import './SetProfile.css';

const SetProfile = ({setShowSettings}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('commerce'));
        if (user) {
            setUserData(user);
        }
    }, []);
    const handleCloseSettings = () =>{
        setShowSettings(false)
    }

    return (
        <div className='fullprofile'>
            
            <div className="setprof">
                {userData && (
                    <div className="prof">
                        <h1 className='text-2xl'>Hello <strong>{userData.firstName}</strong>,</h1>
                        <p className='text-lg py-6'> We are sorry for the Inconveninecy This Update will be Available Soon</p>
                        <p>We will contact you on through your Mail <strong>{userData.email}</strong>when the update is Available</p>
                        <button onClick={handleCloseSettings}>Okay</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SetProfile