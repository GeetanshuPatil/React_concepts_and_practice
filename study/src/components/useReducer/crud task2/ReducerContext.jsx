import { createContext, useReducer } from "react";

export let Context = createContext();

const ReducerContext = ({ children }) => {
  let initialList = [];

  let reducerList = (state, action) => {
    switch (action.type) {
      case "appendUser":
        return [...state, action.payload];
        break;

      case "delete":
        return action.payload

      default:
        return state;
        break;
    }
  };
  let initialObj = {
    username: "",
    password: "",
    id: Date.now(),
  };
  let reducerObj = (state, action) => {
    switch (action.type) {
      case "addUser":
        return { ...state, [action.payload.name]: action.payload.value };

        break;
      case "emptyObj":
        return {
          username: "",
          password: "",
          id: Date.now(),
        };
        break;
      case "editedObj":
        return {
          ...state, ...action.payload
        };

      default:
        return state;
        break;
    }
  };
  let [list, dispatchList] = useReducer(reducerList, initialList);
  let [obj, dispatchObj] = useReducer(reducerObj, initialObj);

  return (
    <Context.Provider
      value={{ obj, list, dispatchList, dispatchObj }}
    >
      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
        <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6">
          {children}
        </div>
      </div>
    </Context.Provider>
  );
};

export default ReducerContext;
