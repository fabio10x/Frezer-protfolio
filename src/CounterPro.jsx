import React, { useState } from 'react';

function CounterPro () {
    const [count, setCount] = useState(0);

    let countColor = "text-black";
    if (count > 0) countColor = "text-green-500";
    if (count < 0) countColor = "text-red-500";

    return (
        <>
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-2x1 font-bold mb-4 uppercase">Counter Pro</h1>
            <div className={`text-9x1 font-black mb-8 transition-colors duration-300 ${countColor}`}>
                {count}
            </div>

            <div className="flex gap-4">
                <button
                     onClick={() => setCount(count - 1)}
                     className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 active:scale-90 transition-all">
                        DECREASE
                     </button>

                <button
                    onClick={() => setCount(0)}
                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 active:scale-90 transition-all">
                        RESET
                    </button>

                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 active:scale-90 transition-all">
                        INCREASE
                    </button>
                       
            </div>
        </div>
        
        </>
    );

}
export default CounterPro;