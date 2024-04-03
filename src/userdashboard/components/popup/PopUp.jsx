import React, { useState, useEffect } from 'react';
import { Container } from '../../../Style';
import './PopUp.css';
import placeorder1 from '../../../assets/placeorder1.jpg';
import placeorder2 from '../../../assets/placeorder2.webp';
import placeorder3 from '../../../assets/placeorder3.webp';

const PopUp = ({ setPopUp }) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('commerce'));
        if (user) {
            setUserData(user);
        }
    }, []);

    const handleClosePopUp = () => {
        setPopUp(false)
        console.log('click')
    }
    return (
        <div className='popup'>
            <div style={Container}>

                {userData && (
                    <div className="modalpopup">
                        <div>
                            <h2 className='py-3 text-lg'> Hello <strong>{userData.firstName}</strong></h2>
                            <p className='py-2'>You are a step Closer to your Order</p>
                            <img src={placeorder2} alt="" />
                            <button onClick={handleClosePopUp} className='bg-red'>Proceed to Order</button>
                           
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default PopUp