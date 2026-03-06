import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function QuoteGenerator () {

    const [quote, setQuote] = useState({ text: "Click to get quote", author: "Fabio"});

    async function getNewQuote() {
    try {
        const response = await
        fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        setQuote({text: data.quote, author: data.author});
        
    }
    catch (error) {
        setQuote({text: "Error: Check your self Dummmy", author: "Oopsy"});
    }
}

    useEffect(() => {
        getNewQuote();
    }, []);
    

        


   return(
    <div className="min-h-screen bg-slate-50 flex flex-col items-center pt-10 p-4">
        <Link
            to="/"
            className="mb-6 self-start inline-block text-sm font-bold text-blue-500 hover:text-blue-600"
        >
            ← Back to Launchbox
        </Link>
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg border-1-8 border-purple-500 text-center mt-6">
            <p className="text-2xl arial font-serif text-pink-800 mb-6">{quote.text}</p>
            <h3 className="text-lg font-bold text-purple-600 mb-8 uppercase tracking-widest">-{quote.author}</h3>
            <button
                onClick={getNewQuote}
                className="bg-purple-600 text-white px-10 py-3 rounded-full font-bold hover:bg-purple-700 transition-all active:scale-95 shadow-lg">
                    NEW QUOTE
                </button>

        </div>
    </div>


   );


}

export default QuoteGenerator;