import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-red-500 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Full Red Background
        </h1>
        <p className="text-white">
          The entire interface now has a red background.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-red-500 rounded-lg hover:bg-gray-200 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}
