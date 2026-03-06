import React, { useState } from "react";
import { Link } from "react-router-dom";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-start pt-6 sm:pt-10 px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100">
        <Link
          to="/"
          className="mb-6 inline-block text-sm font-bold text-blue-500 hover:text-blue-600 transition-colors"
        >
          ← Back to Launchbox
        </Link>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Priority Tasks</h1>
        <p className="text-slate-500 text-sm mb-8">Stay organized and focused on your goals.</p>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="What needs to be done?"
            className="flex-grow border-2 border-gray-100 p-3 rounded-2xl focus:border-blue-400 outline-none transition-all"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-5 rounded-2xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${task.completed
                ? "bg-gray-50 border-gray-100 opacity-60"
                : "bg-white border-gray-100 hover:border-blue-200 shadow-sm"
                }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 rounded-lg border-2 border-blue-400 checked:bg-blue-600 transition-all cursor-pointer"
                />
                <span className={`font-semibold ${task.completed ? "line-through text-gray-400" : "text-slate-700"}`}>
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-400 hover:text-red-600 p-1 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </li>
          ))}
          {tasks.length === 0 && (
            <div className="text-center py-10">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-gray-400 font-medium">No tasks yet. Start by adding one!</p>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
