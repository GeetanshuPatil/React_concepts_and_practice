import React, {useState} from 'react'

const FormsTask1 = () => {
  let [stateArr, setStateArr] = useState([]);
  let [todo, setTodo] = useState("");

  let handleChange = (e) => {
    setTodo(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    setStateArr([...stateArr, todo]);
    setTodo("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Todo App
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex gap-3 mb-6"
        >
          <input
            type="text"
            placeholder="Enter a todo..."
            onChange={handleChange}
            value={todo}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg
                       hover:bg-blue-700 transition duration-200"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3 list-disc list-inside text-gray-700">
          {stateArr.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 border border-gray-200
                         rounded-lg px-4 py-2 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default FormsTask1;
