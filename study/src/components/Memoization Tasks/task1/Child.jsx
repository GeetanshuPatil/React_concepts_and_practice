import React, { memo, useState } from 'react'

const Child = ({dark}) => {
  

    console.log("child called");
    
    let [user, setUser] = useState({
        name:"",
        age:"",
        role:""
    })
    let handleInput=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        
    }
  return (
<div
  className={`min-h-screen flex items-center justify-center transition duration-300 ${
    dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
  }`}
>
  <div
    className={`shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4 transition ${
      dark ? "bg-gray-700" : "bg-white"
    }`}
  >
    <h2
      className={`text-xl font-semibold text-center ${
        dark ? "text-gray-200" : "text-gray-700"
      }`}
    >
      User Details
    </h2>

    {/* Name */}
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInput}
        placeholder="Enter name"
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition ${
          dark
            ? "bg-gray-600 border-gray-500 text-white placeholder-gray-300 focus:ring-blue-400"
            : "bg-white border-gray-300 text-black focus:ring-blue-500"
        }`}
      />
    </div>

    {/* Age */}
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Age
      </label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInput}
        placeholder="Enter age"
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition ${
          dark
            ? "bg-gray-600 border-gray-500 text-white placeholder-gray-300 focus:ring-blue-400"
            : "bg-white border-gray-300 text-black focus:ring-blue-500"
        }`}
      />
    </div>

    {/* Role */}
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm ${
          dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Role
      </label>
      <input
        type="text"
        name="role"
        value={user.role}
        onChange={handleInput}
        placeholder="Enter role"
        className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition ${
          dark
            ? "bg-gray-600 border-gray-500 text-white placeholder-gray-300 focus:ring-blue-400"
            : "bg-white border-gray-300 text-black focus:ring-blue-500"
        }`}
      />
    </div>
  </div>
</div>
  )
}

export default React.memo(Child)
