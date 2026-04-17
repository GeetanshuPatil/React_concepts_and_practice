import React, {useState} from 'react'

const FormsTask3 = () =>{
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now(),
  });
  let [list, setList] = useState([]);

  let handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    
  };
  let handleSubmit = (e)=>{
    e.preventDefault()

    setList([...list, state])

    setState({
      username: "",
      password: "",
      id: Date.now()
    })

  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Form Task 3
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
            value={state.username}
            className="border border-gray-300 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={state.password}
            className="border border-gray-300 rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="bg-blue-600 text-white py-2 rounded-lg 
                       hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 space-y-3">
          {list.map((user) => {
            return (
              <div
                key={user.id}
                className="bg-gray-50 border border-gray-200 
                           rounded-lg p-4 shadow-sm"
              >
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <span className="font-semibold">Username:</span>{" "}
                    {user.username}
                  </li>
                  <li>
                    <span className="font-semibold">Password:</span>{" "}
                    {user.password}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FormsTask3
