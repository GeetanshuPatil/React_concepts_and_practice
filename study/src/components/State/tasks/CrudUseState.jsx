import React, { useState } from 'react'

const CrudUseState = () => {
    let [list, setList] = useState([])
    let [user, setUser] = useState({
        username: "",
        password: "",
        id: Date.now()
    })
    let handleChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value })

    }
    let handleSubmit = (e)=>{
        e.preventDefault()
        setList([...list, user])
        setUser({
        username: "",
        password: "",
        id: Date.now()
    })
    }
    let handleUpdate = (sentObj)=>{
      setUser({
        username: sentObj.username,
        password: sentObj.password,
        id: sentObj.id
      })
      handleDelete(sentObj)
      
    }
    let handleDelete = (sentObj)=>{
      let newList = list.filter((users)=> users.id !== sentObj.id)
      setList(newList)

    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

  {/* Form Card */}
  <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-6">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        User Form
      </h2>

      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
        placeholder="Enter Username"
        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition duration-300">
        Submit
      </button>

    </form>
  </div>

  {/* List Section */}
  <div className="w-full max-w-2xl flex flex-col gap-4">

    {
      list.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          List of users...
        </p>
      ) : (
        list.map((obj) => (
          <div
            key={obj.id}
            className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition"
          >
            <div>
              <p className="text-sm text-gray-400">ID: {obj.id}</p>
              <p className="font-semibold text-gray-700">{obj.username}</p>
              <p className="text-gray-500 text-sm">{obj.password}</p>
            </div>

            <div className="flex gap-2">
              <button onClick={()=>{handleUpdate(obj)}} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                Edit
              </button>
              <button onClick={()=>{handleDelete(obj)}} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                Delete
              </button>
            </div>
          </div>
        ))
      )
    }

  </div>
</div>
  )
}

export default CrudUseState
