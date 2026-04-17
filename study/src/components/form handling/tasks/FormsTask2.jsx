import React, {useState} from 'react'

const FormsTask2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  let handleUsername = (e) => {
    setUsername(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) return;

    setList([...list, { username, password }]);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          User Form
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsername}
            className="px-4 py-2 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePassword}
            className="px-4 py-2 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg 
                       hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {/* User List */}
        <div className="mt-6 space-y-3">
          {list.length > 0 ? (
            list.map((user, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 
                           rounded-lg p-4 shadow-sm"
              >
                <p className="text-gray-700">
                  <span className="font-semibold">Username:</span>{" "}
                  {user.username}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Password:</span>{" "}
                  {user.password}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 mt-4">No users added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormsTask2
