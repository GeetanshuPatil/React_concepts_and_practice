import React, { useContext, useReducer } from "react";
import { Context } from "./ReducerContext";

const FormReducer = () => {
  

  let { obj, list, dispatchList, dispatchObj } = useContext(Context);

  let handleChange = (e) => {
    dispatchObj({ type: "addUser", payload: e.target });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatchList({ type: "appendUser", payload: obj });
    dispatchObj({ type: "emptyObj", payload: {
      username:"",
      password: "",
      id: Date.now()
    } });
    console.log(list);
  };
  return (
  <div className="mb-6">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      <h2 className="text-xl font-semibold text-gray-700">
        Add User
      </h2>

      <input
        type="text"
        name="username"
        value={obj.username ?? ""}
        onChange={handleChange}
        placeholder="Enter Username"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="password"
        value={obj.password ?? ""}
        onChange={handleChange}
        placeholder="Enter Password"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
        Submit
      </button>

    </form>
  </div>
);
}
export default FormReducer;
