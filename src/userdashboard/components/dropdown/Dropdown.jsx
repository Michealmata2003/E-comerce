import React, { useState } from 'react';
import { useAuth } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({handleShowSettings}) => {
    const navigate = useNavigate()

    const { isLoggedIn, logout } = useAuth();
    // const { showSettings, setShowSettings } = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login')
    };
    // const handleShowSettings = () => {
    //     setShowSettings(true)
    // };

    return (
        <div>
            <div className='absolute text-black  mt-2 py-5 px-3 rounded-md bg-white '>

                <a href="#" className=" my-1 text-gray-700 rounded block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-0">Order</a>
                <p  onClick={handleShowSettings} className=" my-1text-gray-700 rounded pointer block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-1">Settings</p>
                {isLoggedIn && <a href="#" onClick={handleLogout} className="my-1 text-gray-700 rounded block px-4 py-2 text-sm bg-design4 hover:bg-logo" role="menuitem" tabindex="-1" id="menu-item-2">Log Out</a>
                }            </div>
        </div>
    )
}

export default Dropdown
