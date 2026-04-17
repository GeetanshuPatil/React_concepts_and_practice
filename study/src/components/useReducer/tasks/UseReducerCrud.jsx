import React, { useReducer } from "react";
import Loader from "../pages Reducer/Loader";
import Display from "../pages Reducer/Display";

const UseReducerCrud = () => {
  let initialList = [];
  let initialObj = {
    username: "",
    password: "",
    id: Date.now(),
  };
  let reducerObj = (state, action) => {
    switch (action.key) {
      case "createObj":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      case "emptyInput":
        state = { ...action.payload, id: Date.now() };
        return state;

      case "updateUser":
        return action.payload
      default:
        return state;
    }
  };
  let reducerList = (state, action) => {
    switch (action.key) {
      case "appendObj":
        state = [...state, action.payload];
        return state;

      case "deleteUser":
        return action.payload;

      default:
        return state;
    }
  };
  let [obj, dispatchObj] = useReducer(reducerObj, initialObj);

  let [list, dispatchList] = useReducer(reducerList, initialList);

  let handleChange = (e) => {
    dispatchObj({
      key: "createObj",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatchList({ key: "appendObj", payload: obj });
    dispatchObj({ key: "emptyInput", payload: initialObj });
  };

  let handleUpdate = (item) => {
    dispatchObj({ key: "updateUser", payload: item });
    handleDelete(item)
  };
  let handleDelete = (item) => {
    let newList = list.filter((user) => user.id !== item.id);
    dispatchList({ key: "deleteUser", payload: newList });
  };
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
            value={obj.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="password"
            value={obj.password}
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
        {list.length === 0 ? (
          <Loader></Loader>
        ) : (
          <Display list={list}  handleDelete ={handleDelete} handleUpdate={handleUpdate}></Display>
        )}
      </div>
    </div>
  );
};

export default UseReducerCrud;
