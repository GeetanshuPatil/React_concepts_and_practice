import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  let [count, setCount] = useState(0)
  let [dark, setDark] = useState(false)

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-6 transition duration-300 ${
        dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center gap-4">

        {/* Count Button */}
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          Count: {count}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg font-medium transition"
        >
          {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      {/* Child Component */}
      <Child dark={dark}></Child>
    </div>
  )
}

export default Parent
// React.memo Tasks
// Task 11 – Prevent Unnecessary Re-renders
// Parent component has:
// counter
// theme
// Child component displays:
// User Profile
// Ensure the child does not re-render when counter changes.
// User Data Input
// name: "Prasad"
// age: 28
// role: "React Trainer"