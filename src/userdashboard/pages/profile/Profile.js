import React, { useState, useEffect } from 'react';
import Nav from '../../components/navbar/Navbar';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('commerce'));
        if (user) {
            setUserData(user);
        }
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {userData && (
                <div>
                    <Nav />
                    <p>First name: {userData.firstName}</p>
                    {/* Display other user details */}
                </div>
            )}
        </div>
    );
};

export default Profile;





