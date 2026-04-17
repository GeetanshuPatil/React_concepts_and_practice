import React, { useContext } from 'react'
import { Context } from './ReducerContext';

const DisplayCrudTask2 = () => {
    let {dispatchObj, list, dispatchList} = useContext(Context)
    let handleEdit = (item)=>{
        dispatchObj({type:"editedObj", payload:item})
        handleDelete(item)


    }
    let handleDelete = (item)=>{
      let newList = list.filter((user) => user.id !== item.id);

       dispatchList({type:"delete", payload: newList})
    }
    
  return (
  <div className="flex flex-col gap-4">
    {list.length === 0 ? (
      <p className="text-center text-gray-500">No users found</p>
    ) : (
      list.map((user) => (
        <div
          key={user.id}
          className="bg-gray-50 border rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
        >
          <div>
            <p className="text-sm text-gray-400">ID: {user.id}</p>
            <p className="font-semibold text-gray-700">{user.username}</p>
            <p className="text-gray-500 text-sm">{user.password}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(user)}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(user)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);
}

export default DisplayCrudTask2
