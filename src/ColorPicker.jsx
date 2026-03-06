import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ColorPicker() {
  const [color, setColor] = useState('white')

  function changeColor() {
    const colors = ['red', 'black', 'yellow'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  }

  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="h-screen w-full flex flex-col justify-center items-center transition-all duration-500 relative">
        <Link
          to="/"
          className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-lg bg-white/90 text-slate-800 px-4 py-2 text-sm font-medium shadow hover:bg-white transition-colors"
        >
          ← Back to Launchbox
        </Link>
        <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
          <h1 className="text-2xl font-bold mb-4 uppercase tracking-widest">
            Background: <span style={{ color: color }}>{color}</span>
          </h1>

          <button
            onClick={changeColor}
            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:scale-110 transition-transform active:scale-95">

            FLIP COLOR


          </button>

        </div>
      </div>

    </>
  );

}
export default ColorPicker;