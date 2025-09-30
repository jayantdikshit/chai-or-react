// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        🚀 Tailwind CSS is Working!
      </h1>

      {/* Paragraph */}
      <p className="text-lg text-gray-700 mb-6">
        If you can see colors, spacing, and font sizes correctly, Tailwind is installed ✅
      </p>

      {/* Button */}
      <button className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-300">
        Test Button
      </button>
    </div>
  );
}

export default App;


