import React from "react";
import { Link } from "react-router-dom";

function ToDoList() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <Link
        to="/"
        className="mb-6 inline-block text-sm font-bold text-blue-500 hover:text-blue-600"
      >
        ← Back to Launchbox
      </Link>
      <h1 className="text-2xl font-bold text-slate-800">To-Do List</h1>
      <p className="text-slate-600 mt-2">
        Your to-do list app. Add your implementation here.
      </p>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          className="zzzzzz"
        />


      </div>
    </div>
  );
}

export default ToDoList;
