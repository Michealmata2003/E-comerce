import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';


const CountDown = () => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex gap-2 text-center align-center">
                <h1 className="text-3xl text-logo">{timeLeft[interval]}</h1>
                <h6 className="unit">{interval}</h6>
            </div>

        );
    });




    return (
        <div className='grid grid-cols-2 text-center align-center lg:grid-cols-4 gap-4 text-lg'>

            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}

export default CountDown
