import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function ExpenseTracker() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');


    function addExpenses() {
        if (name.trim() !== "" && amount > 0) {
            const newEntry = {
                id: Date.now(),
                title: name,
                price: parseFloat(amount)
            }
            setExpenses([...expenses, newEntry]);
            setName("");
            setAmount("");

        }
    }



    function deleteExpenses(id) {
        setExpenses(expenses.filter(item => item.id !== id));
    }

    const total = expenses.reduce((sum, item) => sum + item.price, 0);


    return (
        <div className="min-h-screen bg-slate-50 flex justify-center items-start pt-10">
            <div className="max-w-md w-full mx-auto p-6 bg-white shadow-2xl rounded-2xl border border-gray-100 font-sans text-gray-800">
                <Link
                    to="/"
                    className="mb-6 inline-block text-sm font-bold text-blue-500 hover:text-blue-600"
                >
                    ← Back to Launchbox
                </Link>
                <h1 className="text-3xl font-black text-center mb-8 text-blue-600 teacking-tight">My Expense</h1>
                <div className="flex flex-col gap-3 mb-4">
                    <input
                        type="text" placeholder="Enter Expense"
                        value={name} onChange={(e) => setName(e.target.value)}
                        className="border-2 border-gray-100 p-3 rounded-xl focus:border-blue-400 outline-none transition-all" />

                    <input
                        type="number" placeholder="Amount ETB"
                        value={amount} onChange={(e) => setAmount(e.target.value)}
                        className="border-2 border-gray-100 p-3 rounded-xlmfocus:border-blue-400 outline-none transition-all" />

                    <button
                        onClick={addExpenses}
                        className="bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg">+ Add expenses</button>

                    <ul className="space-y-3">
                        {expenses.map((item) => (
                            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-1-4 border-blue-500">
                                <div>
                                    <p className="font-bold text-gray-700">{item.title}</p>
                                    <p className="text-gray-400">{new Date(item.id).toLocaleTimeString()}</p>

                                    <div>

                                        <div className="flex items-center gap-4">
                                            <span className="font-black text-blue-600">{item.price} ETB</span>
                                            <button
                                                onClick={() => deleteExpenses(item.id)}
                                                className="text-red-400 hover:text-red-600 font-bold text-xl px-2">X</button>
                                        </div>



                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {expenses.length > 0 && (
                        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-100 flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-500">Total Spent: </span>
                            <span className="text-2xl font-black text-green-600">{total} ETB</span>
                        </div>


                    )}
                </div>
            </div>
        </div>

    )
}
export default ExpenseTracker;