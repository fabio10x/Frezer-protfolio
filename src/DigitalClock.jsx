import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DigitalClock() {
    const[time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);


        return () => 
            clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
         }


        function padZero(number) {
            return (number < 10 ? "0" : "") + number;
        }

        return (
            <div className="min-h-screen bg-slate-50 p-6">
                <Link
                    to="/"
                    className="mb-6 inline-block text-sm font-bold text-blue-500 hover:text-blue-600"
                >
                    ← Back to Launchbox
                </Link>
                <div className="flex justify-center items-center mt-10">
                    <div className="bg-black text-green-500 p-8 rounded-xl border-8 border-gray-900 shadow-inner font-mono text-5xl tracking-tighter">
                        <span>{formatTime()}</span>
                    </div>
                </div>
            </div>
        );

   

}
export default DigitalClock;