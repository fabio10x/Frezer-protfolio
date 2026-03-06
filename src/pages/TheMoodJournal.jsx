import React, { useState } from 'react';

function TheMoodJournal() {
    const createInitialMoods = () => [
        { id: Date.now() - 300000, title: 'Happy', color: 'bg-green-500' },
        { id: Date.now() - 240000, title: 'Sad', color: 'bg-red-500' },
        { id: Date.now() - 180000, title: 'Calm', color: 'bg-blue-500' },
    ];

    const [moodText, setMoodText] = useState('');
    const [selectedColor, setSelectedColor] = useState('bg-green-500');
    const [moods, setMoods] = useState(createInitialMoods);

    function addMood() {
        if (moodText.trim() === '') return;

        const newEntry = {
            id: Date.now(),
            title: moodText.trim(),
            color: selectedColor,
        };

        setMoods((prev) => [newEntry, ...prev]);
        setMoodText('');
    }

    function handleColorChange(colorClass) {
        setSelectedColor(colorClass);
    }

    function deleteMood(id) {
        setMoods((prev) => prev.filter((item) => item.id !== id));
    }

    function resetMoods() {
        setMoodText('');
        setSelectedColor('bg-green-500');
        setMoods(createInitialMoods());
    }

    // Function to handle Enter key press to add mood
    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            addMood();
        }
    }

    const colorOptions = [
        { id: 'red', label: 'Sad', className: 'bg-red-500' },
        { id: 'green', label: 'Happy', className: 'bg-green-500' },
        { id: 'blue', label: 'Calm', className: 'bg-blue-500' },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 px-4">
                <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-5 sm:p-6 space-y-4 md:space-y-6">
                    <div className="space-y-1 text-center">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">The Mood Journal</h1>
                        <p className="text-sm text-gray-500">
                            Capture how you feel, one entry at a time.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                What&apos;s on your mind?
                            </label>
                            <input
                                type="text"
                                placeholder="Type your mood..."
                                value={moodText}
                                onChange={(e) => setMoodText(e.target.value)}
                                onKeyDown={handleEnterKey}
                                className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-blue-400 outline-none transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-medium text-gray-600">Choose a color</span>
                            <div className="flex gap-2">
                                {colorOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        type="button"
                                        onClick={() => handleColorChange(option.className)}
                                        className={`w-9 h-9 rounded-full border-2 transition-all ${option.className} ${selectedColor === option.className
                                                ? 'ring-2 ring-offset-2 ring-blue-400 border-transparent'
                                                : 'border-white/70 hover:ring-2 hover:ring-offset-2 hover:ring-gray-200'
                                            }`}
                                        aria-label={option.label}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2 md:flex-col md:gap-3">
                            <button
                                onClick={addMood}
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all md:self-stretch"
                            >
                                Add Mood
                            </button>
                            <button
                                onClick={resetMoods}
                                className="border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 active:scale-95 transition-all md:self-stretch"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs text-gray-400 mb-2">
                            Total entries: <span className="font-semibold text-gray-600">{moods.length}</span>
                        </p>
                        {moods.length === 0 ? (
                            <p className="text-sm text-gray-400 text-center">
                                Your mood list is empty. Add your first entry above.
                            </p>
                        ) : (
                            <ul className="space-y-3">
                                {moods.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border-1-4 border-blue-500"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`w-3 h-3 rounded-full ${item.color}`}
                                                aria-hidden="true"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-700">{item.title}</p>
                                                <p className="text-gray-400 text-xs">
                                                    {new Date(item.id).toLocaleTimeString()}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteMood(item.id)}
                                            className="text-red-400 hover:text-red-600 font-bold text-xl px-2"
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TheMoodJournal;
