import React from 'react'

const Display = ({list, handleDelete, handleUpdate}) => {
  // let list = user
  // console.log(list);
  
    
  return (
    <div>
        {
          list.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition"
            >
              <div>
                <p className="text-sm text-gray-400">ID: {user.id}</p>
                <p className="font-semibold text-gray-700">{user.username}</p>
                <p className="text-gray-500 text-sm">{user.password}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleUpdate(user);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(user);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>

            </div>))
}   
        
    </div>
  )
}

export default Display
